
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Menu, 
  User, 
  Search,
  Bell
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-full bg-eco-green p-1">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl text-foreground">EcoTrack</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-eco-green-dark transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-foreground hover:text-eco-green-dark transition-colors">
            Services
          </Link>
          <Link to="/education" className="text-foreground hover:text-eco-green-dark transition-colors">
            Education
          </Link>
          <Link to="/marketplace" className="text-foreground hover:text-eco-green-dark transition-colors">
            Marketplace
          </Link>
          <Link to="/about" className="text-foreground hover:text-eco-green-dark transition-colors">
            About
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          <Button asChild variant="default" className="hidden md:flex bg-eco-green hover:bg-eco-green-dark">
            <Link to="/dashboard">
              <User className="h-4 w-4 mr-2" />
              Dashboard
            </Link>
          </Button>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services">Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/education">Education</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/marketplace">Marketplace</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dashboard">Dashboard</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
