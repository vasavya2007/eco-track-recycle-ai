
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: Record<string, FAQ[]>;
  searchQuery: string;
  translations: {
    faq: string;
    faqCategories: Record<string, string>;
  };
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, searchQuery, translations: t }) => {
  const filteredFaqs = Object.entries(faqs).reduce((acc, [category, questions]) => {
    if (searchQuery) {
      const filtered = questions.filter(
        faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[category] = filtered;
      }
    } else {
      acc[category] = questions;
    }
    return acc;
  }, {} as Record<string, FAQ[]>);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.faq}</CardTitle>
        <CardDescription>
          Find answers to commonly asked questions about our services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="general">{t.faqCategories.general}</TabsTrigger>
            <TabsTrigger value="recycling">{t.faqCategories.recycling}</TabsTrigger>
            <TabsTrigger value="account">{t.faqCategories.account}</TabsTrigger>
            <TabsTrigger value="rewards">{t.faqCategories.rewards}</TabsTrigger>
            <TabsTrigger value="technical">{t.faqCategories.technical}</TabsTrigger>
          </TabsList>
          
          {Object.entries(t.faqCategories).map(([category, label]) => (
            <TabsContent key={category} value={category}>
              <Accordion type="single" collapsible className="w-full">
                {(filteredFaqs[category as keyof typeof faqs] || []).map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
                {filteredFaqs[category as keyof typeof faqs]?.length === 0 && (
                  <p className="text-center py-6 text-muted-foreground">
                    No FAQs found matching your query.
                  </p>
                )}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FAQSection;
