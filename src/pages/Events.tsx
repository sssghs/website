import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, ChevronRight, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import EventsList from '../data/events'; // Adjust path as needed
import VibrantBubblesAndStarsAnimation from '../components/animations/bubbles-stars';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-school-navy/10">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-school-navy/30" />
        <img 
          src={event.image || "/api/placeholder/600/400"} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-school-gold text-school-navy font-bold text-sm px-3 py-1 rounded-full">
          {event.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-school-navy mb-2 font-serif">{event.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="h-4 w-4 mr-2 text-school-blue" />
          <span className="text-sm">{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Clock className="h-4 w-4 mr-2 text-school-blue" />
          <span className="text-sm">{event.time}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2 text-school-blue" />
          <span className="text-sm">{event.location}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
        <Button asChild className="w-full bg-gradient-to-r from-school-navy to-school-blue hover:from-school-blue hover:to-school-navy">
          <Link to={`/events/${event.id}`}>
            <span>View Details</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const Events = () => {
  useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const events = EventsList();
  const categories = ['All', 'Academic', 'Arts', 'Career', 'Sports', 'General', 'Cultural'];
  
  // Define date range: 2 months past to 2 months future from April 13, 2025
  const today = new Date('2025-04-13');
  const twoMonthsPast = new Date(today);
  twoMonthsPast.setMonth(today.getMonth() - 2); // Feb 13, 2025
  const twoMonthsFuture = new Date(today);
  twoMonthsFuture.setMonth(today.getMonth() + 2); // Jun 13, 2025

  const filteredEvents = events
    .filter(event => {
      const eventDate = new Date(event.date);
      const matchesDate = eventDate >= twoMonthsPast && eventDate <= twoMonthsFuture;
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
      
      return matchesDate && matchesSearch && matchesCategory;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort chronologically

  return (
    <div className="relative">
      <VibrantBubblesAndStarsAnimation />
      {/* Hero Section */}
      <section className="relative py-24 bg-school-navy text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop')] bg-center bg-cover bg-no-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif">
              Upcoming Events
            </h1>
            <p className="text-xl text-white/90">
              Join us for a vibrant array of activities at Sri Sathya Sai Grammar High School, from academic showcases to cultural celebrations.
            </p>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 relative z-10 py-20">        
        {/* Search and filter */}
        <div className="max-w-4xl mx-auto mb-10 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-school-navy/10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search events..." 
                className="pl-10 border-school-navy/20 focus:border-school-blue"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-school-navy" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category 
                        ? 'bg-school-navy text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Events grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/80 backdrop-blur-sm rounded-xl shadow-md">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Calendar className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">No Events Found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
        
        {/* Calendar button */}
        <div className="text-center mt-12">
          <Button className="bg-school-gold text-school-navy hover:bg-school-gold/90 text-lg px-8 py-6">
            <Link to="/all-events" className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              View Full Calendar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;