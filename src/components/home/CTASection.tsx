
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Upload, Building, Users, Globe } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 hero-gradient text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Join thousands of environmentally conscious individuals, organizations, and NGOs in our mission to revolutionize e-waste management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-eco-green">
              <Link to="/schedule-pickup">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Pickup
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/upload">
                <Upload className="mr-2 h-5 w-5" />
                Upload Device Photo
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Building className="h-8 w-8 text-white/80 mx-auto mb-3" />
              <p className="text-2xl font-bold mb-2">Businesses</p>
              <p className="mb-4 text-white/80">
                Corporate e-waste management solutions with impact reports and compliance certificates.
              </p>
              <Link to="/business" className="inline-flex items-center text-white hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Globe className="h-8 w-8 text-white/80 mx-auto mb-3" />
              <p className="text-2xl font-bold mb-2">NGOs</p>
              <p className="mb-4 text-white/80">
                Partnership opportunities for environmental organizations working to reduce e-waste impact.
              </p>
              <Link to="/ngo" className="inline-flex items-center text-white hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Users className="h-8 w-8 text-white/80 mx-auto mb-3" />
              <p className="text-2xl font-bold mb-2">Individuals</p>
              <p className="mb-4 text-white/80">
                Easy and rewarding ways to dispose of your personal electronic waste responsibly.
              </p>
              <Link to="/individual" className="inline-flex items-center text-white hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Users className="h-8 w-8 text-white/80 mx-auto mb-3" />
              <p className="text-2xl font-bold mb-2">Communities</p>
              <p className="mb-4 text-white/80">
                Group initiatives for neighborhoods, schools, and local organizations to collaborate.
              </p>
              <Link to="/community" className="inline-flex items-center text-white hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
