'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search } from 'lucide-react'

export default function TrackOrderForm() {
  const [orderId, setOrderId] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (orderId.trim()) {
      router.push(`/order/${orderId.trim()}`)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Track Your Order</CardTitle>
        <CardDescription className="text-center">Enter your order ID below to check its status.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="orderId" className="sr-only">
              Order ID
            </label>
            <Input
              id="orderId"
              type="text"
              value={orderId}
              onChange={e => setOrderId(e.target.value)}
              placeholder="Enter your Order ID"
              className="text-base"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Search className="mr-2 h-4 w-4" /> Track Order
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
