import { Badge } from '@/components/ui/badge';
import type { OrderResponse } from '@/lib/types';

interface OrderStatusBadgeProps {
  status: OrderResponse['status'];
}

export default function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  let variant: 'default' | 'secondary' | 'destructive' | 'outline' = 'default';
  let text = status.charAt(0).toUpperCase() + status.slice(1);

  switch (status.toLowerCase()) {
    case 'pending':
      variant = 'outline';
      text = 'Pending Confirmation';
      break;
    case 'confirmed':
      variant = 'default'; // Primary color for positive confirmation
      break;
    case 'preparing':
      variant = 'secondary';
      text = 'Preparing Your Order';
      break;
    case 'ready':
      variant = 'default'; // Or another distinct color like a green if available
      text = 'Ready for Pickup/Serve';
      break;
    case 'completed':
      variant = 'default'; // Using default theme's primary
      text = 'Completed';
      break;
    case 'cancelled':
      variant = 'destructive';
      break;
    default:
      variant = 'outline';
  }

  return <Badge variant={variant} className="text-sm px-3 py-1">{text}</Badge>;
}
