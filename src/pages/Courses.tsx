import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const courses = [
  {
    title: "Introduction to Web Development",
    description: "Learn HTML, CSS, and JavaScript fundamentals to build modern websites",
    instructor: "Sarah Johnson",
    duration: "8 weeks",
    students: 12453,
    rating: 4.8,
    level: "Beginner",
    category: "Web Development"
  },
  {
    title: "Advanced React & TypeScript",
    description: "Master React hooks, context, and TypeScript for building scalable applications",
    instructor: "Michael Chen",
    duration: "10 weeks",
    students: 8932,
    rating: 4.9,
    level: "Advanced",
    category: "Web Development"
  },
  {
    title: "Data Science Fundamentals",
    description: "Explore data analysis, visualization, and machine learning basics with Python",
    instructor: "Dr. Emily Roberts",
    duration: "12 weeks",
    students: 15672,
    rating: 4.7,
    level: "Intermediate",
    category: "Data Science"
  },
  {
    title: "UI/UX Design Principles",
    description: "Create beautiful, user-friendly interfaces with modern design thinking",
    instructor: "Alex Martinez",
    duration: "6 weeks",
    students: 9821,
    rating: 4.8,
    level: "Beginner",
    category: "Design"
  },
  {
    title: "Mobile App Development",
    description: "Build native mobile apps for iOS and Android using React Native",
    instructor: "James Wilson",
    duration: "10 weeks",
    students: 7234,
    rating: 4.6,
    level: "Intermediate",
    category: "Mobile Development"
  },
  {
    title: "Digital Marketing Mastery",
    description: "Learn SEO, social media marketing, and content strategy for online success",
    instructor: "Rachel Green",
    duration: "8 weeks",
    students: 11456,
    rating: 4.7,
    level: "Beginner",
    category: "Marketing"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our <span className="bg-gradient-primary bg-clip-text text-transparent">Courses</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover courses tailored to your learning goals
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search courses..." 
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" size="lg" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
