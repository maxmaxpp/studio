'use server';

import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { initializeFirebaseServer } from '@/firebase/server-init';

const testimonialSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  company: z.string().optional(),
  quote: z.string().min(10, 'Testimonial must be at least 10 characters.'),
  rating: z.coerce.number().min(1, 'Please provide a rating.').max(5),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    company?: string[];
    quote?: string[];
    rating?: string[];
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
    rating: formData.get('rating'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
      isSuccess: false,
    };
  }

  try {
    const { firestore } = initializeFirebaseServer();
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
