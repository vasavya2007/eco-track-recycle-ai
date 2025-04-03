
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const coupons = [
  {
    id: 1,
    merchant: 'Eco Store',
    description: '15% Off on Sustainable Products',
    validUntil: 'May 30, 2025',
    code: 'ECO15GREEN'
  },
  {
    id: 2,
    merchant: 'Green Electronics',
    description: '$25 Off on Refurbished Devices',
    validUntil: 'Jun 15, 2025',
    code: 'REFURB25'
  }
];

const RewardsCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>My Rewards</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium">Eco Points</p>
            <p className="font-bold text-eco-green">320 / 500</p>
          </div>
          <Progress value={64} className="h-2 bg-eco-soft" />
          <p className="text-xs text-muted-foreground mt-2">
            Earn 180 more points to unlock premium rewards
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium flex items-center">
            <Gift className="mr-2 h-4 w-4 text-eco-green" />
            Available Coupons
          </h3>
          
          {coupons.map((coupon) => (
            <div key={coupon.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">{coupon.merchant}</p>
                  <p className="text-sm mb-1">{coupon.description}</p>
                  <p className="text-xs text-muted-foreground">
                    Valid until: {coupon.validUntil}
                  </p>
                </div>
                <Badge className="bg-eco-soft text-eco-green border-eco-green">
                  Coupon
                </Badge>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <div className="bg-eco-soft px-3 py-1 rounded font-medium text-eco-green">
                  {coupon.code}
                </div>
                <Button variant="ghost" size="sm" className="text-eco-green">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Use Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RewardsCard;
