
import React, { useState } from 'react';
import { Layout } from "@/components/layout/Layout";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from 'lucide-react';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

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

  // Extend t with supportOptions if it's not present
  const extendedTranslations = {
    ...t,
    supportOptions: t.supportOptions || {
      chat: "Live Chat",
      chatDesc: "Chat with our support team in real-time",
      email: "Email Support",
      emailDesc: "Get help via email within 24 hours",
      phone: "Phone Support",
      phoneDesc: "Call us directly for urgent issues",
      chatNow: "Chat Now",
      sendEmail: "Send Email",
      call: "Call Now",
      python: "Python Support",
      pythonDesc: "Get help with Python integrations and tools",
      exploreTools: "Explore Tools"
    },
    faqCategories: t.faqCategories || {
      all: "All Questions",
      general: "General",
      pickup: "Pickups & Collection",
      reward: "Rewards & Points",
      account: "Account & Billing",
      technical: "Technical Support"
    }
  };

  return (
    <ProtectedRoute>
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
            
            <SupportOptions translations={extendedTranslations} />

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
                    translations={extendedTranslations}
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
    </ProtectedRoute>
  );
};

export default DashboardSupport;
