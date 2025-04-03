
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Sparkles, Gift, Clock, Copy, ExternalLink } from 'lucide-react';

const RecyclingCoupons = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Earn Rewards for Recycling</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get exclusive discounts and offers on new products when you recycle your old electronics with us.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" className="font-poppins">All Offers</TabsTrigger>
              <TabsTrigger value="electronics" className="font-poppins">Electronics</TabsTrigger>
              <TabsTrigger value="accessories" className="font-poppins">Accessories</TabsTrigger>
              <TabsTrigger value="services" className="font-poppins">Services</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-eco-soft relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <Badge className="bg-eco-green text-white m-4 font-poppins">Popular</Badge>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-poppins">Samsung</CardTitle>
                    <CardDescription className="mt-1">Electronics & Appliances</CardDescription>
                  </div>
                  <div className="bg-eco-soft p-2 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" alt="Samsung" className="h-8 w-8" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-eco-soft rounded-lg p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <Sparkles className="h-5 w-5 text-eco-green mr-2" />
                    <p className="font-semibold font-poppins">15% Off on New Devices</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Recycle your old Samsung device and get 15% off on your next purchase of any Samsung product.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <p className="text-xs text-muted-foreground">Valid until: June 30, 2025</p>
                  </div>
                  <div className="flex items-center">
                    <Gift className="h-4 w-4 text-eco-green mr-1" />
                    <p className="text-xs text-eco-green">300 points required</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-3">
                <div className="bg-eco-soft w-full rounded flex justify-between items-center p-3">
                  <code className="text-sm font-bold font-poppins">ECORECYCLE15</code>
                  <Button variant="ghost" size="sm" className="text-eco-green">
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                </div>
                <Button className="w-full bg-eco-green hover:bg-eco-green-dark font-poppins">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Redeem Now
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-eco-soft">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-poppins">Apple</CardTitle>
                    <CardDescription className="mt-1">iPhones & MacBooks</CardDescription>
                  </div>
                  <div className="bg-eco-soft p-2 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-8 w-8" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-eco-soft rounded-lg p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <Sparkles className="h-5 w-5 text-eco-green mr-2" />
                    <p className="font-semibold font-poppins">$50 Gift Card</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trade in your old Apple device for recycling and receive a $50 Apple Gift Card to use on your next purchase.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <p className="text-xs text-muted-foreground">Valid until: July 15, 2025</p>
                  </div>
                  <div className="flex items-center">
                    <Gift className="h-4 w-4 text-eco-green mr-1" />
                    <p className="text-xs text-eco-green">400 points required</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-3">
                <div className="bg-eco-soft w-full rounded flex justify-between items-center p-3">
                  <code className="text-sm font-bold font-poppins">APPLEECO50</code>
                  <Button variant="ghost" size="sm" className="text-eco-green">
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                </div>
                <Button className="w-full bg-eco-green hover:bg-eco-green-dark font-poppins">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Redeem Now
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-eco-soft">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-poppins">Dell</CardTitle>
                    <CardDescription className="mt-1">Laptops & Monitors</CardDescription>
                  </div>
                  <div className="bg-eco-soft p-2 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" alt="Dell" className="h-8 w-8" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-eco-soft rounded-lg p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <Sparkles className="h-5 w-5 text-eco-green mr-2" />
                    <p className="font-semibold font-poppins">20% Discount Coupon</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Recycle any old laptop or monitor and get 20% off on your next Dell purchase.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <p className="text-xs text-muted-foreground">Valid until: May 31, 2025</p>
                  </div>
                  <div className="flex items-center">
                    <Gift className="h-4 w-4 text-eco-green mr-1" />
                    <p className="text-xs text-eco-green">250 points required</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-3">
                <div className="bg-eco-soft w-full rounded flex justify-between items-center p-3">
                  <code className="text-sm font-bold font-poppins">DELLGREEN20</code>
                  <Button variant="ghost" size="sm" className="text-eco-green">
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                </div>
                <Button className="w-full bg-eco-green hover:bg-eco-green-dark font-poppins">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Redeem Now
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="electronics">
            {/* Electronics tab content here - similar to the "all" tab but with electronics-specific offers */}
            <p className="text-center text-muted-foreground py-8">Electronics-specific offers will be displayed here.</p>
          </TabsContent>

          <TabsContent value="accessories">
            {/* Accessories tab content here */}
            <p className="text-center text-muted-foreground py-8">Accessories-specific offers will be displayed here.</p>
          </TabsContent>

          <TabsContent value="services">
            {/* Services tab content here */}
            <p className="text-center text-muted-foreground py-8">Services-specific offers will be displayed here.</p>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-lg mb-4 font-poppins">How It Works:</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
            <div className="bg-eco-soft p-6 rounded-lg text-center">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <p className="text-eco-green font-bold text-xl">1</p>
              </div>
              <h3 className="font-medium mb-2 font-poppins">Recycle E-Waste</h3>
              <p className="text-sm text-muted-foreground">Schedule a pickup or drop off your e-waste at our collection centers.</p>
            </div>
            <div className="bg-eco-soft p-6 rounded-lg text-center">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <p className="text-eco-green font-bold text-xl">2</p>
              </div>
              <h3 className="font-medium mb-2 font-poppins">Earn Eco Points</h3>
              <p className="text-sm text-muted-foreground">Get points based on the type and quantity of e-waste recycled.</p>
            </div>
            <div className="bg-eco-soft p-6 rounded-lg text-center">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <p className="text-eco-green font-bold text-xl">3</p>
              </div>
              <h3 className="font-medium mb-2 font-poppins">Redeem Rewards</h3>
              <p className="text-sm text-muted-foreground">Use your points to unlock exclusive discounts and offers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecyclingCoupons;
