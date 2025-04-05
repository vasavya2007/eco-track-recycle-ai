
import React, { useState } from 'react';
import { Layout } from "@/components/layout/Layout";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FileText, HelpCircle, MessageSquare, Phone, Search, User } from 'lucide-react';

const DashboardSupport = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const translations = {
    en: {
      title: "Help & Support",
      search: "Search for help",
      faq: "Frequently Asked Questions",
      contactUs: "Contact Us",
      supportTickets: "Support Tickets",
      resources: "Resources",
      submit: "Submit",
      submitting: "Submitting...",
      contactForm: {
        title: "Get in Touch",
        description: "Fill out the form below and we'll get back to you as soon as possible.",
        name: "Your Name",
        email: "Email Address",
        category: "Category",
        subject: "Subject",
        message: "Message",
        categories: {
          general: "General Inquiry",
          technical: "Technical Support",
          account: "Account Issues",
          feedback: "Feedback & Suggestions",
          partnership: "Partnership Opportunities"
        }
      },
      faqCategories: {
        general: "General",
        recycling: "Recycling",
        account: "Account",
        rewards: "Rewards",
        technical: "Technical"
      },
      supportOptions: {
        chat: "Live Chat",
        chatDesc: "Chat with our support team in real-time",
        email: "Email Support",
        emailDesc: "Send us an email and we'll respond within 24 hours",
        phone: "Phone Support",
        phoneDesc: "Call us directly at +1 (555) 123-4567",
        chatNow: "Chat Now",
        sendEmail: "Send Email",
        call: "Call Now"
      },
      ticketStatus: {
        open: "Open",
        inProgress: "In Progress",
        resolved: "Resolved",
        closed: "Closed"
      }
    },
    es: {
      title: "Ayuda y Soporte",
      search: "Buscar ayuda",
      faq: "Preguntas Frecuentes",
      contactUs: "Contáctenos",
      supportTickets: "Tickets de Soporte",
      resources: "Recursos",
      submit: "Enviar",
      submitting: "Enviando...",
      contactForm: {
        title: "Ponte en Contacto",
        description: "Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.",
        name: "Tu Nombre",
        email: "Correo Electrónico",
        category: "Categoría",
        subject: "Asunto",
        message: "Mensaje",
        categories: {
          general: "Consulta General",
          technical: "Soporte Técnico",
          account: "Problemas de Cuenta",
          feedback: "Comentarios y Sugerencias",
          partnership: "Oportunidades de Colaboración"
        }
      },
      faqCategories: {
        general: "General",
        recycling: "Reciclaje",
        account: "Cuenta",
        rewards: "Recompensas",
        technical: "Técnico"
      },
      supportOptions: {
        chat: "Chat en Vivo",
        chatDesc: "Chatea con nuestro equipo de soporte en tiempo real",
        email: "Soporte por Correo",
        emailDesc: "Envíanos un correo y responderemos dentro de 24 horas",
        phone: "Soporte Telefónico",
        phoneDesc: "Llámanos directamente al +1 (555) 123-4567",
        chatNow: "Chatear Ahora",
        sendEmail: "Enviar Correo",
        call: "Llamar Ahora"
      },
      ticketStatus: {
        open: "Abierto",
        inProgress: "En Progreso",
        resolved: "Resuelto",
        closed: "Cerrado"
      }
    }
  };
  
  // Default to English if the language is not supported
  const t = translations[language.code as keyof typeof translations] || translations.en;

  // Sample FAQ data
  const faqs = {
    general: [
      {
        question: "What is EcoTrack?",
        answer: "EcoTrack is a smart e-waste management platform that helps individuals and businesses responsibly dispose of electronic waste. We use AI and blockchain technology to track the recycling process and reward users for their sustainable actions."
      },
      {
        question: "How do I get started with EcoTrack?",
        answer: "Getting started is easy! Simply create an account, schedule your first e-waste pickup or find a drop-off location near you. Our app will guide you through the process and track your environmental impact."
      },
      {
        question: "Is EcoTrack available in my area?",
        answer: "EcoTrack is currently available in major metropolitan areas across the United States, Canada, and select European countries. We're rapidly expanding to new locations. You can check service availability in your area by entering your zip code in the app."
      }
    ],
    recycling: [
      {
        question: "What types of e-waste can I recycle?",
        answer: "We accept a wide range of electronic devices including computers, laptops, smartphones, tablets, printers, small household appliances, batteries, and more. Some hazardous materials or extremely large appliances may require special handling."
      },
      {
        question: "How do I schedule a pickup?",
        answer: "You can schedule a pickup directly through our app or website. Simply select 'Schedule Pickup' from the main menu, enter the details about the items you're recycling, choose a convenient date and time, and our team will take care of the rest."
      },
      {
        question: "Is there a minimum amount of e-waste required for pickup?",
        answer: "For free standard pickups, we require a minimum of 10kg of e-waste. However, smaller amounts can be picked up for a small service fee or dropped off at one of our collection points."
      }
    ],
    account: [
      {
        question: "How do I reset my password?",
        answer: "To reset your password, click on the 'Forgot Password' link on the login page. Enter the email address associated with your account, and we'll send you a link to create a new password."
      },
      {
        question: "Can I have multiple addresses on my account?",
        answer: "Yes, you can add multiple addresses to your account. This is especially useful if you want to schedule pickups from different locations, such as your home and office."
      },
      {
        question: "How can I delete my account?",
        answer: "To delete your account, go to Settings > Privacy & Security, and select 'Delete My Account'. Please note that this action is irreversible and will permanently remove all your data from our system."
      }
    ],
    rewards: [
      {
        question: "How do I earn Green Points?",
        answer: "You earn Green Points for every recycling action you take through our platform. This includes scheduling pickups, dropping off e-waste at collection points, completing educational modules, and participating in community initiatives."
      },
      {
        question: "What can I redeem my Green Points for?",
        answer: "Green Points can be redeemed for various rewards including discounts on eco-friendly products, free recycling services, gift cards, and donations to environmental causes. Check the Rewards section in the app for the current offerings."
      },
      {
        question: "Do my Green Points expire?",
        answer: "Green Points are valid for 12 months from the date they are earned. We'll send you a notification before any points are about to expire so you have a chance to redeem them."
      }
    ],
    technical: [
      {
        question: "The app is not recognizing my items during AI scan. What should I do?",
        answer: "Make sure you have good lighting when scanning items. Try placing the item against a plain background and ensure the entire item is visible in the frame. If issues persist, you can manually select the item type from our catalog."
      },
      {
        question: "Can I use EcoTrack on my computer?",
        answer: "Yes, EcoTrack is available as both a mobile app and a web application. You can access all features through our website using any modern web browser."
      },
      {
        question: "My points aren't showing up after a recent pickup. What should I do?",
        answer: "Points are usually credited within 24-48 hours after a successful pickup or drop-off. If you haven't received your points after this time, please contact our support team with your pickup reference number."
      }
    ]
  };

  // Sample support tickets
  const supportTickets = [
    {
      id: "TCK-2023-06-001",
      subject: "Pickup Scheduling Issue",
      created: "2023-06-15",
      status: "resolved",
      lastUpdate: "2023-06-17"
    },
    {
      id: "TCK-2023-06-002",
      subject: "Points Not Credited",
      created: "2023-06-20",
      status: "inProgress",
      lastUpdate: "2023-06-21"
    }
  ];

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
  }, {} as typeof faqs);

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-eco-green text-white">
              <CardHeader className="pb-2">
                <MessageSquare className="h-6 w-6 mb-2" />
                <CardTitle>{t.supportOptions.chat}</CardTitle>
                <CardDescription className="text-white/80">
                  {t.supportOptions.chatDesc}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="bg-white text-eco-green hover:bg-white/90 w-full">
                  {t.supportOptions.chatNow}
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-eco-blue text-white">
              <CardHeader className="pb-2">
                <Mail className="h-6 w-6 mb-2" />
                <CardTitle>{t.supportOptions.email}</CardTitle>
                <CardDescription className="text-white/80">
                  {t.supportOptions.emailDesc}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="bg-white text-eco-blue hover:bg-white/90 w-full">
                  {t.supportOptions.sendEmail}
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-amber-600 text-white">
              <CardHeader className="pb-2">
                <Phone className="h-6 w-6 mb-2" />
                <CardTitle>{t.supportOptions.phone}</CardTitle>
                <CardDescription className="text-white/80">
                  {t.supportOptions.phoneDesc}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="bg-white text-amber-600 hover:bg-white/90 w-full">
                  {t.supportOptions.call}
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            <Tabs defaultValue="faq">
              <TabsList className="mb-6">
                <TabsTrigger value="faq">{t.faq}</TabsTrigger>
                <TabsTrigger value="contact">{t.contactUs}</TabsTrigger>
                <TabsTrigger value="tickets">{t.supportTickets}</TabsTrigger>
                <TabsTrigger value="resources">{t.resources}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="faq">
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
              </TabsContent>
              
              <TabsContent value="contact">
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
              </TabsContent>
              
              <TabsContent value="tickets">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.supportTickets}</CardTitle>
                    <CardDescription>
                      Track the status of your support requests
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {supportTickets.length > 0 ? (
                      <div className="space-y-4">
                        {supportTickets.map((ticket) => (
                          <Card key={ticket.id} className="overflow-hidden">
                            <div className="p-4 flex items-center justify-between">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <p className="font-medium text-sm">{ticket.subject}</p>
                                  <Badge 
                                    variant={ticket.status === 'resolved' ? 'secondary' : 
                                            ticket.status === 'inProgress' ? 'outline' : 'default'}
                                    className={
                                      ticket.status === 'resolved' ? 'bg-green-100 text-green-800' : 
                                      ticket.status === 'inProgress' ? 'bg-blue-100 text-blue-800' : 
                                      ticket.status === 'open' ? 'bg-amber-100 text-amber-800' : 
                                      'bg-gray-100 text-gray-800'
                                    }
                                  >
                                    {t.ticketStatus[ticket.status as keyof typeof t.ticketStatus]}
                                  </Badge>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  <span>Ticket ID: {ticket.id}</span>
                                  <span className="mx-2">•</span>
                                  <span>Created: {new Date(ticket.created).toLocaleDateString()}</span>
                                  <span className="mx-2">•</span>
                                  <span>Last Updated: {new Date(ticket.lastUpdate).toLocaleDateString()}</span>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-10">
                        <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground mb-4">You don't have any active support tickets.</p>
                        <Button variant="outline">Create New Ticket</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.resources}</CardTitle>
                    <CardDescription>
                      Helpful guides and resources to get the most out of EcoTrack
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Getting Started Guide</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <p className="text-sm text-muted-foreground">
                            Learn the basics of using the EcoTrack platform and start your recycling journey.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            <FileText className="h-4 w-4 mr-2" />
                            View Guide
                          </Button>
                        </CardFooter>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Recycling Best Practices</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <p className="text-sm text-muted-foreground">
                            Tips and techniques for preparing your e-waste for maximum recycling efficiency.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            <FileText className="h-4 w-4 mr-2" />
                            View Guide
                          </Button>
                        </CardFooter>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Video Tutorials</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <p className="text-sm text-muted-foreground">
                            Visual guides showing how to use all features of the EcoTrack platform.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            <FileText className="h-4 w-4 mr-2" />
                            Watch Videos
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default DashboardSupport;
