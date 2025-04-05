
import React, { useState } from 'react';
import { Layout } from "@/components/layout/Layout";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gift, Award, Trophy, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const DashboardRewards = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [redeemingId, setRedeemingId] = useState<number | null>(null);

  const translations = {
    en: {
      title: "Rewards & Achievements",
      points: "Green Points",
      pointsDescription: "Points earned through recycling and sustainable actions",
      level: "Level",
      rewards: "Available Rewards",
      redeem: "Redeem",
      redeeming: "Redeeming...",
      achievements: "Achievements",
      progress: "Progress",
      history: "Redeem History",
      pointsNeeded: "points needed",
      tabs: {
        available: "Available",
        redeemed: "Redeemed",
        expired: "Expired"
      },
      achievementCategories: {
        recycling: "Recycling",
        community: "Community",
        education: "Education"
      },
      expiresIn: "Expires in",
      days: "days"
    },
    es: {
      title: "Recompensas y Logros",
      points: "Puntos Verdes",
      pointsDescription: "Puntos obtenidos por reciclaje y acciones sostenibles",
      level: "Nivel",
      rewards: "Recompensas Disponibles",
      redeem: "Canjear",
      redeeming: "Canjeando...",
      achievements: "Logros",
      progress: "Progreso",
      history: "Historial de Canjes",
      pointsNeeded: "puntos necesarios",
      tabs: {
        available: "Disponibles",
        redeemed: "Canjeados",
        expired: "Expirados"
      },
      achievementCategories: {
        recycling: "Reciclaje",
        community: "Comunidad",
        education: "Educación"
      },
      expiresIn: "Expira en",
      days: "días"
    }
  };
  
  // Default to English if the language is not supported
  const t = translations[language.code as keyof typeof translations] || translations.en;

  const rewards = [
    {
      id: 1,
      title: "10% Off at EcoStore",
      description: "Get 10% off your next purchase at EcoStore",
      points: 500,
      expiresIn: 30,
      image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Free E-Waste Pickup",
      description: "Schedule a free e-waste pickup service, regardless of quantity",
      points: 750,
      expiresIn: 60,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Plant a Tree in Your Name",
      description: "We'll plant a tree and send you the certificate",
      points: 1000,
      expiresIn: 45,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1513&q=80"
    },
    {
      id: 4,
      title: "Sustainable Tech Workshop",
      description: "Free entry to our exclusive tech workshop",
      points: 1200,
      expiresIn: 15,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80"
    }
  ];

  const redeemedRewards = [
    {
      id: 101,
      title: "5% Off Green Electronics",
      description: "Discount applied at checkout",
      points: 300,
      redeemedDate: "2023-12-15",
      expiryDate: "2024-01-15",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1501&q=80"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "First Recycler",
      description: "Complete your first e-waste recycling",
      category: "recycling",
      icon: <Gift className="text-eco-green" />,
      completed: true,
      progress: 100
    },
    {
      id: 2,
      title: "Power Recycler",
      description: "Recycle 50kg of e-waste",
      category: "recycling",
      icon: <Award className="text-eco-green" />,
      completed: false,
      progress: 70,
      current: 35,
      target: 50
    },
    {
      id: 3,
      title: "Community Champion",
      description: "Invite 5 friends to join EcoTrack",
      category: "community",
      icon: <Trophy className="text-amber-500" />,
      completed: false,
      progress: 60,
      current: 3,
      target: 5
    },
    {
      id: 4,
      title: "Eco Learner",
      description: "Complete 3 educational modules",
      category: "education",
      icon: <CheckCircle className="text-eco-blue" />,
      completed: true,
      progress: 100
    }
  ];

  const handleRedeem = (id: number) => {
    setRedeemingId(id);
    
    // Simulate API call
    setTimeout(() => {
      setRedeemingId(null);
      toast({
        title: "Reward Redeemed!",
        description: "Check your email for the reward details.",
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 bg-background">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{t.title}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="md:col-span-2 bg-gradient-to-br from-eco-green to-eco-green-dark text-white">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{t.points}</span>
                  <span className="text-2xl font-bold">2,350</span>
                </CardTitle>
                <CardDescription className="text-white/80">
                  {t.pointsDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{t.level} 5</span>
                    <span>{t.level} 6</span>
                  </div>
                  <Progress value={70} className="h-2 bg-white/30" indicatorClassName="bg-white" />
                </div>
                <p className="text-sm text-white/80 text-right">650 {t.pointsNeeded}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{t.achievements}</CardTitle>
                <CardDescription>Your latest milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.slice(0, 2).map(achievement => (
                    <div key={achievement.id} className="flex items-center gap-3 border rounded-md p-2">
                      <div className="bg-eco-soft rounded-full p-2">
                        {achievement.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm">{achievement.title}</h4>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{t.progress}: {achievement.progress}%</span>
                          {achievement.completed && <CheckCircle size={14} className="text-eco-green" />}
                        </div>
                        {!achievement.completed && (
                          <Progress value={achievement.progress} className="h-1 mt-1" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="text-xs w-full">
                  View All Achievements <ArrowRight size={12} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">{t.rewards}</h2>
            <Tabs defaultValue="available">
              <TabsList className="mb-4">
                <TabsTrigger value="available">{t.tabs.available}</TabsTrigger>
                <TabsTrigger value="redeemed">{t.tabs.redeemed}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="available">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {rewards.map((reward) => (
                    <Card key={reward.id} className="overflow-hidden">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img 
                          src={reward.image} 
                          alt={reward.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-2">
                          <div className="flex items-center text-sm">
                            <Clock size={14} className="mr-1" />
                            <span>{t.expiresIn} {reward.expiresIn} {t.days}</span>
                          </div>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{reward.title}</CardTitle>
                        <Badge variant="outline" className="w-fit">
                          {reward.points} points
                        </Badge>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {reward.description}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          className="w-full bg-eco-green hover:bg-eco-green-dark"
                          disabled={redeemingId === reward.id}
                          onClick={() => handleRedeem(reward.id)}
                        >
                          {redeemingId === reward.id ? t.redeeming : t.redeem}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="redeemed">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {redeemedRewards.map((reward) => (
                    <Card key={reward.id} className="overflow-hidden">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img 
                          src={reward.image} 
                          alt={reward.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 opacity-80"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-eco-blue">Redeemed</Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{reward.title}</CardTitle>
                        <Badge variant="outline" className="w-fit">
                          {reward.points} points
                        </Badge>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <p className="text-sm text-muted-foreground mb-2">
                          {reward.description}
                        </p>
                        <div className="text-xs text-muted-foreground">
                          <p>Redeemed: {new Date(reward.redeemedDate).toLocaleDateString()}</p>
                          <p>Expires: {new Date(reward.expiryDate).toLocaleDateString()}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">{t.achievements}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2 border-b">
                  <CardTitle className="text-lg">{t.achievementCategories.recycling}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  {achievements.filter(a => a.category === 'recycling').map((achievement) => (
                    <div key={achievement.id} className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-eco-soft rounded-full p-1">
                          {achievement.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        </div>
                        {achievement.completed && (
                          <CheckCircle size={18} className="text-eco-green ml-auto" />
                        )}
                      </div>
                      {!achievement.completed && (
                        <div>
                          <div className="flex justify-between text-xs text-muted-foreground mb-1">
                            <span>{achievement.current}/{achievement.target}</span>
                            <span>{achievement.progress}%</span>
                          </div>
                          <Progress value={achievement.progress} className="h-1.5" />
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2 border-b">
                  <CardTitle className="text-lg">{t.achievementCategories.community}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  {achievements.filter(a => a.category === 'community').map((achievement) => (
                    <div key={achievement.id} className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-eco-soft rounded-full p-1">
                          {achievement.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        </div>
                        {achievement.completed && (
                          <CheckCircle size={18} className="text-eco-green ml-auto" />
                        )}
                      </div>
                      {!achievement.completed && (
                        <div>
                          <div className="flex justify-between text-xs text-muted-foreground mb-1">
                            <span>{achievement.current}/{achievement.target}</span>
                            <span>{achievement.progress}%</span>
                          </div>
                          <Progress value={achievement.progress} className="h-1.5" />
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2 border-b">
                  <CardTitle className="text-lg">{t.achievementCategories.education}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  {achievements.filter(a => a.category === 'education').map((achievement) => (
                    <div key={achievement.id} className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-eco-soft rounded-full p-1">
                          {achievement.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        </div>
                        {achievement.completed && (
                          <CheckCircle size={18} className="text-eco-green ml-auto" />
                        )}
                      </div>
                      {!achievement.completed && (
                        <div>
                          <div className="flex justify-between text-xs text-muted-foreground mb-1">
                            <span>{achievement.current}/{achievement.target}</span>
                            <span>{achievement.progress}%</span>
                          </div>
                          <Progress value={achievement.progress} className="h-1.5" />
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default DashboardRewards;
