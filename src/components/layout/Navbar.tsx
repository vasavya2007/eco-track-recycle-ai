
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut } from 'lucide-react';
import SearchDialog from './SearchDialog';
import NotificationsPopover from './NotificationsPopover';
import LanguageSelector from './LanguageSelector';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and main nav (desktop) */}
          <div className="flex-1 flex items-center justify-between">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-eco-green text-xl font-bold">EcoTrack</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-6">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-eco-green">Home</Link>
              <Link to="/upload" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-eco-green">AI Recognition</Link>
              <Link to="/schedule-pickup" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-eco-green">Schedule Pickup</Link>
              <Link to="/education" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-eco-green">Education</Link>
              <Link to="/services" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-eco-green">Services</Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-eco-green">About</Link>
            </div>
            
            {/* Right side utilities */}
            <div className="flex items-center space-x-1 md:space-x-3">
              <SearchDialog />
              <LanguageSelector />
              <NotificationsPopover />
              
              {/* Authentication buttons */}
              <div className="hidden md:flex items-center space-x-2">
                {user ? (
                  <div className="flex items-center space-x-2">
                    <Link to="/dashboard">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <User className="mr-1 h-4 w-4" />
                        Dashboard
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => signOut()}
                      className="flex items-center text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="mr-1 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Link to="/auth">
                    <Button className="bg-eco-green hover:bg-eco-green-dark">
                      Sign In
                    </Button>
                  </Link>
                )}
              </div>
              
              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-eco-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-eco-green"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? 
                    <X className="block h-6 w-6" aria-hidden="true" /> : 
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-eco-green hover:bg-gray-50">Home</Link>
            <Link to="/upload" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-eco-green hover:bg-gray-50">AI Recognition</Link>
            <Link to="/schedule-pickup" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-eco-green hover:bg-gray-50">Schedule Pickup</Link>
            <Link to="/education" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-eco-green hover:bg-gray-50">Education</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-eco-green hover:bg-gray-50">Services</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-eco-green hover:bg-gray-50">About</Link>
            
            {/* Mobile auth buttons */}
            {user ? (
              <div className="space-y-2 pt-2 border-t border-gray-200">
                <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-eco-green hover:bg-gray-50">
                  Dashboard
                </Link>
                <button 
                  onClick={() => signOut()}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Link to="/auth">
                  <Button className="w-full bg-eco-green hover:bg-eco-green-dark">
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
