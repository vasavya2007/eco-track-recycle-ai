
import React from 'react';
import { BarChart, LineChart, Bar, Area } from "recharts";

// Sample data for the charts
const carbonData = [
  { name: 'Jan', reduced: 40 },
  { name: 'Feb', reduced: 55 },
  { name: 'Mar', reduced: 45 },
  { name: 'Apr', reduced: 60 },
  { name: 'May', reduced: 75 },
  { name: 'Jun', reduced: 65 },
  { name: 'Jul', reduced: 80 },
  { name: 'Aug', reduced: 95 },
  { name: 'Sep', reduced: 85 },
  { name: 'Oct', reduced: 100 },
  { name: 'Nov', reduced: 110 },
  { name: 'Dec', reduced: 120 },
];

const energyData = [
  { name: 'Jan', energy: 60 },
  { name: 'Feb', energy: 70 },
  { name: 'Mar', energy: 65 },
  { name: 'Apr', energy: 80 },
  { name: 'May', energy: 95 },
  { name: 'Jun', energy: 85 },
  { name: 'Jul', energy: 100 },
  { name: 'Aug', energy: 110 },
  { name: 'Sep', energy: 105 },
  { name: 'Oct', energy: 120 },
  { name: 'Nov', energy: 125 },
  { name: 'Dec', energy: 135 },
];

const recyclingData = [
  { name: 'Electronics', value: 400 },
  { name: 'Batteries', value: 300 },
  { name: 'Appliances', value: 350 },
  { name: 'Computers', value: 280 },
  { name: 'Phones', value: 200 },
];

const EnvironmentalImpact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Environmental Impact</h2>
          <p className="text-muted-foreground text-lg">
            See how our AI-powered e-waste management is making a difference for our planet
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CO₂ Reduction */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">CO₂ Reduction</h3>
            <div className="h-64">
              <LineChart width={350} height={250} data={carbonData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorReduced" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3A8069" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3A8069" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="reduced" stroke="#3A8069" fillOpacity={1} fill="url(#colorReduced)" />
              </LineChart>
            </div>
            <div className="text-center mt-4">
              <p className="text-3xl font-bold text-eco-green">120 Tons</p>
              <p className="text-sm text-muted-foreground">CO₂ Emissions Avoided</p>
            </div>
          </div>
          
          {/* Energy Production */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">Energy Production</h3>
            <div className="h-64">
              <LineChart width={350} height={250} data={energyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1A73E8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#1A73E8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="energy" stroke="#1A73E8" fillOpacity={1} fill="url(#colorEnergy)" />
              </LineChart>
            </div>
            <div className="text-center mt-4">
              <p className="text-3xl font-bold text-eco-blue">135 MWh</p>
              <p className="text-sm text-muted-foreground">Clean Energy Generated</p>
            </div>
          </div>
          
          {/* Recycling Categories */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">Recycling Breakdown</h3>
            <div className="h-64">
              <BarChart width={350} height={250} data={recyclingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#57BB8A" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#57BB8A" stopOpacity={0.4}/>
                  </linearGradient>
                </defs>
                <Bar dataKey="value" fill="url(#colorBar)" barSize={30} radius={[4, 4, 0, 0]} />
              </BarChart>
            </div>
            <div className="text-center mt-4">
              <p className="text-3xl font-bold text-eco-green-light">1,530 Kg</p>
              <p className="text-sm text-muted-foreground">Total E-Waste Recycled</p>
            </div>
          </div>
        </div>
        
        {/* Impact metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          <div className="bg-eco-soft p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-eco-green">8,400+</p>
            <p className="text-muted-foreground">Users Registered</p>
          </div>
          <div className="bg-eco-soft p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-eco-green">15,200+</p>
            <p className="text-muted-foreground">Devices Recycled</p>
          </div>
          <div className="bg-eco-soft p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-eco-green">94%</p>
            <p className="text-muted-foreground">Recovery Rate</p>
          </div>
          <div className="bg-eco-soft p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-eco-green">12,500+</p>
            <p className="text-muted-foreground">Trees Saved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalImpact;
