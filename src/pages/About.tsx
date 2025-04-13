
import React from 'react';
import { Award, BookOpen, Users, Compass, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import VibrantBubblesAndStarsAnimation from '@/components/animations/bubbles-stars';

const About = () => {
  useScrollAnimation();
  return (
    <div>
      <VibrantBubblesAndStarsAnimation />
      {/* Hero Section */}
      <section className="relative py-24 bg-school-navy text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1594312915251-48db9280c8f1?q=80&w=2070&auto=format&fit=crop')] bg-center bg-cover bg-no-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-white/90">
              Discover our rich history, values, and the dedicated community that makes our school special.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 1985, Inspire - The Holistic School began with a vision to create an educational institution that would provide
                students with not just academic knowledge, but also the skills and values needed to succeed in life.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the past three decades, we have grown from a small school with just a handful of students to a
                thriving educational community. Throughout our journey, we have remained committed to our founding
                principles of excellence, integrity, and innovation.
              </p>
              <p className="text-lg text-gray-700">
                Today, Inspire - The Holistic School stands as a testament to that original vision, with thousands of alumni
                who have gone on to make significant contributions in various fields around the world.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="School History" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Our Mission & Vision</h2>
            <p className="text-lg text-gray-700">
              Guiding principles that shape our approach to education and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-container">
            <Card className="card-hover staggered-item">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-school-navy rounded-full flex items-center justify-center mr-4">
                    <Compass className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-school-navy">Our Mission</h3>
                </div>
                <p className="text-gray-700">
                  To provide a transformative educational experience that empowers students to become
                  intellectually curious, socially responsible, and confident individuals who are prepared
                  to make positive contributions to society.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover staggered-item">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-school-navy rounded-full flex items-center justify-center mr-4">
                    <Target className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-school-navy">Our Vision</h3>
                </div>
                <p className="text-gray-700">
                  To be recognized as a leading educational institution that inspires excellence, fosters
                  innovation, and nurtures well-rounded individuals who will become the leaders and change-makers
                  of tomorrow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Our Core Values</h2>
            <p className="text-lg text-gray-700">
              These values form the foundation of our educational philosophy and community culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-container">
            {[
              {
                icon: <Award className="h-10 w-10 text-school-gold" />,
                title: "Excellence",
                description: "We pursue excellence in all endeavors, challenging ourselves and our students to achieve their highest potential."
              },
              {
                icon: <Heart className="h-10 w-10 text-school-gold" />,
                title: "Compassion",
                description: "We foster empathy and kindness, teaching students to care for others and make a positive impact in their communities."
              },
              {
                icon: <BookOpen className="h-10 w-10 text-school-gold" />,
                title: "Lifelong Learning",
                description: "We instill a love of learning that extends beyond the classroom and throughout life."
              },
              {
                icon: <Users className="h-10 w-10 text-school-gold" />,
                title: "Community",
                description: "We build strong relationships between students, families, staff, and the broader community."
              },
              {
                icon: <Target className="h-10 w-10 text-school-gold" />,
                title: "Perseverance",
                description: "We encourage resilience in the face of challenges, teaching students that effort and determination lead to success."
              },
              {
                icon: <Compass className="h-10 w-10 text-school-gold" />,
                title: "Integrity",
                description: "We uphold honesty, respect, and ethical behavior in all interactions and decisions."
              }
            ].map((value, index) => (
              <Card key={index} className="card-hover staggered-item">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-school-navy">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Our Leadership Team</h2>
            <p className="text-lg text-gray-700">
              Meet the dedicated professionals who guide our educational vision and school operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 staggered-container">
            {[
              {
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
                name: "Dr. Sarah Johnson",
                role: "Principal"
              },
              {
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
                name: "Michael Thompson",
                role: "Vice Principal"
              },
              {
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
                name: "Dr. Emily Chen",
                role: "Director of Academics"
              },
              {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
                name: "David Williams",
                role: "Director of Student Affairs"
              }
            ].map((leader, index) => (
              <div key={index} className="staggered-item">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-school-navy">{leader.name}</h3>
                    <p className="text-gray-600">{leader.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Banner */}
      <section className="py-20 bg-school-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <p className="text-2xl md:text-3xl italic mb-8">
              "The education provided at Inspire - The Holistic School is truly transformative. The faculty's dedication to excellence
              and the supportive community environment create an ideal place for students to grow and thrive."
            </p>
            <div>
              <p className="font-bold text-xl">Robert Anderson</p>
              <p className="text-white/80">School Board President</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Our Accreditations</h2>
            <p className="text-lg text-gray-700">
              Inspire - The Holistic School is proud to be recognized by these prestigious educational organizations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12 animate-on-scroll">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center bg-gray-100 rounded-lg p-8 w-64 h-32">
                <div className="text-xl font-bold text-gray-500">Accreditation Logo {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
