import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import VibrantBubblesAndStarsAnimation from '@/components/animations/bubbles-stars';
import useScrollAnimation from '@/hooks/useScrollAnimation';

// Inquiry type mapping for display purposes
const inquiryTypeMap: { [key: string]: string } = {
  admissions: 'Admissions Information',
  visit: 'Schedule a Visit',
  programs: 'Academic Programs',
  financial: 'Financial Information',
  other: 'Other',
};

// Custom red marker icon
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Contact = () => {
  useScrollAnimation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: 'admissions', // Default value
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleInquiryChange = (value: string) => {
    console.log('Selected Inquiry Type:', value);
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate inquiryType
    const validInquiryTypes = ['admissions', 'visit', 'programs', 'financial', 'other'];
    if (!validInquiryTypes.includes(formData.inquiryType)) {
      toast.error('Please select a valid inquiry type.', {
        position: 'top-right',
        autoClose: 5000,
      });
      return;
    }

    console.log('Form Data:', formData);
    setIsSubmitting(true);

    try {
      const res = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmissionSuccess(true);
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 5000,
        });
      } else {
        toast.error('Something went wrong. Please try again later.', {
          position: 'top-right',
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Network error. Please check your connection.', {
        position: 'top-right',
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: 'How soon can I expect a response to my inquiry?',
      answer:
        'We strive to respond to all inquiries within 1-2 business days. For urgent matters, please call our main office directly.',
    },
    {
      question: 'How do I schedule a campus tour?',
      answer:
        'You can schedule a campus tour by filling out the contact form above, calling our admissions office, or selecting "Schedule a Visit" from the inquiry type dropdown.',
    },
    {
      question: "Who should I contact about my child's attendance?",
      answer:
        'For attendance-related matters, please contact our attendance office directly at (123) 456-7892 or email attendance@Sri Sathya Sai Grammar High School.edu.',
    },
    {
      question: 'How do I reach a specific teacher or staff member?',
      answer:
        'You can find contact information for all our faculty and staff in the directory on our school portal. Alternatively, you can call our main office, and they will direct your call.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Handle marker click to navigate to Google Maps
  const handleMarkerClick = () => {
    const lat = 17.3215037;
    const lng = 78.1480815;
    const googleMapsUrl = 'https://www.google.com/maps/place/Sri+Sathya+Sai+grammar+high+school/@17.3215097,78.1431891,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcbe96e9fc76837:0x811e712a45da6cb1!8m2!3d17.3215046!4d78.14806!16s%2Fg%2F11fk46kl70?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D';
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div>
      <VibrantBubblesAndStarsAnimation />
      <ToastContainer />

      {/* Hero Section */}
      <section className="relative py-24 bg-school-navy text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop')] bg-center bg-cover bg-no-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              We'd love to hear from you. Reach out with any questions about our programs, admissions, or campus.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 staggered-container">
            <Card className="card-hover staggered-item">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-school-navy/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-school-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-school-navy">Address</h3>
                <p className="text-gray-700">
                  Sri Sathya Sai Grammar High School<br />
                  Chevella, Ranga Reddy<br />
                  Telangana - 501503
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover staggered-item">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-school-navy/10 rounded-full flex items-center justify-center mb-6">
                  <Phone className="h-8 w-8 text-school-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-school-navy">Phone</h3>
                <p className="text-gray-700">
                  Main Office: +91 90320 63927<br />
                  Admissions: +91 63037 08779
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover staggered-item">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-school-navy/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="h-8 w-8 text-school-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-school-navy">Email</h3>
                <p className="text-gray-700">
                  General Inquiries:<br />
                  contact@sssghs.co.in<br /><br />
                  Admissions:<br />
                  admissions@sssghs.co.in
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover staggered-item">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-school-navy/10 rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-school-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-school-navy">Office Hours</h3>
                <p className="text-gray-700">
                  Monday - Saturday:<br />
                  8:20 AM - 4:45 PM<br /><br />
                  Sundays & Holidays:<br />
                  Closed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Get in Touch</h2>
            <p className="text-lg text-gray-700">
              Have a question or want to learn more? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg animate-on-scroll">
            {submissionSuccess ? (
              <div className="p-6 bg-green-100 text-green-800 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Message Sent Successfully!</h2>
                <p>Thank you for contacting us. We'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address*</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry">Inquiry Type*</Label>
                  <Select onValueChange={handleInquiryChange} value={formData.inquiryType}>
                    <SelectTrigger id="inquiry">
                      <SelectValue placeholder="Select an inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admissions">Admissions Information</SelectItem>
                      <SelectItem value="visit">Schedule a Visit</SelectItem>
                      <SelectItem value="programs">Academic Programs</SelectItem>
                      <SelectItem value="financial">Financial Information</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message*</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="min-h-[150px]"
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-school-navy text-white hover:bg-school-navy/90 px-8 py-6"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Find Us</h2>
            <p className="text-lg text-gray-700">
              Our campus is conveniently located in the heart of Scholarlane.
            </p>
          </div>

          <div className="h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg animate-on-scroll">
            <MapContainer
              center={[17.3215037, 78.1480815]}
              zoom={15}
              style={{ height: '100%', width: '100%' }}
              className="z-0"
              aria-label="Interactive campus map"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker
                position={[17.3215037, 78.1480815]}
                icon={redIcon}
                eventHandlers={{
                  click: handleMarkerClick,
                }}
              >
                <Popup>
                  Our School <br /> 123 Education Ave, Scholarlane, SL 12345
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Find quick answers to common questions about contacting us.
            </p>
          </div>
          <div className="container mx-auto px-4">
            <Card className="staggered-container">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0 staggered-item">
                      <button
                        className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                        onClick={() => toggleFaq(index)}
                      >
                        <h3 className="text-lg font-medium text-school-navy">{faq.question}</h3>
                        <ChevronDown
                          className={`h-5 w-5 text-school-blue transition-transform ${
                            openFaq === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all ${
                          openFaq === index ? 'max-h-40 opacity-100 pt-2' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-school-gold text-school-navy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Connect With Us on Social Media</h2>
            <p className="text-xl text-school-navy/80 mb-8">
              Follow us to stay updated on school news, events, and student achievements.
            </p>
            <div className="flex justify-center space-x-6">
              {[
                {
                  platform: 'facebook',
                  icon: <Facebook className="h-6 w-6" />,
                  url: 'https://www.facebook.com/profile.php?id=61563011934713&sk=photos', // Replace with your Facebook URL
                },
                {
                  platform: 'twitter',
                  icon: <Twitter className="h-6 w-6" />,
                  url: '#', // Replace with your Twitter/X URL
                },
                {
                  platform: 'instagram',
                  icon: <Instagram className="h-6 w-6" />,
                  url: '#', // Replace with your Instagram URL
                },
                {
                  platform: 'youtube',
                  icon: <Youtube className="h-6 w-6" />,
                  url: 'https://www.youtube.com/@srisathyasaigrammarhighsch5520', // Replace with your YouTube URL
                },
              ].map(({ platform, icon, url }) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-school-navy hover:text-white transition-colors duration-300"
                  aria-label={`Follow us on ${platform}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;