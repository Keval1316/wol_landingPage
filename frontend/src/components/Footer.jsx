import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variant for the footer rising up
const riseUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
};

// Reusable component for footer links for cleaner code
const FooterLink = ({ href = '#', children }) => (
  <li>
    <a href={href} className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
      {children}
    </a>
  </li>
);

const Footer = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1, // Animate when 10% of the footer is visible
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

  return (
    <motion.footer
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={riseUpVariant}
        className="font-sans bg-gray-100 text-sm overflow-x-hidden"
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Logo and Description */}
          <div className="lg:col-span-2 pr-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">WOL</h2>
            <h3 className="font-bold text-gray-800 mb-2">World Oncology Leadership</h3>
            <p className="text-gray-600">
              WOL. Driving the future of oncology through expert collaboration, actionable insights, and global connectivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Quick Links</h4>
            <div className="flex space-x-12">
                <ul className="space-y-2">
                    <FooterLink>Home</FooterLink>
                    <FooterLink>About</FooterLink>
                    <FooterLink>Expert Panel</FooterLink>
                    <FooterLink>Request an Expert</FooterLink>
                </ul>
                <ul className="space-y-2">
                    <FooterLink>Events</FooterLink>
                    <FooterLink>Resources</FooterLink>
                    <FooterLink>Contact Us</FooterLink>
                    <FooterLink>Terms of Services</FooterLink>
                </ul>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Social</h4>
            <ul className="space-y-2">
              <FooterLink>LinkedIn</FooterLink>
              <FooterLink>Instagram</FooterLink>
              <FooterLink>YouTube</FooterLink>
            </ul>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-600">World Oncology Leadership (WOL)</p>
                <p className="text-gray-500">© 2025 WOL. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center">
                <div>
                    <p className="font-bold text-gray-800">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                </div>
                 <div>
                    <p className="font-bold text-gray-800">Email</p>
                    <p className="text-gray-600">info@wol.com</p>
                </div>
            </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="bg-black text-gray-300">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 py-4 flex flex-col lg:flex-row justify-between items-center text-xs">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 lg:mb-0">
                <a href="#" className="hover:text-white transition-colors">Request an Expert</a>
                <a href="#" className="hover:text-white transition-colors">Host an Event</a>
                <a href="#" className="hover:text-white transition-colors">Sponsor an Event</a>
                <a href="#" className="hover:text-white transition-colors">Our Expert Community</a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Data Protection</a>
                <a href="#" className="hover:text-white transition-colors">Compliance Statement</a>
            </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

