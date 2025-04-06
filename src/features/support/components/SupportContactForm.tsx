
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface SupportContactFormProps {
  translations: {
    contactForm: {
      title: string;
      description: string;
      name: string;
      email: string;
      category: string;
      subject: string;
      message: string;
      categories: {
        general: string;
        technical: string;
        account: string;
        feedback: string;
        partnership: string;
      };
    };
    submit: string;
    submitting: string;
  };
}

const SupportContactForm: React.FC<SupportContactFormProps> = ({ translations: t }) => {
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Support Request Submitted",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.contactForm.title}</CardTitle>
        <CardDescription>
          {t.contactForm.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.contactForm.name}</label>
              <Input required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.contactForm.email}</label>
              <Input type="email" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.contactForm.category}</label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">{t.contactForm.categories.general}</SelectItem>
                  <SelectItem value="technical">{t.contactForm.categories.technical}</SelectItem>
                  <SelectItem value="account">{t.contactForm.categories.account}</SelectItem>
                  <SelectItem value="feedback">{t.contactForm.categories.feedback}</SelectItem>
                  <SelectItem value="partnership">{t.contactForm.categories.partnership}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.contactForm.subject}</label>
              <Input required />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">{t.contactForm.message}</label>
            <textarea 
              className="w-full min-h-[150px] border rounded-md p-3"
              required
            ></textarea>
          </div>
          <Button 
            type="submit" 
            disabled={submitting}
            className="bg-eco-green hover:bg-eco-green-dark"
          >
            {submitting ? t.submitting : t.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SupportContactForm;
