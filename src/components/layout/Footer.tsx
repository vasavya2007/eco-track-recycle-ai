
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Linkedin, Mail, Heart, Users, Building, GraduationCap, HandHeart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-eco-green text-white">
      <div className="container mx-auto pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-full bg-white p-1">
                <Leaf className="h-5 w-5 text-eco-green" />
              </div>
              <span className="font-bold text-xl">EcoTrack</span>
            </div>
            <p className="text-eco-soft mb-4">
              Revolutionizing e-waste management with AI and blockchain technology for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-eco-soft transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-eco-soft transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-eco-soft transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-eco-soft transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-eco-soft transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-eco-soft transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/education" className="hover:text-eco-soft transition-colors">Education</Link>
              </li>
              <li>
                <Link to="/marketplace" className="hover:text-eco-soft transition-colors">Marketplace</Link>
              </li>
              <li>
                <Link to="/partnership" className="hover:text-eco-soft transition-colors">Partner With Us</Link>
              </li>
            </ul>
          </div>

          {/* Community Options */}
          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Users size={16} />
                <Link to="/community/neighborhood" className="hover:text-eco-soft transition-colors">Neighborhood Collection</Link>
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap size={16} />
                <Link to="/community/schools" className="hover:text-eco-soft transition-colors">School Programs</Link>
              </li>
              <li className="flex items-center gap-2">
                <Building size={16} />
                <Link to="/community/office" className="hover:text-eco-soft transition-colors">Office Challenges</Link>
              </li>
              <li className="flex items-center gap-2">
                <Heart size={16} />
                <Link to="/community/ambassador" className="hover:text-eco-soft transition-colors">Become Ambassador</Link>
              </li>
              <li className="flex items-center gap-2">
                <HandHeart size={16} />
                <Link to="/community/volunteer" className="hover:text-eco-soft transition-colors">Volunteer</Link>
              </li>
            </ul>
          </div>

          {/* NGO Partnerships */}
          <div>
            <h3 className="font-bold text-lg mb-4">NGO Partnerships</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ngo/partner" className="hover:text-eco-soft transition-colors">Partner with Us</Link>
              </li>
              <li>
                <Link to="/ngo/grants" className="hover:text-eco-soft transition-colors">Grant Programs</Link>
              </li>
              <li>
                <Link to="/ngo/initiatives" className="hover:text-eco-soft transition-colors">Joint Initiatives</Link>
              </li>
              <li>
                <Link to="/ngo/resources" className="hover:text-eco-soft transition-colors">NGO Resources</Link>
              </li>
              <li>
                <Link to="/ngo/success-stories" className="hover:text-eco-soft transition-colors">Success Stories</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@ecotrack.com" className="hover:text-eco-soft transition-colors">
                  info@ecotrack.com
                </a>
              </p>
              <form>
                <p className="mb-2">Subscribe to our newsletter</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-l-md text-foreground w-full"
                  />
                  <button
                    type="submit"
                    className="bg-eco-blue hover:bg-eco-blue-dark px-4 py-2 rounded-r-md transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} EcoTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
