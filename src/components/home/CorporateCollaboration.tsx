
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  BadgeCheck, 
  Share2, 
  BarChart3, 
  ChartBar,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CorporateCollaboration = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-eco-soft text-eco-green">For Companies</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Corporate Collaboration Programs</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Partner with us to implement sustainable e-waste management solutions for your company and contribute to a greener future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-md transition-transform hover:translate-y-[-5px]">
            <CardHeader className="pb-3">
              <div className="bg-eco-soft w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-eco-green" />
              </div>
              <CardTitle className="font-poppins">Corporate Responsibility</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Fulfill your corporate social responsibility goals with our complete e-waste management solutions.
                Receive detailed reports on your environmental impact.
              </CardDescription>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardFooter>
          </Card>

          <Card className="shadow-md transition-transform hover:translate-y-[-5px]">
            <CardHeader className="pb-3">
              <div className="bg-eco-soft w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BadgeCheck className="h-6 w-6 text-eco-green" />
              </div>
              <CardTitle className="font-poppins">Certification Program</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Get recognized as an environmentally responsible business with our certification program.
                Enhance your brand value among eco-conscious consumers.
              </CardDescription>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full">Get Certified</Button>
            </CardFooter>
          </Card>

          <Card className="shadow-md transition-transform hover:translate-y-[-5px]">
            <CardHeader className="pb-3">
              <div className="bg-eco-soft w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Share2 className="h-6 w-6 text-eco-green" />
              </div>
              <CardTitle className="font-poppins">Partner Network</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Join our network of industry partners committed to sustainable e-waste management.
                Collaborate on innovation and research initiatives.
              </CardDescription>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full">Join Network</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-eco-soft rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-poppins">Premium Benefits for Corporate Partners</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <TrendingUp className="h-5 w-5 text-eco-green" />
                  </div>
                  <div>
                    <p className="font-medium font-poppins">Advanced Analytics Dashboard</p>
                    <p className="text-muted-foreground">Detailed insights on your company's e-waste management metrics and environmental impact.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <ChartBar className="h-5 w-5 text-eco-green" />
                  </div>
                  <div>
                    <p className="font-medium font-poppins">Custom Reporting</p>
                    <p className="text-muted-foreground">Tailored reports for regulatory compliance and sustainability communications.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <BarChart3 className="h-5 w-5 text-eco-green" />
                  </div>
                  <div>
                    <p className="font-medium font-poppins">Real-time Tracking</p>
                    <p className="text-muted-foreground">Monitor your e-waste journey from collection to recycling with our blockchain-based system.</p>
                  </div>
                </li>
              </ul>
              <Button asChild className="mt-6 bg-eco-green hover:bg-eco-green-dark">
                <Link to="/corporate">Request a Demo</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Corporate partnership" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-sm font-medium text-eco-green font-poppins">Join 50+ companies already making an impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateCollaboration;
