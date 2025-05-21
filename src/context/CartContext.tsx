'use client'

import type { CartItem, MenuItem } from '@/types'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: MenuItem) => void
  removeFromCart: (itemId: number) => void
  updateItemQuantity: (itemId: number, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getItemCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('iksCart')
      return savedCart ? JSON.parse(savedCart) : []
    }
    return []
  })
  const { toast } = useToast()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('iksCart', JSON.stringify(cartItems))
    }
  }, [cartItems])

  const addToCart = (menuitem: MenuItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === menuitem.id)
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === menuitem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prevItems, { ...menuitem, quantity: 1 }]
    })
    toast({
      title: 'Added to cart',
      description: `${menuitem.name} has been added to your cart.`,
    })
  }

  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(menuitem => menuitem.id !== itemId))
    toast({
      title: 'Item removed',
      description: `Item has been removed from your cart.`,
      variant: 'destructive',
    })
  }

  const updateItemQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
    } else {
      setCartItems(prevItems =>
        prevItems.map(menuitem => (menuitem.id === itemId ? { ...menuitem, quantity } : menuitem)),
      )
    }
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + +item.price * +item.quantity, 0)
  }

  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        clearCart,
        getCartTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
