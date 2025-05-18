
"use client";

import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Utensils, Clock } from 'lucide-react'; // Changed Package to Utensils/Clock

export default function ConfirmationPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const orderId = params.orderId as string;
  const name = searchParams.get('name');
  const serviceType = searchParams.get('serviceType');
  const tableNumber = searchParams.get('tableNumber');

  let serviceMessage = "We've received your order and will start preparing it shortly.";
  if (serviceType === 'table' && tableNumber) {
    serviceMessage = `Your order for table ${tableNumber} is confirmed! We'll bring it to you soon.`;
  } else if (serviceType === 'self-service') {
    serviceMessage = `Your order is confirmed! Please listen for your name, ${name}, or order ID for pickup.`;
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12">
      <Card className="w-full max-w-lg text-center shadow-xl p-8">
        <CardHeader>
          <CheckCircle className="mx-auto h-20 w-20 text-green-500 mb-6" />
          <CardTitle className="text-4xl font-serif text-primary">Order Confirmed!</CardTitle>
          <CardDescription className="text-lg text-muted-foreground pt-2">
            Thank you {name ? `, ${name},` : ''} for your order!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-md text-foreground">
            Your Order ID is: <strong className="text-accent">{orderId}</strong>
          </p>
          <p className="text-md text-foreground">
            {serviceMessage}
          </p>
          {serviceType === 'self-service' && (
            <div className="flex items-center justify-center text-sm text-muted-foreground p-3 bg-muted/50 rounded-md">
              <Clock className="mr-2 h-5 w-5 text-accent" />
              <span>Estimated preparation time: 15-20 minutes.</span>
            </div>
          )}
           {serviceType === 'table' && tableNumber && (
            <div className="flex items-center justify-center text-sm text-muted-foreground p-3 bg-muted/50 rounded-md">
              <Utensils className="mr-2 h-5 w-5 text-accent" />
              <span>Your food will be brought to table <strong className="text-primary">{tableNumber}</strong>.</span>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/menu" passHref>
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                <Utensils className="mr-2 h-5 w-5" />
                Back to Menu
              </Button>
            </Link>
            {/* <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Package className="mr-2 h-5 w-5" />
              Track Order (Simulated)
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
