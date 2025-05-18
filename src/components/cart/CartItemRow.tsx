'use client';

import Image from 'next/legacy/image';
import type { CartItem } from '@/types';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MinusCircle, PlusCircle, Trash2 } from 'lucide-react';

interface CartItemRowProps {
	item: CartItem;
}

const CartItemRow = ({ item }: CartItemRowProps) => {
	const { updateItemQuantity, removeFromCart } = useCart();

	const handleQuantityChange = (newQuantity: number) => {
		// Ensure quantity is at least 1 if changed via input, otherwise let updateItemQuantity handle <= 0
		const quantityToUpdate = Math.max(1, newQuantity);
		updateItemQuantity(item.id, quantityToUpdate);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value;
		// Allow empty input temporarily, or parse to integer
		if (rawValue === '') {
			// Optionally handle empty string (e.g., wait for blur, or treat as 1)
			// For now, let's do nothing or set to a temp state if needed
			return;
		}
		const newQuantity = parseInt(rawValue, 10);
		if (!isNaN(newQuantity)) {
			handleQuantityChange(newQuantity);
		}
	};

	return (
		<div className='flex flex-col sm:flex-row items-center justify-between py-4 border-b border-border last:border-b-0 gap-4 sm:gap-0'>
			<div className='flex items-center gap-4 w-full sm:w-auto'>
				<div className='relative w-20 h-20 rounded-md overflow-hidden shrink-0'>
					<Image
						src={item.imageUrl}
						alt={item.name}
						layout='fill'
						objectFit='cover'
						data-ai-hint={item.imageHint || 'food item'}
					/>
				</div>
				<div className='flex-grow'>
					<h3 className='text-lg font-semibold font-serif text-primary'>
						{item.name}
					</h3>
					<p className='text-sm text-muted-foreground'>
						€{item.price.toFixed(2)} each
					</p>
				</div>
			</div>
			<div className='flex items-center gap-2 sm:gap-4'>
				<div className='flex items-center gap-1 sm:gap-2'>
					<Button
						variant='outline'
						size='icon'
						onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
						disabled={item.quantity <= 1}
					>
						<MinusCircle className='h-5 w-5' />
					</Button>
					<Input
						type='number'
						value={item.quantity}
						onChange={handleInputChange}
						onBlur={(e) => {
							// Ensure onBlur sets to 1 if input is empty or invalid
							const value = parseInt(e.target.value, 10);
							if (isNaN(value) || value < 1) {
								updateItemQuantity(item.id, 1);
							}
						}}
						className='w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
						min='1'
					/>
					<Button
						variant='outline'
						size='icon'
						onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
					>
						<PlusCircle className='h-5 w-5' />
					</Button>
				</div>
				<p className='text-md font-semibold w-20 text-right'>
					€{(item.price * item.quantity).toFixed(2)}
				</p>
				<Button
					variant='ghost'
					size='icon'
					onClick={() => removeFromCart(item.id)}
					className='text-destructive hover:text-destructive/80'
				>
					<Trash2 className='h-5 w-5' />
				</Button>
			</div>
		</div>
	);
};

export default CartItemRow;
