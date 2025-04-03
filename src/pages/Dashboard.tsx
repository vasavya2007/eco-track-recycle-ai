
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatCards from '@/components/dashboard/StatCards';
import RecyclingTimeline from '@/components/dashboard/RecyclingTimeline';
import UpcomingPickups from '@/components/dashboard/UpcomingPickups';
import RewardsCard from '@/components/dashboard/RewardsCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Upload, Calendar, LineChart, BarChart3 } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-accent/30">
      <DashboardSidebar />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold">My E-Waste Dashboard</h1>
              <p className="text-muted-foreground">Track your recycling journey and environmental impact</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button className="bg-eco-green hover:bg-eco-green-dark">
                <Upload className="mr-2 h-4 w-4" />
                Upload Device Photo
              </Button>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Pickup
              </Button>
            </div>
          </div>
          
          <StatCards />
          
          <Tabs defaultValue="timeline" className="mt-8">
            <TabsList>
              <TabsTrigger value="timeline" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                Recycling Timeline
              </TabsTrigger>
              <TabsTrigger value="pickups" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Scheduled Pickups
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Analytics
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="timeline" className="mt-6">
              <RecyclingTimeline />
            </TabsContent>
            
            <TabsContent value="pickups" className="mt-6">
              <UpcomingPickups />
            </TabsContent>
            
            <TabsContent value="analytics" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <EnvironmentalImpact />
                </div>
                <div>
                  <RewardsCard />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
