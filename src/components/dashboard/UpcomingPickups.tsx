
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Edit, X } from 'lucide-react';

const pickups = [
  {
    id: 1,
    date: 'Apr 15, 2025',
    time: '10:00 AM - 12:00 PM',
    address: '123 Green Street, Eco City, EC 12345',
    items: ['Old Printer', 'CRT Monitor', 'Keyboard'],
    status: 'Scheduled'
  },
  {
    id: 2,
    date: 'Apr 22, 2025',
    time: '2:00 PM - 4:00 PM',
    address: '456 Sustainable Ave, Eco City, EC 12345',
    items: ['Desktop Computer', 'Speakers'],
    status: 'Scheduled'
  }
];

const UpcomingPickups = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Upcoming Pickups</CardTitle>
        <Button variant="outline" size="sm">
          <Calendar className="mr-2 h-4 w-4" />
          Schedule New
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {pickups.map((pickup) => (
            <div key={pickup.id} className="border rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="bg-eco-soft rounded-full p-2">
                    <Calendar className="h-5 w-5 text-eco-green" />
                  </div>
                  <div>
                    <p className="font-medium">{pickup.date}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{pickup.time}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="bg-eco-soft text-eco-green border-eco-green mt-2 md:mt-0">
                  {pickup.status}
                </Badge>
              </div>
              
              <div className="flex items-start gap-3 mt-4">
                <div className="bg-eco-soft rounded-full p-2">
                  <MapPin className="h-5 w-5 text-eco-green" />
                </div>
                <div>
                  <p className="font-medium">Pickup Location</p>
                  <p className="text-sm text-muted-foreground">{pickup.address}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="font-medium mb-2">Items for recycling:</p>
                <div className="flex flex-wrap gap-2">
                  {pickup.items.map((item, index) => (
                    <Badge key={index} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-end gap-2 mt-4">
                <Button variant="outline" size="sm">
                  <Edit className="mr-1 h-3 w-3" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-destructive border-destructive">
                  <X className="mr-1 h-3 w-3" />
                  Cancel
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingPickups;
