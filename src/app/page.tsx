import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHardHat, FaBuilding, FaTools, FaAward, FaClock, FaHandshake } from 'react-icons/fa';

const services = [
  {
    icon: FaBuilding,
    title: 'Commercial Construction',
    description: 'State-of-the-art commercial buildings and office spaces',
  },
  {
    icon: FaHardHat,
    title: 'Residential Projects',
    description: 'Custom homes and residential complexes built to perfection',
  },
  {
    icon: FaTools,
    title: 'Renovations',
    description: 'Expert renovation and remodeling services for any space',
  },
  {
    icon: FaHandshake,
    title: 'Construction Management',
    description: 'Professional project management and consulting services',
  },
];

const stats = [
  { number: '15+', text: 'Years Experience' },
  { number: '200+', text: 'Projects Completed' },
  { number: '50+', text: 'Expert Team Members' },
  { number: '100%', text: 'Client Satisfaction' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-construction.jpg"
            alt="Construction site with modern building"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Building Your Vision Into Reality
              </h1>
              <p className="text-xl text-white mb-8">
                Armour Construction - Your trusted partner in construction excellence since 2008
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md font-semibold transition duration-300"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/projects"
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md font-semibold transition duration-300"
                >
                  View Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive construction solutions for every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              Building excellence through expertise and dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaAward,
                title: 'Quality Guaranteed',
                description: 'Highest standards in construction with premium materials and craftsmanship',
              },
              {
                icon: FaClock,
                title: 'On-Time Delivery',
                description: 'We value your time and ensure project completion within deadlines',
              },
              {
                icon: FaHandshake,
                title: 'Expert Team',
                description: 'Skilled professionals with years of industry experience',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl font-bold mb-8">
            Ready to Start Your Construction Project?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md font-semibold transition duration-300"
          >
            Get Free Consultation
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
