
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, ShieldCheck, Building, Calculator, BookOpen, Play, FileText, Download } from 'lucide-react';

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-eco-green/10 to-eco-blue/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Learn About E-Waste Management</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Explore our educational resources to understand the importance of proper e-waste disposal
                and how our innovative solutions are making a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Resources
                </Button>
                <Button variant="outline">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Video Guides
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-16 bg-background">
          <div className="container">
            <Tabs defaultValue="guides" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-2xl grid-cols-4">
                  <TabsTrigger value="guides">Guides</TabsTrigger>
                  <TabsTrigger value="research">Research</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                  <TabsTrigger value="faq">FAQs</TabsTrigger>
                </TabsList>
              </div>

              {/* Guides Tab */}
              <TabsContent value="guides" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>E-Waste Basics</CardTitle>
                      <CardDescription>Understanding electronic waste and its impact</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Learn about the different categories of e-waste, their environmental impact, and why proper disposal is crucial.</p>
                      <Button variant="outline" className="w-full">
                        <FileText className="mr-2 h-4 w-4" />
                        Read Guide
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Recycling Process</CardTitle>
                      <CardDescription>How your e-waste is processed and recycled</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Explore the journey of your electronic waste from collection to material recovery and reuse.</p>
                      <Button variant="outline" className="w-full">
                        <FileText className="mr-2 h-4 w-4" />
                        Read Guide
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Home Sorting Tips</CardTitle>
                      <CardDescription>Properly sorting e-waste at home</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Simple yet effective techniques to sort different types of electronic waste before recycling.</p>
                      <Button variant="outline" className="w-full">
                        <FileText className="mr-2 h-4 w-4" />
                        Read Guide
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center">
                  <Button>View All Guides</Button>
                </div>
              </TabsContent>

              {/* Research Tab */}
              <TabsContent value="research" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Latest Research Papers</CardTitle>
                      <CardDescription>Academic insights on e-waste management</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li>
                          <a href="#" className="block hover:bg-muted p-3 rounded-lg transition-colors">
                            <p className="font-medium">Advancements in Plasma Arc Gasification for E-Waste</p>
                            <p className="text-sm text-muted-foreground">Published: March 2025</p>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block hover:bg-muted p-3 rounded-lg transition-colors">
                            <p className="font-medium">Environmental Impact of Rare Earth Recovery from PCBs</p>
                            <p className="text-sm text-muted-foreground">Published: February 2025</p>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block hover:bg-muted p-3 rounded-lg transition-colors">
                            <p className="font-medium">Blockchain Technology in Waste Management Supply Chains</p>
                            <p className="text-sm text-muted-foreground">Published: January 2025</p>
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>EcoTrack Research Initiative</CardTitle>
                      <CardDescription>Our contributions to e-waste research</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>
                        Our research team works with leading universities and research institutions to develop 
                        innovative solutions for e-waste management.
                      </p>
                      <p>
                        Current research areas include AI-powered material identification, energy-efficient recycling 
                        processes, and circular economy frameworks.
                      </p>
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Research Brief
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Videos Tab */}
              <TabsContent value="videos" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <div className="aspect-video bg-muted relative rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-16 w-16 text-muted-foreground opacity-50" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>The E-Waste Crisis Explained</CardTitle>
                      <CardDescription>Duration: 8:45</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>An eye-opening look at the growing e-waste problem and its environmental impact.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <div className="aspect-video bg-muted relative rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-16 w-16 text-muted-foreground opacity-50" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>Inside an E-Waste Recycling Facility</CardTitle>
                      <CardDescription>Duration: 12:20</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Take a tour of our state-of-the-art recycling facility and see the process in action.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <div className="aspect-video bg-muted relative rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-16 w-16 text-muted-foreground opacity-50" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>How to Prepare Your E-Waste</CardTitle>
                      <CardDescription>Duration: 5:30</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>A step-by-step guide on how to prepare your electronic devices for recycling.</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* FAQ Tab */}
              <TabsContent value="faq" className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>Find answers to common questions about e-waste and our services</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-b pb-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="text-eco-blue h-5 w-5 mt-1" />
                        <div>
                          <h4 className="font-medium mb-1">What items qualify as e-waste?</h4>
                          <p className="text-muted-foreground">Electronic waste includes computers, phones, TVs, printers, batteries, appliances, and any device with electronic components or that needs electricity to function.</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-b pb-4">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="text-eco-green h-5 w-5 mt-1" />
                        <div>
                          <h4 className="font-medium mb-1">Is my data secure when I recycle my devices?</h4>
                          <p className="text-muted-foreground">Yes, we follow strict data security protocols. All devices undergo professional data wiping procedures that meet industry standards before recycling.</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-b pb-4">
                      <div className="flex items-start gap-3">
                        <Building className="text-eco-blue h-5 w-5 mt-1" />
                        <div>
                          <h4 className="font-medium mb-1">Do you work with businesses for large-scale recycling?</h4>
                          <p className="text-muted-foreground">Absolutely! We offer specialized corporate e-waste management programs with dedicated pickup services, compliance certificates, and detailed impact reports.</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start gap-3">
                        <Calculator className="text-eco-green h-5 w-5 mt-1" />
                        <div>
                          <h4 className="font-medium mb-1">How do you calculate environmental impact?</h4>
                          <p className="text-muted-foreground">We use scientific methodologies to calculate CO₂ emissions avoided, energy saved, and resources conserved based on the specific materials recovered through our recycling process.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-eco-green text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Recycle Responsibly?</h2>
              <p className="mb-8">
                Put your knowledge into action and join thousands of environmentally conscious individuals 
                making a difference through proper e-waste management.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-eco-green hover:bg-white/90">
                  Schedule a Pickup
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Upload Device Photo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
