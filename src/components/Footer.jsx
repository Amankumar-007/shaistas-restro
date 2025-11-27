import React from 'react';
import {
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowUp,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#E5E7DD] text-gray-800 pt-16 font-sans">
      {/* Main Container */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            {/* Logo Section */}
            <div>
              {/* Replace this text with your actual Logo Image tag if you have one */}
              <h1 className="text-4xl text-[#fbbf24] font-cursive italic font-bold mb-1">
                Shaista's
              </h1>
              <h3 className="text-lg font-bold mb-4 text-black">
                Mommylicious Food, Served with Love!
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-gray-600">
              At Shaista's, we offer a wide range of home-style Biryanis, Mughlai, and North Indian dishes that will tantalize your taste buds. So come and join us for Indian flavors.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Youtube size={20} />} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-xl font-serif mb-6 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink text="About" />
              <FooterLink text="Menu" />
              <FooterLink text="Gallery" />
              <FooterLink text="Reservation" />
              <FooterLink text="Contact Us" />
            </ul>
          </div>

          {/* Column 3: Our Policy */}
          <div>
            <h3 className="text-white text-xl font-serif mb-6 uppercase tracking-wide">Our Policy</h3>
            <ul className="space-y-3">
              <FooterLink text="Terms & Condition" />
              <FooterLink text="Privacy Policy" />
              <FooterLink text="Refund Policy" />
              <FooterLink text="Cancellation Policy" />
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white text-xl font-serif mb-6 uppercase tracking-wide">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="text-white shrink-0 mt-1" size={18} fill="white" />
                <span>
                  45 Ground Floor 7th, Avenue High Street, Sector 4 Greater Noida West, Haibatpur, Dadri Tehsil -2, Gautam Buddha Nagar, Uttar Pradesh - 201318
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-white shrink-0" size={18} fill="white" />
                <span>+91-9643803833, +91-9643803813</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-white shrink-0" size={18} fill="white" />
                <span>shaistas@shaistas.in</span>
              </li>
              <li className="flex gap-3 items-center">
                <Globe className="text-white shrink-0" size={18} />
                <span>www.shaistas.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black py-4 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-sm text-white">
          <p>© Copyright 2023 Shaista's | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

// Helper Component for List Links
const FooterLink = ({ text }) => (
  <li>
    <a href="#" className="flex items-center gap-2 hover:text-[#fbbf24] transition-colors group">
      <ChevronRight size={16} className="text-white group-hover:text-[#fbbf24]" strokeWidth={3} />
      <span>{text}</span>
    </a>
  </li>
);

// Helper Component for Social Icons
const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="w-10 h-10 bg-[#fbbf24] rounded-full flex items-center justify-center text-[#1a1a1a] hover:bg-white hover:text-[#fbbf24] transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;