import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHandshake, FaTools } from 'react-icons/fa';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  description: 'Learn about Armour Construction\'s 15+ years of experience, our expert team, and our commitment to quality construction services.',
  keywords: ['construction company history', 'construction team', 'construction experience', 'building expertise'],
  ogImage: '/images/team/team-hero.jpg'
});

'use client';

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
    title: 'Expert Team',
    description: 'Our team consists of highly skilled professionals with years of experience.'
  },
  {
    icon: FaHandshake,
    title: 'Integrity',
    description: 'We believe in transparent communication and honest business practices.'
  },
  {
    icon: FaTools,
    title: 'Innovation',
    description: 'We stay updated with the latest construction technologies and methods.'
  }
];

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building Excellence Since 2008
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Armour Construction has been at the forefront of the construction industry,
                delivering exceptional projects and building lasting relationships with our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/about-hero.jpg"
                alt="Armour Construction Team"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles and unwavering commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300"
              >
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the team that makes it all possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'CEO & Founder',
                image: '/images/team-1.jpg'
              },
              {
                name: 'Sarah Johnson',
                role: 'Project Director',
                image: '/images/team-2.jpg'
              },
              {
                name: 'Michael Brown',
                role: 'Technical Director',
                image: '/images/team-3.jpg'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
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
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
