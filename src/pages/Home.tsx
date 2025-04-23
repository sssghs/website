import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, BookOpen, Users, Star, Award, ChevronRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import VibrantBubblesAndStarsAnimation from '@/components/animations/bubbles-stars';
import EventsList from '../data/events'; // Adjust the path as needed

const Home = () => {
  // State for animated numbers in stats section
  const [stats, setStats] = useState([
    { number: 0, target: 1000, label: "Students", suffix: '+' },
    { number: 0, target: 100, label: "Instructors", suffix: '+' },
    { number: 0, target: 15, label: "Faculty to Student Ratio", prefix: '1:' },
    { number: 0, target: 98, label: "Success Rate", suffix: '%' }
  ]);

  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000; // Animation duration in ms
          const interval = 50; // Update interval in ms
          const steps = duration / interval;

          const timers = stats.map((stat, index) => {
            let current = 0;
            const increment = stat.target / steps;

            return setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                current = stat.target;
                clearInterval(timers[index]);
              }

              setStats(prevStats => {
                const newStats = [...prevStats];
                newStats[index] = {
                  ...newStats[index],
                  number: Math.floor(current)
                };
                return newStats;
              });
            }, interval);
          });

          // Cleanup intervals on unmount
          return () => timers.forEach(timer => clearInterval(timer));
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  // Get and filter upcoming events
  const allEvents = EventsList();
  const today = new Date('2025-04-13'); // Current date as provided
  const upcomingEvents = allEvents
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date ascending
    .slice(0, 4); // Limit to 4 events to match original layout

  return (
    <div>
      <VibrantBubblesAndStarsAnimation />
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-school-navy/95 to-school-navy/85"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/building.jpg?alt=media&token=cab5dc2f-6925-4530-88ee-ce5ca4f5f0a6')",
            filter: "brightness(80%)"
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Excellence in Education
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Empowering students to achieve academic excellence and personal growth in a nurturing environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <Button asChild className="bg-school-gold text-school-navy hover:bg-school-gold/90 px-8 py-6 text-lg">
              <Link to="/curriculum">Explore Programs</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <ChevronRight size={40} className="text-white transform rotate-90" />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Welcome to Sri Sathya Sai Grammar High School</h2>
            <p className="text-lg text-gray-700">
              At Sri Sathya Sai Grammar High School, we believe in providing a holistic education that nurtures not just the mind, but also the heart and spirit. Our commitment to excellence in academics, arts, and athletics sets us apart as a leading educational institution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-container">
            {[
              {
                icon: <BookOpen size={40} className="text-school-gold" />,
                title: "Academic Excellence",
                description: "Our rigorous curriculum challenges students to think critically and develop a love for lifelong learning."
              },
              {
                icon: <Users size={40} className="text-school-gold" />,
                title: "Supportive Community",
                description: "We foster a close-knit community where students feel valued, respected, and supported in their journey."
              },
              {
                icon: <Star size={40} className="text-school-gold" />,
                title: "Character Development",
                description: "We emphasize values such as integrity, respect, and responsibility to develop well-rounded individuals."
              }
            ].map((item, index) => (
              <Card key={index} className="card-hover staggered-item">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-school-navy">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Our Featured Programs</h2>
            <p className="text-lg text-gray-700">
              We offer a variety of programs designed to meet the needs of our diverse student body.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-container">
            {[
              {
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Primary.jpg?alt=media&token=83c43bdb-caf4-4af2-9349-fb2394a4e9db",
                title: "Elementary School",
                description: "Building a strong foundation through engaging and interactive learning."
              },
              {
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/Middle.jpg?alt=media&token=c158cb52-6a20-4ec1-be6b-281d5b78bac1",
                title: "Middle School",
                description: "Developing critical thinking skills and fostering independence."
              },
              {
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-template-t2zhmi.firebasestorage.app/o/High.png?alt=media&token=a1be04ef-26c7-49f6-aa93-dc570cc06a01",
                title: "High School",
                description: "Preparing students for college and beyond through challenging academics."
              }
            ].map((program, index) => (
              <div key={index} className="group staggered-item">
                <div className="overflow-hidden rounded-lg shadow-md h-full bg-white">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-school-navy">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Link 
                      to="/curriculum" 
                      className="flex items-center text-school-navy font-medium hover:text-school-gold transition-colors"
                    >
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Button asChild className="btn-primary">
              <Link to="/curriculum">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-school-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-school-gold">
                  {stat.prefix || ''}{stat.number}{stat.suffix || ''}
                </div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">What Our Community Says</h2>
            <p className="text-lg text-gray-700">
              Hear from our students, parents, and alumni about their experiences at Sri Sathya Sai Grammar High School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-container">
            {[
              {
                quote: "My child has flourished at Sri Sathya Sai Grammar High School. The teachers are dedicated and truly care about each student's success.",
                name: "Ragunath Sharma",
                role: "Parent"
              },
              {
                quote: "The education I received prepared me well for college. I learned valuable skills that I still use today in my career.",
                name: "Manish Kumar",
                role: "Alumni, Class of 2024"
              },
              {
                quote: "I love coming to school every day! The teachers make learning fun and I've made so many great friends.",
                name: "Nisha Patel",
                role: "Current Student"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="card-hover staggered-item">
                <CardContent className="p-8">
                  <div className="text-3xl text-school-gold mb-4">"</div>
                  <p className="italic mb-6 text-gray-700">{testimonial.quote}</p>
                  <div>
                    <div className="font-bold text-school-navy">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Upcoming Events</h2>
            <p className="text-lg text-gray-700">
              Join us for these exciting events and become part of our vibrant community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto staggered-container">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} className="flex gap-4 staggered-item">
                <div className="flex-shrink-0 pt-1">
                  <Calendar className="text-school-gold" />
                </div>
                <div>
                  <span className="text-sm text-school-navy font-medium">{event.date}</span>
                  <h3 className="text-xl font-bold mb-2 text-school-navy">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Button asChild className="btn-primary">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-school-gold">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Ready to Join Our Community?</h2>
            <p className="text-lg text-school-navy/80 mb-8">
              Schedule a visit to our campus and discover what makes Sri Sathya Sai Grammar High School special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-school-navy text-white hover:bg-school-navy/90 px-8 py-6 text-lg">
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-school-navy text-school-navy hover:bg-school-navy/10 px-8 py-6 text-lg">
                <Link to="/curriculum">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;