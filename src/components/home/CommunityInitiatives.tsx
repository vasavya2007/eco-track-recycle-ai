
import React from 'react';
import { Button } from "@/components/ui/button";
import { Users, UserPlus, HandHeart, GraduationCap, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityInitiatives = () => {
  return (
    <section className="py-16 bg-eco-soft">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Community Initiatives</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Together we can make a bigger impact. Explore different ways to get involved with our community-driven programs to combat e-waste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-eco-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Users className="h-8 w-8 text-eco-green" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Neighborhood Collection</h3>
            <p className="text-muted-foreground mb-4">
              Organize e-waste collection drives in your neighborhood and earn community rewards for your area.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/community/neighborhood">Start a Collection Drive</Link>
            </Button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-eco-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <GraduationCap className="h-8 w-8 text-eco-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">School Programs</h3>
            <p className="text-muted-foreground mb-4">
              Educational initiatives for schools to teach students about responsible e-waste management and sustainability.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/community/schools">School Enrollment</Link>
            </Button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-eco-green-dark/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Building2 className="h-8 w-8 text-eco-green-dark" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Office Challenges</h3>
            <p className="text-muted-foreground mb-4">
              Corporate sustainability challenges to promote responsible e-waste disposal among employees.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/community/office">Start Office Challenge</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold mb-2">Become a Community Ambassador</h3>
              <p className="text-muted-foreground">
                Lead by example and inspire others in your community to adopt sustainable e-waste practices.
              </p>
            </div>
            <Button asChild className="bg-eco-green hover:bg-eco-green-dark">
              <Link to="/community/ambassador">
                <UserPlus className="mr-2 h-5 w-5" />
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityInitiatives;
