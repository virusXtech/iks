'use server'

import * as z from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required.'),
})

interface ContactFormSubmissionResult {
  success: boolean
  message?: string
  errors?: Record<string, string[]>
}

export async function submitContactFormAction(
  formData: z.infer<typeof contactFormSchema>,
): Promise<ContactFormSubmissionResult> {
  const validationResult = contactFormSchema.safeParse(formData)

  if (!validationResult.success) {
    return {
      success: false,
      message: 'Invalid form data.',
      errors: validationResult.error.flatten().fieldErrors,
    }
  }

  // In a real application, you would process the data here:
  // e.g., send an email, save to a database, etc.
  console.log('Contact form submission received:', validationResult.data)

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Simulate success
  return {
    success: true,
    message: 'Your message has been sent successfully!',
  }
}
