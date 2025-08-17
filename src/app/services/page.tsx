import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Our Services',
  description: 'Comprehensive construction services including commercial, residential, industrial construction, renovations, and project management.',
  keywords: ['commercial construction', 'residential construction', 'industrial construction', 'renovation services', 'construction management'],
  ogImage: '/images/services/services-hero.jpg'
});

'use client';
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
    description: 'Custom homes and residential complexes built to the highest standards.',
    features: [
      'Custom Homes',
      'Apartment Complexes',
      'Townhouses',
      'Luxury Villas',
      'Residential Renovations'
    ]
  },
  {
    icon: FaIndustry,
    title: 'Industrial Construction',
    description: 'Specialized construction for manufacturing and industrial facilities.',
    features: [
      'Warehouses',
      'Manufacturing Plants',
      'Storage Facilities',
      'Industrial Complexes',
      'Factory Buildings'
    ]
  },
  {
    icon: FaTools,
    title: 'Renovation & Remodeling',
    description: 'Transforming existing spaces with modern upgrades and improvements.',
    features: [
      'Commercial Renovations',
      'Home Remodeling',
      'Office Retrofitting',
      'Historical Restorations',
      'Facility Upgrades'
    ]
  },
  {
    icon: FaPencilRuler,
    title: 'Design-Build Services',
    description: 'Comprehensive design and construction solutions under one roof.',
    features: [
      'Architectural Design',
      'Construction Planning',
      'Value Engineering',
      'Project Management',
      'Interior Design'
    ]
  },
  {
    icon: FaHandshake,
    title: 'Construction Management',
    description: 'Professional oversight and management of construction projects.',
    features: [
      'Project Planning',
      'Cost Management',
      'Quality Control',
      'Timeline Management',
      'Risk Assessment'
    ]
  }
];

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Construction Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive construction solutions tailored to your specific needs.
              From concept to completion, we deliver excellence in every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="p-8">
                  <service.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600">
              We follow a systematic approach to ensure project success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial meeting to discuss your project requirements'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed project planning and cost estimation'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Professional construction with quality materials'
              },
              {
                step: '04',
                title: 'Completion',
                description: 'Final inspection and project handover'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Start Your Construction Project?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition duration-300"
          >
            Request a Quote
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
