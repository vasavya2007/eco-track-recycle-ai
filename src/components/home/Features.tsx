
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Scan, 
  Gift, 
  Award, 
  Recycle, 
  Upload, 
  Leaf, 
  Globe, 
  BarChart3
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'QR & Blockchain Tracking',
      description: 'Scan QR codes to track your e-waste journey through our transparent blockchain system.',
      icon: Scan,
      color: 'text-eco-blue'
    },
    {
      title: 'AI-Based Recognition',
      description: 'Upload images of electronic items for instant identification and disposal recommendations.',
      icon: Upload,
      color: 'text-eco-green'
    },
    {
      title: 'Reward System',
      description: 'Earn points and discount coupons for each recycling action you take on our platform.',
      icon: Gift,
      color: 'text-eco-blue-dark'
    },
    {
      title: 'Recycling Data',
      description: 'View real-time statistics on plasma arc gasification efficiency and energy production.',
      icon: BarChart3,
      color: 'text-eco-green-dark'
    },
    {
      title: 'CO₂ Utilization',
      description: 'Learn how captured CO₂ is repurposed for firefighting and industrial applications.',
      icon: Globe,
      color: 'text-eco-blue'
    },
    {
      title: 'Reuse Marketplace',
      description: 'Buy, sell, or donate refurbished electronics to promote a circular economy.',
      icon: Recycle,
      color: 'text-eco-green'
    },
    {
      title: 'Industry Partnerships',
      description: 'Connect with certified recyclers and responsible e-waste handling facilities.',
      icon: Award,
      color: 'text-eco-blue-dark'
    },
    {
      title: 'Environmental Impact',
      description: 'Track your personal contribution to sustainability with detailed analytics.',
      icon: Leaf,
      color: 'text-eco-green-dark'
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Advanced Features</h2>
          <p className="text-muted-foreground text-lg">
            Leveraging cutting-edge technology to create a sustainable approach to e-waste management
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className={`${feature.color} mb-3 inline-flex p-2 rounded-full bg-muted`}>
                  <feature.icon size={24} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
