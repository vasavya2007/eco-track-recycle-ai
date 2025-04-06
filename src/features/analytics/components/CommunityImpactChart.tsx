
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { communityData } from '../data/analyticsData';
import { useLanguage } from '@/contexts/LanguageContext';
import { analyticsTranslations } from '../translations';

const CommunityImpactChart: React.FC = () => {
  const { language } = useLanguage();
  const t = analyticsTranslations[language.code as keyof typeof analyticsTranslations] || analyticsTranslations.en;

  return (
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
  );
};

export default CommunityImpactChart;
