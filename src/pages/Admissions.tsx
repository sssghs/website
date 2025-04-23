import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  FileText, 
  GraduationCap, 
  Users, 
  CheckCircle, 
  ChevronDown
} from 'lucide-react';
import VibrantBubblesAndStarsAnimation from '@/components/animations/bubbles-stars';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const Admissions = () => {
  useScrollAnimation();

  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  const faqs = [
    {
      question: "What is the minimum age for admission?",
      answer: "As per State board guidelines, a child must be at least 5 years old for Class I admission as of March 31 of the academic year. Age requirements increase incrementally for higher classes."
    },
    {
      question: "What documents are required for application?",
      answer: "Applicants must submit a completed application form, birth certificate, proof of residence, previous school's transfer certificate (if applicable), and recent photographs. Additional documents may be required for specific cases."
    },
    {
      question: "Is there an entrance test for admission?",
      answer: "For primary classes, admission is usually based on an interaction session. For secondary classes, an entrance test may be conducted to assess the student's academic readiness."
    },
    {
      question: "Do you offer admissions under the RTE Act?",
      answer: "Yes, we reserve 25% of seats for students from economically weaker sections (EWS) and disadvantaged groups as per the Right to Education Act."
    },
    {
      question: "How can I track my application status?",
      answer: "Once your application is submitted, you can track its status through our online admissions portal or contact the admissions office for updates."
    }
  ];
  
  const timeline = [
    {
      date: "November - December",
      title: "Admission Forms Available",
      description: "Download or collect admission forms from our website or school office. Attend open houses to learn more about our programs."
    },
    {
      date: "January 15",
      title: "Application Submission Deadline",
      description: "Submit your completed application form along with all required documents by this date."
    },
    {
      date: "February",
      title: "Entrance Test/Interaction",
      description: "Shortlisted candidates attend an entrance test (for higher classes) or interaction session (for primary classes)."
    },
    {
      date: "March",
      title: "Admission Results",
      description: "Check your admission status through our online portal or school notice board."
    },
    {
      date: "April",
      title: "Fee Payment & Enrollment",
      description: "Complete the enrollment process by paying the admission fee and submitting final documents."
    },
    {
      date: "April",
      title: "Orientation Day",
      description: "Join us for an orientation session to prepare for the new academic year."
    }
  ];

  return (
    <div className="relative">
      <VibrantBubblesAndStarsAnimation />
      {/* Hero Section */}
      <section className="relative py-24 bg-school-navy text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop')] bg-center bg-cover bg-no-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h1>
            <p className="text-xl text-white/90">
            Welcome to Sri Sathya Sai Grammar High School. Our admission process is transparent and designed to identify students who will thrive in our nurturing and academically enriching environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button className="bg-school-gold text-school-navy hover:bg-school-gold/80 px-8 py-6 text-lg">
                <Link to="/apply-admission">Apply Now</Link>
              </Button>
              <Button variant="outline" className="border-white bg-white/5 px-8 py-6 text-lg hover:bg-white/10">
                  <Link to="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Admission Procedure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Admission Procedure</h2>
            <p className="text-lg text-gray-700">
              Our admission process is straightforward and aligns with State board guidelines, ensuring fairness and accessibility for all applicants.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-container">
            <Card className="card-hover staggered-item">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-school-navy rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-school-navy">Eligibility Criteria</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-school-blue mr-2 mt-0.5 flex-shrink-0" />
                    Minimum age for Class I is 5 years as of March 31 of the admission year.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-school-blue mr-2 mt-0.5 flex-shrink-0" />
                    Students transferring from other schools must provide a valid Transfer Certificate.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-school-blue mr-2 mt-0.5 flex-shrink-0" />
                    Compliance with State board curriculum requirements for the applied class.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="card-hover staggered-item">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-school-navy rounded-full flex items-center justify-center mr-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-school-navy">Required Documents</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-school-blue mr-2 mt-0.5 flex-shrink-0" />
                    Completed application form (online or offline).
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-school-blue mr-2 mt-0.5 flex-shrink-0" />
                    Birth certificate issued by a competent authority.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-school-blue mr-2 mt-0.5 flex-shrink-0" />
                    Proof of residence (Aadhaar card, utility bill, etc.).
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-school-blue mr-2 mt-0.5 flex-shrink-0" />
                    Previous academic records and Transfer Certificate (if applicable).
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-school-blue mr-2 mt-0.5 flex-shrink-0" />
                    Two recent passport-sized photographs.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center relative z-10">
            <a 
              href="/admission-form.pdf" 
              download="Inspire-School-Admission-Form.pdf"
              className="inline-block"
            >
              <Button 
                className="bg-school-gold text-school-navy hover:bg-school-gold/80 px-8 py-6 text-lg hover:cursor-pointer"
              >
                Download Admission Form
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Admissions Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Admissions Timeline</h2>
            <p className="text-lg text-gray-700">
              Follow our structured timeline to ensure a smooth application process.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-school-navy to-school-blue/50"></div>
            
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-start items-center">
                    <div className={`w-8 h-8 rounded-full absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center ${index === timeline.length - 1 ? 'bg-school-gold' : 'bg-white'} border-2 border-school-navy`}>
                      {index === timeline.length - 1 ? 
                        <CheckCircle className="h-4 w-4 text-school-navy" /> : 
                        <div className="h-2 w-2 rounded-full bg-school-navy"></div>
                      }
                    </div>
                    <div className="ml-12 md:ml-0 pl-4 md:pl-0">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-school-navy/10 hover:shadow-lg transition-all">
                        <div className="text-sm font-medium text-school-gold mb-1">{event.date}</div>
                        <h3 className="text-xl font-bold text-school-navy mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-school-navy">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Find answers to common questions about our admissions process.
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

    </div>
  );
};

export default Admissions;