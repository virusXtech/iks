import type { Menu, OrderPayload, OrderResponse } from './types';
import { API_BASE_URL } from './constants';

export async function fetchMenu(): Promise<Menu> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/menu/`);
	if (!response.ok) {
		throw new Error('Failed to fetch menu');
	}
	return response.json();
}

export async function placeOrder(
	orderData: OrderPayload,
): Promise<OrderResponse> {
	console.log('🚀 ~ orderData:', orderData);
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/order/`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(orderData),
		},
	);
	if (!response.ok) {
		const errorData = await response
			.json()
			.catch(() => ({ message: 'Failed to place order' }));
		throw new Error(errorData.message || 'Failed to place order');
	}
	return response.json();
}

export async function fetchOrder(orderId: string): Promise<OrderResponse> {
	console.log('🚀 ~ fetchOrder ~ orderId:', orderId);
	const response = await fetch(`${API_BASE_URL}/order/${orderId}`);
	if (!response.ok) {
		if (response.status === 404) {
			throw new Error('Order not found');
		}
		throw new Error('Failed to fetch order details');
	}
	return response.json();
}
