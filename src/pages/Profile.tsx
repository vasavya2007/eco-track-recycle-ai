
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  Award, 
  Clock, 
  Gift,
  Calendar 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Navbar />
      
      <main className="flex-grow container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-eco-soft flex items-center justify-center mb-4">
                      <User className="h-12 w-12 text-eco-green" />
                    </div>
                    <h2 className="text-xl font-bold">Alex Johnson</h2>
                    <p className="text-muted-foreground">alex.johnson@example.com</p>
                    <Badge className="mt-2 bg-eco-green">Eco Warrior</Badge>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="mr-2 h-4 w-4" />
                      Personal Info
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Calendar className="mr-2 h-4 w-4" />
                      Recycling History
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Gift className="mr-2 h-4 w-4" />
                      Rewards & Points
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </nav>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Eco Points</span>
                        <span className="text-sm font-bold text-eco-green">320 / 500</span>
                      </div>
                      <Progress value={64} className="h-2 bg-eco-soft" />
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Member since April 2024
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold mb-6">My Profile</h1>
            
            <Tabs defaultValue="personal">
              <TabsList className="mb-6">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="history">Recycling History</TabsTrigger>
                <TabsTrigger value="rewards">Rewards & Points</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              {/* Personal Info Tab */}
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Manage your personal details and contact information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            First Name
                          </label>
                          <Input id="firstName" defaultValue="Alex" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            Last Name
                          </label>
                          <Input id="lastName" defaultValue="Johnson" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address
                          </label>
                          <Input id="email" type="email" defaultValue="alex.johnson@example.com" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input id="phone" defaultValue="+1 (555) 123-4567" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label htmlFor="address" className="text-sm font-medium">
                            Address
                          </label>
                          <Input id="address" defaultValue="123 Green Street" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="city" className="text-sm font-medium">
                            City
                          </label>
                          <Input id="city" defaultValue="Eco City" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="zipCode" className="text-sm font-medium">
                            ZIP / Postal Code
                          </label>
                          <Input id="zipCode" defaultValue="12345" />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button className="bg-eco-green hover:bg-eco-green-dark">
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Recycling History Tab */}
              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Recycling History</CardTitle>
                    <CardDescription>
                      View your e-waste recycling activities and environmental impact
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {/* Recent Activity */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                        <div className="space-y-4">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-eco-soft rounded-lg p-4 flex items-start">
                              <div className="bg-white rounded-full p-2 mr-4">
                                <Clock className="h-5 w-5 text-eco-green" />
                              </div>
                              <div>
                                <div className="flex items-center">
                                  <p className="font-medium">Smartphone Recycling</p>
                                  <Badge className="ml-2 bg-eco-green">+30 points</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  You recycled an iPhone 11 on April {item + 1}, 2025
                                </p>
                                <div className="mt-2 flex items-center text-xs text-muted-foreground">
                                  <span className="inline-block w-2 h-2 rounded-full bg-eco-green mr-1"></span>
                                  <span>Completed</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Environmental Impact */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Your Environmental Impact</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white border rounded-lg p-4 text-center">
                            <p className="text-muted-foreground text-sm mb-1">CO₂ Saved</p>
                            <p className="text-2xl font-bold text-eco-green">42.5 kg</p>
                          </div>
                          <div className="bg-white border rounded-lg p-4 text-center">
                            <p className="text-muted-foreground text-sm mb-1">Water Saved</p>
                            <p className="text-2xl font-bold text-eco-green">320 L</p>
                          </div>
                          <div className="bg-white border rounded-lg p-4 text-center">
                            <p className="text-muted-foreground text-sm mb-1">Energy Saved</p>
                            <p className="text-2xl font-bold text-eco-green">187 kWh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Rewards Tab */}
              <TabsContent value="rewards">
                <Card>
                  <CardHeader>
                    <CardTitle>Rewards & Points</CardTitle>
                    <CardDescription>
                      Track your eco points and available rewards
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {/* Points Summary */}
                      <div className="bg-eco-soft rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Points Summary</h3>
                        <div className="flex items-center mb-4">
                          <div className="w-16 h-16 rounded-full bg-eco-green flex items-center justify-center">
                            <Award className="h-8 w-8 text-white" />
                          </div>
                          <div className="ml-4">
                            <p className="text-3xl font-bold">320</p>
                            <p className="text-sm text-muted-foreground">Total Eco Points</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="bg-white rounded-lg p-3 text-center">
                            <p className="text-sm text-muted-foreground">This Month</p>
                            <p className="text-xl font-bold">45 pts</p>
                          </div>
                          <div className="bg-white rounded-lg p-3 text-center">
                            <p className="text-sm text-muted-foreground">Redeemed</p>
                            <p className="text-xl font-bold">180 pts</p>
                          </div>
                          <div className="bg-white rounded-lg p-3 text-center">
                            <p className="text-sm text-muted-foreground">Next Tier</p>
                            <p className="text-xl font-bold">180 pts to go</p>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Progress to Gold Tier</span>
                            <span className="text-sm font-medium">320 / 500</span>
                          </div>
                          <Progress value={64} className="h-2 bg-white" />
                        </div>
                      </div>
                      
                      {/* Available Rewards */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Available Rewards</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-medium">15% Off Samsung Products</h4>
                                <p className="text-sm text-muted-foreground">Valid until: June 30, 2025</p>
                              </div>
                              <Badge className="bg-eco-soft text-eco-green">300 pts</Badge>
                            </div>
                            <Button variant="outline" className="w-full">Redeem</Button>
                          </div>
                          <div className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-medium">Free Eco-Friendly Phone Case</h4>
                                <p className="text-sm text-muted-foreground">Valid until: May 15, 2025</p>
                              </div>
                              <Badge className="bg-eco-soft text-eco-green">150 pts</Badge>
                            </div>
                            <Button variant="outline" className="w-full">Redeem</Button>
                          </div>
                          <div className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-medium">$20 Off Next Recycling Service</h4>
                                <p className="text-sm text-muted-foreground">Valid until: July 20, 2025</p>
                              </div>
                              <Badge className="bg-eco-soft text-eco-green">200 pts</Badge>
                            </div>
                            <Button variant="outline" className="w-full">Redeem</Button>
                          </div>
                          <div className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-medium">Eco-Friendly Tech Accessories</h4>
                                <p className="text-sm text-muted-foreground">Valid until: August 15, 2025</p>
                              </div>
                              <Badge className="bg-eco-soft text-eco-green">250 pts</Badge>
                            </div>
                            <Button variant="outline" className="w-full">Redeem</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Settings Tab */}
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>
                      Manage your account preferences and notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Security Settings */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                          <Shield className="h-5 w-5 mr-2 text-eco-green" />
                          Security
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-4 border rounded-lg">
                            <div>
                              <p className="font-medium">Password</p>
                              <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                            </div>
                            <Button variant="outline">Change</Button>
                          </div>
                          <div className="flex justify-between items-center p-4 border rounded-lg">
                            <div>
                              <p className="font-medium">Two-Factor Authentication</p>
                              <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                            </div>
                            <Button variant="outline">Enable</Button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Notification Settings */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                          <Bell className="h-5 w-5 mr-2 text-eco-green" />
                          Notifications
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-4 border rounded-lg">
                            <div>
                              <p className="font-medium">Email Notifications</p>
                              <p className="text-sm text-muted-foreground">Receive updates about your recycling activities</p>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="emailNotif" className="mr-2" defaultChecked />
                              <label htmlFor="emailNotif">Enabled</label>
                            </div>
                          </div>
                          <div className="flex justify-between items-center p-4 border rounded-lg">
                            <div>
                              <p className="font-medium">SMS Notifications</p>
                              <p className="text-sm text-muted-foreground">Get text message updates about recycling pickups</p>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="smsNotif" className="mr-2" />
                              <label htmlFor="smsNotif">Disabled</label>
                            </div>
                          </div>
                          <div className="flex justify-between items-center p-4 border rounded-lg">
                            <div>
                              <p className="font-medium">Marketing Communications</p>
                              <p className="text-sm text-muted-foreground">Receive special offers and promotions</p>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="marketingNotif" className="mr-2" defaultChecked />
                              <label htmlFor="marketingNotif">Enabled</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button className="bg-eco-green hover:bg-eco-green-dark">
                          Save Preferences
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
