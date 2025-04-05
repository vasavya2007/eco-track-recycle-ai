
import { Info as InfoIcon } from 'lucide-react';
import { cn } from "@/lib/utils";

interface InfoProps {
  className?: string;
  children: React.ReactNode;
}

const Info = ({ className, children }: InfoProps) => {
  return (
    <div className={cn("flex items-center gap-2 text-muted-foreground", className)}>
      <InfoIcon className="h-4 w-4" />
      <span className="text-sm">{children}</span>
    </div>
  );
};

export { Info };
