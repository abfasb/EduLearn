"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  const features = [
    {
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with real-world experience',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      title: 'Interactive Content',
      description: 'Engage with quizzes, projects, and hands-on exercises',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Learn Anywhere',
      description: 'Access courses on any device at your own pace',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
      )
    }
  ];

  const courses = [
    { title: 'Web Development', lessons: 42, level: 'Beginner' },
    { title: 'Data Science', lessons: 36, level: 'Intermediate' },
    { title: 'UI/UX Design', lessons: 28, level: 'Beginner' },
    { title: 'Mobile Development', lessons: 39, level: 'Advanced' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-600 text-white p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-gray-900">EduLearn</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Home</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Courses</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Features</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Testimonials</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href={'/login'} className="text-gray-700 font-medium hover:text-indigo-600">Sign In</Link>
          <Link href={'/register'} className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Learn <span className="text-indigo-600">New Skills</span> Online With Expert Teachers
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Access 1000+ free courses from top instructors. Build your future with our flexible learning platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-200">
                Explore Courses
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium text-lg hover:border-indigo-400 transition duration-300">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Demo
                </div>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 w-full h-96 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-2xl z-0"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-400 rounded-2xl z-0"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-white rounded-3xl shadow-sm">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose EduLearn?</h2>
          <p className="mt-4 text-xl text-gray-600">
            We provide the best learning experience with our innovative platform
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition duration-300">
              <div className="text-indigo-600 mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Popular Courses</h2>
            <p className="mt-2 text-gray-600">Hand-picked professional courses for your career growth</p>
          </div>
          <button className="text-indigo-600 font-medium hover:text-indigo-800">
            View All Courses →
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="h-40 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                    {course.level}
                  </span>
                  <span className="text-gray-600">{course.lessons} lessons</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">{course.title}</h3>
                <button className="mt-6 w-full bg-indigo-50 text-indigo-600 py-2 rounded-lg font-medium hover:bg-indigo-100 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
            Start your learning journey today for free
          </h2>
          <p className="mt-4 text-indigo-100 text-xl max-w-xl mx-auto">
            Join thousands of students advancing their careers with our courses
          </p>
          
          <div className="mt-10 max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-indigo-600 text-white p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">EduLearn</span>
            </div>
            <p className="text-gray-600">
              Free online education platform for global learners to gain new skills.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:bg-indigo-600 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:bg-indigo-600 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
              </a>
              <a href="#" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:bg-indigo-600 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c2.673 0 4.953.976 6.678 2.822-.047.063-.095.151-.095.151s-.095.063-.19.063c-.571 0-1.001-.349-1.001-.349-1.714-1.143-3.571-1.143-4.825 0 0 0-.429.349-1.001.349-.19 0-.285-.063-.285-.063s-.047-.088-.095-.151c1.725-1.846 4.005-2.822 6.678-2.822zm-6.539 4.286c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm10.492 0c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-12.414 6.75c.714-.943 1.841-1.607 3.117-1.607.973 0 1.85.338 2.526.883.676.546 1.127 1.292 1.283 2.117h-5.81c.156.825.607 1.571 1.283 2.117.676.546 1.553.883 2.526.883 1.276 0 2.403-.664 3.117-1.607.131.39.307.757.521 1.092-.997.94-2.303 1.515-3.638 1.515-1.305 0-2.509-.553-3.36-1.515-.851-.963-1.36-2.26-1.36-3.61s.509-2.647 1.36-3.61c.851-.962 2.055-1.515 3.36-1.515 1.335 0 2.641.575 3.638 1.515.214.335.39.702.521 1.092-.714-.943-1.841-1.607-3.117-1.607-1.305 0-2.509.553-3.36 1.515-.851.963-1.36 2.26-1.36 3.61s.509 2.647 1.36 3.61c.851.962 2.055 1.515 3.36 1.515 1.335 0 2.641-.575 3.638-1.515.214-.335.39-.702.521-1.092-.714.943-1.841 1.607-3.117 1.607-.973 0-1.85-.338-2.526-.883-.676-.546-1.127-1.292-1.283-2.117h5.81c-.156-.825-.607-1.571-1.283-2.117-.676-.546-1.553-.883-2.526-.883-1.276 0-2.403.664-3.117 1.607z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} EduLearn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}