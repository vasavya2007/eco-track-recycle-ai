
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Clock, Download, FileText, Info, Leaf, Play, Share2, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-eco-green text-white py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">E-Waste Education Center</h1>
              <p className="text-xl opacity-90 mb-6">
                Learn about responsible e-waste management and sustainable practices
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-eco-green hover:bg-white/90">
                  <Book className="mr-2 h-4 w-4" />
                  Browse Resources
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guides
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="articles" className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-lg grid-cols-3">
                  <TabsTrigger value="articles" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span className="hidden sm:inline">Articles</span>
                  </TabsTrigger>
                  <TabsTrigger value="videos" className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    <span className="hidden sm:inline">Videos</span>
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="flex items-center gap-2">
                    <Book className="h-4 w-4" />
                    <span className="hidden sm:inline">Resources</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="articles">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article, index) => (
                    <Card key={index} className="overflow-hidden flex flex-col">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs bg-eco-soft text-eco-green">
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {article.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{article.title}</CardTitle>
                        <CardDescription className="line-clamp-2 mt-2">
                          {article.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="pt-0 flex justify-between">
                        <Button variant="link" className="text-eco-green p-0">
                          Read Article
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="outline">Load More Articles</Button>
                </div>
              </TabsContent>

              <TabsContent value="videos">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {videos.map((video, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-eco-green rounded-full p-4 bg-opacity-90 hover:bg-opacity-100 transition-all cursor-pointer">
                            <Play className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{video.title}</CardTitle>
                        <CardDescription>{video.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="ghost" className="text-eco-green">
                          Watch Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="outline">View All Videos</Button>
                </div>
              </TabsContent>

              <TabsContent value="resources">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.map((resource, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="bg-eco-soft p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                          <resource.icon className="h-6 w-6 text-eco-green" />
                        </div>
                        <CardTitle>{resource.title}</CardTitle>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button 
                          variant="outline" 
                          className="w-full flex justify-between bg-eco-soft text-eco-green hover:bg-eco-soft/80"
                        >
                          <span>Download</span>
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 bg-accent">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Learn more about e-waste management and our recycling process
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid gap-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-start gap-3">
                      <Info className="h-6 w-6 text-eco-green shrink-0 mt-1" />
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Sample data for the education page
const articles = [
  {
    title: "The Hidden Dangers of Improperly Disposed E-Waste",
    description: "Learn about the environmental and health risks associated with improperly disposed electronic waste and how to mitigate them.",
    image: "https://images.unsplash.com/photo-1612965110667-4175a7e27fa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Environmental Impact",
    readTime: "5 min read"
  },
  {
    title: "Precious Metals Recovery from Electronic Devices",
    description: "Discover how valuable metals like gold, silver, and platinum are recovered from old electronics in an environmentally responsible way.",
    image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Recycling Process",
    readTime: "7 min read"
  },
  {
    title: "Extending the Life of Your Electronic Devices",
    description: "Simple maintenance tips and practices that can significantly extend the lifespan of your devices and reduce e-waste generation.",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1901&q=80",
    category: "Sustainable Practices",
    readTime: "4 min read"
  },
  {
    title: "E-Waste Legislation Around the World",
    description: "A comprehensive look at how different countries are addressing the e-waste challenge through legislation and policy initiatives.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    category: "Policy & Governance",
    readTime: "8 min read"
  },
  {
    title: "Plasma Arc Gasification: The Future of E-Waste Processing",
    description: "Explore how plasma arc technology is revolutionizing e-waste processing with higher efficiency and lower environmental impact.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Innovation",
    readTime: "6 min read"
  },
  {
    title: "Teaching Children About E-Waste Responsibility",
    description: "Educational approaches and activities to help children understand the importance of responsible electronic waste management.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Education",
    readTime: "5 min read"
  }
];

const videos = [
  {
    title: "Inside Our State-of-the-Art Recycling Facility",
    description: "Take a virtual tour of our advanced e-waste processing facility and see how we handle electronic waste.",
    thumbnail: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "12:45"
  },
  {
    title: "How to Prepare Your Devices for Recycling",
    description: "Learn the proper steps to prepare your electronic devices for recycling, including data wiping and removal of batteries.",
    thumbnail: "https://images.unsplash.com/photo-1574482620197-1b752b8cf4cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
    duration: "08:32"
  },
  {
    title: "The Journey of an E-Waste Item",
    description: "Follow the complete journey of an electronic device from collection to material recovery and reuse.",
    thumbnail: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "15:20"
  },
  {
    title: "CO₂ Capture and Utilization in E-Waste Processing",
    description: "Discover how we capture carbon dioxide during the recycling process and repurpose it for various applications.",
    thumbnail: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "11:15"
  }
];

const resources = [
  {
    title: "E-Waste Recycling Guide",
    description: "A comprehensive guide to responsible electronic waste disposal and recycling practices.",
    icon: BookOpen
  },
  {
    title: "Hazardous Materials in Electronics",
    description: "Learn about the common hazardous materials in electronic devices and their environmental impact.",
    icon: AlertCircle
  },
  {
    title: "Data Security & Device Recycling",
    description: "Best practices for protecting your personal data when recycling electronic devices.",
    icon: ShieldCheck
  },
  {
    title: "Corporate E-Waste Management",
    description: "Guidelines for businesses to implement effective electronic waste management programs.",
    icon: Building
  },
  {
    title: "Environmental Impact Calculator",
    description: "Calculate the environmental benefit of recycling your electronic devices properly.",
    icon: Calculator
  },
  {
    title: "E-Waste Policy Framework",
    description: "Understanding regulatory frameworks and compliance requirements for e-waste management.",
    icon: FileText
  }
];

const faqs = [
  {
    question: "What types of electronic waste do you accept?",
    answer: "We accept almost all types of electronic devices including computers, laptops, smartphones, tablets, TVs, monitors, printers, scanners, audio equipment, gaming consoles, and small household appliances. We also accept batteries, cables, and chargers."
  },
  {
    question: "How is my data protected when recycling devices?",
    answer: "We take data security very seriously. All data-containing devices undergo a certified data wiping process that complies with Department of Defense standards. For added peace of mind, we also physically destroy storage media upon request."
  },
  {
    question: "What happens to my e-waste after collection?",
    answer: "After collection, your e-waste is transported to our processing facility where it's sorted, disassembled, and processed. Valuable materials are extracted and recycled, while hazardous components are safely handled according to environmental regulations."
  },
  {
    question: "How does your blockchain tracking system work?",
    answer: "Each batch of collected e-waste receives a unique QR code linked to our blockchain system. As your items move through the recycling process, the blockchain is updated at each stage. You can scan the QR code at any time to see the real-time status and location of your e-waste."
  },
  {
    question: "Can I earn money from recycling my electronics?",
    answer: "While we don't typically pay cash for standard consumer electronics, our rewards program offers points and discount coupons based on the type and quantity of devices you recycle. These points can be redeemed for eco-friendly products or services from our partner stores."
  }
];

// Additional component imports needed for the resources section
const AlertCircle = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 13c0 5-4 7-8 7s-8-2-8-7V5a1 1 0 0 1 1-1c4 0 7.1-1 8-3 .9 2 4 3 8 3a1 1 0 0 1 1 1v8Z"></path>
    <path d="m9 13 2 2 4-4"></path>
  </svg>
);

const Building = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
    <path d="M9 22v-4h6v4"></path>
    <path d="M8 6h.01"></path>
    <path d="M16 6h.01"></path>
    <path d="M12 6h.01"></path>
    <path d="M12 10h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M16 10h.01"></path>
    <path d="M16 14h.01"></path>
    <path d="M8 10h.01"></path>
    <path d="M8 14h.01"></path>
  </svg>
);

const Calculator = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="16" height="20" x="4" y="2" rx="2"></rect>
    <line x1="8" x2="16" y1="6" y2="6"></line>
    <line x1="16" x2="16" y1="14" y2="18"></line>
    <path d="M16 10h.01"></path>
    <path d="M12 10h.01"></path>
    <path d="M8 10h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M8 14h.01"></path>
    <path d="M12 18h.01"></path>
    <path d="M8 18h.01"></path>
  </svg>
);

export default Education;
