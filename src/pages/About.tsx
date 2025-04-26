
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
                Founded in 2008, Sri Sathya Sai Grammar High School began with a vision to create an educational institution that would provide
                students with not just academic knowledge, but also the skills and values needed to succeed in life.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the past three decades, we have grown from a small school with just a handful of students to a
                thriving educational community. Throughout our journey, we have remained committed to our founding
                principles of excellence, integrity, and innovation.
              </p>
              <p className="text-lg text-gray-700">
                Today, Sri Sathya Sai Grammar High School stands as a testament to that original vision, with thousands of alumni
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
                <ul className="text-gray-700 list-disc list-inside space-y-2">
                  <li>Create a stimulating and challenging learning environment where students will discover and develop their full potential.</li>
                  <li>Attain highest academic standards by constant review of CBSE Academic curriculum, engaging the best facilitators and benchmarking standards against the best.</li>
                  <li>Provides students with an opportunity to participate in activities that promote physical fitness.</li>
                  <li>Provides a strong platform towards developing ecological and environmental awareness.</li>
                  <li>Involve all stake holders in the improvement / development process of the school.</li>
                </ul>
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
                <ul className="text-gray-700 list-disc list-inside space-y-2">
                  <li>To provide and sustain a learning environment with state-of-the-art facilities that foster academic excellence and personal growth.</li>
                  <li>To develop students into confident, responsible, and compassionate individuals capable of navigating an ever-changing world.</li>
                  <li>To promote critical thinking, creativity, and a lifelong love of learning.</li>
                  <li>To cultivate leadership skills, integrity, and a commitment to social justice and environmental stewardship.</li>
                  <li>To ensure every child is nurtured holistically — intellectually, socially, emotionally, and physically — enabling them to realize their full potential.</li>
                </ul>
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
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Swaroop%20Sir.jpg?alt=media&token=f5afa5e9-2926-4fbf-9203-080759c8c44c",
                name: "Mr. B.Swaroop Reddy",
                role: "Chairman"
              },
              {
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Naidu%20Sir.jpg?alt=media&token=537438fa-66f9-4ed6-98e9-23537e2aa85b",
                name: "Mr. N.A.Naidu",
                role: "Director"
              },
              {
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Arun%20Sir.jpg?alt=media&token=081332cf-6bd7-4238-b49f-eccccae31912",
                name: "Dr. Arun Mony",
                role: "Principal (CBSE)"
              },
              {
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Snehlata%20Mam.jpg?alt=media&token=2d451068-f1af-49b2-a7bb-08c52eb8f636",
                name: "Mrs. Snehalatha",
                role: "Principal (SSC)"
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
              "The education provided at Sri Sathya Sai Grammar High School is truly transformative. The faculty's dedication to excellence
              and the supportive community environment create an ideal place for students to grow and thrive."
            </p>
            <div>
              <p className="font-bold text-xl">Mr. P.Nagaraj</p>
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
              Sri Sathya Sai Grammar High School is proud to be recognized by these prestigious educational organizations.
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
