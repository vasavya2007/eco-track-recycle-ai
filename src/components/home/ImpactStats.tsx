
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Recycle, 
  Leaf, 
  Cpu,
  Battery,
  Smartphone,
  Globe
} from 'lucide-react';

const ImpactStats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-eco-soft to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Make a Real Difference</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your contribution to e-waste recycling has a significant impact on our environment.
            See how our community is driving change together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="bg-eco-soft w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="h-8 w-8 text-eco-green" />
            </div>
            <div className="counter-wrapper">
              <p className="text-4xl font-bold text-eco-green-dark mb-2 font-poppins">150 tons</p>
              <p className="text-lg font-medium font-poppins">E-Waste Recycled</p>
              <p className="text-muted-foreground">Diverted from landfills this year</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="bg-eco-soft w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-eco-green" />
            </div>
            <div className="counter-wrapper">
              <p className="text-4xl font-bold text-eco-green-dark mb-2 font-poppins">34,280 kg</p>
              <p className="text-lg font-medium font-poppins">CO₂ Emissions Saved</p>
              <p className="text-muted-foreground">Equivalent to planting 1,570 trees</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="bg-eco-soft w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Battery className="h-8 w-8 text-eco-green" />
            </div>
            <div className="counter-wrapper">
              <p className="text-4xl font-bold text-eco-green-dark mb-2 font-poppins">562 MWh</p>
              <p className="text-lg font-medium font-poppins">Energy Recovered</p>
              <p className="text-muted-foreground">Powering 650 households for a month</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="bg-eco-soft w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-eco-green" />
            </div>
            <div className="counter-wrapper">
              <p className="text-4xl font-bold text-eco-green-dark mb-2 font-poppins">12,500+</p>
              <p className="text-lg font-medium font-poppins">Active Participants</p>
              <p className="text-muted-foreground">Growing community of eco-conscious users</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="bg-eco-soft w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-8 w-8 text-eco-green" />
            </div>
            <div className="counter-wrapper">
              <p className="text-4xl font-bold text-eco-green-dark mb-2 font-poppins">75,000+</p>
              <p className="text-lg font-medium font-poppins">Devices Recycled</p>
              <p className="text-muted-foreground">Including phones, laptops, and other electronics</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="bg-eco-soft w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Recycle className="h-8 w-8 text-eco-green" />
            </div>
            <div className="counter-wrapper">
              <p className="text-4xl font-bold text-eco-green-dark mb-2 font-poppins">85%</p>
              <p className="text-lg font-medium font-poppins">Material Recovery Rate</p>
              <p className="text-muted-foreground">Efficiently extracting valuable materials</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-6">Start making a difference today by recycling your e-waste with us.</p>
          <button className="bg-eco-green hover:bg-eco-green-dark text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 font-poppins">
            Schedule a Pickup
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
