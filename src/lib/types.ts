export type Icon =
  | 'Utensils'
  | 'Soup'
  | 'UtensilsCrossed'
  | 'Cookie'
  | 'Wheat'
  | 'CakeSlice'
  | 'CupSoda'
  | 'Beer'
  | 'Wine'
  | 'Shell'
  | 'Drumstick'
  | 'Salad'
  | 'Pizza'
  | 'Sandwich'
  | 'Coffee'

export type MenuItem = {
  id: number
  name: string
  description: string
  price: string
  on_offer: boolean
  offer_price: string
  is_bestseller: boolean
  image: string | null
  category: number
  available: boolean
}

export type Category = {
  id: number
  name: string
  icon: Icon
  items: MenuItem[]
}

export type Menu = Category[]

export interface CartItem extends MenuItem {
  quantity: number
}

export type OrderItemPayload = {
  menu_item_id: number
  quantity: number
  price_at_order: string
}

export type OrderPayload = {
  customer_name: string
  customer_phone: string
  service_type: 'self' | string
  table?: string | null
  instructions?: string
  items: OrderItemPayload[]
}

export type OrderItem = {
  id: number
  menu_item: number
  menu_item_name: string
  quantity: number
  price_at_order: string
}

export type OrderResponse = {
  id: string
  customer_name: string
  customer_phone: string
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled' | string
  service_type: 'self' | 'delivery' | 'pickup' | string
  table: number | null
  instructions: string
  created_at: string
  items: OrderItem[]
  total_amount: string
}

export interface Timings {
  id: number
  label: string
  opening_time: string
  closing_time: string
}

export interface Restaurant {
  id: number
  name: string
  address: string
  phone: string
  email: string
  latitude: string | null
  longitude: string | null
  is_active: boolean
  timings: Timings[]
  google_map_plus_code?: string | null
}
