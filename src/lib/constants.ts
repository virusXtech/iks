import { Restaurant } from './types'

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api'

export const RESTAURANT_NAME = 'IKS'
export const RESTAURANT_SUBTITLE = 'Indian Kitchen & Spices'

export const RESTAURANT_INFO: Restaurant = {
  address: 'Leszno 8/10, 01-192 Warszawa, Poland',
  email: 'info@iksflavors.com',
  phone: '+48579123215',
  mapURI:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2443.2510023941627!2d20.9824931!3d52.2388244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd9ef667d9d5%3A0xda8051403bd6f2b!2sIndian%20Kitchen%20%26%20Spices%20(%20IKS)!5e0!3m2!1sen!2sin!4v1747942234744!5m2!1sen!2sin',
  timings: [
    { id: 1, label: 'Friday', opening_time: '10:00', closing_time: '02:00' },
    { id: 2, label: 'Saturday', opening_time: '10:00', closing_time: '02:00' },
    { id: 3, label: 'Sunday', opening_time: '10:00', closing_time: '02:00' },
    { id: 4, label: 'Monday', opening_time: '10:00', closing_time: '00:00' },
    { id: 5, label: 'Tuesday', opening_time: '10:00', closing_time: '00:00' },
    { id: 6, label: 'Wednesday', opening_time: '10:00', closing_time: '02:00' },
    { id: 7, label: 'Thursday', opening_time: '10:00', closing_time: '02:00' },
  ],
}
