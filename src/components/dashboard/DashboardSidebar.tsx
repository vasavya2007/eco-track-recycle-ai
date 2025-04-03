
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  BarChart3, 
  ShoppingCart, 
  Gift, 
  FileText, 
  Settings, 
  HelpCircle, 
  Leaf
} from 'lucide-react';

const navItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard'
  },
  {
    title: 'Collection Schedule',
    icon: Calendar,
    href: '/dashboard/schedule'
  },
  {
    title: 'Impact Analytics',
    icon: BarChart3,
    href: '/dashboard/analytics'
  },
  {
    title: 'Marketplace',
    icon: ShoppingCart,
    href: '/dashboard/marketplace'
  },
  {
    title: 'Rewards',
    icon: Gift,
    href: '/dashboard/rewards'
  },
  {
    title: 'Reports',
    icon: FileText,
    href: '/dashboard/reports'
  }
];

const secondaryNavItems = [
  {
    title: 'Settings',
    icon: Settings,
    href: '/dashboard/settings'
  },
  {
    title: 'Help & Support',
    icon: HelpCircle,
    href: '/dashboard/support'
  }
];

const DashboardSidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 bg-white border-r h-screen sticky top-0 left-0 overflow-y-auto">
      <div className="p-4 border-b">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-full bg-eco-green p-1">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl text-foreground">EcoTrack</span>
        </Link>
      </div>

      <div className="p-4">
        <nav className="space-y-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive(item.href)
                  ? 'bg-eco-green text-white'
                  : 'text-muted-foreground hover:bg-eco-soft hover:text-eco-green'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-4 p-4 border-t">
        <p className="text-xs uppercase text-muted-foreground mb-3 font-medium">Support</p>
        <nav className="space-y-1">
          {secondaryNavItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive(item.href)
                  ? 'bg-eco-green text-white'
                  : 'text-muted-foreground hover:bg-eco-soft hover:text-eco-green'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 mt-auto">
        <div className="bg-eco-soft rounded-xl p-4">
          <h3 className="font-medium mb-2">Need help?</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Contact our support team for any questions or assistance.
          </p>
          <Link
            to="/dashboard/support"
            className="text-sm text-eco-green hover:underline inline-flex items-center"
          >
            Contact Support <HelpCircle className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
