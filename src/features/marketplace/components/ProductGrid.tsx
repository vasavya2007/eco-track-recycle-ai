
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Image } from "@/components/ui/image";
import { MarketplaceItem } from '../types';

interface ProductGridProps {
  items: MarketplaceItem[];
  onAddToCart: (item: MarketplaceItem) => void;
  onAddToWishlist: (item: MarketplaceItem) => void;
  t: any; // Translations
}

const ProductGrid: React.FC<ProductGridProps> = ({ items, onAddToCart, onAddToWishlist, t }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <div className="aspect-video relative overflow-hidden">
            <Image 
              src={item.image} 
              alt={item.title}
              aspectRatio="video"
              className="transition-transform duration-300 hover:scale-105"
            />
            <Badge className="absolute top-2 right-2 bg-eco-green text-white">
              {item.condition}
            </Badge>
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{item.title}</CardTitle>
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill={i < Math.floor(item.rating) ? "currentColor" : "none"} size={14} />
              ))}
              <span className="ml-1 text-xs text-muted-foreground">
                {item.rating} ({item.reviews} {t.reviews})
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{item.description}</p>
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">${item.price}</p>
              <span className="text-xs text-muted-foreground">{t.seller}: {item.seller.name}</span>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button 
              variant="default" 
              className="flex-1 bg-eco-green hover:bg-eco-green-dark"
              onClick={() => onAddToCart(item)}
            >
              <ShoppingCart size={16} className="mr-1" />
              {t.addToCart}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => onAddToWishlist(item)}
            >
              <Heart size={16} />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
