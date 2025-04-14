
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  searchQuery: string;
  translations: {
    faq: string;
    faqCategories?: Record<string, string>;
  };
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, searchQuery, translations: t }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // Default category names if translations not provided
  const faqCategories = t.faqCategories || {
    all: "All Questions",
    general: "General",
    pickup: "Pickups & Collection",
    reward: "Rewards & Points",
    account: "Account & Billing",
    technical: "Technical Support"
  };

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Group FAQs by category
  const categories = ["all", ...new Set(faqs.map(faq => faq.category))];

  return (
    <Card>
      <Tabs defaultValue="all" onValueChange={setActiveCategory}>
        <TabsList className="w-full overflow-x-auto flex-wrap justify-start p-1">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="text-sm">
              {faqCategories[category] || category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <CardContent className="pt-6">
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="py-10 text-center">
                  <p className="text-muted-foreground">No FAQs match your search.</p>
                </div>
              )}
            </CardContent>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
};

export default FAQSection;
