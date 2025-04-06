
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from '@/contexts/LanguageContext';
import { analyticsTranslations } from '../translations';

interface TimeRangeSelectorProps {
  onChange?: (value: string) => void;
}

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({ onChange }) => {
  const { language } = useLanguage();
  const t = analyticsTranslations[language.code as keyof typeof analyticsTranslations] || analyticsTranslations.en;

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">{t.timeRange}:</span>
      <Select defaultValue="monthly" onValueChange={onChange}>
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
  );
};

export default TimeRangeSelector;
