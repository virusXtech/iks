
import { menuData, getMenuCategories } from '@/lib/mock-data';
import type { MenuItem } from '@/types';
import MenuCategoryDisplay, { CategoryIcon } from '@/components/menu/MenuCategory';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function MenuPage() {
  const categories = getMenuCategories();
  
  const itemsByCategory: Record<string, MenuItem[]> = categories.reduce((acc, category) => {
    acc[category] = menuData.filter(item => item.category === category);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Our Exquisite Menu</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover a symphony of flavors, crafted with the freshest ingredients and culinary passion.
        </p>
      </div>

      <Accordion type="multiple" className="w-full space-y-4" >
        {categories.map(categoryName => (
          <AccordionItem 
            value={categoryName} 
            key={categoryName} 
            className="border rounded-lg shadow-sm bg-card overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline text-left w-full">
              <div className="flex items-center">
                <CategoryIcon categoryName={categoryName} />
                <span className="text-2xl font-serif font-semibold text-primary">
                  {categoryName}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <MenuCategoryDisplay items={itemsByCategory[categoryName]} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
