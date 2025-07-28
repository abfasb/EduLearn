// app/courses/page.tsx
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
  Play
} from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
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
    },
  ];
  
  // Filter courses based on selected category
  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'data', name: 'Data Science' },
    { id: 'business', name: 'Business' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
           

            <div className="flex items-center">
              <div className="flex items-center space-x-1">
                <GraduationCap className="h-8 w-8 text-indigo-600" />
                <span className="text-2xl font-bold text-gray-900">LearnHub</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex md:ml-12 md:space-x-8">
                <a href="#" className="text-indigo-600 font-medium px-3 py-2 rounded-md">Home</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md">Courses</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md">Instructors</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md">Resources</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md">Pricing</a>
              </nav>
            </div>
            
            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* ... */}
              <div className="relative">
                <button className="flex items-center text-sm rounded-full focus:outline-none">
                  {user ? (
                    <div className="bg-indigo-100 text-indigo-800 rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                      {user.name.charAt(0)}
                    </div>
                  ) : (
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Unlock Your Potential with Expert-Led Courses
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students learning in-demand skills from industry professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-indigo-600 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition flex items-center justify-center">
                Browse Courses <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-800 transition flex items-center justify-center">
                Become an Instructor
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Popular Courses</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Sort by: Popular</option>
                  <option>Sort by: Newest</option>
                  <option>Sort by: Rating</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
              <button className="flex items-center text-gray-700 hover:text-indigo-600">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>
          </div>
          
          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-2 mb-8 -mx-4 px-4">
            <div className="flex space-x-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full whitespace-nowrap transition ${
                    activeCategory === category.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                {/* Course Thumbnail */}
                <div className="relative">
                  <div className="bg-gray-200 border-2 border-dashed rounded-t-2xl w-full h-48" />
                  {course.isFeatured && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                    <Bookmark 
                      className={`h-5 w-5 ${course.isBookmarked ? 'text-amber-500 fill-amber-500' : 'text-gray-500'}`} 
                    />
                  </button>
                  <div className="absolute bottom-4 right-4 bg-indigo-600 text-white rounded-full p-3 shadow-lg">
                    <Play className="h-5 w-5" />
                  </div>
                </div>
                
                {/* Course Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-gray-600">by {course.instructor}</p>
                    </div>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex text-amber-500 mr-2">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <span className="text-gray-700 font-medium">{course.rating}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center">
                      <Play className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                      {course.level}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">$89.99</span>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Teaching Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Share your knowledge and earn money by creating courses
            </p>
            <button className="bg-white text-gray-900 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition">
              Become an Instructor
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-1 mb-4">
                <GraduationCap className="h-8 w-8 text-indigo-400" />
                <span className="text-2xl font-bold">LearnHub</span>
              </div>
              <p className="text-gray-400 mb-4">
                The best platform to learn new skills and advance your career.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Licenses</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400 text-center">
            © 2025 EduLearn. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}