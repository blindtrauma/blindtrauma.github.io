'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  date: z.string().min(1, 'Please select a wedding date'),
  service: z.string().min(1, 'Please select a service'),
  venue: z.string().optional(),
  source: z.string().optional(),
  vision: z.string().min(10, 'Please tell us a bit more about your vision')
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const rawData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      date: formData.get('date'),
      service: formData.get('service'),
      venue: formData.get('venue'),
      source: formData.get('source'),
      vision: formData.get('vision'),
    };

    const validatedData = contactSchema.parse(rawData);
    
    // Simulate database or email API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log the data (in a real app, this would be saved or emailed)
    console.log('New Consultation Request:', validatedData);

    return { success: true, message: 'Inquiry received successfully.' };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        errors: error.flatten().fieldErrors 
      };
    }
    return { success: false, message: 'An unexpected error occurred. Please try again.' };
  }
}
