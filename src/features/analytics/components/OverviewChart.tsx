
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { impactData } from '../data/analyticsData';
import { useLanguage } from '@/contexts/LanguageContext';
import { analyticsTranslations } from '../translations';

const OverviewChart: React.FC = () => {
  const { language } = useLanguage();
  const t = analyticsTranslations[language.code as keyof typeof analyticsTranslations] || analyticsTranslations.en;

  return (
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
  );
};

export default OverviewChart;
