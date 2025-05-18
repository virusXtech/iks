'use client';

import { useCart } from '@/context/CartContext';
import CartItemRow from '@/components/cart/CartItemRow';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CartPage() {
	const { cartItems, getCartTotal, clearCart, getItemCount } = useCart();
	const total = getCartTotal();
	const itemCount = getItemCount();

	if (itemCount === 0) {
		return (
			<div className='text-center py-20'>
				<ShoppingBag className='mx-auto h-24 w-24 text-muted-foreground mb-6' />
				<h1 className='text-4xl font-serif font-semibold mb-4 text-primary'>
					Your Cart is Empty
				</h1>
				<p className='text-lg text-muted-foreground mb-8'>
					Looks like you haven't added anything to your cart yet.
				</p>
				<Link href='/menu' passHref>
					<Button
						size='lg'
						className='bg-accent text-accent-foreground hover:bg-accent/90'
					>
						Explore Menu
					</Button>
				</Link>
			</div>
		);
	}

	return (
		<div className='max-w-4xl mx-auto'>
			<h1 className='text-4xl font-serif font-bold text-primary mb-8 text-center'>
				Your Shopping Cart
			</h1>
			<Card className='shadow-xl'>
				<CardHeader>
					<CardTitle className='text-2xl font-serif'>Order Summary</CardTitle>
				</CardHeader>
				<CardContent>
					{cartItems.map((item) => (
						<CartItemRow key={item.id} item={item} />
					))}
					<Separator className='my-6' />
					<div className='flex justify-end items-center mt-6 space-x-4'>
						<p className='text-xl font-semibold'>Total:</p>
						<p className='text-3xl font-bold text-accent'>
							€{total.toFixed(2)}
						</p>
					</div>
				</CardContent>
				<CardFooter className='flex flex-col sm:flex-row justify-between items-center gap-4 p-6 bg-muted/30'>
					<div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
						<Link href='/menu' passHref>
							<Button variant='outline' className='w-full sm:w-auto'>
								<ArrowLeft className='mr-2 h-5 w-5' />
								Keep Exploring Menu
							</Button>
						</Link>
						<Button
							variant='outline'
							onClick={clearCart}
							className='border-destructive text-destructive hover:bg-destructive/10 w-full sm:w-auto'
						>
							Clear Cart
						</Button>
					</div>
					<div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
						<Link href='/checkout' passHref>
							<Button
								size='lg'
								className='bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto'
							>
								Place Order
							</Button>
						</Link>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
