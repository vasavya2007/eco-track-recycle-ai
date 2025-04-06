
export interface Seller {
  name: string;
  rating: number;
  sales: number;
}

export interface MarketplaceItem {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  condition: string;
  seller: Seller;
}

export interface OrderItem {
  id: string;
  date: string;
  product: string;
  price: number;
  status: string;
  seller: string;
}
