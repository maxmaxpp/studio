'use server';

import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp, getApps } from 'firebase/app';
import { firebaseConfig } from '@/firebase/config';

// Initialize Firebase app if not already initialized
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const firestore = getFirestore(getApps()[0]);

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
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return {
      message: `An unexpected error occurred. Please try again later. Details: ${errorMessage}`,
      isSuccess: false,
    };
  }
}