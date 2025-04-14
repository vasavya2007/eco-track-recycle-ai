
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from 'date-fns';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, RefreshCw } from 'lucide-react';

interface Ticket {
  id: string;
  ticket_number: string;
  subject: string;
  created_at: string;
  status: string;
  updated_at: string;
}

interface SupportTicketsProps {
  tickets?: any[];
  translations: any;
}

const SupportTickets = ({ translations }: SupportTicketsProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const { user } = useAuth();
  const t = translations;

  useEffect(() => {
    fetchTickets();
  }, [user]);

  const fetchTickets = async () => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('support_tickets')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setTickets(data || []);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'inProgress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'yyyy-MM-dd');
    } catch (e) {
      return dateString;
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-eco-blue" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="text-lg font-medium">{t.supportTickets}</h3>
        <Button 
          variant="outline" 
          size="sm"
          onClick={fetchTickets}
        >
          <RefreshCw className="h-4 w-4 mr-1" />
          {t.refresh}
        </Button>
      </div>
      
      {tickets.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <th className="px-4 py-3 text-left">{t.ticketId}</th>
                <th className="px-4 py-3 text-left">{t.subject}</th>
                <th className="px-4 py-3 text-left">{t.created}</th>
                <th className="px-4 py-3 text-left">{t.status}</th>
                <th className="px-4 py-3 text-left">{t.lastUpdate}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium">{ticket.ticket_number}</td>
                  <td className="px-4 py-3 text-sm">{ticket.subject}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{formatDate(ticket.created_at)}</td>
                  <td className="px-4 py-3 text-sm">
                    <Badge variant="outline" className={getStatusColor(ticket.status)}>
                      {ticket.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">{formatDate(ticket.updated_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-6 text-center text-gray-500">
          <p>{t.noTickets}</p>
          <Button className="mt-4 bg-eco-green hover:bg-eco-green-dark" onClick={() => window.location.href = '#create-ticket'}>
            {t.createTicket}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SupportTickets;
