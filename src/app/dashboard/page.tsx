'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus, Edit, Trash, Upload, Video, BookOpen, BarChart, User, Settings, Search, ArrowRight, Check, X } from 'lucide-react';

type Course = {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  image: string;
  students: number;
  rating: number;
  lessons: number;
  published: boolean;
  createdAt: string;
};

type Lesson = {
  id: string;
  courseId: string;
  title: string;
  duration: string;
  type: 'video' | 'article' | 'quiz';
};

type Student = {
  id: string;
  name: string;
  email: string;
  progress: number;
  lastActive: string;
};

// Mock data
const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    description: 'Master advanced React patterns and best practices',
    category: 'Web Development',
    level: 'advanced',
    image: '/react-course.jpg',
    students: 1420,
    rating: 4.8,
    lessons: 24,
    published: true,
    createdAt: '2023-10-15'
  },
  
  {
    id: '2',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the core principles of user interface and experience design',
    category: 'Design',
    level: 'beginner',
    image: '/design-course.jpg',
    students: 980,
    rating: 4.6,
    lessons: 18,
    published: true,
    createdAt: '2023-11-22'
  },
  {
    id: '3',
    title: 'Node.js Backend Mastery',
    description: 'Build scalable backend services with Node.js and Express',
    category: 'Web Development',
    level: 'intermediate',
    image: '/node-course.jpg',
    students: 0,
    rating: 0,
    lessons: 0,
    published: false,
    createdAt: '2024-02-10'
  }
];

const mockLessons: Lesson[] = [
  { id: '1', courseId: '1', title: 'Introduction to React Patterns', duration: '12:45', type: 'video' },
  { id: '2', courseId: '1', title: 'Compound Components', duration: '18:30', type: 'video' },
  { id: '3', courseId: '1', title: 'Render Props Pattern', duration: '15:20', type: 'video' },
  { id: '4', courseId: '1', title: 'Advanced Hooks Usage', duration: '22:10', type: 'video' },
  { id: '5', courseId: '1', title: 'Patterns Quiz', duration: '10:00', type: 'quiz' },
  { id: '6', courseId: '2', title: 'Design Principles', duration: '14:25', type: 'video' },
  { id: '7', courseId: '2', title: 'Color Theory', duration: '16:40', type: 'video' },
  { id: '8', courseId: '2', title: 'Typography Essentials', duration: '12:15', type: 'article' }
];

const mockStudents: Student[] = [
  { id: '1', name: 'Alex Johnson', email: 'alex@example.com', progress: 78, lastActive: '2024-03-15' },
  { id: '2', name: 'Maria Garcia', email: 'maria@example.com', progress: 92, lastActive: '2024-03-14' },
  { id: '3', name: 'David Smith', email: 'david@example.com', progress: 45, lastActive: '2024-03-12' },
  { id: '4', name: 'Sarah Chen', email: 'sarah@example.com', progress: 63, lastActive: '2024-03-13' }
];

