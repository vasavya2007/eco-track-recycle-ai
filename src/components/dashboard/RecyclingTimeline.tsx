
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Clock, 
  Truck, 
  Factory,
  ShieldCheck
} from 'lucide-react';

const timelineEvents = [
  {
    id: 1,
    title: 'Laptop Recycling',
    date: 'Apr 2, 2025',
    status: 'completed',
    icon: CheckCircle2,
    steps: [
      { name: 'Pickup Scheduled', completed: true, icon: Clock },
      { name: 'Device Collected', completed: true, icon: Truck },
      { name: 'Processing Center', completed: true, icon: Factory },
      { name: 'Materials Recovered', completed: true, icon: Recycle },
      { name: 'Certificate Issued', completed: true, icon: ShieldCheck }
    ]
  },
  {
    id: 2,
    title: 'Smartphone Recycling',
    date: 'Apr 10, 2025',
    status: 'in-progress',
    icon: Clock,
    steps: [
      { name: 'Pickup Scheduled', completed: true, icon: Clock },
      { name: 'Device Collected', completed: true, icon: Truck },
      { name: 'Processing Center', completed: true, icon: Factory },
      { name: 'Materials Recovered', completed: false, icon: Recycle },
      { name: 'Certificate Issued', completed: false, icon: ShieldCheck }
    ]
  }
];

const RecyclingTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Recycling Journey</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {timelineEvents.map((event) => (
            <div key={event.id} className="relative">
              <div className="flex items-start gap-4">
                <div className={`mt-1 rounded-full p-2 ${
                  event.status === 'completed' ? 'bg-eco-green/20 text-eco-green' : 'bg-amber-100 text-amber-600'
                }`}>
                  <event.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-semibold">{event.title}</h4>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  
                  <div className="mt-3 relative">
                    {/* Connecting line */}
                    <div className="absolute left-2.5 top-0 h-full w-0.5 bg-eco-green/20"></div>
                    
                    {event.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4 mb-4 relative">
                        <div className={`mt-1 z-10 rounded-full p-1 ${
                          step.completed ? 'bg-eco-green text-white' : 'bg-muted text-muted-foreground'
                        }`}>
                          <step.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className={step.completed ? 'text-foreground' : 'text-muted-foreground'}>
                            {step.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Recycle = ({ className }: { className?: string }) => (
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
    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
    <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
    <path d="m14 16-3 3 3 3" />
    <path d="M8.293 13.596 4.875 9.5l3.418-4.096" />
    <path d="m7.708 9.5 8.876 1.576a1.83 1.83 0 0 0 1.701-.537 1.785 1.785 0 0 0 .233-1.77L16.59 3.227a1.83 1.83 0 0 0-1.477-1.15 1.784 1.784 0 0 0-1.774.648L9.413 7.5" />
    <path d="m12.58 5.5 1.124 2.345-2.718 3.023" />
  </svg>
);

export default RecyclingTimeline;
