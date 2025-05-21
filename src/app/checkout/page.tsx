'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import CheckoutForm, { type CheckoutFormData } from '@/components/checkout/CheckoutForm'
import OrderSummaryCard from '@/components/checkout/OrderSummaryCard'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { OrderItemPayload, OrderPayload, OrderResponse } from '@/lib/types'

interface IResponseResult {
  success: boolean
  orderId?: string
  message: string
  variant?: string | null
}

export default function CheckoutPage() {
  const { cartItems, getCartTotal, clearCart, getItemCount } = useCart()
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const total = getCartTotal()
  const itemCount = getItemCount()

  if (itemCount === 0 && !isSubmitting) {
    return (
      <div className="text-center py-20">
        <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-6" />
        <h1 className="text-4xl font-serif font-semibold mb-4 text-primary">Your Cart is Empty</h1>
        <p className="text-lg text-muted-foreground mb-8">You need items in your cart to confirm an order.</p>
        <Link href="/menu" passHref>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Return to Menu
          </Button>
        </Link>
      </div>
    )
  }

  const handleCheckoutSubmit = async (data: CheckoutFormData) => {
    if (cartItems.length === 0) {
      toast({
        title: 'Your cart is empty!',
        description: 'Please add items to your cart before placing an order.',
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)

    const orderItems: OrderItemPayload[] = cartItems.map(item => ({
      menu_item: item.id,
      quantity: item.quantity,
      price_at_order: item.price,
    }))

    const payload: OrderPayload = {
      ...data,
      items: orderItems,
    }

    let result: IResponseResult | null = null

    try {
      // Basic validation example (you'd typically use a library like Zod here)
      if (!payload.customer_name || payload.customer_name.trim() === '') {
        result = { success: false, message: 'Customer name is required.' }
      }
      if (!payload.customer_phone || !/^\d{10,15}$/.test(payload.customer_phone)) {
        result = {
          success: false,
          message: 'Valid customer phone (10-15 digits) is required.',
        }
      }
      if (!payload.items || payload.items.length === 0) {
        result = { success: false, message: 'Cannot place an empty order.' }
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/order/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to place order' }))
        throw new Error(errorData.message || 'Failed to place order')
      }

      const data: OrderResponse = await response.json()

      result = {
        success: true,
        orderId: data.id,
        message: 'Order placed successfully!',
      }
    } catch (error) {
      console.error('Order submission error:', error)
      let errorMessage = 'Failed to place order due to an unexpected error.'
      if (error instanceof Error) {
        errorMessage = error.message
      }
      result = { success: false, message: errorMessage }
    } finally {
      setIsSubmitting(false)
    }

    if (result.success && result.orderId) {
      toast({
        title: 'Order Placed Successfully!',
        description: `Your order ID is ${result.orderId}. Redirecting...`,
      })
      clearCart()
      router.push(`/order/${result.orderId}?fresh=true`)
    } else {
      toast({
        title: 'Order Failed',
        description: result.message || 'An unknown error occurred.',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-primary mb-10 text-center">Confirm Your Order</h1>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <OrderSummaryCard items={cartItems} total={total} />
        </div>
        <div>
          <CheckoutForm onSubmit={handleCheckoutSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>
    </div>
  )
}
