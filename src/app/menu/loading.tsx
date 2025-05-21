import { Skeleton } from '@/components/ui/skeleton'

export default function MenuLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-12 w-1/2 mx-auto mb-12" />
      {[1, 2, 3].map(catIndex => (
        <div key={catIndex} className="mb-12">
          <div className="flex items-center mb-6">
            <Skeleton className="h-8 w-8 mr-3 rounded-full" />
            <Skeleton className="h-8 w-1/4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(itemIndex => (
              <div key={itemIndex} className="flex flex-col space-y-3">
                <Skeleton className="h-[200px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-8 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
