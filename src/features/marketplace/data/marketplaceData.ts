
import { MarketplaceItem, OrderItem } from '../types';

// Sample marketplace items
export const marketplaceItems: MarketplaceItem[] = [
  {
    id: 1,
    title: 'Refurbished Laptop',
    description: 'Dell XPS 13, Core i5, 8GB RAM, 256GB SSD, professionally refurbished',
    price: 499,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=1470&q=80',
    category: 'computers',
    rating: 4.7,
    reviews: 28,
    condition: 'Refurbished',
    seller: {
      name: 'Tech Renewal',
      rating: 4.8,
      sales: 142
    }
  },
  {
    id: 2,
    title: 'Recycled Phone Case',
    description: 'iPhone 13 case made from 100% ocean plastic waste, eco-friendly and durable',
    price: 29,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1633984726552-3a4b42e1661e?auto=format&fit=crop&w=1470&q=80',
    category: 'accessories',
    rating: 4.5,
    reviews: 42,
    condition: 'New',
    seller: {
      name: 'Ocean Plastics Co',
      rating: 4.9,
      sales: 278
    }
  },
  {
    id: 3,
    title: 'Upcycled Tablet',
    description: 'iPad Air, 64GB, Wi-Fi, restored to factory settings with new screen and battery',
    price: 299,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1470&q=80',
    category: 'tablets',
    rating: 4.3,
    reviews: 15,
    condition: 'Refurbished',
    seller: {
      name: 'GreenTech Refurb',
      rating: 4.6,
      sales: 95
    }
  },
  {
    id: 4,
    title: 'Solar Power Bank',
    description: '20000mAh dual USB ports, made from recycled materials with solar charging capability',
    price: 49,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1472&q=80',
    category: 'accessories',
    rating: 4.8,
    reviews: 67,
    condition: 'New',
    seller: {
      name: 'SolarPower Solutions',
      rating: 4.7,
      sales: 203
    }
  },
  {
    id: 5,
    title: 'Refurbished Wireless Earbuds',
    description: 'Professionally cleaned and restored wireless earbuds with charging case',
    price: 79,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?auto=format&fit=crop&w=1470&q=80',
    category: 'audio',
    rating: 4.2,
    reviews: 31,
    condition: 'Refurbished',
    seller: {
      name: 'AudioRevive',
      rating: 4.4,
      sales: 57
    }
  },
  {
    id: 6,
    title: 'Smart Watch (Refurbished)',
    description: 'Fitness tracker with heart rate monitoring, notifications, professionally restored',
    price: 129,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1617625802912-cde586faf331?auto=format&fit=crop&w=1472&q=80',
    category: 'wearables',
    rating: 4.6,
    reviews: 23,
    condition: 'Refurbished',
    seller: {
      name: 'SmartGear Renew',
      rating: 4.5,
      sales: 89
    }
  },
];

// Sample marketplace orders
export const orderItems: OrderItem[] = [
  {
    id: "ORD-001",
    date: "2025-03-28",
    product: "Refurbished Laptop",
    price: 499,
    status: "Delivered",
    seller: "Tech Renewal"
  },
  {
    id: "ORD-002",
    date: "2025-04-01",
    product: "Recycled Phone Case",
    price: 29,
    status: "Processing",
    seller: "Ocean Plastics Co"
  }
];
