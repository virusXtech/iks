'use client'

import type { CartItem } from '@/types'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import Image from 'next/legacy/image'

interface OrderSummaryCardProps {
  items: CartItem[]
  total: number
}

const OrderSummaryCard = ({ items, total }: OrderSummaryCardProps) => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-primary">Your Order</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <ul className="space-y-4">
            {items.map(item => (
              <li key={item.id} className="flex justify-between items-center pb-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image || 'https://placehold.co/600x400.png'}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-sm"
                    data-ai-hint="food item"
                  />
                  <div>
                    <p className="font-medium">
                      {item.name} <span className="text-sm text-muted-foreground">x {item.quantity}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="text-base">PLN</span>
                      {Number(item.price).toFixed(2)} each
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-foreground">
                  <span className="text-sm">PLN</span>
                  {(+item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
      <CardFooter className="bg-muted/30 p-6 mt-4">
        <div className="flex justify-between items-center w-full">
          <p className="text-xl font-semibold text-foreground">Grand Total:</p>
          <p className="text-2xl font-bold text-accent">
            <span className="text-sm">PLN</span>
            {total.toFixed(2)}
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}

export default OrderSummaryCard
