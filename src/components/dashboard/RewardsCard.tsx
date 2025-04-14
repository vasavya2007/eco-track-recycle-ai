
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface RewardsData {
  points?: number;
  redeemed_points?: number;
  level?: string;
}

interface RewardsCardProps {
  rewards: RewardsData | null;
}

const RewardsCard = ({ rewards }: RewardsCardProps) => {
  const currentPoints = rewards?.points || 0;
  const nextLevelPoints = currentPoints < 100 ? 100 : currentPoints < 300 ? 300 : currentPoints < 600 ? 600 : currentPoints + 500;
  const progress = (currentPoints / nextLevelPoints) * 100;

  const getLevelInfo = () => {
    const level = rewards?.level || 'beginner';
    switch(level.toLowerCase()) {
      case 'silver':
        return { color: 'bg-gray-300', nextLevel: 'Gold' };
      case 'gold':
        return { color: 'bg-amber-400', nextLevel: 'Platinum' };
      case 'platinum':
        return { color: 'bg-sky-300', nextLevel: 'Eco Hero' };
      case 'eco hero':
        return { color: 'bg-green-500', nextLevel: 'Eco Champion' };
      default: // beginner
        return { color: 'bg-green-200', nextLevel: 'Silver' };
    }
  };

  const levelInfo = getLevelInfo();

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">Recycling Rewards</CardTitle>
          <Award className="h-5 w-5 text-amber-500" />
        </div>
        <CardDescription>Track your recycling progress</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="font-medium capitalize">{rewards?.level || 'Beginner'}</p>
          <p className="text-sm text-muted-foreground">{currentPoints}/{nextLevelPoints} points</p>
        </div>

        <Progress 
          value={progress} 
          className={`h-2 ${levelInfo.color}`}
        />
        
        <p className="text-sm">
          <span className="text-muted-foreground">Next level: </span>
          <span className="font-medium">{levelInfo.nextLevel}</span>
        </p>
        
        <div className="pt-4">
          <Button 
            variant="outline" 
            className="w-full justify-between"
            asChild
          >
            <Link to="/dashboard/rewards">
              View Rewards
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RewardsCard;
