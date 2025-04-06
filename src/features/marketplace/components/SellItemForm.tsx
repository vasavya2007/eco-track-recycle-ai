
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface SellItemFormProps {
  t: any; // Translations
}

const SellItemForm: React.FC<SellItemFormProps> = ({ t }) => {
  return (
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
  );
};

export default SellItemForm;
