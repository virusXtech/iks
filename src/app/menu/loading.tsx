import { Skeleton } from '@/components/ui/skeleton'

export default function MenuLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-12 w-1/2 mx-auto mb-12" />
      {[1, 2, 3].map(catIndex => (
        <div key={catIndex} className="mb-1 border-b bg-transparent rounded-none">
          {/* Accordion Trigger Skeleton */}
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <Skeleton className="h-7 w-7 mr-3 rounded-full" />
              <Skeleton className="h-7 w-1/3" />
            </div>
            <Skeleton className="h-4 w-4" />
          </div>

          {/* Accordion Content Skeleton - showing one expanded for visual representation */}
          {catIndex === 1 && (
            <div className="px-2 sm:px-4 md:px-6 pb-6 pt-4 bg-background">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {[1, 2, 3, 4].map(itemIndex => (
                  <div key={itemIndex} className="flex flex-col space-y-3 p-4 border bg-card rounded-lg shadow-md">
                    <Skeleton className="aspect-[3/2] w-full rounded-md" />
                    <div className="space-y-2 pt-2 flex-grow">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-2/3" />
                    </div>
                    <div className="mt-auto space-y-2">
                      <Skeleton className="h-6 w-1/3" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
