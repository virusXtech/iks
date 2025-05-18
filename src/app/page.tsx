import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { Utensils, Phone, Star, Quote } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'IKS - Indian Kitchen & Spices',
	description: 'Best Indian Kitchen in Warsaw',
	manifest: '/site.webmanifest',
};

export default function LandingPage() {
	return (
		<div className='space-y-20 py-8'>
			<section className='relative h-[60vh] min-h-[400px] flex items-center justify-center text-center rounded-xl overflow-hidden shadow-2xl'>
				<Image
					src='https://placehold.co/1200x800.png'
					alt='Delicious Indian food spread'
					layout='fill'
					objectFit='cover'
					className='absolute z-0 opacity-50'
					data-ai-hint='restaurant interior'
					priority
				/>

				<div className='relative z-10 p-8 bg-black/60 rounded-lg'>
					<h1 className='text-5xl md:text-7xl font-serif font-bold text-white mb-6'>
						Welcome to IKS
					</h1>
					<p className='text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto'>
						Experience authentic Indian culinary excellence from the comfort of
						your home.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/menu' passHref>
							<Button
								size='lg'
								className='bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-3 px-8'
							>
								<Utensils className='mr-2 h-5 w-5' />
								View Our Menu
							</Button>
						</Link>
						<Link href='/contact' passHref>
							<Button
								variant='outline'
								size='lg'
								className='text-lg py-3 px-8 border-white text-black hover:bg-white hover:text-primary'
							>
								<Phone className='mr-2 h-5 w-5' />
								Contact Us
							</Button>
						</Link>
					</div>
				</div>
			</section>
			<section className='text-center'>
				<h2 className='text-4xl font-serif font-semibold text-primary mb-6'>
					Our Culinary Journey
				</h2>
				<div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center'>
					<div className='text-lg text-muted-foreground text-left space-y-4'>
						<p>
							Founded in the heart of Foodie City, IKS began with a simple
							dream: to share the joy of authentic, high-quality Indian cuisine
							with our community. Our journey started with cherished family
							recipes passed down through generations, each telling a story of
							tradition and passion for vibrant spices.
						</p>
						<p>
							We believe that food is more than just sustenance; it's an
							experience, a celebration, and a way to connect. That's why we
							meticulously source the freshest local ingredients and authentic
							spices, transforming them into dishes that are both innovative and
							deeply comforting.
						</p>
						<p>
							Our chefs are artists, dedicated to their craft, constantly
							exploring new flavors while honoring the rich tapestry of Indian
							culinary traditions. Join us as we continue to write our story,
							one delicious plate at a time.
						</p>
					</div>
					<div className='relative aspect-square max-w-md mx-auto w-full'>
						<Image
							src='https://placehold.co/600x600.png'
							alt='IKS kitchen or founders'
							layout='fill'
							objectFit='cover'
							className='rounded-lg shadow-lg'
							data-ai-hint='indian kitchen'
						/>
					</div>
				</div>
			</section>
			<section className='text-center'>
				<h2 className='text-4xl font-serif font-semibold text-primary mb-4'>
					A Taste of Tradition & Innovation
				</h2>
				<p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-8'>
					At IKS, we blend time-honored recipes with modern culinary techniques
					to bring you an unforgettable dining experience. Each dish is crafted
					with the freshest ingredients, aromatic spices, and a passion for
					flavor.
				</p>
				<div className='max-w-3xl mx-auto'>
					<Image
						src='https://placehold.co/800x500.png'
						alt='Chef preparing Indian food'
						width={800}
						height={500}
						className='rounded-lg shadow-lg mx-auto'
						data-ai-hint='chef cooking indian'
					/>
				</div>
			</section>
			<section className='text-center'>
				<h2 className='text-4xl font-serif font-semibold text-primary mb-8'>
					Discover Our Signature Dishes
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<Card className='shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col'>
						<CardHeader className='p-0'>
							<Image
								src='https://placehold.co/600x400.png'
								alt='Special dish 1'
								width={600}
								height={400}
								className='rounded-t-lg object-cover'
								data-ai-hint='indian appetizer'
							/>
						</CardHeader>
						<CardContent className='p-6 flex-grow'>
							<CardTitle className='text-2xl font-serif text-primary mb-2'>
								Maharaja's Platter
							</CardTitle>
							<p className='text-muted-foreground'>
								A delightful start to your meal, featuring seasonal ingredients
								and a burst of authentic Indian flavors.
							</p>
						</CardContent>
					</Card>
					<Card className='shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col'>
						<CardHeader className='p-0'>
							<Image
								src='https://placehold.co/600x400.png'
								alt='Special dish 2'
								width={600}
								height={400}
								className='rounded-t-lg object-cover'
								data-ai-hint='indian main course'
							/>
						</CardHeader>
						<CardContent className='p-6 flex-grow'>
							<CardTitle className='text-2xl font-serif text-primary mb-2'>
								Shaan-e-Awadh Biryani
							</CardTitle>
							<p className='text-muted-foreground'>
								Our most beloved dish, a perfect harmony of rich flavors,
								aromatic spices, and exquisite presentation.
							</p>
						</CardContent>
					</Card>
					<Card className='shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col'>
						<CardHeader className='p-0'>
							<Image
								src='https://placehold.co/600x400.png'
								alt='Special dish 3'
								width={600}
								height={400}
								className='rounded-t-lg object-cover'
								data-ai-hint='indian dessert'
							/>
						</CardHeader>
						<CardContent className='p-6 flex-grow'>
							<CardTitle className='text-2xl font-serif text-primary mb-2'>
								Gulab Jamun with Rabri
							</CardTitle>
							<p className='text-muted-foreground'>
								A sweet ending that will leave you craving more, crafted with
								the finest traditional ingredients.
							</p>
						</CardContent>
					</Card>
				</div>
			</section>
			<section className='text-center'>
				<h2 className='text-4xl font-serif font-semibold text-primary mb-8'>
					What Our Customers Say
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<Card className='shadow-lg bg-card/80 p-6 pt-8 relative'>
						<Quote className='absolute top-4 left-4 h-8 w-8 text-accent opacity-50 transform -translate-x-1 -translate-y-1' />
						<CardDescription className='text-lg text-foreground mb-4 italic'>
							"The best Indian meal I've had delivered in ages! The flavors were
							incredible and everything arrived perfectly. Highly recommend the
							Butter Chicken!"
						</CardDescription>
						<CardContent className='p-0'>
							<p className='font-semibold text-primary'>- Alex P.</p>
							<div className='flex justify-center mt-2'>
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className='h-5 w-5 text-yellow-400 fill-yellow-400'
									/>
								))}
							</div>
						</CardContent>
					</Card>
					<Card className='shadow-lg bg-card/80 p-6 pt-8 relative'>
						<Quote className='absolute top-4 left-4 h-8 w-8 text-accent opacity-50 transform -translate-x-1 -translate-y-1' />
						<CardDescription className='text-lg text-foreground mb-4 italic'>
							"IKS has become our go-to for special occasions. The Lamb Rogan
							Josh is divine, and the Mango Lassi is out of this world.
							Consistent quality every time!"
						</CardDescription>
						<CardContent className='p-0'>
							<p className='font-semibold text-primary'>- Priya S.</p>
							<div className='flex justify-center mt-2'>
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className='h-5 w-5 text-yellow-400 fill-yellow-400'
									/>
								))}
							</div>
						</CardContent>
					</Card>
					<Card className='shadow-lg bg-card/80 p-6 pt-8 relative'>
						<Quote className='absolute top-4 left-4 h-8 w-8 text-accent opacity-50 transform -translate-x-1 -translate-y-1' />
						<CardDescription className='text-lg text-foreground mb-4 italic'>
							"Easy ordering, prompt delivery, and absolutely delicious food.
							The Chicken Tikka Masala was cooked to perfection. Will definitely
							be ordering again soon!"
						</CardDescription>
						<CardContent className='p-0'>
							<p className='font-semibold text-primary'>- David K.</p>
							<div className='flex justify-center mt-2'>
								{[...Array(4)].map((_, i) => (
									<Star
										key={i}
										className='h-5 w-5 text-yellow-400 fill-yellow-400'
									/>
								))}
								<Star className='h-5 w-5 text-yellow-400' />{' '}
							</div>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
