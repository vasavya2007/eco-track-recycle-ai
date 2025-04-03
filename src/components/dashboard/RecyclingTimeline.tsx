
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Truck, Recycle } from "lucide-react";

const timelineData = [
  {
    id: 1,
    status: "Collected",
    date: "April 1, 2025",
    description: "Your e-waste has been collected from the specified location",
    icon: Truck,
    complete: true
  },
  {
    id: 2,
    status: "Sorting & Dismantling",
    date: "April 3, 2025",
    description: "Items are being sorted and dismantled for efficient recycling",
    icon: Recycle,
    complete: false
  },
  {
    id: 3,
    status: "Material Recovery",
    date: "Pending",
    description: "Valuable materials are extracted and separated",
    icon: Recycle,
    complete: false
  },
  {
    id: 4,
    status: "Recycling Complete",
    date: "Pending",
    description: "All materials have been properly recycled and repurposed",
    icon: CheckCircle2,
    complete: false
  }
];

const RecyclingTimeline = () => {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5">
      <h3 className="text-lg font-medium mb-4">Recycling Timeline</h3>
      <div className="space-y-6 relative">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-[15px] w-0.5 bg-eco-soft"></div>
        
        {timelineData.map((item, index) => (
          <div key={item.id} className="flex gap-4">
            <div className={`h-8 w-8 rounded-full ${
              item.complete ? 'bg-eco-green text-white' : 'bg-eco-soft text-muted-foreground'
            } flex items-center justify-center z-10`}>
              <item.icon size={16} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{item.status}</h4>
                <Badge variant={item.complete ? "default" : "outline"} className={item.complete ? "bg-eco-green" : ""}>
                  {item.complete ? "Complete" : "Pending"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
              <p className="text-sm">{item.description}</p>
              {index < timelineData.length - 1 && <Separator className="mt-3" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecyclingTimeline;
