
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, File, Leaf, Calendar, Settings, Recycle, Award, BarChart, HelpCircle, Book } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ open, onOpenChange }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const translations = {
    en: {
      title: "Search",
      placeholder: "Search for pages, features, or help...",
      categories: {
        pages: "Pages",
        articles: "Education Articles",
        help: "Help & Support"
      }
    },
    es: {
      title: "Buscar",
      placeholder: "Buscar páginas, funciones o ayuda...",
      categories: {
        pages: "Páginas",
        articles: "Artículos Educativos",
        help: "Ayuda y Soporte"
      }
    }
  };

  // Default to English if the language is not supported
  const t = translations[language.code as keyof typeof translations] || translations.en;

  const pages = [
    { title: "Dashboard", icon: Leaf, path: "/dashboard" },
    { title: "Schedule Pickup", icon: Calendar, path: "/schedule-pickup" },
    { title: "AI Recognition", icon: Recycle, path: "/upload" },
    { title: "Rewards", icon: Award, path: "/dashboard/rewards" },
    { title: "Analytics", icon: BarChart, path: "/dashboard/analytics" },
    { title: "Settings", icon: Settings, path: "/dashboard/settings" },
    { title: "Help & Support", icon: HelpCircle, path: "/dashboard/support" },
  ];

  const articles = [
    { title: "E-waste Impact on Environment", path: "/education#impact" },
    { title: "Responsible Electronics Disposal", path: "/education#disposal" },
    { title: "Data Security in Recycling", path: "/education#data-security" },
    { title: "Recycling Best Practices", path: "/education#best-practices" },
    { title: "The Circular Economy", path: "/education#circular-economy" },
  ];

  const help = [
    { title: "How to Schedule a Pickup", path: "/dashboard/support#pickup" },
    { title: "Using the AI Scanner", path: "/dashboard/support#scanner" },
    { title: "Redeeming Rewards", path: "/dashboard/support#rewards" },
    { title: "Account Settings", path: "/dashboard/support#account" },
    { title: "Contact Support", path: "/dashboard/support#contact" },
  ];

  // Filter results based on search query
  const filteredPages = pages.filter(page => 
    page.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredHelp = help.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNavigation = (path: string) => {
    navigate(path);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-0">
        <DialogHeader className="px-4 pt-4 pb-2">
          <DialogTitle>{t.title}</DialogTitle>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={t.placeholder}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
        </DialogHeader>
        <div className="px-4 pb-4 max-h-[60vh] overflow-y-auto">
          {(filteredPages.length > 0 || filteredArticles.length > 0 || filteredHelp.length > 0) ? (
            <>
              {filteredPages.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">{t.categories.pages}</h3>
                  <div className="space-y-1">
                    {filteredPages.map((page, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-start text-left"
                        onClick={() => handleNavigation(page.path)}
                      >
                        <page.icon className="mr-2 h-4 w-4" />
                        {page.title}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              {filteredArticles.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">{t.categories.articles}</h3>
                  <div className="space-y-1">
                    {filteredArticles.map((article, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-start text-left"
                        onClick={() => handleNavigation(article.path)}
                      >
                        <Book className="mr-2 h-4 w-4" />
                        {article.title}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              {filteredHelp.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">{t.categories.help}</h3>
                  <div className="space-y-1">
                    {filteredHelp.map((item, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-start text-left"
                        onClick={() => handleNavigation(item.path)}
                      >
                        <File className="mr-2 h-4 w-4" />
                        {item.title}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="py-10 text-center">
              <p className="text-muted-foreground">No results found. Try a different search term.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
