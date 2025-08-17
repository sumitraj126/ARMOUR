'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'John Robertson',
    role: 'Business Owner',
    company: 'Robertson Enterprises',
    image: '/images/testimonials/client1.jpg',
    quote: 'Armour Construction exceeded our expectations with their commercial building project. Their attention to detail and professional approach made the entire process smooth.',
    rating: 5,
    project: 'Commercial Office Building'
  },
  {
    id: 2,
    name: 'Sarah Martinez',
    role: 'Property Developer',
    company: 'Martinez Real Estate',
    image: '/images/testimonials/client2.jpg',
    quote: 'We\'ve worked with many construction companies, but none match the quality and reliability of Armour Construction. They delivered our residential complex project on time and within budget.',
    rating: 5,
    project: 'Luxury Apartment Complex'
  },
  {
    id: 3,
    name: 'Michael Chang',
    role: 'Factory Manager',
    company: 'Chang Industries',
    image: '/images/testimonials/client3.jpg',
    quote: 'The industrial facility built by Armour Construction has significantly improved our operational efficiency. Their expertise in industrial construction is unmatched.',
    rating: 5,
    project: 'Industrial Manufacturing Facility'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            Hear what our clients have to say about their experience working with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 relative"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                {testimonial.project}
              </div>

              <FaQuoteLeft className="text-4xl text-primary/20 mb-6" />

              <p className="text-gray-600 mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-primary">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
