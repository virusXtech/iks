import type { MenuItem } from '@/types';
import MenuItemCard from './MenuItemCard';
import { Utensils, Coffee, Cake, Leaf } from 'lucide-react';

export const CategoryIcon = ({ categoryName }: { categoryName: string }) => {
  const iconProps = { className: "h-8 w-8 mr-3 text-primary" }; // Kept mr-3 for spacing next to title
  switch (categoryName.toLowerCase()) {
    case 'appetizers':
      return <Utensils {...iconProps} />;
    case 'main courses':
      return <Leaf {...iconProps} />; 
    case 'desserts':
      return <Cake {...iconProps} />;
    case 'drinks':
      return <Coffee {...iconProps} />;
    default:
      return <Utensils {...iconProps} />;
  }
};

interface MenuCategoryDisplayProps {
  items: MenuItem[];
}

const MenuCategoryDisplay = ({ items }: MenuCategoryDisplayProps) => {
  if (items.length === 0) {
    return <p className="text-muted-foreground pt-4">No items in this category yet.</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
      {items.map(item => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuCategoryDisplay;
