
import React, { useState } from 'react';
import { Layout } from "@/components/layout/Layout";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from 'lucide-react';

import SupportOptions from "@/features/support/components/SupportOptions";
import FAQSection from "@/features/support/components/FAQSection";
import SupportContactForm from "@/features/support/components/SupportContactForm";
import SupportTickets from "@/features/support/components/SupportTickets";
import ResourcesSection from "@/features/support/components/ResourcesSection";
import { supportTranslations } from "@/features/support/translations";
import { faqData } from "@/features/support/data/faqData";
import { supportTicketsData } from "@/features/support/data/ticketsData";

const DashboardSupport = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Default to English if the language is not supported
  const t = supportTranslations[language.code as keyof typeof supportTranslations] || supportTranslations.en;

  return (
    <Layout>
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 bg-background">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{t.title}</h1>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <SupportOptions translations={t} />

          <div className="space-y-6">
            <Tabs defaultValue="faq">
              <TabsList className="mb-6">
                <TabsTrigger value="faq">{t.faq}</TabsTrigger>
                <TabsTrigger value="contact">{t.contactUs}</TabsTrigger>
                <TabsTrigger value="tickets">{t.supportTickets}</TabsTrigger>
                <TabsTrigger value="resources">{t.resources}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="faq">
                <FAQSection 
                  faqs={faqData} 
                  searchQuery={searchQuery} 
                  translations={t}
                />
              </TabsContent>
              
              <TabsContent value="contact">
                <SupportContactForm translations={t} />
              </TabsContent>
              
              <TabsContent value="tickets">
                <SupportTickets 
                  tickets={supportTicketsData}
                  translations={t}
                />
              </TabsContent>
              
              <TabsContent value="resources">
                <ResourcesSection translations={t} />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default DashboardSupport;
