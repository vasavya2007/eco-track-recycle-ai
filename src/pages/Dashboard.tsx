
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatCards from "@/components/dashboard/StatCards";
import RecyclingTimeline from "@/components/dashboard/RecyclingTimeline";
import RewardsCard from "@/components/dashboard/RewardsCard";
import UpcomingPickups from "@/components/dashboard/UpcomingPickups";
import EnvironmentalImpact from "@/components/home/EnvironmentalImpact";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

interface ProfileData {
  first_name: string;
  last_name: string;
  email: string;
}

interface RewardsData {
  points: number;
  redeemed_points: number;
  level: string;
}

const Dashboard = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [rewardsData, setRewardsData] = useState<RewardsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      // Fetch profile data
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (profileError) throw profileError;
      setProfileData(profileData);

      // Fetch rewards data
      const { data: rewardsData, error: rewardsError } = await supabase
        .from('rewards')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (rewardsError) throw rewardsError;
      setRewardsData(rewardsData);
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast({
        variant: "destructive",
        title: "Error fetching user data",
        description: "Please try refreshing the page.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-background font-poppins">
        {/* Sidebar */}
        <DashboardSidebar />
        
        {/* Main Content */}
        <div className="flex-1 p-0">
          <DashboardHeader />
          
          <main className="container py-6">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-10 w-10 animate-spin text-eco-blue" />
              </div>
            ) : (
              <>
                {profileData && (
                  <div className="mb-6">
                    <h2 className="text-xl mb-2">
                      Welcome, {profileData.first_name || user?.email}!
                    </h2>
                  </div>
                )}
                
                {/* Main Dashboard Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Stats Cards */}
                  <div className="md:col-span-2">
                    <StatCards rewards={rewardsData} />
                  </div>
                  
                  {/* Rewards Card */}
                  <div>
                    <RewardsCard rewards={rewardsData} />
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
                        {rewardsData ? (
                          <div className="space-y-2">
                            <p><strong>Current Points:</strong> {rewardsData.points}</p>
                            <p><strong>Redeemed Points:</strong> {rewardsData.redeemed_points}</p>
                            <p><strong>Level:</strong> {rewardsData.level}</p>
                          </div>
                        ) : (
                          <p>No rewards data available.</p>
                        )}
                        
                        <div className="mt-4">
                          <Button className="bg-eco-green hover:bg-eco-green-dark">
                            Redeem Points
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
