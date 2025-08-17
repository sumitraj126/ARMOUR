'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaBuilding, 
  FaHome, 
  FaIndustry, 
  FaTools, 
  FaPencilRuler, 
  FaHandshake 
} from 'react-icons/fa';

const services = [
  {
    icon: FaBuilding,
    title: 'Commercial Construction',
    description: 'State-of-the-art office buildings, retail spaces, and industrial facilities.',
    features: [
      'Office Buildings',
      'Retail Spaces',
      'Restaurants',
      'Hotels',
      'Medical Facilities'
    ]
  },
  {
    icon: FaHome,
    title: 'Residential Construction',
    description: 'Custom homes and multi-family residential projects built to the highest standards.',
    features: [
      'Custom Homes',
      'Multi-family Units',
      'Luxury Residences',
      'Renovations',
      'Additions'
    ]
  },
  {
    icon: FaIndustry,
    title: 'Industrial Construction',
    description: 'Specialized construction for manufacturing, warehousing, and industrial facilities.',
    features: [
      'Manufacturing Plants',
      'Warehouses',
      'Distribution Centers',
      'Industrial Parks',
      'Storage Facilities'
    ]
  }
];

const additionalServices = [
  {
    icon: FaTools,
    title: 'Renovations',
    description: 'Complete renovation and remodeling services for all property types.'
  },
  {
    icon: FaPencilRuler,
    title: 'Design-Build',
    description: 'Integrated design and construction services for seamless project delivery.'
  },
  {
    icon: FaHandshake,
    title: 'Project Management',
    description: 'Expert project management ensuring on-time and within-budget completion.'
  }
];

export default function ServicesContent() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/services/hero.jpg"
          alt="Construction Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Comprehensive construction solutions for every project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <Icon className="w-16 h-16 text-primary mb-6" />
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
