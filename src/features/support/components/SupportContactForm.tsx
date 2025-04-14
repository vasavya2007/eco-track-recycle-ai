
import React, { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface SupportContactFormProps {
  translations: any;
}

const formSchema = z.object({
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  category: z.string().min(1, { message: "Please select a category" }),
  message: z.string().min(20, { message: "Message must be at least 20 characters" }),
});

const SupportContactForm = ({ translations }: SupportContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  const t = translations;
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      category: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "Please sign in to submit a support ticket",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Generate a ticket number with current date and random numbers
      const date = new Date();
      const dateString = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}`;
      const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      const ticketNumber = `TCK-${dateString}-${randomNum}`;
      
      const { error } = await supabase
        .from('support_tickets')
        .insert({
          user_id: user.id,
          ticket_number: ticketNumber,
          subject: values.subject,
          description: values.message,
          status: 'pending'
        });
      
      if (error) throw error;
      
      toast({
        title: t.ticketSubmitted,
        description: t.ticketConfirmation,
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error('Error submitting ticket:', error);
      toast({
        variant: "destructive",
        title: t.errorOccurred,
        description: t.tryAgain,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.contactSupport}</CardTitle>
        <CardDescription>
          {t.fillFormBelow}
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.subject}</FormLabel>
                  <FormControl>
                    <Input placeholder={t.subjectPlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.category}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t.selectCategory} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="general">{t.categoryGeneral}</SelectItem>
                      <SelectItem value="pickup">{t.categoryPickup}</SelectItem>
                      <SelectItem value="rewards">{t.categoryRewards}</SelectItem>
                      <SelectItem value="account">{t.categoryAccount}</SelectItem>
                      <SelectItem value="technical">{t.categoryTechnical}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.message}</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t.messagePlaceholder}
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full md:w-auto bg-eco-green hover:bg-eco-green-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t.submitting}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t.submitTicket}
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default SupportContactForm;
