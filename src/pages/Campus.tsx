import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Users, Library, BookOpen, Coffee, Dumbbell, Music, Palette, LucideFlame, Lightbulb, Dribbble, Activity } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import VibrantBubblesAndStarsAnimation from '@/components/animations/bubbles-stars';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const Campus = () => {
  useScrollAnimation();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Custom red marker icon
  const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // Handle marker click to navigate to Google Maps
  const handleMarkerClick = () => {
    const lat = 17.3215037;
    const lng = 78.1480815;
    const googleMapsUrl = 'https://www.google.com/maps/place/Sri+Sathya+Sai+grammar+high+school/@17.3215097,78.1431891,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcbe96e9fc76837:0x811e712a45da6cb1!8m2!3d17.3215046!4d78.14806!16s%2Fg%2F11fk46kl70?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D';
    window.open(googleMapsUrl, '_blank');
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=1969&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592303637753-701939374585?q=80&w=1986&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=1949&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1597600159211-d6c104f408d1?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1932&auto=format&fit=crop",
  ];

  const closeModal = () => {
    setActiveImage(null);
  };

  return (
    <div>
      <VibrantBubblesAndStarsAnimation />
      {/* Hero Section */}
      <section className="relative py-24 bg-school-navy text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Meta%2FCampus.jpg?alt=media&token=71acf43b-e129-42a6-9d51-29d679dc4cee')] bg-center bg-cover bg-no-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Campus</h1>
            <p className="text-xl text-white/90">
              Explore our beautiful campus facilities designed to inspire learning and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Welcome to Our Campus</h2>
              <p className="text-lg text-gray-700 mb-6">
                Situated on 3.5 acres of beautifully landscaped grounds, our campus provides a safe, inspiring environment for learning and growth. Our facilities blend historic architecture with modern amenities to create the perfect setting for academic excellence.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From our state-of-the-art science labs to our performing arts center, every space on campus is designed to support our educational mission and provide students with the resources they need to excel.
              </p>
              <div className="flex items-center text-school-navy">
                <MapPin className="mr-2 text-school-gold" />
                <span>Sri Sathya Sai Grammar High School, Chevella, Ranga Reddy</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg animate-on-scroll">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Building%2FSchool-1.jpg?alt=media&token=9ae4d7ee-fb3b-49d0-bae9-750bb95492cf" 
                alt="Campus Overview" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Campus Facilities</h2>
            <p className="text-lg text-gray-700">
              Our modern facilities support academic excellence, artistic expression, athletic development, and community gathering.
            </p>
          </div>

          <Tabs defaultValue="academic" className="animate-on-scroll">
            <style>
              {`
                .tab-content {
                  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
                }
                .tab-content:not([data-state="active"]) {
                  opacity: 0;
                  transform: translateY(1rem);
                  pointer-events: none;
                  position: absolute;
                  width: 100%;
                }
                .tab-content[data-state="active"] {
                  opacity: 1;
                  transform: translateY(0);
                  position: relative;
                }
              `}
            </style>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl bg-school-navy/5">
                <TabsTrigger value="academic" className="data-[state=active]:bg-school-navy data-[state=active]:text-white">Academic</TabsTrigger>
                <TabsTrigger value="arts" className="data-[state=active]:bg-school-navy data-[state=active]:text-white">Arts</TabsTrigger>
                <TabsTrigger value="sports" className="data-[state=active]:bg-school-navy data-[state=active]:text-white">Sports</TabsTrigger>
                <TabsTrigger value="community" className="data-[state=active]:bg-school-navy data-[state=active]:text-white">Community</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="academic" className="mt-0 tab-content">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Library className="h-10 w-10 text-school-gold" />,
                    title: "Library & Media Center",
                    description: "Our modern library features extensive print and digital collections, collaborative workspaces, and technology resources."
                  },
                  {
                    icon: <BookOpen className="h-10 w-10 text-school-gold" />,
                    title: "Science & Technology Labs",
                    description: "State-of-the-art laboratories for biology, chemistry, physics, and computer science with modern equipment."
                  },
                  {
                    icon: <Users className="h-10 w-10 text-school-gold" />,
                    title: "Collaborative Learning Spaces",
                    description: "Flexible classrooms and learning commons designed to facilitate group work and project-based learning."
                  }
                ].map((facility, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="mb-4">
                        {facility.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-school-navy">{facility.title}</h3>
                      <p className="text-gray-600">{facility.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="arts" className="mt-0 tab-content">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <LucideFlame className="h-10 w-10 text-school-gold" />,
                    title: "Dance Studio",
                    description: "A state-of-the-art dance studio with sprung floors, mirrors, and professional sound systems for classes, rehearsals, and performances."
                  },
                  {
                    icon: <Palette className="h-10 w-10 text-school-gold" />,
                    title: "Visual Arts Studios",
                    description: "Dedicated spaces for drawing, painting, sculpture, ceramics, and digital arts with professional-grade equipment."
                  },
                  {
                    icon: <Music className="h-10 w-10 text-school-gold" />,
                    title: "Music Rooms & Recording Studio",
                    description: "Practice rooms, ensemble spaces, and a digital recording studio for music education and production."
                  }
                ].map((facility, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="mb-4">
                        {facility.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-school-navy">{facility.title}</h3>
                      <p className="text-gray-600">{facility.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sports" className="mt-0 tab-content">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Dumbbell className="h-10 w-10 text-school-gold" />,
                    title: "Athletic Complex",
                    description: "A multi-purpose fitness center, and outdoor track for physical education and competitive sports."
                  },
                  {
                    icon: <Dribbble className="h-10 w-10 text-school-gold" />,
                    title: "Sports Fields",
                    description: "Basketball, Handball and multi-purpose court with modern turf surfaces for practice and competition."
                  },
                  {
                    icon: <Activity className="h-10 w-10 text-school-gold" />,
                    title: "Indoor Sports",
                    description: "An indoor sports room for physical education, and community programs."
                  }
                ].map((facility, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="mb-4">
                        {facility.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-school-navy">{facility.title}</h3>
                      <p className="text-gray-600">{facility.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community" className="mt-0 tab-content">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Coffee className="h-10 w-10 text-school-gold" />,
                    title: "Student Center",
                    description: "A comfortable gathering space with lounge areas, study nooks, and a café for socializing and collaboration."
                  },
                  {
                    icon: <Lightbulb className="h-10 w-10 text-school-gold" />,
                    title: "Collaborative Learning Studios",
                    description: "Flexible, tech-enabled classrooms designed to foster creativity, group projects, and hands-on exploration across subjects."
                  },
                  {
                    icon: <Calendar className="h-10 w-10 text-school-gold" />,
                    title: "Community Meeting Spaces",
                    description: "Versatile spaces for assemblies, parent meetings, and community events that bring our school family together."
                  }
                ].map((facility, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="mb-4">
                        {facility.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-school-navy">{facility.title}</h3>
                      <p className="text-gray-600">{facility.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Campus Gallery</h2>
            <p className="text-lg text-gray-700">
              Take a visual tour of our beautiful campus and facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-on-scroll">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-md cursor-pointer h-64 staggered-item"
                onClick={() => setActiveImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Campus Gallery ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {activeImage && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
              <div className="relative max-w-4xl w-full">
                <button 
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
                  onClick={closeModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img 
                  src={activeImage} 
                  alt="Enlarged campus view" 
                  className="w-full h-auto rounded-lg" 
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Campus Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Campus Map & Directions</h2>
            <p className="text-lg text-gray-700">
              Find your way to our campus and navigate our grounds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px] animate-on-scroll">
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
                    Our School <br /> Sri Sathya Sai Grammar High School
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6 text-school-navy">Visiting Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-school-navy">Address</h4>
                  <p className="text-gray-700">Sri Sathya Sai Grammar High School<br />Chevella, Ranga Reddy</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-school-navy">Campus Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monday - Saturday:</span>
                      <span className="text-gray-700">8:20 AM - 4:45 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Sunday:</span>
                      <span className="text-gray-700">Closed</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-school-navy">Parking</h4>
                  <p className="text-gray-700">Visitor parking is available in the main lot adjacent to the Administration Building.</p>
                </div>
                <Button asChild className="w-full btn-primary">
                  <Link to="/contact">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-school-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Take a Virtual Tour</h2>
            <p className="text-xl text-white/80 mb-8">
              Can't visit in person? Explore our campus through our interactive virtual tour.
            </p>
            <Button className="bg-school-gold text-school-navy hover:bg-school-gold/90 text-lg px-8 py-6">
              Start Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Campus Sustainability</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our commitment to environmental stewardship is reflected in our sustainable campus practices. We believe in teaching students the importance of caring for our planet through both education and example.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-gold flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-school-navy font-bold text-sm">1</span>
                  </div>
                  <p className="text-gray-700">Rainwater collection systems water our campus gardens and playing fields.</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-gold flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-school-navy font-bold text-sm">2</span>
                  </div>
                  <p className="text-gray-700">Our student-led recycling and composting program diverts 75% of waste from landfills.</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-gold flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-school-navy font-bold text-sm">3</span>
                  </div>
                  <p className="text-gray-700">All new campus construction meets LEED certification standards.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 overflow-hidden rounded-lg shadow-lg animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1548407260-da850faa41e3?q=80&w=1974&auto=format&fit=crop" 
                alt="Campus Sustainability" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-school-gold">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Experience Our Campus in Person</h2>
            <p className="text-xl text-school-navy/80 mb-8">
              The best way to understand what makes our school special is to visit. Schedule a tour today!
            </p>
            <Button asChild className="bg-school-navy text-white hover:bg-school-navy/90 text-lg px-8 py-6">
              <Link to="/contact">Schedule a Campus Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campus;