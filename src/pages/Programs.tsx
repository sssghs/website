import React, { useState } from 'react';
import { BookOpen, Clock, Users, Award, CheckCircle, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import VibrantBubblesAndStarsAnimation from '@/components/animations/bubbles-stars';

const Programs = () => {
  useScrollAnimation();
  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the student-to-teacher ratio in your classrooms?",
      answer: "We maintain a low student-to-teacher ratio of approximately 15:1, which allows for personalized attention and support for each student."
    },
    {
      question: "Do you offer support for students with learning differences?",
      answer: "Yes, we have a dedicated learning support team that works with students who have diverse learning needs. We develop individualized plans and provide appropriate accommodations to ensure all students can succeed."
    },
    {
      question: "How do you incorporate technology into the curriculum?",
      answer: "Technology is integrated throughout our curriculum. Students have access to digital resources, online learning platforms, and age-appropriate technology tools that enhance their learning experience."
    },
    {
      question: "What foreign languages do you offer?",
      answer: "We offer Spanish, French, and Mandarin Chinese starting in elementary school with introductory exposure. Middle and high school students can pursue more intensive language study."
    },
    {
      question: "How do you prepare students for college admissions?",
      answer: "Our comprehensive college counseling program begins in 9th grade and includes individual guidance, college visits, application workshops, and support throughout the entire process."
    }
  ];

  return (
    <div>
      <VibrantBubblesAndStarsAnimation />
      
      {/* Breadcrumbs */}
      {/* Hero Section */}
      <section className="relative py-24 bg-school-navy text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop')] bg-center bg-cover bg-no-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Academic Programs</h1>
            <p className="text-xl text-white/90">
              Discover our comprehensive educational offerings designed to meet the needs of every student.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Academic Excellence at Every Level</h2>
            <p className="text-lg text-gray-700">
              Inspire - The Holistic School offers comprehensive programs from elementary through high school, each designed to foster intellectual curiosity, critical thinking, and a love of learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 staggered-container">
            {[
              {
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
                title: "Elementary School",
                grades: "Grades K-5",
                description: "Our elementary program builds a strong foundation in core subjects while nurturing creativity and social development."
              },
              {
                image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
                title: "Middle School",
                grades: "Grades 6-8",
                description: "Middle school students explore a diverse curriculum that challenges them intellectually and supports their emotional growth."
              },
              {
                image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=2070&auto=format&fit=crop",
                title: "High School",
                grades: "Grades 9-12",
                description: "Our high school program prepares students for college and beyond through rigorous academics and leadership opportunities."
              }
            ].map((program, index) => (
              <div key={index} className="staggered-item">
                <div className="rounded-lg overflow-hidden shadow-md h-full bg-white transition-all duration-300 hover:shadow-xl">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      loading="lazy" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="bg-school-gold text-school-navy text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                      {program.grades}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-school-navy">{program.title}</h3>
                    <p className="text-gray-700 mb-6">{program.description}</p>
                    <Button className="w-full">Learn More</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elementary School */}
      <section id="elementary-school" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Elementary School</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our elementary program is designed to build a strong academic foundation while nurturing creativity, curiosity, and a love of learning. We believe that children learn best in a supportive environment that encourages exploration and discovery.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Foundations in literacy and numeracy",
                  "Project-based learning approach",
                  "Arts and music integration",
                  "Physical education and wellness",
                  "Character development and social skills"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-school-gold flex-shrink-0 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="btn-primary">Elementary Curriculum</Button>
            </div>
            <div className="order-1 lg:order-2 overflow-hidden rounded-lg shadow-lg animate-on-scroll">
            <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                alt="Elementary School" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Middle School */}
      <section id="middle-school" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden rounded-lg shadow-lg animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop" 
                alt="Middle School" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Middle School</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our middle school program is designed to meet the unique needs of adolescents. We provide a supportive yet challenging environment where students can develop their academic skills, explore new interests, and grow as individuals.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Comprehensive core curriculum",
                  "Introduction to specialized subjects",
                  "Technology integration across disciplines",
                  "Leadership and community service opportunities",
                  "Social-emotional learning and support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-school-gold flex-shrink-0 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="btn-primary">Middle School Curriculum</Button>
            </div>
          </div>
        </div>
      </section>

      {/* High School */}
      <section id="high-school" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">High School</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our high school program prepares students for college and future careers through rigorous academics, diverse extracurricular opportunities, and personalized guidance. We emphasize critical thinking, problem-solving, and leadership skills.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Advanced Placement (AP) courses",
                  "College and career counseling",
                  "Research and capstone projects",
                  "Diverse electives and extracurriculars",
                  "Internship and community partnership opportunities"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-school-gold flex-shrink-0 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="btn-primary">High School Curriculum</Button>
            </div>
            <div className="order-1 lg:order-2 overflow-hidden rounded-lg shadow-lg animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=2070&auto=format&fit=crop" 
                alt="High School" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Special Programs</h2>
            <p className="text-lg text-gray-700">
              Beyond our core academic offerings, we provide specialized programs to enrich the educational experience and meet diverse student needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-container">
            {[
              {
                icon: <Award className="h-12 w-12 text-school-gold" />,
                title: "Advanced Placement Program",
                description: "College-level courses that allow students to earn university credit while still in high school."
              },
              {
                icon: <Users className="h-12 w-12 text-school-gold" />,
                title: "Student Leadership Program",
                description: "Opportunities for students to develop leadership skills through real-world experiences and mentoring."
              },
              {
                icon: <BookOpen className="h-12 w-12 text-school-gold" />,
                title: "STEM Excellence Initiative",
                description: "Specialized curriculum focusing on science, technology, engineering, and mathematics."
              },
              {
                icon: <Clock className="h-12 w-12 text-school-gold" />,
                title: "Summer Enrichment Programs",
                description: "Academic and recreational programs during summer months to continue learning and exploration."
              }
            ].map((program, index) => (
              <Card key={index} className="card-hover staggered-item">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-school-navy">{program.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  <Button variant="outline" className="text-school-navy border-school-navy hover:bg-school-navy hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Find answers to common questions about our academic programs.
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

      {/* CTA Section
      <section className="py-20 bg-school-gold text-school-navy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Learning Community?</h2>
            <p className="text-xl text-school-navy/80 mb-8">
              Schedule a visit to learn more about our programs and admissions process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-school-navy text-white hover:bg-school-navy/90 px-8 py-6 text-lg">
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-school-navy text-school-navy hover:bg-school-navy/10 px-8 py-6 text-lg">
                <Link to="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      
    </div>
  );
};

export default Programs;