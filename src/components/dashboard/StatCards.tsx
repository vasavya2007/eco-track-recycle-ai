
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Leaf, 
  BarChart3, 
  Recycle, 
  Zap
} from 'lucide-react';

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total E-Waste Recycled</p>
              <p className="text-2xl font-bold mt-2">42.5 kg</p>
              <p className="text-xs text-eco-green flex items-center mt-1">
                <span className="inline-block mr-1">↑</span> 12% since last month
              </p>
            </div>
            <div className="bg-eco-soft p-3 rounded-full">
              <Recycle className="h-6 w-6 text-eco-green" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">CO₂ Emissions Reduced</p>
              <p className="text-2xl font-bold mt-2">128 kg</p>
              <p className="text-xs text-eco-green flex items-center mt-1">
                <span className="inline-block mr-1">↑</span> 18% since last month
              </p>
            </div>
            <div className="bg-eco-soft p-3 rounded-full">
              <Leaf className="h-6 w-6 text-eco-green" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Energy Saved</p>
              <p className="text-2xl font-bold mt-2">87 kWh</p>
              <p className="text-xs text-eco-green flex items-center mt-1">
                <span className="inline-block mr-1">↑</span> 8% since last month
              </p>
            </div>
            <div className="bg-eco-soft p-3 rounded-full">
              <Zap className="h-6 w-6 text-eco-green" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Eco Points Earned</p>
              <p className="text-2xl font-bold mt-2">320 pts</p>
              <p className="text-xs text-eco-green flex items-center mt-1">
                <span className="inline-block mr-1">↑</span> 15% since last month
              </p>
            </div>
            <div className="bg-eco-soft p-3 rounded-full">
              <BarChart3 className="h-6 w-6 text-eco-green" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatCards;
