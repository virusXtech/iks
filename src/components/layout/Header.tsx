
"use client";

import Link from 'next/link';
import { Utensils, ShoppingBag, Mail } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <Utensils className="h-8 w-8" />
          <h1 className="text-3xl font-bold font-serif">IKS</h1>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <Link href="/menu" passHref>
            <Button variant="ghost" className="text-md sm:text-lg font-medium text-foreground hover:text-primary transition-colors px-2 sm:px-3">
              Menu
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant="ghost" className="text-md sm:text-lg font-medium text-foreground hover:text-primary transition-colors px-2 sm:px-3">
              <Mail className="h-5 w-5 md:mr-1 shrink-0" />
              <span className="hidden md:inline">Contact</span>
            </Button>
          </Link>
          <Link href="/cart" passHref>
            <Button variant="ghost" className="relative text-md sm:text-lg font-medium text-foreground hover:text-primary transition-colors px-2 sm:px-3">
              <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 md:mr-1 shrink-0" />
              <span className="hidden md:inline">Cart</span>
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
