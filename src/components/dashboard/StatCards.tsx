
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CarFront, Recycle, Leaf } from 'lucide-react';

interface RewardsData {
  points?: number;
  redeemed_points?: number;
  level?: string;
}

interface StatCardsProps {
  rewards: RewardsData | null;
}

const StatCards = ({ rewards }: StatCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg">Total Pickups</CardTitle>
            <CarFront className="text-eco-blue w-6 h-6" />
          </div>
          <CardDescription>Waste collections to date</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">8</div>
          <p className="text-sm text-muted-foreground">+2 scheduled</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg">E-Waste Recycled</CardTitle>
            <Recycle className="text-eco-green w-6 h-6" />
          </div>
          <CardDescription>Total impact to date</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">45<span className="text-xl">kg</span></div>
          <p className="text-sm text-muted-foreground">Equivalent to 156 phones</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg">Eco Points</CardTitle>
            <Leaf className="text-amber-600 w-6 h-6" />
          </div>
          <CardDescription>Reward points earned</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{rewards?.points || 0}</div>
          <p className="text-sm text-muted-foreground">Level: {rewards?.level || 'Beginner'}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatCards;
