import { RESTAURANT_NAME } from '@/lib/constants'
import { Mail, MapPin, Phone, Clock, ShoppingCart, Utensils, Info } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const emailAddress = `info@${RESTAURANT_NAME.toLowerCase().replace(/\s+/g, '')}.com`
  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-sm">
          {/* Column 1: Logo and Tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-block mb-2">
              <Image
                src="/logo.png"
                alt={`${RESTAURANT_NAME} Logo`}
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

          {/* Column 2: Quick Links */}
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

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span>Ulica Leszno 8/10, Warsaw, Woj. Mazowieckie 01-192</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <a href="tel:+15559876543" className="hover:text-primary transition-colors">
                  (555) 987-6543
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <a href={`mailto:${emailAddress}`} className="hover:text-primary transition-colors break-all">
                  {emailAddress}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <span>Mon - Fri: 12 PM - 10 PM</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <span>Sat - Sun: 11 AM - 11 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {RESTAURANT_NAME}. All rights reserved.
          </p>
          {/* Optional: Add links for Privacy Policy, Terms of Service if needed in the future */}
          {/*
          <p className="mt-1">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </p>
          */}
        </div>
      </div>
    </footer>
  )
}
