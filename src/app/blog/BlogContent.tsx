'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCalendar, FaUser, FaTag, FaSearch } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: 'Top Construction Trends for 2025',
    excerpt: 'Discover the latest innovations and trends shaping the construction industry this year.',
    category: 'Industry Trends',
    author: 'John Smith',
    date: 'August 15, 2025',
    image: '/images/blog/trends.jpg',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Sustainable Building Practices',
    excerpt: 'Learn about eco-friendly construction methods and sustainable building materials.',
    category: 'Sustainability',
    author: 'Sarah Johnson',
    date: 'August 10, 2025',
    image: '/images/blog/sustainability.jpg',
    readTime: '4 min read'
  }
];

export default function BlogContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/blog/hero.jpg"
          alt="Construction Blog"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Stay updated with the latest construction industry insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-primary"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border focus:outline-none focus:border-primary"
            >
              <option value="all">All Categories</option>
              <option value="industry trends">Industry Trends</option>
              <option value="sustainability">Sustainability</option>
              <option value="technology">Technology</option>
              <option value="safety">Safety</option>
            </select>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <FaCalendar className="text-primary" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUser className="text-primary" />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-sm text-gray-600">
                        <FaTag className="text-primary" />
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-600">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
