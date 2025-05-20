'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
	ShoppingCart,
	Utensils,
	Search,
	Mail,
	List,
	Menu as MenuIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RESTAURANT_NAME, RESTAURANT_SUBTITLE } from '@/lib/constants';
import { useEffect, useState } from 'react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';

export default function Header() {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	const { getItemCount } = useCart();
	const cartItemCount = isMounted ? getItemCount() : 0;

	const navLinks = [
		{ href: '/menu', label: 'Menu', icon: List },
		{ href: '/track-order', label: 'Track Order', icon: Search },
		{ href: '/contact', label: 'Contact', icon: Mail },
	];

	return (
		<header className='bg-card shadow-md sticky top-0 z-50'>
			<div className='container mx-auto px-4 py-3 flex justify-between items-center'>
				<Link href='/' className='flex items-center gap-2 group'>
					<Image
						src='/logo.png'
						alt='IKS Logo'
						width={40}
						height={40}
						priority
						className='h-8 w-8 text-primary group-hover:animate-pulse'
					/>
					<div>
						<h1 className='text-2xl font-bold text-primary'>
							{RESTAURANT_NAME}
						</h1>
						<p className='text-xs text-muted-foreground'>
							{RESTAURANT_SUBTITLE}
						</p>
					</div>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden sm:flex items-center gap-2 sm:gap-3'>
					{navLinks.map((link) => (
						<Link key={link.href} href={link.href} legacyBehavior passHref>
							<Button
								variant='ghost'
								className='flex items-center gap-1 text-sm'
							>
								<link.icon className='h-4 w-4' />
								{link.label}
							</Button>
						</Link>
					))}
					<Link href='/cart' legacyBehavior passHref>
						<Button
							variant='outline'
							className='hover:bg-primary/90 hover:text-primary-foreground relative text-sm'
						>
							<ShoppingCart className='mr-2 h-5 w-5' />
							Cart
							{cartItemCount > 0 && (
								<span className='absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center'>
									{cartItemCount}
								</span>
							)}
						</Button>
					</Link>
				</nav>

				{/* Mobile Navigation */}
				<div className='sm:hidden'>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant='ghost' size='icon'>
								<MenuIcon className='h-6 w-6' />
								<span className='sr-only'>Open menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side='right' className='w-[280px] bg-card'>
							{' '}
							{/* Removed p-4 to use default p-6 */}
							<SheetHeader className='mb-6'>
								<SheetTitle>
									<SheetClose asChild>
										<Link
											href='/'
											className='flex items-center gap-2 text-left'
										>
											<Utensils className='h-7 w-7 text-primary' />
											<span className='text-xl font-bold text-primary'>
												{RESTAURANT_NAME}
											</span>
										</Link>
									</SheetClose>
								</SheetTitle>
							</SheetHeader>
							<div className='flex flex-col gap-4'>
								{' '}
								{/* Increased gap from gap-3 to gap-4 */}
								{navLinks.map((link) => (
									<SheetClose key={link.href} asChild>
										<Link
											href={link.href}
											className='flex items-center gap-3 p-3 rounded-md hover:bg-accent/80 transition-colors text-foreground hover:text-accent-foreground font-medium' /* Added font-medium */
										>
											<link.icon className='h-6 w-6' />{' '}
											{/* Changed from h-5 w-5 */}
											{link.label}
										</Link>
									</SheetClose>
								))}
								<hr className='my-2 border-border' />
								<SheetClose asChild>
									<Link
										href='/cart'
										className='flex items-center gap-3 p-3 rounded-md hover:bg-accent/80 transition-colors text-foreground hover:text-accent-foreground font-medium' /* Added font-medium */
									>
										<ShoppingCart className='h-6 w-6' />{' '}
										{/* Changed from h-5 w-5 */}
										Cart
										{cartItemCount > 0 && (
											<span className='ml-auto bg-primary text-primary-foreground text-xs font-medium rounded-full h-6 w-6 flex items-center justify-center'>
												{cartItemCount}
											</span>
										)}
									</Link>
								</SheetClose>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
