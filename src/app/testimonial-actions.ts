'use server';

import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getSdks } from '@/firebase';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '@/firebase/config';

// Initialize Firebase Admin SDK
if (!getApps().length) {
  initializeApp(firebaseConfig);
}
const { firestore } = getSdks(getApps()[0]);


const testimonialSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  company: z.string().optional(),
  quote: z.string().min(10, 'Testimonial must be at least 10 characters.'),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    company?: string[];
    quote?: string[];
  };
  isSuccess?: boolean;
};

export async function submitTestimonial(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = testimonialSchema.safeParse({
    name: formData.get('name'),
    company: formData.get('company'),
    quote: formData.get('quote'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
      isSuccess: false,
    };
  }

  try {
    const testimonialsCollection = collection(firestore, 'testimonials');
    await addDoc(testimonialsCollection, {
      ...validatedFields.data,
      createdAt: serverTimestamp(),
    });

    return {
      message: 'Thank you for your testimonial! It has been submitted successfully.',
      isSuccess: true,
    };
  } catch (error) {
    console.error('Error submitting testimonial:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      isSuccess: false,
    };
  }
}
