import type { OrderResponse } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { format, parseISO } from 'date-fns'
import OrderStatusBadge from './OrderStatusBadge'

interface OrderDetailsProps {
  order: OrderResponse
}

export default function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl">
      <CardHeader className="bg-muted/50 p-6 rounded-t-lg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <CardTitle className="text-2xl md:text-3xl text-primary">Order #{order.id}</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Placed on: {format(parseISO(order.created_at), 'PPP p')}
            </CardDescription>
          </div>
          <OrderStatusBadge status={order.status} />
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">Customer Details</h3>
            <p>
              <strong>Name:</strong> {order.customer_name}
            </p>
            <p>
              <strong>Phone:</strong> {order.customer_phone}
            </p>
            {order.table && (
              <p>
                <strong>Table:</strong> {order.table}
              </p>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">Order Info</h3>
            <p>
              <strong>Service Type:</strong> {order.service_type}
            </p>
            {order.instructions && (
              <p>
                <strong>Instructions:</strong> {order.instructions}
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2 text-foreground">Items Ordered</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order.items.map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.menu_item_name}</TableCell>
                  <TableCell className="text-center">{item.quantity}</TableCell>
                  <TableCell className="text-right">${parseFloat(item.price_at_order).toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    ${(parseFloat(item.price_at_order) * item.quantity).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="text-right mt-4 border-t pt-4">
          <p className="text-lg font-semibold">
            Grand Total: <span className="text-primary">${Number(order.total_amount).toFixed(2)}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
