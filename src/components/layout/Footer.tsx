import { Mail, MapPin, Phone, Clock, ShoppingCart, Utensils, Info } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { fetchRestaurantDetails } from '@/lib/api'
import { Restaurant } from '@/lib/types'
import { RESTAURANT_NAME } from '@/lib/constants'

export default async function Footer() {
  let restaurantInfo: Restaurant | null = null
  let error: string | null = null

  try {
    restaurantInfo = await fetchRestaurantDetails()
  } catch (err) {
    if (err instanceof Error) {
      error = err.message
    } else {
      error = 'An unknown error occurred while fetching restaurant details.'
    }
    console.error('Failed to fetch restaurant details for Footer:', error)
  }

  if (error) {
    return (
      <footer className="bg-muted py-12 mt-16">
        <div className="container mx-auto px-4 text-center text-red-500">
          Error loading restaurant details: {error}
          <p className="mt-2 text-sm text-muted-foreground">Please try again later.</p>
        </div>
      </footer>
    )
  }

  // Render a fallback if restaurantInfo is still null (e.g., API returned no data but no error was thrown)
  if (!restaurantInfo) {
    return (
      <footer className="bg-muted py-12 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          No restaurant information available.
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-sm">
          <div className="space-y-4">
            <Link href="/" className="inline-block mb-2">
              <Image
                src="/logo.png"
                alt={`${restaurantInfo.name} Logo`}
                width={120}
                height={120}
                className="rounded-full"
                data-ai-hint="restaurant logo emblem"
              />
            </Link>
            <p className="text-muted-foreground">
              Crafting Culinary Tales with Every Bite! Experience authentic Indian culinary excellence.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/menu"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <Utensils className="h-4 w-4 mr-2 text-accent" /> Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ShoppingCart className="h-4 w-4 mr-2 text-accent" /> Your Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <Info className="h-4 w-4 mr-2 text-accent" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span>{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <a href={`tel:${restaurantInfo.phone}`} className="hover:text-primary transition-colors">
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <a href={`mailto:${restaurantInfo.email}`} className="hover:text-primary transition-colors break-all">
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-muted-foreground">
              {restaurantInfo.timings.map(timing => (
                <li className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                  <p className="text-sm text-muted-foreground" key={timing.id}>
                    {timing.label} : {timing.opening_time} - {timing.closing_time}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {restaurantInfo.name || RESTAURANT_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
