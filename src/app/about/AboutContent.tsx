'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHandshake, FaTools } from 'react-icons/fa';

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '200+', label: 'Projects Completed' },
  { number: '50+', label: 'Team Members' },
  { number: '100%', label: 'Client Satisfaction' }
];

const values = [
  {
    icon: FaAward,
    title: 'Quality',
    description: 'We never compromise on the quality of our work and materials.'
  },
  {
    icon: FaUsers,
    title: 'Team',
    description: 'Our experienced professionals are dedicated to excellence.'
  },
  {
    icon: FaHandshake,
    title: 'Trust',
    description: 'Building lasting relationships through transparency and reliability.'
  },
  {
    icon: FaTools,
    title: 'Expertise',
    description: 'Leveraging cutting-edge technology and industry best practices.'
  }
];

export default function AboutContent() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/about/hero.jpg"
          alt="Armour Construction Team"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Building excellence through experience, expertise, and dedication
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-lg shadow-lg"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