export default function DashboardPage() {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [lessons, setLessons] = useState<Lesson[]>(mockLessons);
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [activeTab, setActiveTab] = useState('courses');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingLesson, setIsAddingLesson] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    category: 'Web Development',
    level: 'beginner',
    image: '',
    published: false
  });
  const [newLesson, setNewLesson] = useState({
    title: '',
    duration: '',
    type: 'video'
  });
  
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const courseLessons = selectedCourse 
    ? lessons.filter(lesson => lesson.courseId === selectedCourse.id)
    : [];
  
  const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCourse(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLessonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewLesson(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCreateCourse = () => {
    const course: Course = {
      ...newCourse,
      id: (courses.length + 1).toString(),
      students: 0,
      rating: 0,
      lessons: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    setCourses([...courses, course]);
    setNewCourse({
      title: '',
      description: '',
      category: 'Web Development',
      level: 'beginner',
      image: '',
      published: false
    });
    setIsEditing(false);
  };
  
  const handleUpdateCourse = () => {
    if (!selectedCourse) return;
    
    const updatedCourses = courses.map(course => 
      course.id === selectedCourse.id ? { ...course, ...newCourse } : course
    );
    
    setCourses(updatedCourses);
    setSelectedCourse({ ...selectedCourse, ...newCourse });
    setIsEditing(false);
  };
  
  const handleDeleteCourse = (id: string) => {
    setCourses(courses.filter(course => course.id !== id));
    if (selectedCourse?.id === id) setSelectedCourse(null);
  };
  
  const togglePublishCourse = (id: string) => {
    const updatedCourses = courses.map(course => 
      course.id === id ? { ...course, published: !course.published } : course
    );
    
    setCourses(updatedCourses);
    if (selectedCourse?.id === id) {
      setSelectedCourse({ ...selectedCourse, published: !selectedCourse.published });
    }
  };
  
  const handleAddLesson = () => {
    if (!selectedCourse) return;
    
    const lesson: Lesson = {
      ...newLesson,
      id: (lessons.length + 1).toString(),
      courseId: selectedCourse.id
    };
    
    setLessons([...lessons, lesson]);
    
    const updatedCourses = courses.map(course => 
      course.id === selectedCourse.id ? { ...course, lessons: course.lessons + 1 } : course
    );
    
    setCourses(updatedCourses);
    setSelectedCourse({ ...selectedCourse, lessons: selectedCourse.lessons + 1 });
    
    setNewLesson({ title: '', duration: '', type: 'video' });
    setIsAddingLesson(false);
  };
  
  // Delete a lesson
  const handleDeleteLesson = (id: string) => {
    const lessonToDelete = lessons.find(lesson => lesson.id === id);
    if (!lessonToDelete) return;
    
    const updatedLessons = lessons.filter(lesson => lesson.id !== id);
    setLessons(updatedLessons);
    
    // Update course lesson count
    const updatedCourses = courses.map(course => 
      course.id === lessonToDelete.courseId ? { ...course, lessons: course.lessons - 1 } : course
    );
    
    setCourses(updatedCourses);
    if (selectedCourse && selectedCourse.id === lessonToDelete.courseId) {
      setSelectedCourse({ ...selectedCourse, lessons: selectedCourse.lessons - 1 });
    }
  };
  
  // Initialize form when editing a course
  useEffect(() => {
    if (selectedCourse && isEditing) {
      setNewCourse({
        title: selectedCourse.title,
        description: selectedCourse.description,
        category: selectedCourse.category,
        level: selectedCourse.level,
        image: selectedCourse.image,
        published: selectedCourse.published
      });
    }
  }, [selectedCourse, isEditing]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600 text-white p-2 rounded-lg">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">EduLearn Instructor Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-10 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen py-6">
          <nav className="space-y-1 px-4">
            <Button 
              variant={activeTab === 'courses' ? 'secondary' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('courses')}
            >
              <BookOpen className="mr-3 h-4 w-4" />
              My Courses
            </Button>
            <Button 
              variant={activeTab === 'analytics' ? 'secondary' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('analytics')}
            >
              <BarChart className="mr-3 h-4 w-4" />
              Analytics
            </Button>
            <Button 
              variant={activeTab === 'students' ? 'secondary' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('students')}
            >
              <User className="mr-3 h-4 w-4" />
              Students
            </Button>
            <Button 
              variant={activeTab === 'settings' ? 'secondary' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="mr-3 h-4 w-4" />
              Settings
            </Button>
          </nav>
          
          <div className="mt-8 px-4">
            <Button 
              className="w-full"
              onClick={() => {
                setSelectedCourse(null);
                setIsEditing(true);
                setNewCourse({
                  title: '',
                  description: '',
                  category: 'Web Development',
                  level: 'beginner',
                  image: '',
                  published: false
                });
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create New Course
            </Button>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-6">
          <Tabs value={activeTab} className="space-y-6">
            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
                <p className="text-sm text-gray-600">
                  {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} total
                </p>
              </div>
              
              {selectedCourse ? (
                // Course Detail View
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle>{selectedCourse.title}</CardTitle>
                          <Badge 
                            variant={selectedCourse.published ? 'default' : 'secondary'} 
                            className="cursor-pointer"
                            onClick={() => togglePublishCourse(selectedCourse.id)}
                          >
                            {selectedCourse.published ? 'Published' : 'Draft'}
                          </Badge>
                          <Badge variant="outline">{selectedCourse.category}</Badge>
                          <Badge variant="outline">
                            {selectedCourse.level.charAt(0).toUpperCase() + selectedCourse.level.slice(1)}
                          </Badge>
                        </div>
                        <CardDescription>{selectedCourse.description}</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            setIsEditing(true);
                            setSelectedCourse(selectedCourse);
                          }}
                        >
                          <Edit className="h-4 w-4 mr-2" /> Edit
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDeleteCourse(selectedCourse.id)}
                        >
                          <Trash className="h-4 w-4 mr-2" /> Delete
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-500">Students Enrolled</p>
                        <p className="text-2xl font-bold">{selectedCourse.students}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-500">Course Rating</p>
                        <div className="flex items-center">
                          <div className="text-2xl font-bold">{selectedCourse.rating}</div>
                          <div className="ml-2 text-yellow-500">★★★★★</div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-500">Total Lessons</p>
                        <p className="text-2xl font-bold">{selectedCourse.lessons}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Course Content</h3>
                      <Button 
                        size="sm"
                        onClick={() => setIsAddingLesson(true)}
                      >
                        <Plus className="h-4 w-4 mr-2" /> Add Lesson
                      </Button>
                    </div>
                    
                    <div className="border rounded-lg">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Lesson</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {courseLessons.map((lesson) => (
                            <TableRow key={lesson.id}>
                              <TableCell className="font-medium">{lesson.title}</TableCell>
                              <TableCell>
                                <Badge variant="outline">
                                  {lesson.type === 'video' ? 'Video' : 
                                   lesson.type === 'article' ? 'Article' : 'Quiz'}
                                </Badge>
                              </TableCell>
                              <TableCell>{lesson.duration}</TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={() => handleDeleteLesson(lesson.id)}
                                >
                                  <Trash className="h-4 w-4 text-red-500" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                          
                          {courseLessons.length === 0 && (
                            <TableRow>
                              <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                                No lessons added yet. Click "Add Lesson" to get started.
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-end">
                    <Button 
                      variant="outline"
                      onClick={() => setSelectedCourse(null)}
                    >
                      Back to Courses
                    </Button>
                  </CardFooter>
                </Card>
              ) : (
                // Courses List View
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <Card 
                      key={course.id} 
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setSelectedCourse(course)}
                    >
                      <div className="relative">
                        <div className="bg-gray-200 border-2 border-dashed rounded-t-xl w-full h-48" />
                        <div className="absolute top-2 right-2">
                          <Badge 
                            variant={course.published ? 'default' : 'secondary'} 
                            className="cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              togglePublishCourse(course.id);
                            }}
                          >
                            {course.published ? 'Published' : 'Draft'}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{course.students} students</span>
                          <span>{course.lessons} lessons</span>
                          <span>{course.rating} ★</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Badge variant="outline">{course.category}</Badge>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCourse(course);
                              setIsEditing(true);
                            }}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteCourse(course.id);
                            }}
                          >
                            <Trash className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                  
                  {filteredCourses.length === 0 && (
                    <div className="col-span-3 text-center py-12">
                      <BookOpen className="h-12 w-12 mx-auto text-gray-400" />
                      <h3 className="mt-4 text-lg font-medium text-gray-900">No courses found</h3>
                      <p className="mt-1 text-gray-500">
                        {searchTerm ? 'No courses match your search.' : 'Create your first course to get started.'}
                      </p>
                      <Button className="mt-4" onClick={() => setIsEditing(true)}>
                        Create Course
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </TabsContent>
            
            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Analytics</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Engagement Overview</CardTitle>
                    <CardDescription>Student interaction with your courses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Completion Rate</span>
                          <span>68%</span>
                        </div>
                        <Progress value={68} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Average Time Spent</span>
                          <span>4.2h</span>
                        </div>
                        <Progress value={84} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Quiz Pass Rate</span>
                          <span>92%</span>
                        </div>
                        <Progress value={92} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Performance by Course</CardTitle>
                    <CardDescription>How each course is performing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Course</TableHead>
                          <TableHead>Enrollments</TableHead>
                          <TableHead>Completion</TableHead>
                          <TableHead>Rating</TableHead>
                          <TableHead className="text-right">Revenue</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {courses.filter(c => c.published).map((course) => (
                          <TableRow key={course.id}>
                            <TableCell className="font-medium">{course.title}</TableCell>
                            <TableCell>{course.students}</TableCell>
                            <TableCell>
                              <Progress value={Math.min(100, Math.floor(course.students * 0.7))} />
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <span className="mr-2">{course.rating}</span>
                                <div className="text-yellow-400">★</div>
                              </div>
                            </TableCell>
                            <TableCell className="text-right font-medium">
                              ${(course.students * 19.99).toLocaleString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Student Engagement</CardTitle>
                  <CardDescription>Weekly activity metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 border rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Engagement chart visualization</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Students Tab */}
            <TabsContent value="students">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Management</h2>
              
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Students Enrolled</CardTitle>
                      <CardDescription>Manage students in your courses</CardDescription>
                    </div>
                    <Input 
                      placeholder="Search students..." 
                      className="w-64"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Last Active</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">{student.name}</TableCell>
                          <TableCell>{student.email}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Progress value={student.progress} className="w-32 mr-2" />
                              <span>{student.progress}%</span>
                            </div>
                          </TableCell>
                          <TableCell>{student.lastActive}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm">
                              Message
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Settings Tab */}
            <TabsContent value="settings">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructor Settings</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your public profile details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      <div>
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea 
                          id="bio" 
                          defaultValue="Senior developer and educator with 10+ years of experience building web applications."
                          rows={4}
                        />
                      </div>
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" defaultValue="https://johndoe.dev" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="twitter">Twitter</Label>
                          <Input id="twitter" defaultValue="@johndoe" />
                        </div>
                        <div>
                          <Label htmlFor="linkedin">LinkedIn</Label>
                          <Input id="linkedin" defaultValue="linkedin.com/in/johndoe" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Settings</CardTitle>
                    <CardDescription>Manage how you receive payments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label>Payout Method</Label>
                        <Select defaultValue="paypal">
                          <SelectTrigger>
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="paypal">PayPal</SelectItem>
                            <SelectItem value="bank">Bank Transfer</SelectItem>
                            <SelectItem value="stripe">Stripe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="email">PayPal Email</Label>
                        <Input id="email" defaultValue="johndoe@example.com" />
                      </div>
                      <div>
                        <Label>Payout Schedule</Label>
                        <Select defaultValue="monthly">
                          <SelectTrigger>
                            <SelectValue placeholder="Select schedule" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button>Update Payment</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
      
      {/* Course Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>
                {selectedCourse ? 'Edit Course' : 'Create New Course'}
              </CardTitle>
              <CardDescription>
                {selectedCourse ? 'Update your course details' : 'Fill in the details for your new course'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Course Title</Label>
                  <Input 
                    id="title" 
                    name="title"
                    value={newCourse.title}
                    onChange={handleCourseChange}
                    placeholder="e.g., Advanced React Patterns"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={newCourse.description}
                    onChange={handleCourseChange}
                    placeholder="Describe what students will learn in this course"
                    rows={4}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input 
                      id="category" 
                      name="category"
                      value={newCourse.category}
                      onChange={handleCourseChange}
                      placeholder="e.g., Web Development"
                    />
                  </div>
                  
                  <div>
                    <Label>Difficulty Level</Label>
                    <Select 
                      value={newCourse.level}
                      onValueChange={(value) => setNewCourse({...newCourse, level: value as any})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label>Course Image</Label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PNG, JPG (MAX. 5MB)
                        </p>
                      </div>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    id="published"
                    type="checkbox"
                    checked={newCourse.published}
                    onChange={(e) => setNewCourse({...newCourse, published: e.target.checked})}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="published" className="text-sm font-medium text-gray-700">
                    Publish this course
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                onClick={() => {
                  setIsEditing(false);
                  setSelectedCourse(selectedCourse);
                }}
              >
                Cancel
              </Button>
              <Button 
                onClick={selectedCourse ? handleUpdateCourse : handleCreateCourse}
              >
                {selectedCourse ? 'Update Course' : 'Create Course'}
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
      
      {/* Add Lesson Modal */}
      {isAddingLesson && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Add New Lesson</CardTitle>
              <CardDescription>Add content to your course</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="lessonTitle">Lesson Title</Label>
                  <Input 
                    id="lessonTitle" 
                    name="title"
                    value={newLesson.title}
                    onChange={handleLessonChange}
                    placeholder="e.g., Introduction to React Hooks"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Lesson Type</Label>
                    <Select 
                      value={newLesson.type}
                      onValueChange={(value) => setNewLesson({...newLesson, type: value as any})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="article">Article</SelectItem>
                        <SelectItem value="quiz">Quiz</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="duration">Duration</Label>
                    <Input 
                      id="duration" 
                      name="duration"
                      value={newLesson.duration}
                      onChange={handleLessonChange}
                      placeholder="e.g., 15:30"
                    />
                  </div>
                </div>
                
                {newLesson.type === 'video' && (
                  <div>
                    <Label>Upload Video</Label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Video className="w-8 h-8 mb-4 text-gray-500" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            MP4, MOV (MAX. 500MB)
                          </p>
                        </div>
                        <input type="file" className="hidden" accept="video/*" />
                      </label>
                    </div>
                  </div>
                )}
                
                {newLesson.type === 'article' && (
                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Write your lesson content here..."
                      rows={8}
                      className="mt-1"
                    />
                  </div>
                )}
                
                {newLesson.type === 'quiz' && (
                  <div>
                    <Label>Quiz Questions</Label>
                    <div className="bg-gray-50 border rounded-lg p-4">
                      <p className="text-gray-500 text-center">Quiz creation interface would appear here</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                onClick={() => setIsAddingLesson(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleAddLesson}>
                Add Lesson
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}