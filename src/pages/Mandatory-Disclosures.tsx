/**
 * Mandatory Disclosures Page
 * 
 * This page displays all mandatory disclosures required for the school, including affiliation details,
 * infrastructure, faculty, fees, principal details, and compliance documents, styled with the school's color palette.
 */

import React from 'react';
import { FileText, Building, Users, DollarSign, Book, Award, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import VibrantBubblesAndStarsAnimation from '@/components/animations/bubbles-stars';
import { colors, gradients } from '../utils/colors'; // Importing the color palette

const MandatoryDisclosures = () => {
  useScrollAnimation();

  return (
    <div>
      <VibrantBubblesAndStarsAnimation />

      {/* Hero Section */}
      <section className="relative py-24 bg-school-navy text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1594312915251-48db9280c8f1?q=80&w=2070&auto=format&fit=crop')] bg-center bg-cover bg-no-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mandatory Disclosures
            </h1>
            <p className="text-xl text-white/90">
              Transparency is at the heart of our institution. Explore all required disclosures about our school's affiliation, infrastructure, faculty, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliation Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.navy.DEFAULT }}>
              Affiliation Details
            </h2>
            <p className="text-lg" style={{ color: colors.gray[700] }}>
              Official information regarding our school's recognition and affiliation status.
            </p>
          </div>
          <Card className="card-hover animate-on-scroll">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: colors.navy.DEFAULT }}
                >
                  <FileText className="text-white" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: colors.navy.DEFAULT }}>
                  Affiliation Status
                </h3>
              </div>
              <ul className="text-lg" style={{ color: colors.gray[700] }}>
                <li className="mb-2">
                  <strong>Affiliated to:</strong> Central Board of Secondary Education (CBSE)
                </li>
                <li className="mb-2">
                  <strong>Affiliation Number:</strong> 1234567
                </li>
                <li className="mb-2">
                  <strong>Status:</strong> Senior Secondary
                </li>
                <li className="mb-2">
                  <strong>Valid Until:</strong> March 31, 2028
                </li>
                <li>
                  <a
                    href="/docs/cbse-affiliation.pdf"
                    className="underline"
                    style={{ color: colors.blue.DEFAULT }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Affiliation Certificate
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Infrastructure Details */}
      <section className="py-20" style={{ backgroundColor: colors.gray[50] }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.navy.DEFAULT }}>
              Infrastructure Details
            </h2>
            <p className="text-lg" style={{ color: colors.gray[700] }}>
              Our state-of-the-art facilities support holistic student development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-container">
            <Card className="card-hover staggered-item">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: colors.navy.DEFAULT }}
                  >
                    <Building className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: colors.navy.DEFAULT }}>
                    Campus Overview
                  </h3>
                </div>
                <p className="text-lg" style={{ color: colors.gray[700] }}>
                  <strong>Total Area:</strong> 3.5 Acres<br />
                  <strong>Built-Up Area:</strong> 20,000 sq.ft.<br />
                  <strong>Playground Area:</strong> 15,000 sq.ft.<br />
                  <strong>Classrooms:</strong> 33 Smart Classrooms<br />
                  <strong>Laboratories:</strong> Science, Computer Science, Mathematics
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover staggered-item">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: colors.navy.DEFAULT }}
                  >
                    <Award className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: colors.navy.DEFAULT }}>
                    Additional Facilities
                  </h3>
                </div>
                <p className="text-lg" style={{ color: colors.gray[700] }}>
                  <strong>Library:</strong> 1000+ Books, 5000+ Digital Resources<br />
                  <strong>OAT:</strong> 200 Seating Capacity<br />
                  <strong>Sports:</strong> Basketball, Handball, Volleyball <br />
                  <strong>Other:</strong> Art Studio, Music Room, Dance Room
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.navy.DEFAULT }}>
              Faculty Details
            </h2>
            <p className="text-lg" style={{ color: colors.gray[700] }}>
              Our dedicated team of educators ensures quality teaching and mentorship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-container">
            {[
              {
                icon: <Users className="h-10 w-10" style={{ color: colors.gold.DEFAULT }} />,
                title: "Teaching Staff",
                description: "50+ Qualified Teachers with B.Ed./M.Ed. and specialized training."
              },
              {
                icon: <Book className="h-10 w-10" style={{ color: colors.gold.DEFAULT }} />,
                title: "Non-Teaching Staff",
                description: "20+ Support Staff including counselors, librarians, and administrative personnel."
              },
              {
                icon: <Award className="h-10 w-10" style={{ color: colors.gold.DEFAULT }} />,
                title: "Training Programs",
                description: "Regular professional development workshops and CBSE training for faculty."
              }
            ].map((item, index) => (
              <Card key={index} className="card-hover staggered-item">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: colors.navy.DEFAULT }}>
                    {item.title}
                  </h3>
                  <p style={{ color: colors.gray[600] }}>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.navy.DEFAULT }}>
              Fee Structure
            </h2>
            <p className="text-lg" style={{ color: colors.gray[700] }}>
              Transparent details about our academic fees for the session 2025-26.
            </p>
          </div>
          <Card className="card-hover animate-on-scroll">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: colors.navy.DEFAULT }}
                >
                  <DollarSign className="text-white" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: colors.navy.DEFAULT }}>
                  Academic Fees
                </h3>
              </div>
              <table className="w-full text-left text-lg" style={{ color: colors.gray[700] }}>
                <thead>
                  <tr>
                    <th className="pb-4">Class</th>
                    <th className="pb-4">Annual Fee (INR)</th>
                    <th className="pb-4">Additional Fees</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">Pre-Primary (Nursery-KG)</td>
                    <td className="py-2">50,000</td>
                    <td className="py-2">Activity Fee: 5,000</td>
                  </tr>
                  <tr>
                    <td className="py-2">Primary (I-V)</td>
                    <td className="py-2">70,000</td>
                    <td className="py-2">Lab Fee: 3,000</td>
                  </tr>
                  <tr>
                    <td className="py-2">Secondary (VI-X)</td>
                    <td className="py-2">85,000</td>
                    <td className="py-2">Lab Fee: 5,000</td>
                  </tr>
                  <tr>
                    <td className="py-2">Senior Secondary (XI-XII)</td>
                    <td className="py-2">100,000</td>
                    <td className="py-2">Lab Fee: 7,000</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Compliance Documents */}
      <section className="py-20" style={{ backgroundColor: colors.gray[50] }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.navy.DEFAULT }}>
              Compliance Documents
            </h2>
            <p className="text-lg" style={{ color: colors.gray[700] }}>
              Access all necessary certificates and documents as per regulatory requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-container">
            {[
              { title: "Copies of Affiliation", link: "/docs/copies-of-affiliation.pdf" },
              { title: "Copies of Society or Trust", link: "/docs/copies-of-society-or-trust.pdf" },
              { title: "NOC Issued", link: "/docs/noc-issued.pdf" },
              { title: "Recognition Certificate", link: "/docs/recognition-certificate.pdf" },
              { title: "Building Safety Certificate", link: "/docs/building-safety-certificate.pdf" },
              { title: "Fire Safety Certificate", link: "/docs/fire-safety-certificate.pdf" },
              { title: "DEO/SELF Certificate for Affiliation", link: "/docs/deo-self-certificate.pdf" },
              { title: "Health & Sanitation Certificate", link: "/docs/health-sanitation-certificate.pdf" }
            ].map((doc, index) => (
              <Card key={index} className="card-hover staggered-item">
                <CardContent className="p-8 flex items-center">
                  <FileText
                    className="h-10 w-10 mr-4"
                    style={{ color: colors.gold.DEFAULT }}
                  />
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: colors.navy.DEFAULT }}>
                      {doc.title}
                    </h3>
                    <a
                      href={doc.link}
                      className="underline"
                      style={{ color: colors.blue.DEFAULT }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Document
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MandatoryDisclosures;