
import React from 'react';
import { Layout } from "@/components/layout/Layout";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from '@/contexts/LanguageContext';

const impactData = [
  { month: 'Jan', ewaste: 30, carbon: 15, trees: 5 },
  { month: 'Feb', ewaste: 40, carbon: 20, trees: 8 },
  { month: 'Mar', ewaste: 45, carbon: 25, trees: 10 },
  { month: 'Apr', ewaste: 70, carbon: 40, trees: 15 },
  { month: 'May', ewaste: 65, carbon: 35, trees: 12 },
  { month: 'Jun', ewaste: 80, carbon: 45, trees: 18 },
  { month: 'Jul', ewaste: 95, carbon: 55, trees: 22 },
  { month: 'Aug', ewaste: 100, carbon: 60, trees: 25 },
  { month: 'Sep', ewaste: 85, carbon: 50, trees: 20 },
  { month: 'Oct', ewaste: 90, carbon: 52, trees: 21 },
  { month: 'Nov', ewaste: 110, carbon: 65, trees: 28 },
  { month: 'Dec', ewaste: 120, carbon: 70, trees: 30 },
];

const wasteTypeData = [
  { name: 'Electronics', value: 400 },
  { name: 'Batteries', value: 300 },
  { name: 'Appliances', value: 350 },
  { name: 'Cables', value: 200 },
  { name: 'Other', value: 150 },
];

const communityData = [
  { month: 'Jan', individual: 40, community: 24, corporate: 10 },
  { month: 'Feb', individual: 45, community: 28, corporate: 15 },
  { month: 'Mar', individual: 50, community: 35, corporate: 20 },
  { month: 'Apr', individual: 55, community: 40, corporate: 25 },
  { month: 'May', individual: 60, community: 45, corporate: 30 },
  { month: 'Jun', individual: 65, community: 50, corporate: 35 },
];

const DashboardAnalytics = () => {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      title: "Impact Analytics",
      timeRange: "Time Range",
      overview: "Overview",
      details: "Detailed Analysis",
      community: "Community Impact",
      totalEwaste: "Total E-waste Collected",
      carbonSaved: "Carbon Emissions Saved",
      treesSaved: "Equivalent Trees Saved",
      kg: "kg",
      tonnes: "tonnes",
      trees: "trees",
      wasteTypes: "Waste Types Breakdown",
      communityImpact: "Community Impact Metrics",
      downloadReport: "Download Full Report",
      timeRanges: {
        weekly: "Weekly",
        monthly: "Monthly",
        yearly: "Yearly",
        allTime: "All Time"
      }
    },
    es: {
      title: "Análisis de Impacto",
      timeRange: "Rango de Tiempo",
      overview: "Resumen",
      details: "Análisis Detallado",
      community: "Impacto Comunitario",
      totalEwaste: "Total de Residuos Electrónicos",
      carbonSaved: "Emisiones de Carbono Ahorradas",
      treesSaved: "Equivalente en Árboles Salvados",
      kg: "kg",
      tonnes: "toneladas",
      trees: "árboles",
      wasteTypes: "Desglose por Tipo de Residuo",
      communityImpact: "Métricas de Impacto Comunitario",
      downloadReport: "Descargar Informe Completo",
      timeRanges: {
        weekly: "Semanal",
        monthly: "Mensual",
        yearly: "Anual",
        allTime: "Todo el Tiempo"
      }
    }
  };
  
  // Default to English if the language is not supported
  const t = translations[language.code as keyof typeof translations] || translations.en;

  return (
    <Layout>
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 bg-background">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{t.title}</h1>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{t.timeRange}:</span>
                <Select defaultValue="monthly">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={t.timeRanges.monthly} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">{t.timeRanges.weekly}</SelectItem>
                    <SelectItem value="monthly">{t.timeRanges.monthly}</SelectItem>
                    <SelectItem value="yearly">{t.timeRanges.yearly}</SelectItem>
                    <SelectItem value="all-time">{t.timeRanges.allTime}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{t.totalEwaste}</CardTitle>
                <CardDescription>2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-eco-green">1,245 {t.kg}</div>
                <div className="text-sm text-muted-foreground mt-2">+12.5% from last year</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{t.carbonSaved}</CardTitle>
                <CardDescription>2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-eco-blue">7.8 {t.tonnes}</div>
                <div className="text-sm text-muted-foreground mt-2">+15.2% from last year</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{t.treesSaved}</CardTitle>
                <CardDescription>2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-600">312 {t.trees}</div>
                <div className="text-sm text-muted-foreground mt-2">+18.7% from last year</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="mb-6">
            <TabsList>
              <TabsTrigger value="overview">{t.overview}</TabsTrigger>
              <TabsTrigger value="details">{t.details}</TabsTrigger>
              <TabsTrigger value="community">{t.community}</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>2023 {t.title}</CardTitle>
                  <CardDescription>
                    Monthly tracking of e-waste collection and environmental impact
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={impactData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="ewaste" stroke="#10B981" name="E-waste (kg)" strokeWidth={2} />
                        <Line type="monotone" dataKey="carbon" stroke="#3B82F6" name="Carbon (kg)" strokeWidth={2} />
                        <Line type="monotone" dataKey="trees" stroke="#D97706" name="Trees Saved" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="details">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.wasteTypes}</CardTitle>
                    <CardDescription>
                      Distribution of recycled materials by category
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={wasteTypeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {wasteTypeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={
                                ['#10B981', '#3B82F6', '#F59E0B', '#EC4899', '#8B5CF6'][index % 5]
                              } />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Progress</CardTitle>
                    <CardDescription>
                      E-waste collection growth over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={impactData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="ewaste" stroke="#10B981" fill="#10B98133" name="E-waste (kg)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="community">
              <Card>
                <CardHeader>
                  <CardTitle>{t.communityImpact}</CardTitle>
                  <CardDescription>
                    Contributions by different community segments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={communityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="individual" fill="#10B981" name="Individual" />
                        <Bar dataKey="community" fill="#3B82F6" name="Community Programs" />
                        <Bar dataKey="corporate" fill="#F59E0B" name="Corporate Partners" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end">
            <button className="bg-eco-green hover:bg-eco-green-dark text-white px-4 py-2 rounded-md font-medium">
              {t.downloadReport} (PDF)
            </button>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default DashboardAnalytics;
