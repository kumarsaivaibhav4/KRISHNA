import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-in fade-in slide-in-from-bottom-3 duration-500">
            <Award className="w-4 h-4" />
            <span>Personalized Learning Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Learn at Your Own{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pace
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000">
            Unlock your potential with adaptive learning paths tailored to your goals and learning style
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 shadow-soft"
              onClick={() => navigate(user ? '/dashboard' : '/auth')}
            >
              {user ? 'Go to Dashboard' : 'Get Started Free'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 border-2"
              onClick={() => navigate('/courses')}
            >
              Browse Courses
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-in fade-in slide-in-from-bottom-7 duration-1000">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card shadow-card hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">1000+ Courses</h3>
              <p className="text-muted-foreground text-sm text-center">
                Expert-crafted content across multiple subjects
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card shadow-card hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg">50K+ Students</h3>
              <p className="text-muted-foreground text-sm text-center">
                Join a thriving learning community
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card shadow-card hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Certificates</h3>
              <p className="text-muted-foreground text-sm text-center">
                Earn recognized certifications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
