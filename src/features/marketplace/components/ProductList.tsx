
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ShoppingCart, Heart, Star, ArrowUpDown } from 'lucide-react';
import { Image } from "@/components/ui/image";
import { MarketplaceItem } from '../types';

interface ProductListProps {
  items: MarketplaceItem[];
  onAddToCart: (item: MarketplaceItem) => void;
  onAddToWishlist: (item: MarketplaceItem) => void;
  onSortByPrice: () => void;
  t: any; // Translations
}

const ProductList: React.FC<ProductListProps> = ({ 
  items, 
  onAddToCart, 
  onAddToWishlist, 
  onSortByPrice,
  t 
}) => {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Price
                  <ArrowUpDown 
                    className="ml-2 h-3 w-3 cursor-pointer" 
                    onClick={onSortByPrice}
                  />
                </div>
              </TableHead>
              <TableHead>Seller</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-md overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} fill={i < Math.floor(item.rating) ? "currentColor" : "none"} size={10} />
                        ))}
                        <span className="ml-1 text-xs text-muted-foreground">
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={item.condition === 'New' ? 'default' : 'secondary'}>
                    {item.condition}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">${item.price}</TableCell>
                <TableCell>{item.seller.name}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="bg-eco-green hover:bg-eco-green-dark"
                      onClick={() => onAddToCart(item)}
                    >
                      <ShoppingCart size={14} className="mr-1" />
                      <span className="sr-only md:not-sr-only">Add</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onAddToWishlist(item)}
                    >
                      <Heart size={14} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ProductList;
