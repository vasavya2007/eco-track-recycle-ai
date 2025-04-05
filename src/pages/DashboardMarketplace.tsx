
import React, { useState } from 'react';
import { Layout } from "@/components/layout/Layout";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ShoppingCart, Heart, Star, Grid3X3, List, ArrowUpDown } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Image } from "@/components/ui/image";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Sample marketplace items
const marketplaceItems = [
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
const orderItems = [
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

const DashboardMarketplace = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOrder, setSortOrder] = useState('newest');

  const translations = {
    en: {
      title: "Marketplace",
      search: "Search products...",
      category: "Category",
      categories: {
        all: "All Categories",
        computers: "Computers & Laptops",
        tablets: "Tablets",
        phones: "Phones",
        accessories: "Accessories",
        audio: "Audio",
        wearables: "Wearables"
      },
      tabs: {
        products: "Products",
        sellItems: "Sell Items",
        myOrders: "My Orders"
      },
      sort: "Sort by",
      sortOptions: {
        newest: "Newest",
        priceAsc: "Price: Low to High",
        priceDesc: "Price: High to Low",
        popular: "Most Popular"
      },
      condition: "Condition",
      rating: "Rating",
      reviews: "reviews",
      addToCart: "Add to Cart",
      addToWishlist: "Add to Wishlist",
      sellItemsMessage: "Have electronics you no longer need? List them on our marketplace!",
      viewAs: "View as",
      grid: "Grid",
      list: "List",
      seller: "Seller",
      price: "Price",
      product: "Product",
      status: "Status",
      date: "Date",
      orderID: "Order ID",
      noOrders: "You don't have any orders yet.",
      browseProducts: "Browse Products",
      itemName: "Item Name",
      description: "Description",
      uploadImages: "Upload Images",
      dragDrop: "Drag and drop images here or click to browse",
      listForSale: "List Item for Sale"
    },
    es: {
      title: "Mercado",
      search: "Buscar productos...",
      category: "Categoría",
      categories: {
        all: "Todas las Categorías",
        computers: "Computadoras & Portátiles",
        tablets: "Tabletas",
        phones: "Teléfonos",
        accessories: "Accesorios",
        audio: "Audio",
        wearables: "Dispositivos Vestibles"
      },
      tabs: {
        products: "Productos",
        sellItems: "Vender Artículos",
        myOrders: "Mis Pedidos"
      },
      sort: "Ordenar por",
      sortOptions: {
        newest: "Más nuevos",
        priceAsc: "Precio: De menor a mayor",
        priceDesc: "Precio: De mayor a menor",
        popular: "Más Populares"
      },
      condition: "Condición",
      rating: "Puntuación",
      reviews: "reseñas",
      addToCart: "Añadir al Carrito",
      addToWishlist: "Añadir a Favoritos",
      sellItemsMessage: "¿Tienes electrónicos que ya no necesitas? ¡Véndelos en nuestro mercado!",
      viewAs: "Ver como",
      grid: "Cuadrícula",
      list: "Lista",
      seller: "Vendedor",
      price: "Precio",
      product: "Producto",
      status: "Estado",
      date: "Fecha",
      orderID: "ID de Pedido",
      noOrders: "No tienes ningún pedido todavía.",
      browseProducts: "Explorar Productos",
      itemName: "Nombre del Artículo",
      description: "Descripción",
      uploadImages: "Subir Imágenes",
      dragDrop: "Arrastra y suelta imágenes aquí o haz clic para explorar",
      listForSale: "Poner en Venta"
    }
  };
  
  // Default to English if the language is not supported
  const t = translations[language.code as keyof typeof translations] || translations.en;

  const filteredItems = marketplaceItems.filter(item => {
    // Filter by search term
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = category === 'all' || item.category === category;
    
    return matchesSearch && matchesCategory;
  });

  // Sort items based on selected sort order
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortOrder) {
      case 'priceAsc':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      case 'popular':
        return b.rating - a.rating;
      default: // newest
        return b.id - a.id;
    }
  });

  const handleAddToCart = (item: any) => {
    toast({
      title: "Added to Cart",
      description: `${item.title} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = (item: any) => {
    toast({
      title: "Added to Wishlist",
      description: `${item.title} has been added to your wishlist.`,
    });
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  return (
    <Layout>
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 bg-background">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{t.title}</h1>
          </div>

          <div className="mb-6">
            <Tabs defaultValue="products">
              <TabsList className="mb-4">
                <TabsTrigger value="products">{t.tabs.products}</TabsTrigger>
                <TabsTrigger value="sell">{t.tabs.sellItems}</TabsTrigger>
                <TabsTrigger value="orders">{t.tabs.myOrders}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="products">
                <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
                  <Card className="h-fit">
                    <CardHeader>
                      <CardTitle className="text-lg">Filters</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium mb-2">{t.category}</h3>
                        <Select defaultValue="all" onValueChange={(value) => setCategory(value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t.categories.all} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">{t.categories.all}</SelectItem>
                            <SelectItem value="computers">{t.categories.computers}</SelectItem>
                            <SelectItem value="tablets">{t.categories.tablets}</SelectItem>
                            <SelectItem value="phones">{t.categories.phones}</SelectItem>
                            <SelectItem value="accessories">{t.categories.accessories}</SelectItem>
                            <SelectItem value="audio">{t.categories.audio}</SelectItem>
                            <SelectItem value="wearables">{t.categories.wearables}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-2">{t.sort}</h3>
                        <Select defaultValue="newest" onValueChange={(value) => setSortOrder(value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t.sortOptions.newest} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="newest">{t.sortOptions.newest}</SelectItem>
                            <SelectItem value="priceAsc">{t.sortOptions.priceAsc}</SelectItem>
                            <SelectItem value="priceDesc">{t.sortOptions.priceDesc}</SelectItem>
                            <SelectItem value="popular">{t.sortOptions.popular}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-2">{t.condition}</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input type="checkbox" id="new" className="mr-2" />
                            <Label htmlFor="new">New</Label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="refurbished" className="mr-2" />
                            <Label htmlFor="refurbished">Refurbished</Label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="used" className="mr-2" />
                            <Label htmlFor="used">Used</Label>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="relative w-full max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input
                          placeholder={t.search}
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground hidden md:inline">{t.viewAs}:</span>
                        <Button
                          variant={viewMode === 'grid' ? 'secondary' : 'outline'}
                          size="sm"
                          className="px-2"
                          onClick={() => setViewMode('grid')}
                        >
                          <Grid3X3 className="h-4 w-4" />
                          <span className="sr-only md:not-sr-only md:ml-2">{t.grid}</span>
                        </Button>
                        <Button
                          variant={viewMode === 'list' ? 'secondary' : 'outline'}
                          size="sm"
                          className="px-2"
                          onClick={() => setViewMode('list')}
                        >
                          <List className="h-4 w-4" />
                          <span className="sr-only md:not-sr-only md:ml-2">{t.list}</span>
                        </Button>
                      </div>
                    </div>
                    
                    {viewMode === 'grid' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedItems.map((item) => (
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
                                onClick={() => handleAddToCart(item)}
                              >
                                <ShoppingCart size={16} className="mr-1" />
                                {t.addToCart}
                              </Button>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleAddToWishlist(item)}
                              >
                                <Heart size={16} />
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    ) : (
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
                                      onClick={() => setSortOrder(sortOrder === 'priceAsc' ? 'priceDesc' : 'priceAsc')}
                                    />
                                  </div>
                                </TableHead>
                                <TableHead>Seller</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {sortedItems.map(item => (
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
                                        onClick={() => handleAddToCart(item)}
                                      >
                                        <ShoppingCart size={14} className="mr-1" />
                                        <span className="sr-only md:not-sr-only">Add</span>
                                      </Button>
                                      <Button 
                                        variant="outline" 
                                        size="sm"
                                        onClick={() => handleAddToWishlist(item)}
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
                    )}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="sell">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.tabs.sellItems}</CardTitle>
                    <CardDescription>{t.sellItemsMessage}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="itemName" className="text-sm font-medium">{t.itemName}</Label>
                          <Input id="itemName" placeholder="Enter item name" />
                        </div>
                        <div>
                          <Label htmlFor="itemCategory" className="text-sm font-medium">{t.category}</Label>
                          <Select>
                            <SelectTrigger id="itemCategory">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="computers">{t.categories.computers}</SelectItem>
                              <SelectItem value="tablets">{t.categories.tablets}</SelectItem>
                              <SelectItem value="phones">{t.categories.phones}</SelectItem>
                              <SelectItem value="accessories">{t.categories.accessories}</SelectItem>
                              <SelectItem value="audio">{t.categories.audio}</SelectItem>
                              <SelectItem value="wearables">{t.categories.wearables}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="itemCondition" className="text-sm font-medium">{t.condition}</Label>
                          <Select>
                            <SelectTrigger id="itemCondition">
                              <SelectValue placeholder="Select condition" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="like-new">Like New</SelectItem>
                              <SelectItem value="good">Good</SelectItem>
                              <SelectItem value="fair">Fair</SelectItem>
                              <SelectItem value="poor">Poor</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="itemPrice" className="text-sm font-medium">{t.price} ($)</Label>
                          <Input id="itemPrice" type="number" placeholder="0.00" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="itemDescription" className="text-sm font-medium">{t.description}</Label>
                        <textarea 
                          id="itemDescription"
                          className="w-full border rounded-md p-2 min-h-[100px]"
                          placeholder="Describe your item in detail..."
                        ></textarea>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">{t.uploadImages}</Label>
                        <div className="border-2 border-dashed rounded-md p-6 text-center mt-2">
                          <p className="text-muted-foreground">{t.dragDrop}</p>
                          <input type="file" className="hidden" multiple accept="image/*" />
                          <Button variant="outline" className="mt-2">Upload Images</Button>
                        </div>
                      </div>
                      <Button className="bg-eco-green hover:bg-eco-green-dark">{t.listForSale}</Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.tabs.myOrders}</CardTitle>
                    <CardDescription>Track your purchases and sales</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {orderItems.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>{t.orderID}</TableHead>
                            <TableHead>{t.date}</TableHead>
                            <TableHead>{t.product}</TableHead>
                            <TableHead>{t.price}</TableHead>
                            <TableHead>{t.seller}</TableHead>
                            <TableHead>{t.status}</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {orderItems.map(order => (
                            <TableRow key={order.id}>
                              <TableCell className="font-medium">{order.id}</TableCell>
                              <TableCell>{order.date}</TableCell>
                              <TableCell>{order.product}</TableCell>
                              <TableCell>${order.price}</TableCell>
                              <TableCell>{order.seller}</TableCell>
                              <TableCell>
                                <Badge 
                                  variant={order.status === "Delivered" ? "default" : "secondary"}
                                  className={order.status === "Delivered" ? "bg-eco-green" : ""}
                                >
                                  {order.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="text-center py-10">
                        <p className="text-muted-foreground">{t.noOrders}</p>
                        <Button variant="outline" className="mt-4">{t.browseProducts}</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default DashboardMarketplace;
