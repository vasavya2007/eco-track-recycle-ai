
import React, { useState, useEffect } from 'react';
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Save } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();
      
      if (error) throw error;
      
      if (data) {
        setFirstName(data.first_name || '');
        setLastName(data.last_name || '');
        setEmail(data.email || user?.email || '');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast({
        variant: "destructive",
        title: "Error fetching profile",
        description: "Please try refreshing the page.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    try {
      setIsSaving(true);
      
      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: firstName,
          last_name: lastName,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user?.id);
      
      if (error) throw error;
      
      toast({
        title: "Profile updated",
        description: "Your profile information has been saved.",
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        variant: "destructive",
        title: "Error updating profile",
        description: "Please try again later.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <ProtectedRoute>
      <Layout>
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-8">User Profile</h1>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-eco-blue" />
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Left Column - Profile Summary */}
              <div className="md:col-span-1">
                <Card>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="" />
                        <AvatarFallback className="text-2xl bg-eco-blue text-white">
                          {firstName ? firstName.charAt(0) : email.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle>{firstName} {lastName}</CardTitle>
                    <CardDescription>{email}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-center">
                      <div>
                        <span className="text-muted-foreground">Member since:</span>
                        <p>{new Date(user?.created_at || '').toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Email verified:</span>
                        <p>{user?.email_confirmed_at ? 'Yes' : 'No'}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Right Column - Profile Details and Settings */}
              <div className="md:col-span-2">
                <Card>
                  <Tabs defaultValue="details">
                    <CardHeader>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="details">Profile Details</TabsTrigger>
                        <TabsTrigger value="security">Security</TabsTrigger>
                      </TabsList>
                    </CardHeader>
                    
                    <TabsContent value="details">
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            disabled
                          />
                          <p className="text-xs text-muted-foreground">Email changes require verification</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          className="w-full md:w-auto bg-eco-green hover:bg-eco-green-dark"
                          onClick={handleSaveProfile}
                          disabled={isSaving}
                        >
                          {isSaving ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Saving...
                            </>
                          ) : (
                            <>
                              <Save className="mr-2 h-4 w-4" />
                              Save Changes
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </TabsContent>
                    
                    <TabsContent value="security">
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input id="currentPassword" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input id="newPassword" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input id="confirmPassword" type="password" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full md:w-auto">Change Password</Button>
                      </CardFooter>
                    </TabsContent>
                  </Tabs>
                </Card>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Profile;
