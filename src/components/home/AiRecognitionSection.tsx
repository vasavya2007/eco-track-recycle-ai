
import React from 'react';
import { Button } from "@/components/ui/button";
import { Upload, Search, Cpu } from 'lucide-react';

const AiRecognitionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-eco-green/10 via-eco-blue/5 to-eco-green/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                alt="AI analyzing e-waste" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center gap-2">
                <Cpu className="text-eco-green h-10 w-10" />
                <div>
                  <p className="font-semibold">Smart Detection</p>
                  <p className="text-sm text-muted-foreground">95% accuracy rate</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-eco-green/10 text-eco-green px-4 py-2 rounded-full">
              <Search className="h-5 w-5" />
              <span className="font-medium">AI-Powered Recognition</span>
            </div>
            
            <h2 className="text-3xl font-bold">Let Our AI Identify Your E-Waste</h2>
            
            <p className="text-lg text-muted-foreground">
              Simply upload a photo of your electronic device, and our advanced AI will:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-eco-green/20 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-eco-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Identify the type and brand of your device</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-eco-green/20 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-eco-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Detect hazardous components that require special handling</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-eco-green/20 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-eco-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Provide the optimal recycling or repurposing methods</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-eco-green/20 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-eco-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Estimate the environmental impact of proper recycling</span>
              </li>
            </ul>
            
            <div className="pt-4">
              <Button className="bg-eco-blue hover:bg-eco-blue-dark">
                <Upload className="mr-2 h-4 w-4" />
                Upload Device Photo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiRecognitionSection;
