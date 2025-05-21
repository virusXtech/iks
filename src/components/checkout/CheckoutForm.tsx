'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const checkoutSchema = z
  .object({
    customer_name: z.string().min(2, 'Name must be at least 2 characters'),
    customer_phone: z
      .string()
      .min(7, 'Phone number seems too short')
      .regex(/^\+?[0-9\s-()]*$/, 'Invalid phone number format'),
    service_type: z.enum(['table', 'self'], {
      required_error: 'Please select a service type.',
    }),
    table: z.string().optional(),
    instructions: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.service_type === 'table' && (!data.table || data.table.trim() === '')) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Table number is required for table service.',
        path: ['table'],
      })
    }
  })

export type CheckoutFormData = z.infer<typeof checkoutSchema>

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void
  isSubmitting: boolean
}

const CheckoutForm = ({ onSubmit, isSubmitting }: CheckoutFormProps) => {
  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      customer_name: '',
      customer_phone: '',
      service_type: 'self',
      instructions: '',
    },
  })

  const serviceType = form.watch('service_type')

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-primary">Contact Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="customer_name"
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
              name="customer_phone"
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
              name="service_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="self">Self Service</SelectItem>
                      <SelectItem value="table">Table Service</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {serviceType === 'table' && (
              <FormField
                control={form.control}
                name="table"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Table Number</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="instructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instructions</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Less Spicy" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4">
              <Link href="/cart" passHref legacyBehavior>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full sm:w-auto text-lg py-3"
                  disabled={isSubmitting}
                  asChild
                >
                  <a>
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Cancel
                  </a>
                </Button>
              </Link>
              <Button
                type="submit"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Confirm Order'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default CheckoutForm
