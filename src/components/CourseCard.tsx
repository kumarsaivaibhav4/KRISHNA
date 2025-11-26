import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  level: string;
  category: string;
}

export const CourseCard = ({
  title,
  description,
  instructor,
  duration,
  students,
  rating,
  level,
  category,
}: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-soft transition-all duration-300 border-border/50">
      <div className="h-48 bg-gradient-primary opacity-80 group-hover:opacity-100 transition-opacity"></div>
      
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {level}
          </Badge>
        </div>
        <h3 className="font-bold text-xl line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">by {instructor}</p>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span>{rating}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full" variant="outline">
          View Course
        </Button>
      </CardFooter>
    </Card>
  );
};
