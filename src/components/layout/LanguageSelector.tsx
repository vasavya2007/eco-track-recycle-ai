
import React from 'react';
import { Globe } from 'lucide-react';
import { languages, useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Globe className="h-5 w-5" />
          <span className="absolute bottom-0 right-0 text-[10px]">
            {language.flag}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-background">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setLanguage(lang)}
          >
            <span className="text-base mr-1">{lang.flag}</span> {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
