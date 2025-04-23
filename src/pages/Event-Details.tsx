import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react';
import EventsList from '../data/events';
import VibrantBubblesAndStarsAnimation from '../components/animations/bubbles-stars';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const EventDetails = () => {
  useScrollAnimation();
  const { eventId } = useParams<{ eventId: string }>();
  const events = EventsList();

  const event = events.find(e => e.id === Number(eventId));

  if (!event) {
    console.error(`Event not found for ID: ${eventId}`);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-school-navy mb-4">Event Not Found</h2>
          <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="bg-school-navy hover:bg-school-blue">
            <Link to="/all-events">Back to Events</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Parse event date to set registration expiration (midnight of the event start date)
  const parseEventDate = () => {
    try {
      const months = {
        January: '01', February: '02', March: '03', April: '04', May: '05', June: '06',
        July: '07', August: '08', September: '09', October: '10', November: '11', December: '12'
      };
      const [monthName, day, year] = event.date.replace(',', '').split(' ');
      const dayPadded = day.padStart(2, '0');
      const month = months[monthName];
      if (!month || !day || !year) throw new Error('Invalid date format');
      return new Date(`${year}-${month}-${dayPadded}T00:00:00`);
    } catch (error) {
      console.error('Error parsing event date:', error);
      // Fallback to a past date to disable registration
      return new Date('2000-01-01T00:00:00');
    }
  };

  const expirationDate = parseEventDate();
  const currentDate = new Date('2025-04-20T00:00:00'); // Current date as per context
  const isRegistrationExpired = currentDate >= expirationDate;

  return (
    <div className="relative min-h-screen">
      <VibrantBubblesAndStarsAnimation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-school-navy text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Meta%2FEvents.jpg?alt=media&token=9f246d35-c7d8-42e4-ac8f-4d65dc997d50')] bg-top bg-cover bg-no-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <Button 
              asChild 
              className="mb-6 border-white bg-white/20 text-school-gold hover:bg-white/10 hover:text-white text-lg px-6 py-3 font-semibold rounded-lg transition-all duration-300"
            >
              <Link to="/all-events">
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
          <Card className="bg-white/80 backdrop-blur-sm border-school-navy/10">
            <CardContent className="p-8">
              {/* Main Image */}
              <div className="mb-8">
                <img 
                  src={event.image || "/api/placeholder/800/400"} 
                  alt={event.title} 
                  className="w-full h-96 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Event Info */}
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

              {/* Registration Section */}
              {event.requiresRegistration && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4 font-serif">Registration</h2>
                  {isRegistrationExpired ? (
                    <div>
                      <Button 
                        disabled
                        className="bg-gray-400 text-white cursor-not-allowed"
                      >
                        Registration Closed
                      </Button>
                      <p className="text-gray-600 mt-2 text-sm">
                        Registration for this event closed at midnight on {event.date}.
                      </p>
                    </div>
                  ) : (
                    <Button 
                      asChild
                      className="bg-school-blue hover:bg-school-navy text-white"
                    >
                      <Link to={`/events/${eventId}/register`}>
                        Register for Event
                      </Link>
                    </Button>
                  )}
                </div>
              )}

              {/* Event Description */}
              <div className="mt-8 prose prose-school-navy max-w-none">
                <h2 className="text-2xl font-bold mb-4 font-serif">Event Description</h2>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>

              {/* Photo Gallery */}
              {event.photos && event.photos.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4 font-serif">Event Photos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {event.photos.map((photo, index) => (
                      <div key={index} className="relative">
                        <img
                          src={photo}
                          alt={`${event.title} photo ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Information */}
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
  );
};

export default EventDetails;