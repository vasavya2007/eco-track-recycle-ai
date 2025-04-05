
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, Check, Truck, Award, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

interface NotificationsPopoverProps {
  count?: number;
}

const NotificationsPopover: React.FC<NotificationsPopoverProps> = ({ count = 0 }) => {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      title: "Notifications",
      noNotifications: "No new notifications",
      markAllAsRead: "Mark all as read",
      viewAll: "View all notifications",
      timeAgo: {
        justNow: "Just now",
        minutesAgo: "minutes ago",
        hoursAgo: "hours ago",
        yesterdayAt: "Yesterday at",
        daysAgo: "days ago"
      }
    },
    es: {
      title: "Notificaciones",
      noNotifications: "No hay notificaciones nuevas",
      markAllAsRead: "Marcar todo como leído",
      viewAll: "Ver todas las notificaciones",
      timeAgo: {
        justNow: "Ahora mismo",
        minutesAgo: "minutos atrás",
        hoursAgo: "horas atrás",
        yesterdayAt: "Ayer a las",
        daysAgo: "días atrás"
      }
    }
  };
  
  // Default to English if the language is not supported
  const t = translations[language.code as keyof typeof translations] || translations.en;

  const notifications = [
    {
      id: 1,
      title: "Pickup scheduled",
      description: "Your e-waste pickup has been scheduled for tomorrow at 2:00 PM",
      time: "10 minutes ago",
      icon: Calendar,
      read: false,
      link: "/dashboard/schedule"
    },
    {
      id: 2,
      title: "Pickup completed",
      description: "Your scheduled pickup has been completed. Thank you for recycling!",
      time: "2 hours ago",
      icon: Truck,
      read: false,
      link: "/dashboard"
    },
    {
      id: 3,
      title: "Points awarded",
      description: "You earned 125 Green Points from your recent recycling activity",
      time: "Yesterday at 3:45 PM",
      icon: Award,
      read: true,
      link: "/dashboard/rewards"
    },
    {
      id: 4,
      title: "Device recycling certificates",
      description: "New certificates available for your recent recycled devices",
      time: "2 days ago",
      icon: ShieldCheck,
      read: true,
      link: "/dashboard/reports"
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[380px] p-0">
        <div className="flex items-center justify-between p-4 pb-2">
          <h3 className="text-sm font-medium">{t.title}</h3>
          {unreadCount > 0 && (
            <Button variant="link" size="sm" className="h-auto p-0 text-xs">
              {t.markAllAsRead}
            </Button>
          )}
        </div>
        
        <div className="max-h-[300px] overflow-y-auto">
          {notifications.length > 0 ? (
            <div>
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-4 hover:bg-muted/50 transition-colors relative ${notification.read ? '' : 'bg-muted/20'}`}
                >
                  <Link to={notification.link} className="flex gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${notification.read ? 'bg-muted' : 'bg-eco-soft'}`}>
                      <notification.icon className={`h-5 w-5 ${notification.read ? 'text-foreground' : 'text-eco-green'}`} />
                    </div>
                    <div className="space-y-1 overflow-hidden">
                      <p className={`text-sm font-medium leading-none ${notification.read ? '' : 'text-eco-green'}`}>
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {notification.description}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {notification.time}
                      </p>
                    </div>
                  </Link>
                  {!notification.read && (
                    <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-eco-green" />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <Bell className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">{t.noNotifications}</p>
            </div>
          )}
        </div>
        
        <div className="p-2 border-t">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link to="/notifications">
              {t.viewAll}
            </Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationsPopover;
