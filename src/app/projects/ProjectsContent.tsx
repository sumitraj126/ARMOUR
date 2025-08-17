'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBuilding, FaHome, FaIndustry, FaSearch } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Modern Office Complex',
    category: 'commercial',
    location: 'Downtown Business District',
    year: '2024',
    image: '/images/projects/office-complex.jpg',
    description: 'A state-of-the-art office complex featuring sustainable design and smart building technology.'
  },
  {
    id: 2,
    title: 'Luxury Residential Tower',
    category: 'residential',
    location: 'Waterfront District',
    year: '2024',
    image: '/images/projects/residential-tower.jpg',
    description: 'High-end residential tower with premium amenities and spectacular ocean views.'
  },
  {
    id: 3,
    title: 'Manufacturing Facility',
    category: 'industrial',
    location: 'Industrial Park',
    year: '2023',
    image: '/images/projects/manufacturing.jpg',
    description: 'Modern manufacturing facility optimized for efficiency and sustainability.'
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: null },
  { id: 'commercial', label: 'Commercial', icon: FaBuilding },
  { id: 'residential', label: 'Residential', icon: FaHome },
  { id: 'industrial', label: 'Industrial', icon: FaIndustry }
];

export default function ProjectsContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/projects/hero.jpg"
          alt="Our Projects"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Showcasing our finest work across various sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-primary"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.icon && (
                    <category.icon className="inline-block mr-2" />
                  )}
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-6 py-2 bg-primary text-white rounded-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
