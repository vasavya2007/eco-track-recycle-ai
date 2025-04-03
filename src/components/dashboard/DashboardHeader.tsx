
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Bell, 
  Search, 
  User,
  Settings,
  Calendar
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardHeader = () => {
  return (
    <header className="bg-white border-b py-3 px-5 sticky top-0 z-10 font-poppins">
      <div className="flex justify-between items-center">
        {/* Search Bar */}
        <div className="w-1/3 hidden md:block">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full bg-background pl-8 focus-visible:ring-eco-green"
            />
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <Calendar className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          
          <Button variant="outline" size="icon" className="rounded-full">
            <Settings className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <div className="h-9 w-9 rounded-full bg-eco-soft flex items-center justify-center">
                  <User className="h-5 w-5 text-eco-green" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
