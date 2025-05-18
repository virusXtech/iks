export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  imageHint?: string; 
}

export interface CartItem extends MenuItem {
  quantity: number;
}
