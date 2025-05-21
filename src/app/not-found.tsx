import { Frown } from 'lucide-react'
import { AlertDescription, AlertTitle } from '@/components/ui/alert'
import { RESTAURANT_NAME } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center min-h-[70vh]">
      <div className="bg-red-100 border-l-4 border-red-500 text-green-700 p-6 rounded-md shadow-md mb-8 max-w-3xl mx-auto text-center">
        <Frown className="h-8 w-8 text-red-500 mx-auto mb-3" />
        <AlertTitle className="text-4xl font-extrabold mb-4">404 - Page Not Found</AlertTitle>
        <AlertDescription className="text-lg text-muted-foreground mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t seem to exist. It might have been moved or deleted.
        </AlertDescription>
      </div>

      <p className="mt-12 text-sm text-muted-foreground">
        If you believe this is an error, please contact support or try navigating from the {RESTAURANT_NAME} homepage.
      </p>
    </div>
  )
}
