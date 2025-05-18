'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import CheckoutForm, {
	type CheckoutFormData,
} from '@/components/checkout/CheckoutForm';
import OrderSummaryCard from '@/components/checkout/OrderSummaryCard';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function CheckoutPage() {
	const { cartItems, getCartTotal, clearCart, getItemCount } = useCart();
	const router = useRouter();
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const total = getCartTotal();
	const itemCount = getItemCount();

	if (itemCount === 0 && !isSubmitting) {
		// Prevent redirect if submitting and cart clears
		return (
			<div className='text-center py-20'>
				<ShoppingBag className='mx-auto h-24 w-24 text-muted-foreground mb-6' />
				<h1 className='text-4xl font-serif font-semibold mb-4 text-primary'>
					Your Cart is Empty
				</h1>
				<p className='text-lg text-muted-foreground mb-8'>
					You need items in your cart to confirm an order.
				</p>
				<Link href='/menu' passHref>
					<Button
						size='lg'
						className='bg-accent text-accent-foreground hover:bg-accent/90'
					>
						Return to Menu
					</Button>
				</Link>
			</div>
		);
	}

	const handleCheckoutSubmit = async (data: CheckoutFormData) => {
		setIsSubmitting(true);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		const orderId = Date.now().toString();

		let toastDescription = `Thank you, ${data.name}! Your order #${orderId} has been confirmed.`;
		if (data.serviceType === 'table' && data.tableNumber) {
			toastDescription += ` We'll bring it to table ${data.tableNumber}.`;
		} else if (data.serviceType === 'self') {
			toastDescription += ` Please pick it up at the counter when ready.`;
		}

		toast({
			title: 'Order Confirmed!',
			description: toastDescription,
		});

		clearCart();
		router.push(
			`/confirmation/${orderId}?name=${encodeURIComponent(
				data.name,
			)}&serviceType=${data.serviceType}${
				data.tableNumber
					? `&tableNumber=${encodeURIComponent(data.tableNumber)}`
					: ''
			}`,
		);
	};

	return (
		<div className='max-w-5xl mx-auto'>
			<h1 className='text-4xl font-serif font-bold text-primary mb-10 text-center'>
				Confirm Your Order
			</h1>
			<div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
				<div>
					<OrderSummaryCard items={cartItems} total={total} />
				</div>
				<div>
					<CheckoutForm
						onSubmit={handleCheckoutSubmit}
						isSubmitting={isSubmitting}
					/>
				</div>
			</div>
		</div>
	);
}
