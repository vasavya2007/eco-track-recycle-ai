
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from 'lucide-react';

interface SupportTicket {
  id: string;
  subject: string;
  created: string;
  status: string;
  lastUpdate: string;
}

interface SupportTicketsProps {
  tickets: SupportTicket[];
  translations: {
    supportTickets: string;
    ticketStatus: {
      open: string;
      inProgress: string;
      resolved: string;
      closed: string;
    };
  };
}

const SupportTickets: React.FC<SupportTicketsProps> = ({ tickets, translations: t }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.supportTickets}</CardTitle>
        <CardDescription>
          Track the status of your support requests
        </CardDescription>
      </CardHeader>
      <CardContent>
        {tickets.length > 0 ? (
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <Card key={ticket.id} className="overflow-hidden">
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-sm">{ticket.subject}</p>
                      <Badge 
                        variant={ticket.status === 'resolved' ? 'secondary' : 
                                ticket.status === 'inProgress' ? 'outline' : 'default'}
                        className={
                          ticket.status === 'resolved' ? 'bg-green-100 text-green-800' : 
                          ticket.status === 'inProgress' ? 'bg-blue-100 text-blue-800' : 
                          ticket.status === 'open' ? 'bg-amber-100 text-amber-800' : 
                          'bg-gray-100 text-gray-800'
                        }
                      >
                        {t.ticketStatus[ticket.status as keyof typeof t.ticketStatus]}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <span>Ticket ID: {ticket.id}</span>
                      <span className="mx-2">•</span>
                      <span>Created: {new Date(ticket.created).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>Last Updated: {new Date(ticket.lastUpdate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">You don't have any active support tickets.</p>
            <Button variant="outline">Create New Ticket</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SupportTickets;
