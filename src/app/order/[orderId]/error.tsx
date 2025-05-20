'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Terminal } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function OrderErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className='container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[60vh]'>
			<Alert variant='destructive' className='max-w-lg text-center'>
				<Terminal className='h-5 w-5 mx-auto mb-2' />
				<AlertTitle className='text-2xl mb-2'>
					Order Retrieval Failed!
				</AlertTitle>
				<AlertDescription className='mb-4'>
					We couldn't fetch the details for this order. It might be an invalid
					ID or a temporary issue.
				</AlertDescription>
				<AlertDescription className='text-xs text-muted-foreground mb-4'>
					Error details: {error.message}
				</AlertDescription>
				<div className='flex gap-2 justify-center'>
					<Button
						onClick={() => reset()}
						variant='destructive'
						className='bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90'
					>
						Try again
					</Button>
					<Button asChild variant='outline'>
						<Link href='/track-order'>Track Different Order</Link>
					</Button>
				</div>
			</Alert>
		</div>
	);
}
