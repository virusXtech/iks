'use client'

import {useEffect, useState} from 'react';
import MenuCategoryDisplay, { CategoryIcon } from '@/components/menu/MenuCategory'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal } from 'lucide-react'
import { Menu } from '@/lib/types'
import { fetchMenu } from '@/lib/api'

export default async function MenuPage() {
  const [menu, setMenu] = useState<Menu | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    setMenu(null)
    setError(null)
    (async() => {
      try {
        const response = await fetchMenu()
        setMenu(response)
      } catch (e) {
        const errMsg = e instanceof Error ? e.message : 'An unknown error occurred while fetching the menu.'
        setError(errMsg)
      } finally {
        setIsLoading(false)
      }
    })()
  })

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

  // @ts-expect-error menu will always be defined
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
