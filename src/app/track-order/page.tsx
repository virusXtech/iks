import TrackOrderForm from '@/components/TrackOrderForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Track Your Order',
  description: 'Check the status of your IKS Flavors order.',
};

export default function TrackOrderPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <TrackOrderForm />
    </div>
  );
}
