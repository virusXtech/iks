import { Button } from '@/components/ui/button';
import { RESTAURANT_NAME, RESTAURANT_SUBTITLE } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import {
	Utensils,
	Sparkles,
	ShoppingCart,
	Star,
	BookOpen,
	Users,
	Search,
} from 'lucide-react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
	title: `${RESTAURANT_NAME} - ${RESTAURANT_SUBTITLE}`,
	description: `Discover authentic Indian cuisine at ${RESTAURANT_NAME} - ${RESTAURANT_SUBTITLE}. Order online now!`,
};

const testimonials = [
	{
		name: 'Priya S.',
		quote:
			"Absolutely the best Indian food I've had in the city! The flavors were authentic and the service was fantastic. Highly recommend the Butter Chicken.",
		stars: 5,
	},
	{
		name: 'John D.',
		quote:
			'A delightful experience from start to finish. The ambiance is warm and inviting, and every dish we tried was a masterpiece. The Garlic Naan is a must-try!',
		stars: 5,
	},
	{
		name: 'Aisha K.',
		quote:
			'IKS Flavors is my go-to for Indian takeout. Consistent quality and generous portions. Their Samosas are addictive!',
		stars: 4,
	},
];

export default function HomePage() {
	return (
		<div className='flex flex-col items-center text-center py-8 md:py-16'>
			<div className='relative w-full max-w-3xl h-64 md:h-80 mb-8 rounded-xl overflow-hidden shadow-2xl'>
				<Image
					src='/images/hero.jpg'
					alt='Delicious Indian food spread'
					layout='fill'
					objectFit='cover'
					priority
					data-ai-hint='indian food buffet'
				/>
				<div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4'>
					<Utensils className='h-16 w-16 text-white mb-4 opacity-80' />
					<h1 className='text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
						{RESTAURANT_NAME}
					</h1>
					<p className='mt-2 text-lg md:text-xl text-gray-200'>
						{RESTAURANT_SUBTITLE}
					</p>
				</div>
			</div>

			<p className='mt-4 max-w-2xl text-lg text-foreground/80 leading-relaxed'>
				Experience the rich and diverse flavors of authentic Indian cuisine. Our
				chefs use the freshest ingredients and traditional spices to bring you
				an unforgettable dining experience.
			</p>

			<div className='mt-10 flex flex-col sm:flex-row gap-4'>
				<Link href='/menu' legacyBehavior passHref>
					<Button
						size='lg'
						className='bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-lg shadow-md transition-transform hover:scale-105'
					>
						<ShoppingCart className='mr-2 h-5 w-5' /> View Our Menu
					</Button>
				</Link>
				<Link href='/track-order' legacyBehavior passHref>
					<Button
						size='lg'
						variant='outline'
						className='text-lg px-8 py-6 rounded-lg shadow-md transition-transform hover:scale-105 group'
					>
						<Search className='mr-2 h-5 w-5' /> Track Your Order
					</Button>
				</Link>
			</div>

			<section className='mt-16 w-full max-w-4xl'>
				<h2 className='text-3xl font-bold text-primary mb-8'>Why Choose Us?</h2>
				<div className='grid md:grid-cols-3 gap-8 text-left'>
					<div className='bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
						<Sparkles className='h-10 w-10 text-accent mb-3' />
						<h3 className='text-xl font-semibold mb-2'>Authentic Flavors</h3>
						<p className='text-muted-foreground'>
							Prepared with traditional recipes and the finest spices.
						</p>
					</div>
					<div className='bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
						<Utensils className='h-10 w-10 text-accent mb-3' />
						<h3 className='text-xl font-semibold mb-2'>Fresh Ingredients</h3>
						<p className='text-muted-foreground'>
							Locally sourced produce and high-quality meats.
						</p>
					</div>
					<div className='bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
						<ShoppingCart className='h-10 w-10 text-accent mb-3' />
						<h3 className='text-xl font-semibold mb-2'>Easy Online Ordering</h3>
						<p className='text-muted-foreground'>
							Order your favorite dishes with just a few clicks.
						</p>
					</div>
				</div>
			</section>

			<section className='mt-16 w-full max-w-4xl'>
				<h2 className='text-3xl font-bold text-primary mb-8 flex items-center justify-center'>
					<BookOpen className='mr-3 h-8 w-8' /> Our Culinary Journey
				</h2>
				<div className='grid md:grid-cols-2 gap-8 items-center text-left'>
					<div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg'>
						<Image
							src='/images/landing.jpg'
							alt='Chef preparing Indian dish'
							layout='fill'
							objectFit='cover'
							data-ai-hint='chef cooking'
						/>
					</div>
					<div className='space-y-4'>
						<p className='text-foreground/90 leading-relaxed'>
							At {RESTAURANT_NAME}, our story began with a passion for sharing
							the authentic tastes of India. We believe in honoring age-old
							recipes passed down through generations, while infusing a touch of
							modern creativity. Each dish is a celebration of flavor, crafted
							with the freshest locally-sourced ingredients and a blend of
							aromatic spices that transport you to the heart of India.
						</p>
						<p className='text-foreground/90 leading-relaxed'>
							Our commitment extends beyond just food; it's about creating a
							warm, inviting atmosphere where every meal is an experience. Join
							us on this flavorful journey.
						</p>
					</div>
				</div>
			</section>

			<section className='mt-16 w-full max-w-4xl'>
				<h2 className='text-3xl font-bold text-primary mb-10 flex items-center justify-center'>
					<Users className='mr-3 h-8 w-8' /> What Our Customers Say
				</h2>
				<div className='grid md:grid-cols-3 gap-6'>
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className='bg-card shadow-lg hover:shadow-xl transition-shadow text-left'
						>
							<CardHeader>
								<CardTitle className='text-xl flex items-center'>
									{Array(testimonial.stars)
										.fill(0)
										.map((_, i) => (
											<Star
												key={i}
												className='h-5 w-5 text-yellow-400 fill-yellow-400 mr-1'
											/>
										))}
									{Array(5 - testimonial.stars)
										.fill(0)
										.map((_, i) => (
											<Star
												key={i + testimonial.stars}
												className='h-5 w-5 text-gray-300 mr-1'
											/>
										))}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground italic mb-3'>
									"{testimonial.quote}"
								</p>
								<p className='font-semibold text-right text-primary'>
									- {testimonial.name}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>
		</div>
	);
}
