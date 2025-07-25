'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import RegisterForm from "@/components/registration-form";
import { UserPlus, BookOpen, GraduationCap } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-8 right-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>

      <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-xl relative overflow-hidden">
        {/* Subtle gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-lg blur opacity-20"></div>
        
        <div className="relative bg-white rounded-lg">
          <CardHeader className="space-y-1 pb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg">
                <UserPlus className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-gray-900 to-indigo-700 bg-clip-text text-transparent">
              Create Your Account
            </CardTitle>
            <CardDescription className="text-center text-gray-600 text-base">
              Join as a Student or Instructor
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="flex justify-center mb-6">
              <div className="flex space-x-4">
                <div className="flex flex-col items-center p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                  <GraduationCap className="h-10 w-10 text-indigo-600 mb-2" />
                  <span className="text-sm font-medium text-indigo-700">Student</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <BookOpen className="h-10 w-10 text-purple-600 mb-2" />
                  <span className="text-sm font-medium text-purple-700">Instructor</span>
                </div>
              </div>
            </div>
            
            <RegisterForm />
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500 font-medium">Already registered?</span>
              </div>
            </div>
            
            <div className="text-center text-sm">
              <Link 
                href="/login" 
                className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors inline-flex items-center"
              >
                Sign in to your account
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}