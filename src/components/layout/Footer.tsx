import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, YoutubeIcon, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-school-navy text-white pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-school-navy font-serif font-bold text-lg">S</span>
              </div>
              <h3 className="font-serif font-bold text-xl">Sri Sathya Sai Grammar High School</h3>
            </div>
            <p className="text-white/80 max-w-xs">
              Empowering minds and shaping futures through excellence in education since 1985.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white/80 hover:text-school-gold transition-colors duration-200" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-school-gold transition-colors duration-200" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-school-gold transition-colors duration-200" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-school-gold transition-colors duration-200" aria-label="YouTube">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-school-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors duration-200 inline-block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors duration-200 inline-block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/curriculumn" className="text-white/80 hover:text-white transition-colors duration-200 inline-block py-1">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/campus" className="text-white/80 hover:text-white transition-colors duration-200 inline-block py-1">
                  Campus
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors duration-200 inline-block py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-school-gold">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/curriculum#elementary-school" className="text-white/80 hover:text-white transition-colors duration-200 inline-block py-1">
                  Elementary
                </Link>
              </li>
              <li>
                <Link to="/curriculum#middle-school" className="text-white/80 hover:text-white transition-colors duration-200 inline-block py-1">
                  Middle School
                </Link>
              </li>
              <li>
                <Link to="/curriculum#high-school" className="text-white/80 hover:text-white transition-colors duration-200 inline-block py-1">
                  High School
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-school-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-school-gold flex-shrink-0 mt-1" />
                <span className="text-white/80">Sri Sathya Sai Grammar High School, Chevella, Ranga Reddy, Telangana - 501503</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-school-gold flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/80 hover:text-white transition-colors duration-200">+91 90320 63927</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-school-gold flex-shrink-0" />
                <a href="sssghs2018@gmail.com" className="text-white/80 hover:text-white transition-colors duration-200">sssghs2018@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="border-t border-white/10 mt-12 pt-8 text-white/60 relative text-sm">
          <p className="text-center">© {currentYear} Sri Sathya Sai Grammar High School. All Rights Reserved.</p>
          <p className="absolute right-0 top-1/2 -translate-y-1/2 pr-2 md:pr-4">
            Built by{' '}
            <a
              href="https://www.unifinity.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-school-gold hover:underline"
            >
              Unifinity
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;