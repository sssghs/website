import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, RefreshCw } from 'lucide-react';
import VibrantBubblesAndStarsAnimation from '@/components/animations/bubbles-stars';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-school-light to-blue-50 flex items-center justify-center px-4 overflow-hidden">
      <VibrantBubblesAndStarsAnimation />
      <div className="relative z-10 text-center max-w-lg bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-school-navy/10">
        <div className="mb-10 relative">
          <div className="w-40 h-40 bg-gradient-to-br from-school-navy to-school-blue rounded-full flex items-center justify-center mx-auto shadow-lg transform transition-all duration-700 hover:scale-105">
            <span className="text-white font-serif font-bold text-6xl">404</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-school-navy bg-gradient-to-r from-school-navy to-school-blue bg-clip-text text-transparent">
          Page Not Found
        </h1>
        
        <p className="text-lg text-gray-700 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild variant="default" className="bg-gradient-to-r from-school-navy to-school-blue hover:from-school-blue hover:to-school-navy transition-all duration-300 transform hover:scale-105 min-w-32">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <Button variant="outline" className="border-school-navy/30 text-school-navy hover:bg-school-light hover:text-school-navy transition-all duration-300 transform hover:scale-105 min-w-32">
            <RefreshCw className="mr-2 h-4 w-4" />
            Retry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;