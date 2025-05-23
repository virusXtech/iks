'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  phone: z
    .string()
    .min(7, 'Phone number seems too short')
    .regex(/^\+?[0-9\s-()]*$/, 'Invalid phone number format'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactFormClient() {
  const { toast } = useToast()

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      phone: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    const cleanedMessage = data.message
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/[\u200B-\u200D\uFEFF]/g, '')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

    const digitsOnlyPhone = data.phone.replace(/\D/g, '')

    if (!emailRegex.test(data.email)) {
      toast({
        title: 'Validation Error',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      })
      return
    }

    if (data.phone && (digitsOnlyPhone.length < 7 || digitsOnlyPhone.length > 15)) {
      toast({
        title: 'Validation Error',
        description: 'Phone number must contain between 7 and 15 digits.',
        variant: 'destructive',
      })
      return
    }

    if (cleanedMessage.toLowerCase().includes('test')) {
      toast({
        title: 'Validation Error',
        description: 'Message cannot contain the word "test".',
        variant: 'destructive',
      })
      return
    }

    if (cleanedMessage.length > 1000) {
      toast({
        title: 'Validation Error',
        description: 'Message is too long. Please keep it under 1000 characters.',
        variant: 'destructive',
      })
      return
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/submit-contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, message: cleanedMessage }),
      })

      if (!response.ok) throw new Error('Failed to send message')

      toast({ title: 'Message Sent!', description: 'Thank you for reaching out.' })
      form.reset()
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      })
    }
  }

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-serif text-primary">Send Us a Message</CardTitle>
        <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+1 234 567 8900" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type your message here..." {...field} rows={5} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-3"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
