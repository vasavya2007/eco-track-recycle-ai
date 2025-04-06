
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';
import { analyticsTranslations } from '../translations';

const ImpactSummaryCards: React.FC = () => {
  const { language } = useLanguage();
  const t = analyticsTranslations[language.code as keyof typeof analyticsTranslations] || analyticsTranslations.en;

  return (
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
  );
};

export default ImpactSummaryCards;
