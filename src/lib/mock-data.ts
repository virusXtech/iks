import type { MenuItem } from '@/types';

export const menuData: MenuItem[] = [
  { 
    id: '1', 
    name: 'Bruschetta Classica', 
    description: 'Toasted artisan bread topped with fresh tomatoes, garlic, basil, and a drizzle of extra virgin olive oil.', 
    price: 10.50, 
    category: 'Appetizers', 
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'bruschetta tomato' 
  },
  { 
    id: '2', 
    name: 'Caprese Skewers', 
    description: 'Cherry tomatoes, fresh mozzarella balls, and basil leaves drizzled with balsamic glaze.', 
    price: 12.00, 
    category: 'Appetizers', 
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'caprese skewers'
  },
  { 
    id: '3', 
    name: 'Wild Mushroom Risotto', 
    description: 'Creamy Arborio rice cooked with a medley of wild mushrooms, Parmesan cheese, and white truffle oil.', 
    price: 22.00, 
    category: 'Main Courses', 
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mushroom risotto'
  },
  { 
    id: '4', 
    name: 'Pan-Seared Salmon', 
    description: 'Crispy skin salmon fillet served with asparagus, lemon-butter sauce, and roasted baby potatoes.', 
    price: 26.50, 
    category: 'Main Courses', 
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'salmon asparagus'
  },
  { 
    id: '5', 
    name: 'Classic Tiramisu', 
    description: 'Layers of coffee-soaked ladyfingers and rich mascarpone cream, dusted with cocoa powder.', 
    price: 9.50, 
    category: 'Desserts', 
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'tiramisu slice'
  },
  { 
    id: '6', 
    name: 'Lava Chocolate Cake', 
    description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream and raspberry coulis.', 
    price: 11.00, 
    category: 'Desserts', 
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'chocolate lava'
  },
  { 
    id: '7', 
    name: 'Artisanal Cheese Platter', 
    description: 'A selection of fine cheeses, fruit, nuts, and crackers.', 
    price: 18.00, 
    category: 'Appetizers', 
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cheese platter'
  },
  { 
    id: '8', 
    name: 'Filet Mignon', 
    description: '8oz center-cut filet mignon, grilled to perfection, served with potato gratin and a red wine reduction.', 
    price: 35.00, 
    category: 'Main Courses', 
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'filet mignon'
  },
  {
    id: '9',
    name: 'Sparkling Elderflower Presse',
    description: 'Refreshing sparkling water infused with elderflower and a hint of lemon.',
    price: 6.00,
    category: 'Drinks',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sparkling drink'
  },
  {
    id: '10',
    name: 'Freshly Squeezed Orange Juice',
    description: 'Pure, natural orange juice, squeezed daily.',
    price: 5.50,
    category: 'Drinks',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'orange juice'
  }
];

export const getMenuCategories = () => {
  const categories = new Set(menuData.map(item => item.category));
  return Array.from(categories);
};
