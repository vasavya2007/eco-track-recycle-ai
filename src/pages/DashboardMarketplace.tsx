
import React, { useState } from 'react';
import { Layout } from "@/components/layout/Layout";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import marketplace components
import FilterSidebar from '@/features/marketplace/components/FilterSidebar';
import ProductGrid from '@/features/marketplace/components/ProductGrid';
import ProductList from '@/features/marketplace/components/ProductList';
import SellItemForm from '@/features/marketplace/components/SellItemForm';
import OrdersList from '@/features/marketplace/components/OrdersList';
import SearchBar from '@/features/marketplace/components/SearchBar';
import ViewToggle from '@/features/marketplace/components/ViewToggle';

// Import marketplace data and types
import { marketplaceItems, orderItems } from '@/features/marketplace/data/marketplaceData';
import { MarketplaceItem } from '@/features/marketplace/types';
import { translations } from '@/features/marketplace/translations';

const DashboardMarketplace = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOrder, setSortOrder] = useState('newest');

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

  const handleAddToCart = (item: MarketplaceItem) => {
    toast({
      title: "Added to Cart",
      description: `${item.title} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = (item: MarketplaceItem) => {
    toast({
      title: "Added to Wishlist",
      description: `${item.title} has been added to your wishlist.`,
    });
  };

  const handleSortByPrice = () => {
    setSortOrder(sortOrder === 'priceAsc' ? 'priceDesc' : 'priceAsc');
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
                  <FilterSidebar 
                    category={category}
                    setCategory={setCategory}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                    language={t}
                  />
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <SearchBar 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        placeholder={t.search}
                      />
                      
                      <ViewToggle 
                        viewMode={viewMode}
                        setViewMode={setViewMode}
                        gridLabel={t.grid}
                        listLabel={t.list}
                        viewAsLabel={t.viewAs}
                      />
                    </div>
                    
                    {viewMode === 'grid' ? (
                      <ProductGrid 
                        items={sortedItems}
                        onAddToCart={handleAddToCart}
                        onAddToWishlist={handleAddToWishlist}
                        t={t}
                      />
                    ) : (
                      <ProductList 
                        items={sortedItems}
                        onAddToCart={handleAddToCart}
                        onAddToWishlist={handleAddToWishlist}
                        onSortByPrice={handleSortByPrice}
                        t={t}
                      />
                    )}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="sell">
                <SellItemForm t={t} />
              </TabsContent>
              
              <TabsContent value="orders">
                <OrdersList orders={orderItems} t={t} />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default DashboardMarketplace;
