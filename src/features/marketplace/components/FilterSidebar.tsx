
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface FilterSidebarProps {
  category: string;
  setCategory: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
  language: any; // Using any for simplicity, could be typed more specifically
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  category, 
  setCategory, 
  sortOrder, 
  setSortOrder,
  language 
}) => {
  // Get translations based on language
  const t = language;

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">{t.category}</h3>
          <Select defaultValue={category} onValueChange={(value) => setCategory(value)}>
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
          <Select defaultValue={sortOrder} onValueChange={(value) => setSortOrder(value)}>
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
  );
};

export default FilterSidebar;
