
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Recycle, BarChart, Upload, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 hero-gradient opacity-20"></div>
      
      {/* Content */}
      <div className="container relative pt-20 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Smart <span className="text-eco-green">E-Waste</span> Management
              <br />
              <span className="text-eco-blue">Powered by AI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Join our innovative platform to track, recycle, and repurpose electronic waste efficiently while making a positive environmental impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark text-white">
                <Link to="/schedule-pickup">Schedule Pickup</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/learn-more">Learn More</Link>
              </Button>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="text-center p-3 rounded-lg bg-white/80 shadow-sm">
                <p className="text-3xl font-bold text-eco-green">15K+</p>
                <p className="text-sm text-muted-foreground">Devices Recycled</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/80 shadow-sm">
                <p className="text-3xl font-bold text-eco-green">50+</p>
                <p className="text-sm text-muted-foreground">Partner Companies</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/80 shadow-sm">
                <p className="text-3xl font-bold text-eco-green">120T</p>
                <p className="text-sm text-muted-foreground">CO₂ Reduced</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/80 shadow-sm">
                <p className="text-3xl font-bold text-eco-green">8K+</p>
                <p className="text-sm text-muted-foreground">Happy Users</p>
              </div>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="eco-card p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="eco-icon-bg w-fit mb-4">
                <Recycle className="h-8 w-8 text-eco-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Blockchain Tracking</h3>
              <p className="text-muted-foreground">Track your e-waste journey transparently using our blockchain technology.</p>
            </div>
            <div className="eco-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="eco-icon-bg w-fit mb-4">
                <Upload className="h-8 w-8 text-eco-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Recognition</h3>
              <p className="text-muted-foreground">Upload images of your e-waste for proper identification and disposal guidance.</p>
            </div>
            <div className="eco-card p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="eco-icon-bg w-fit mb-4">
                <Calendar className="h-8 w-8 text-eco-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scheduled Pickups</h3>
              <p className="text-muted-foreground">Schedule convenient pickup times for your electronic waste items.</p>
            </div>
            <div className="eco-card p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="eco-icon-bg w-fit mb-4">
                <BarChart className="h-8 w-8 text-eco-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact Dashboard</h3>
              <p className="text-muted-foreground">View your personal environmental impact through an intuitive dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
