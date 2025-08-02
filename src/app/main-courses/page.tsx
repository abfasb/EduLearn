"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BookOpen, 
  User, 
  Search, 
  Menu,
  Star,
  GraduationCap,
  Bookmark,
  MessageSquare,
  ArrowRight,
  Filter,
  ChevronDown,
  Play,
  Plus,
  BookmarkCheck
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export default function CoursesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/auth/session');
        const data = await res.json();
        if (data.user) {
          setUser(data.user);
        }
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    };

    fetchUser();
  }, []);

  const courses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Alex Johnson",
      rating: 4.8,
      students: 2450,
      duration: "12h 30m",
      level: "Intermediate",
      category: "development",
      thumbnail: "/react-course.jpg",
      isFeatured: true,
      isBookmarked: false,
      price: 89.99,
      tags: ["React", "Hooks", "Performance"]
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "Sarah Miller",
      rating: 4.9,
      students: 1890,
      duration: "15h 10m",
      level: "Advanced",
      category: "design",
      thumbnail: "/design-course.jpg",
      isFeatured: true,
      isBookmarked: true,
      price: 99.99,
      tags: ["Figma", "Prototyping", "User Research"]
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      instructor: "Michael Chen",
      rating: 4.7,
      students: 3120,
      duration: "20h 15m",
      level: "Beginner",
      category: "data",
      thumbnail: "/data-course.jpg",
      isFeatured: false,
      isBookmarked: false,
      price: 79.99,
      tags: ["Python", "Pandas", "Visualization"]
    },
    {
      id: 4,
      title: "JavaScript Deep Dive",
      instructor: "Emily Rodriguez",
      rating: 4.6,
      students: 1780,
      duration: "14h 45m",
      level: "Intermediate",
      category: "development",
      thumbnail: "/js-course.jpg",
      isFeatured: false,
      isBookmarked: true,
      price: 74.99,
      tags: ["ES6+", "Async", "Performance"]
    },
    {
      id: 5,
      title: "Mobile App Design Principles",
      instructor: "David Kim",
      rating: 4.8,
      students: 1250,
      duration: "10h 30m",
      level: "Beginner",
      category: "design",
      thumbnail: "/mobile-course.jpg",
      isFeatured: true,
      isBookmarked: false,
      price: 69.99,
      tags: ["iOS", "Android", "Responsive"]
    },
    {
      id: 6,
      title: "Python for Machine Learning",
      instructor: "Jennifer Lee",
      rating: 4.9,
      students: 2980,
      duration: "18h 20m",
      level: "Advanced",
      category: "data",
      thumbnail: "/python-course.jpg",
      isFeatured: false,
      isBookmarked: false,
      price: 89.99,
      tags: ["Scikit-learn", "TensorFlow", "NLP"]
    },
  ];

  // Filter courses based on selected category
  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Courses', icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { id: 'development', name: 'Development', icon: <LayoutDashboard className="w-4 h-4 mr-2" /> },
    { id: 'design', name: 'Design', icon: <GraduationCap className="w-4 h-4 mr-2" /> },
    { id: 'data', name: 'Data Science', icon: <Search className="w-4 h-4 mr-2" /> },
    { id: 'business', name: 'Business', icon: <User className="w-4 h-4 mr-2" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-1">
                <GraduationCap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">LearnHub</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex md:ml-12 md:space-x-8">
                <a href="#" className="text-indigo-600 dark:text-indigo-400 font-medium px-3 py-2 rounded-md">Home</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-2 rounded-md">Courses</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-2 rounded-md">Instructors</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-2 rounded-md">Resources</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-2 rounded-md">Pricing</a>
              </nav>
            </div>
            
            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </Button>
              <Button variant="outline" className="hidden lg:flex">
                <Plus className="h-4 w-4 mr-2" /> New Course
              </Button>
              <div className="relative">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        {user?.avatarUrl ? (
                          <Avatar>
                            <AvatarImage src={user.avatarUrl} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        ) : (
                          <Avatar>
                            <AvatarFallback className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                              {user?.name?.charAt(0) || "U"}
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{user?.name || "User Profile"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </Button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-indigo-600 dark:text-indigo-400 font-medium px-3 py-2 rounded-md">Home</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-2 rounded-md">Courses</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-2 rounded-md">Instructors</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-2 rounded-md">Resources</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-2 rounded-md">Pricing</a>
                <div className="pt-4 flex space-x-4">
                  <Button variant="outline" className="flex-1">
                    <Plus className="h-4 w-4 mr-2" /> New
                  </Button>
                  {user ? (
                    <Avatar>
                      <AvatarFallback className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <Button variant="outline">Sign In</Button>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 rounded-2xl p-8 text-white mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
          <div className="relative z-10 max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-white text-indigo-600 dark:bg-indigo-900 dark:text-white">
              <Star className="h-4 w-4 mr-2 fill-current" /> Featured Courses
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Unlock Your Potential with Expert-Led Courses
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl">
              Join thousands of students learning in-demand skills from industry professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 dark:bg-white dark:text-indigo-600 py-6 px-8 text-base">
                Browse Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="bg-indigo-700/30 text-white hover:bg-indigo-800/50 hover:text-white border-white/30 py-6 px-8 text-base">
                Become an Instructor
              </Button>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-500/20"></div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Popular Courses</h2>
              <p className="text-gray-600 dark:text-gray-400">Handpicked by our expert educators</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="relative">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by: Popular" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Sort by: Popular</SelectItem>
                    <SelectItem value="newest">Sort by: Newest</SelectItem>
                    <SelectItem value="rating">Sort by: Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>
          </div>
          
          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="flex overflow-x-auto pb-2 -mx-4 px-4 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === category.id 
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-r from-indigo-400/20 to-purple-400/20 w-full flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    </div>
                    {course.isFeatured && (
                      <Badge variant="secondary" className="absolute top-4 left-4 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
                        Featured
                      </Badge>
                    )}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 hover:bg-white dark:hover:bg-gray-700"
                    >
                      {course.isBookmarked ? (
                        <BookmarkCheck className="h-5 w-5 text-amber-500 fill-amber-500" />
                      ) : (
                        <Bookmark className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      )}
                    </Button>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarFallback className="text-xs">
                          {course.instructor.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      by {course.instructor}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="flex text-amber-500 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-current' : ''}`} 
                          />
                        ))}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{course.rating}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{course.students.toLocaleString()} students</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.tags.map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="outline"
                          className="text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Play className="h-4 w-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <Badge variant={course.level === "Beginner" ? "secondary" : course.level === "Intermediate" ? "outline" : "default"}>
                        {course.level}
                      </Badge>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">${course.price}</div>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800">
                      Enroll Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="mt-12 text-center">
            <Button variant="outline" className="px-12 py-6">
              Load More Courses
            </Button>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-black dark:from-gray-800 dark:to-gray-900 rounded-2xl p-12 text-white mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <GraduationCap className="h-16 w-16 mx-auto text-indigo-400 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Teaching Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Share your knowledge and earn money by creating courses
            </p>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 dark:bg-white dark:text-gray-900 py-6 px-12 text-base">
              Become an Instructor
            </Button>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="border border-gray-200 dark:border-gray-800">
                <CardContent className="p-6">
                  <div className="flex text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    "This platform completely transformed my career. The courses are well-structured and taught by industry experts who genuinely care about your success."
                  </p>
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarFallback className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Jane Doe</h4>
                      <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-1 mb-6">
                <GraduationCap className="h-8 w-8 text-indigo-400" />
                <span className="text-2xl font-bold">LearnHub</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The best platform to learn new skills and advance your career. Join our community of over 100,000 learners worldwide.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'github', 'linkedin', 'facebook'].map((social) => (
                  <Button key={social} variant="ghost" size="icon" className="rounded-full bg-gray-800 hover:bg-gray-700">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                  </Button>
                ))}
              </div>
            </div>
            
            {['Company', 'Resources', 'Legal', 'Contact'].map((section) => (
              <div key={section}>
                <h3 className="text-lg font-semibold mb-6">{section}</h3>
                <ul className="space-y-4">
                  {['About', 'Careers', 'Blog', 'Press'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 text-sm text-gray-400 text-center">
            © 2025 EduLearn. All rights reserved. 
            <div className="mt-2">
              <a href="#" className="hover:text-white mx-4">Privacy Policy</a>
              <a href="#" className="hover:text-white mx-4">Terms of Service</a>
              <a href="#" className="hover:text-white mx-4">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}