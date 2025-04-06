
export interface Seller {
  name: string;
  rating: number;
  sales: number;
  id: string;
  joinDate?: string;
  avatarUrl?: string;
  location?: string;
  description?: string;
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
  createdAt?: string;
  features?: string[];
  stock?: number;
  discountPercentage?: number;
  originalPrice?: number;
  shipping?: {
    free: boolean;
    cost?: number;
    estimatedDelivery?: string;
  };
}

export interface OrderItem {
  id: string;
  date: string;
  product: string;
  price: number;
  status: string;
  seller: string;
  quantity?: number;
  trackingNumber?: string;
  shippingAddress?: string;
  paymentMethod?: string;
  imageUrl?: string;
}

export interface FilterOptions {
  category: string;
  sortOrder: string;
  priceRange?: [number, number];
  condition?: string[];
  rating?: number;
}

export interface MarketplaceTranslations {
  title: string;
  search: string;
  grid: string;
  list: string;
  viewAs: string;
  tabs: {
    products: string;
    sellItems: string;
    myOrders: string;
  };
  filters: {
    title: string;
    categories: string;
    all: string;
    electronics: string;
    furniture: string;
    clothing: string;
    books: string;
    other: string;
    sort: string;
    newest: string;
    priceAsc: string;
    priceDesc: string;
    popular: string;
  };
  product: {
    addToCart: string;
    addToWishlist: string;
    viewDetails: string;
    condition: string;
    seller: string;
    price: string;
    rating: string;
    reviews: string;
    sold: string;
    details: string;
    description: string;
    similar: string;
  };
  orders: {
    title: string;
    date: string;
    product: string;
    price: string;
    status: string;
    seller: string;
    actions: string;
    viewDetails: string;
    trackOrder: string;
    reorder: string;
    noOrders: string;
  };
  sell: {
    title: string;
    description: string;
    category: string;
    condition: string;
    price: string;
    currency: string;
    image: string;
    listItem: string;
    preview: string;
    error: {
      title: string;
      description: string;
      price: string;
      image: string;
    };
    success: string;
  };
}
