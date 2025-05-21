'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import Image from 'next/legacy/image'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const { toast } = useToast()
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Contact form submitted:', data)
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. We'll get back to you soon.",
    })
    form.reset()
  }

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We&apos;d love to hear from you. Whether it&apos;s a question, feedback, or a reservation inquiry for IKS,
          feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-serif text-primary">Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </CardDescription>
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

        <div className="space-y-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-md">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" />
                <span>123 Spice Route, Foodie City, FC 45678</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>(555) 987-6543</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>contact@iksindiankitchen.online</span>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Clock className="h-5 w-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Opening Hours:</p>
                  <p className="text-sm text-muted-foreground">Mon - Fri: 12:00 PM - 10:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sat - Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary">Find Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[16/10] rounded-md overflow-hidden border">
                <Image
                  src="https://placehold.co/600x375.png"
                  alt="Restaurant location map"
                  width={600}
                  height={375}
                  className="w-full h-full object-cover"
                  data-ai-hint="map location"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
