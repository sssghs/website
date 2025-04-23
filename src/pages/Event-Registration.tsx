import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EventsList from '../data/events';

const RegistrationForm = () => {
  const { eventId } = useParams();
  const events = EventsList();
  const event = events.find(e => e.id === Number(eventId));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!event) {
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

  // Parse event date to check registration expiration
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
      return new Date('2000-01-01T00:00:00');
    }
  };

  const expirationDate = parseEventDate();
  const currentDate = new Date('2025-04-20T00:00:00');
  const isRegistrationExpired = currentDate >= expirationDate;

  if (isRegistrationExpired) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-school-navy mb-4">Registration Closed</h2>
          <p className="text-gray-600 mb-6">
            Registration for {event.title} closed at midnight on {event.date}.
          </p>
          <Button asChild className="bg-school-navy hover:bg-school-blue">
            <Link to={`/events/${eventId}`}>Back to Event</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Client-side validation
      if (!formData.name || !formData.email) {
        throw new Error('Name and email are required fields.');
      }

      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, eventId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed.');
      }

      setSubmissionSuccess(true);
      toast.success('Registration submitted successfully!', {
        position: 'top-right',
        autoClose: 5000,
      });
    } catch (err) {
      setError(err.message || 'An error occurred during registration.');
      toast.error(err.message || 'An error occurred during registration.', {
        position: 'top-right',
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <ToastContainer />
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-school-navy/10">
          <CardContent className="p-8">
            <Button 
              asChild 
              className="mb-6 border-school-navy bg-school-navy/10 text-school-navy hover:bg-school-navy/20"
            >
              <Link to={`/events/${eventId}`}>
                <ArrowLeft className="h-5 w-5 mr-2" /> Back to Event
              </Link>
            </Button>

            <h1 className="text-3xl font-bold mb-6 text-school-navy font-serif">
              Register for {event.title}
            </h1>

            {submissionSuccess ? (
              <div className="p-6 bg-green-100 text-green-800 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Registration Successful!</h2>
                <p>Thank you for registering for {event.title}. We'll send you a confirmation email soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-100 text-red-800 rounded-lg">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-school-blue focus:border-school-blue"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-school-blue focus:border-school-blue"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-school-blue focus:border-school-blue"
                  />
                </div>

                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                    Comments or Special Requests
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-school-blue focus:border-school-blue"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-school-blue hover:bg-school-navy text-white"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationForm;
