'use client';

import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaPhone,
    text: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: FaEnvelope,
    text: 'info@armourconstruction.com',
    href: 'mailto:info@armourconstruction.com'
  },
  {
    icon: FaMapMarkerAlt,
    text: '123 Construction Ave, City, State 12345',
    href: 'https://maps.google.com'
  }
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: 'https://facebook.com'
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com'
  },
  {
    icon: FaInstagram,
    href: 'https://instagram.com'
  },
  {
    icon: FaLinkedinIn,
    href: 'https://linkedin.com'
  }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Armour<span className="text-primary">Construction</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Building excellence through quality craftsmanship and reliable service since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition duration-150"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-start">
                  <item.icon className="w-5 h-5 text-primary mt-1 mr-3" />
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition duration-150"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition duration-150"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Armour Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
