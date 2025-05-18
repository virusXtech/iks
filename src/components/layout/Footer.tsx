import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/legacy/image';

const year = new Date().getFullYear();

const Footer = () => {
	return (
		<footer className='bg-card shadow-top mt-16 border-t border-border/50'>
			<div className='container mx-auto px-4 py-10'>
				<div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8'>
					<div>
						<Link
							href='/'
							className='inline-block mb-3 hover:opacity-90 transition-opacity'
						>
							<Image
								src='/logo.png'
								alt='IKS Logo'
								width={50}
								height={50}
								className='h-12 w-auto'
							/>
						</Link>
						<p className='text-sm text-muted-foreground'>
							Crafting Culinary Tales with Every Bite! Experience authentic
							Indian culinary excellence.
						</p>
					</div>

					<div>
						<h4 className='text-lg font-serif font-semibold text-primary mb-3'>
							Quick Links
						</h4>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='/menu'
									className='text-muted-foreground hover:text-accent transition-colors'
								>
									Menu
								</Link>
							</li>
							<li>
								<Link
									href='/cart'
									className='text-muted-foreground hover:text-accent transition-colors'
								>
									Your Cart
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-muted-foreground hover:text-accent transition-colors'
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='text-lg font-serif font-semibold text-primary mb-3'>
							Contact Info
						</h4>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li className='flex items-start gap-2'>
								<MapPin className='h-4 w-4 text-accent mt-1 shrink-0' />
								<span>123 Spice Route, Foodie City, FC 45678</span>
							</li>
							<li className='flex items-center gap-2'>
								<Phone className='h-4 w-4 text-accent shrink-0' />
								<span>(555) 987-6543</span>
							</li>
							<li className='flex items-center gap-2'>
								<Mail className='h-4 w-4 text-accent shrink-0' />
								<span>info@iksindiankitchen.online</span>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='text-lg font-serif font-semibold text-primary mb-3'>
							Opening Hours
						</h4>
						<ul className='space-y-1 text-sm text-muted-foreground'>
							<li className='flex items-center gap-2'>
								<Clock className='h-4 w-4 text-accent shrink-0' />
								Mon - Fri: 12 PM - 10 PM
							</li>
							<li className='flex items-center gap-2'>
								<Clock className='h-4 w-4 text-accent shrink-0' />
								Sat - Sun: 11 AM - 11 PM
							</li>
						</ul>
					</div>
				</div>

				<div className='mt-8 pt-8 border-t border-border/30 text-center text-muted-foreground'>
					<p className='text-sm'>&copy; {year} IKS. All rights reserved.</p>
					<p className='text-xs mt-1'>
						Crafted with passion for authentic Indian dining.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
