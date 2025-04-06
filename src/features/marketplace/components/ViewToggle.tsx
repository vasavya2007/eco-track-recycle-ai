
import React from 'react';
import { Button } from "@/components/ui/button";
import { Grid3X3, List } from 'lucide-react';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  gridLabel: string;
  listLabel: string;
  viewAsLabel: string;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ 
  viewMode, 
  setViewMode, 
  gridLabel, 
  listLabel,
  viewAsLabel 
}) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground hidden md:inline">{viewAsLabel}:</span>
      <Button
        variant={viewMode === 'grid' ? 'secondary' : 'outline'}
        size="sm"
        className="px-2"
        onClick={() => setViewMode('grid')}
      >
        <Grid3X3 className="h-4 w-4" />
        <span className="sr-only md:not-sr-only md:ml-2">{gridLabel}</span>
      </Button>
      <Button
        variant={viewMode === 'list' ? 'secondary' : 'outline'}
        size="sm"
        className="px-2"
        onClick={() => setViewMode('list')}
      >
        <List className="h-4 w-4" />
        <span className="sr-only md:not-sr-only md:ml-2">{listLabel}</span>
      </Button>
    </div>
  );
};

export default ViewToggle;
