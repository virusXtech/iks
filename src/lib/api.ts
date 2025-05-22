import type { Menu, OrderPayload, OrderResponse, Restaurant } from './types'
import { API_BASE_URL } from './constants'

export async function fetchMenu(): Promise<Menu> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/menu/`)
  if (!response.ok) {
    throw new Error('Failed to fetch menu')
  }
  return response.json()
}

export async function fetchRestaurantDetails(): Promise<Restaurant> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/restaurant/1`)
  if (!response.ok) {
    throw new Error('Failed to fetch restaurant')
  }
  return response.json()
}

export async function fetchOrder(orderId: string): Promise<OrderResponse> {
  const response = await fetch(`${API_BASE_URL}/order/${orderId}`)
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Order not found')
    }
    throw new Error('Failed to fetch order details')
  }
  return response.json()
}
