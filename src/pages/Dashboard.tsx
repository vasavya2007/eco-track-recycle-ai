
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatCards from "@/components/dashboard/StatCards";
import RecyclingTimeline from "@/components/dashboard/RecyclingTimeline";
import RewardsCard from "@/components/dashboard/RewardsCard";
import UpcomingPickups from "@/components/dashboard/UpcomingPickups";
import EnvironmentalImpact from "@/components/home/EnvironmentalImpact";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background font-poppins">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-0">
        <DashboardHeader />
        
        <main className="container py-6">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          
          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Stats Cards */}
            <div className="md:col-span-2">
              <StatCards />
            </div>
            
            {/* Rewards Card */}
            <div>
              <RewardsCard />
            </div>
          </div>
          
          {/* Tabs Section */}
          <Tabs defaultValue="overview" className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="recycling">Recycling History</TabsTrigger>
              <TabsTrigger value="impact">Environmental Impact</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="grid md:grid-cols-2 gap-6">
              <RecyclingTimeline />
              <UpcomingPickups />
            </TabsContent>
            
            {/* Recycling History Tab */}
            <TabsContent value="recycling">
              <Card>
                <CardHeader>
                  <CardTitle>Recycling History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your complete recycling history will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Environmental Impact Tab */}
            <TabsContent value="impact">
              <EnvironmentalImpact />
            </TabsContent>
            
            {/* Rewards Tab */}
            <TabsContent value="rewards">
              <Card>
                <CardHeader>
                  <CardTitle>Rewards & Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Detailed information about your rewards and points will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
