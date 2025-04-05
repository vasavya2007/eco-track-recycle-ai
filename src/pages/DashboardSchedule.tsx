
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Info } from "@/components/ui/info";
import { Badge } from "@/components/ui/badge";
import { 
  CalendarDays, 
  Truck, 
  Clock, 
  Package, 
  Check, 
  RotateCw,
  Calendar as CalendarIcon,
  Plus,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for upcoming pickups
const upcomingPickups = [
  {
    id: 1,
    date: "2025-04-10",
    timeSlot: "9:00 AM - 12:00 PM",
    address: "123 Green Street, Eco City",
    items: "Computers & Laptops (2)",
    status: "scheduled"
  },
  {
    id: 2,
    date: "2025-04-18",
    timeSlot: "12:00 PM - 3:00 PM",
    address: "456 Sustainability Ave, Eco City",
    items: "Phones & Tablets (3), Batteries (5)",
    status: "scheduled"
  }
];

// Mock data for past pickups
const pastPickups = [
  {
    id: 101,
    date: "2025-03-25",
    timeSlot: "3:00 PM - 6:00 PM",
    address: "789 Recycling Blvd, Eco City",
    items: "Small Appliances (1), Peripherals (4)",
    status: "completed",
    points: 45
  },
  {
    id: 102,
    date: "2025-03-15",
    timeSlot: "9:00 AM - 12:00 PM",
    address: "123 Green Street, Eco City",
    items: "Computers & Laptops (1)",
    status: "completed",
    points: 25
  },
  {
    id: 103,
    date: "2025-03-05",
    timeSlot: "12:00 PM - 3:00 PM",
    address: "456 Sustainability Ave, Eco City",
    items: "Phones & Tablets (2)",
    status: "completed",
    points: 20
  }
];

const DashboardSchedule = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Function to format date as YYYY-MM-DD
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  const handleReschedule = (id: number) => {
    toast({
      title: "Pickup rescheduling initiated",
      description: `You can now select a new date and time for pickup #${id}`,
    });
  };

  return (
    <div className="flex min-h-screen bg-background font-poppins">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-0">
        <DashboardHeader />
        
        <main className="container py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Collection Schedule</h1>
              <p className="text-muted-foreground">Manage your e-waste pickup schedule</p>
            </div>
            
            <Button asChild className="mt-4 md:mt-0 bg-eco-green hover:bg-eco-green-dark">
              <Link to="/schedule-pickup">
                <Plus className="mr-2 h-4 w-4" />
                Schedule New Pickup
              </Link>
            </Button>
          </div>
          
          <Tabs defaultValue="upcoming" className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="upcoming">Upcoming Pickups</TabsTrigger>
              <TabsTrigger value="past">Past Pickups</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
            
            {/* Upcoming Pickups Tab */}
            <TabsContent value="upcoming">
              {upcomingPickups.length > 0 ? (
                <div className="space-y-4">
                  {upcomingPickups.map((pickup) => (
                    <Card key={pickup.id} className="mb-4">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-5 w-5 text-eco-blue" />
                            <CardTitle className="text-lg">{formatDate(pickup.date)}</CardTitle>
                          </div>
                          <Badge 
                            className="bg-eco-blue text-white"
                            variant="secondary"
                          >
                            Scheduled
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid gap-4">
                          <div className="flex items-start gap-3">
                            <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="font-medium">Time Slot</p>
                              <p className="text-sm text-muted-foreground">{pickup.timeSlot}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="font-medium">Address</p>
                              <p className="text-sm text-muted-foreground">{pickup.address}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Package className="h-5 w-5 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="font-medium">Items</p>
                              <p className="text-sm text-muted-foreground">{pickup.items}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-2 pt-3">
                        <Button 
                          variant="outline" 
                          onClick={() => handleReschedule(pickup.id)}
                        >
                          <RotateCw className="mr-2 h-4 w-4" />
                          Reschedule
                        </Button>
                        <Button variant="destructive">Cancel</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-8 text-center">
                    <div className="mx-auto mb-4 bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                      <CalendarIcon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No Upcoming Pickups</h3>
                    <p className="text-muted-foreground mb-4">You don't have any scheduled pickups at this time.</p>
                    <Button asChild className="bg-eco-green hover:bg-eco-green-dark">
                      <Link to="/schedule-pickup">Schedule a Pickup</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            {/* Past Pickups Tab */}
            <TabsContent value="past">
              {pastPickups.length > 0 ? (
                <div className="space-y-4">
                  {pastPickups.map((pickup) => (
                    <Card key={pickup.id} className="mb-4">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-5 w-5 text-eco-green" />
                            <CardTitle className="text-lg">{formatDate(pickup.date)}</CardTitle>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge 
                              className="bg-eco-green text-white"
                              variant="secondary"
                            >
                              <Check className="mr-1 h-3 w-3" />
                              Completed
                            </Badge>
                            <Badge variant="outline" className="bg-eco-soft text-eco-green">
                              +{pickup.points} Points
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid gap-4">
                          <div className="flex items-start gap-3">
                            <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="font-medium">Time Slot</p>
                              <p className="text-sm text-muted-foreground">{pickup.timeSlot}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="font-medium">Address</p>
                              <p className="text-sm text-muted-foreground">{pickup.address}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Package className="h-5 w-5 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="font-medium">Items</p>
                              <p className="text-sm text-muted-foreground">{pickup.items}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-2 pt-3">
                        <Button variant="outline">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-8 text-center">
                    <div className="mx-auto mb-4 bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                      <Truck className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No Past Pickups</h3>
                    <p className="text-muted-foreground">You haven't completed any pickups yet.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            {/* Calendar View Tab */}
            <TabsContent value="calendar">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-eco-blue" />
                      Collection Calendar
                    </CardTitle>
                    <CardDescription>View and manage your scheduled pickups</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                    <Info className="mt-4">
                      Dates with scheduled pickups are highlighted in green
                    </Info>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-eco-blue" />
                      Selected Date Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {date ? (
                      <div>
                        <h3 className="font-medium text-lg mb-4">
                          {new Intl.DateTimeFormat('en-US', { 
                            weekday: 'long',
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          }).format(date)}
                        </h3>
                        
                        {/* Check if there's a pickup scheduled on the selected date */}
                        {upcomingPickups.some(pickup => pickup.date === date.toISOString().split('T')[0]) ? (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2">
                              <Badge className="bg-eco-blue">Scheduled</Badge>
                              <span className="text-sm">Pickup scheduled for this date</span>
                            </div>
                            
                            {upcomingPickups
                              .filter(pickup => pickup.date === date.toISOString().split('T')[0])
                              .map(pickup => (
                                <div key={pickup.id} className="border rounded-md p-4 space-y-3">
                                  <div className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                                    <div>
                                      <p className="font-medium">Time Slot</p>
                                      <p className="text-sm text-muted-foreground">{pickup.timeSlot}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <Package className="h-5 w-5 text-muted-foreground mt-0.5" />
                                    <div>
                                      <p className="font-medium">Items</p>
                                      <p className="text-sm text-muted-foreground">{pickup.items}</p>
                                    </div>
                                  </div>
                                  <div className="flex justify-end gap-2 pt-2">
                                    <Button 
                                      variant="outline" 
                                      size="sm"
                                      onClick={() => handleReschedule(pickup.id)}
                                    >
                                      Reschedule
                                    </Button>
                                  </div>
                                </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-8">
                            <p className="text-muted-foreground mb-4">No pickups scheduled for this date</p>
                            <Button asChild className="bg-eco-green hover:bg-eco-green-dark">
                              <Link to="/schedule-pickup">
                                <Plus className="mr-2 h-4 w-4" />
                                Schedule Pickup
                              </Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">Select a date to view details</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default DashboardSchedule;
