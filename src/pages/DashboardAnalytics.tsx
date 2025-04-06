
import React, { useState } from 'react';
import { Layout } from "@/components/layout/Layout";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from '@/contexts/LanguageContext';
import { analyticsTranslations } from '@/features/analytics/translations';
import { Button } from '@/components/ui/button';

// Import custom components
import TimeRangeSelector from '@/features/analytics/components/TimeRangeSelector';
import ImpactSummaryCards from '@/features/analytics/components/ImpactSummaryCards';
import OverviewChart from '@/features/analytics/components/OverviewChart';
import DetailedAnalysis from '@/features/analytics/components/DetailedAnalysis';
import CommunityImpactChart from '@/features/analytics/components/CommunityImpactChart';

const DashboardAnalytics = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  const { language } = useLanguage();
  const t = analyticsTranslations[language.code as keyof typeof analyticsTranslations] || analyticsTranslations.en;

  const handleTimeRangeChange = (value: string) => {
    setTimeRange(value);
  };

  return (
    <Layout>
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 bg-background">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{t.title}</h1>
            <TimeRangeSelector onChange={handleTimeRangeChange} />
          </div>

          <ImpactSummaryCards />

          <Tabs defaultValue="overview" className="mb-6">
            <TabsList>
              <TabsTrigger value="overview">{t.overview}</TabsTrigger>
              <TabsTrigger value="details">{t.details}</TabsTrigger>
              <TabsTrigger value="community">{t.community}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <OverviewChart />
            </TabsContent>
            
            <TabsContent value="details">
              <DetailedAnalysis />
            </TabsContent>
            
            <TabsContent value="community">
              <CommunityImpactChart />
            </TabsContent>
          </Tabs>

          <div className="flex justify-end">
            <Button className="bg-eco-green hover:bg-eco-green-dark text-white">
              {t.downloadReport} (PDF)
            </Button>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default DashboardAnalytics;
