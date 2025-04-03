
import React from 'react';
import { Upload, Truck, Database, Award } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload & Identify',
    description: 'Upload photos of your e-waste or schedule a pickup directly through our platform.',
    color: 'bg-eco-green'
  },
  {
    icon: Truck,
    title: 'Collection Service',
    description: 'Our eco-friendly fleet collects your items at your preferred time and location.',
    color: 'bg-eco-blue'
  },
  {
    icon: Database,
    title: 'Track & Monitor',
    description: 'Follow your e-waste journey with our blockchain-based transparent tracking system.',
    color: 'bg-eco-green-dark'
  },
  {
    icon: Award,
    title: 'Earn Rewards',
    description: 'Receive points and eco-coupons for your contribution to a sustainable future.',
    color: 'bg-eco-blue-dark'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-eco-soft opacity-40"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-eco-soft opacity-40"></div>
      </div>
      
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process makes responsible e-waste disposal simple and rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-eco-green-light"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 relative z-10`}>
                <step.icon size={32} />
                <div className="absolute inset-0 rounded-full animate-ripple bg-white opacity-20"></div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm w-full">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div className="hidden lg:flex absolute top-24 text-2xl font-bold text-eco-green left-1/2 -translate-x-1/2 bg-background px-4">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
