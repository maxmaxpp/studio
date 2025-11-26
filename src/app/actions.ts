'use server';

import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { initializeFirebaseServer } from '@/firebase/server-init';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  isSuccess?: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
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
    const submissionsCollection = collection(firestore, 'contact_form_submissions');
    await addDoc(submissionsCollection, {
      ...validatedFields.data,
      submissionDate: serverTimestamp(),
    });

    return {
      message: 'Your message has been sent successfully. I will get back to you shortly.',
      isSuccess: true,
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred.';
    return {
      message: `An unexpected error occurred. Please try again later. Details: ${errorMessage}`,
      isSuccess: false,
    };
  }
}
