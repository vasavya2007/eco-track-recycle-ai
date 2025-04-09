
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Phone, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SupportOptionsProps {
  translations: {
    supportOptions: {
      chat: string;
      chatDesc: string;
      email: string;
      emailDesc: string;
      phone: string;
      phoneDesc: string;
      chatNow: string;
      sendEmail: string;
      call: string;
      python?: string;
      pythonDesc?: string;
      exploreTools?: string;
    };
  };
}

const SupportOptions: React.FC<SupportOptionsProps> = ({ translations: t }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <Card className="bg-eco-green text-white">
        <CardHeader className="pb-2">
          <MessageSquare className="h-6 w-6 mb-2" />
          <CardTitle>{t.supportOptions.chat}</CardTitle>
          <CardDescription className="text-white/80">
            {t.supportOptions.chatDesc}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" className="bg-white text-eco-green hover:bg-white/90 w-full">
            {t.supportOptions.chatNow}
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-eco-blue text-white">
        <CardHeader className="pb-2">
          <Mail className="h-6 w-6 mb-2" />
          <CardTitle>{t.supportOptions.email}</CardTitle>
          <CardDescription className="text-white/80">
            {t.supportOptions.emailDesc}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" className="bg-white text-eco-blue hover:bg-white/90 w-full">
            {t.supportOptions.sendEmail}
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-amber-600 text-white">
        <CardHeader className="pb-2">
          <Phone className="h-6 w-6 mb-2" />
          <CardTitle>{t.supportOptions.phone}</CardTitle>
          <CardDescription className="text-white/80">
            {t.supportOptions.phoneDesc}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" className="bg-white text-amber-600 hover:bg-white/90 w-full">
            {t.supportOptions.call}
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-slate-800 text-white">
        <CardHeader className="pb-2">
          <Code className="h-6 w-6 mb-2" />
          <CardTitle>{t.supportOptions.python || "Python Support"}</CardTitle>
          <CardDescription className="text-white/80">
            {t.supportOptions.pythonDesc || "Get help with Python integrations and tools"}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild variant="outline" className="bg-white text-slate-800 hover:bg-white/90 w-full">
            <Link to="/python-tools">
              {t.supportOptions.exploreTools || "Explore Tools"}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SupportOptions;
