import MenuCategoryDisplay, { CategoryIcon } from '@/components/menu/MenuCategory'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal } from 'lucide-react'
import { Menu } from '@/lib/types'
import { fetchMenu } from '@/lib/api'
import { Metadata } from 'next'
import { RESTAURANT_NAME, RESTAURANT_SUBTITLE } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Menu | ${RESTAURANT_NAME} - ${RESTAURANT_SUBTITLE}`,
}

export default async function MenuPage() {
  let menu: Menu | null
  let error: string | null = null

  try {
    menu = await fetchMenu()
    console.log('🚀 ~ MenuPage ~ menu:', JSON.stringify(menu))
  } catch (e) {
    error = e instanceof Error ? e.message : 'An unknown error occurred while fetching the menu.'
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error Fetching Menu</AlertTitle>
          <AlertDescription>
            We couldn&apos;t load our menu at this time. Please try again later. Details: {error}
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  // @ts-ignore
  if (!menu || menu.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Menu Not Available</AlertTitle>
          <AlertDescription>Our menu is currently empty or not available. Please check back soon!</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Our Exquisite Menu</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover a symphony of flavors, crafted with the freshest ingredients and culinary passion.
        </p>
      </div>

      <Accordion type="multiple" className="w-full space-y-4">
        {menu.map(category => (
          <AccordionItem
            value={category.name}
            key={category.id}
            className="border rounded-lg shadow-sm bg-card overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline text-left w-full">
              <div className="flex items-center">
                <CategoryIcon icon={category.icon} />
                <span className="text-2xl font-serif font-semibold text-primary">{category.name}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <MenuCategoryDisplay items={category.items} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
