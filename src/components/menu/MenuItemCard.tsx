'use client';

import Image from 'next/legacy/image';
import type { MenuItem } from '@/types';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';

interface MenuItemCardProps {
	menuitem: MenuItem;
}

const MenuItemCard = ({ menuitem }: MenuItemCardProps) => {
	const { addToCart } = useCart();

	return (
		<Card className='flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300'>
			<CardHeader className='p-0'>
				<div className='relative w-full h-48'>
					<Image
						src={menuitem.image || 'https://placehold.co/600x400.png'}
						alt={menuitem.name}
						layout='fill'
						objectFit='cover'
						data-ai-hint='food item'
					/>
				</div>
			</CardHeader>
			<CardContent className='p-4 flex-grow'>
				<CardTitle className='text-xl font-serif mb-1 text-primary'>
					{menuitem.name}
				</CardTitle>
				<CardDescription className='text-sm text-muted-foreground mb-2 h-20 overflow-y-auto'>
					{menuitem.description}
				</CardDescription>
				<div className='flex justify-between items-center'>
					{menuitem.on_offer && (
						<p className='text-sm font-semibold line-through'>
							<span className='text-xs'>PLN</span>
							{Number.parseFloat(menuitem.offer_price).toFixed(2)}
						</p>
					)}
					{menuitem.is_bestseller && <p className='font-bold'>Best Seller</p>}
				</div>
				<p className='text-lg font-semibold text-accent'>
					<span className='text-sm'>PLN</span>
					{Number.parseFloat(menuitem.price).toFixed(2)}
				</p>
			</CardContent>
			<CardFooter className='p-4 pt-0'>
				<Button
					onClick={() => addToCart(menuitem)}
					className='w-full bg-primary hover:bg-primary/90 text-primary-foreground'
				>
					<PlusCircle className='mr-2 h-5 w-5' />
					Add to Cart
				</Button>
			</CardFooter>
		</Card>
	);
};

export default MenuItemCard;
