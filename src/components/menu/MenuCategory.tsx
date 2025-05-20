import type { Icon, MenuItem } from '@/types';
import MenuItemCard from './MenuItemCard';
import * as LucideIcons from 'lucide-react';

export const CategoryIcon = ({ icon, css_class: cssClass }: Icon) => {
	const IconComponent = LucideIcons[icon];

	const iconProps = {
		className: cssClass ? cssClass : `h-8 w-8 mr-3 text-primary`,
	};

	return IconComponent ? <IconComponent {...iconProps} /> : <></>;
};

interface MenuCategoryDisplayProps {
	items: MenuItem[];
}

const MenuCategoryDisplay = ({ items }: MenuCategoryDisplayProps) => {
	if (items.length === 0) {
		return (
			<p className='text-muted-foreground pt-4'>
				No items in this category yet.
			</p>
		);
	}
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4'>
			{items.map((item) => (
				<MenuItemCard key={item.id} menuitem={item} />
			))}
		</div>
	);
};

export default MenuCategoryDisplay;
