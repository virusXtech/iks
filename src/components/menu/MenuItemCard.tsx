"use client";

import Image from "next/legacy/image";
import type { MenuItem } from '@/types';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image 
            src={item.imageUrl} 
            alt={item.name} 
            layout="fill" 
            objectFit="cover" 
            data-ai-hint={item.imageHint || 'food item'}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-serif mb-1 text-primary">{item.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-2 h-20 overflow-y-auto">{item.description}</CardDescription>
        <p className="text-lg font-semibold text-accent">€{item.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={() => addToCart(item)} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <PlusCircle className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItemCard;
