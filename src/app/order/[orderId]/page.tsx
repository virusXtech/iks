import { fetchOrder } from '@/lib/api'
import OrderDetails from '@/components/order/OrderDetails'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle, FileText, Terminal } from 'lucide-react'
import type { Metadata } from 'next'

type Props = {
  params: { orderId: string; fresh: boolean }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.orderId
  return {
    title: `Order #${id}`,
    description: `View details and status for order ${id}.`,
  }
}

export default async function OrderPage({ params }: Props) {
  const { orderId, fresh } = await params
  let order
  let error: string | null = null

  try {
    order = await fetchOrder(orderId)
  } catch (e) {
    console.error(`Failed to fetch order ${orderId}:`, e)
    error = e instanceof Error ? e.message : 'An unknown error occurred.'
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <Alert variant="destructive" className="max-w-md mx-auto">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error Fetching Order</AlertTitle>
          <AlertDescription>
            {error === 'Order not found'
              ? `We couldn't find an order with ID: ${orderId}. Please check the ID and try again.`
              : `There was a problem fetching your order details. Please try again later.`}
          </AlertDescription>
        </Alert>
        <Button asChild variant="link" className="mt-6">
          <Link href="/track-order">Track Another Order</Link>
        </Button>
      </div>
    )
  }

  if (!order) {
    // Should be caught by error handling, but as a fallback:
    return <div className="container mx-auto px-4 py-12 text-center">Loading order details...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {fresh ? (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-md shadow-md mb-8 max-w-3xl mx-auto text-center">
          <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
          <h2 className="text-2xl font-semibold mb-2">Thank You For Your Order!</h2>
          <p className="text-base">Your order has been successfully placed. You can find the details below.</p>
        </div>
      ) : (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-6 rounded-md shadow-md mb-8 max-w-3xl mx-auto text-center">
          <FileText className="h-8 w-8 text-blue-500 mx-auto mb-3" />
          <h2 className="text-2xl font-semibold mb-2">Order Status</h2>
          <p className="text-base">Here are the current details for your order.</p>
        </div>
      )}

      <OrderDetails order={order} />
      <div className="text-center mt-8">
        <Button asChild variant="outline">
          <Link href="/menu">Continue Shopping</Link>
        </Button>
        <Button asChild variant="link" className="ml-4">
          <Link href="/track-order">Track Another Order</Link>
        </Button>
      </div>
    </div>
  )
}
