
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Code, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResourcesSectionProps {
  translations: {
    resources: string;
  };
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ translations: t }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.resources}</CardTitle>
        <CardDescription>
          Helpful guides and resources to get the most out of EcoTrack
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Getting Started Guide</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-sm text-muted-foreground">
                Learn the basics of using the EcoTrack platform and start your recycling journey.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                View Guide
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Recycling Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-sm text-muted-foreground">
                Tips and techniques for preparing your e-waste for maximum recycling efficiency.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                View Guide
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Video Tutorials</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-sm text-muted-foreground">
                Visual guides showing how to use all features of the EcoTrack platform.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Video className="h-4 w-4 mr-2" />
                Watch Videos
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Python Tools</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-sm text-muted-foreground">
                Advanced Python code examples and tools for e-waste data analysis and processing.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/python-tools">
                  <Code className="h-4 w-4 mr-2" />
                  Explore Tools
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;
