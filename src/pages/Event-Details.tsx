import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react';
import EventsList from '../data/events'; // Verify this path
import VibrantBubblesAndStarsAnimation from '../components/animations/bubbles-stars';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const EventDetails = () => {
  useScrollAnimation();
  const { eventId } = useParams<{ eventId: string }>();
  const events = EventsList();

  // Convert eventId to number for comparison
  const event = events.find(e => e.id === Number(eventId));

  // Handle case where event is not found
  if (!event) {
    console.error(`Event not found for ID: ${eventId}`);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-school-navy mb-4">Event Not Found</h2>
          <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="bg-school-navy hover:bg-school-blue">
            <Link to="/events">Back to Events</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <VibrantBubblesAndStarsAnimation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-school-navy text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop')] bg-center bg-cover bg-no-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <Button 
              asChild 
              className="mb-6 border-white bg-white/20 text-school-gold hover:bg-white/10 hover:text-white text-lg px-6 py-3 font-semibold rounded-lg transition-all duration-300"
            >
              <Link to="/events">
                <ArrowLeft className="h-5 w-5 mr-2" /> Back to Events
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-serif">{event.title}</h1>
            <div className="flex items-center text-white/90 mb-6">
              <span className="bg-school-gold text-school-navy font-bold text-sm px-3 py-1 rounded-full">{event.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="grid grid-cols-1 gap-8">
          {/* Main Content */}
          <div>
            <Card className="bg-white/80 backdrop-blur-sm border-school-navy/10">
              <CardContent className="p-8">
                <div className="mb-8">
                  <img 
                    src={event.image || "/api/placeholder/800/400"} 
                    alt={event.title} 
                    className="w-full h-96 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3 text-school-blue" />
                    <span className="text-lg">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3 text-school-blue" />
                    <span className="text-lg">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-school-blue" />
                    <span className="text-lg">{event.location}</span>
                  </div>
                </div>

                <div className="mt-8 prose prose-school-navy max-w-none">
                  <h2 className="text-2xl font-bold mb-4 font-serif">Event Description</h2>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>

                {/* Additional Information (if available) */}
                {event.additionalInfo && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 font-serif">Additional Information</h2>
                    <div className="prose prose-school-navy">
                      <p className="text-gray-600">{event.additionalInfo}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
