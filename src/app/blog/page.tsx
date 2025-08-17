import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Construction Blog',
  description: 'Stay updated with the latest construction industry trends, news, and insights from Armour Construction experts.',
  keywords: ['construction blog', 'construction news', 'building trends', 'construction insights', 'construction tips'],
  ogImage: '/images/blog/blog-hero.jpg'
});

'use client';
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
    excerpt: 'Learn how sustainable construction methods are revolutionizing the building industry.',
    category: 'Sustainability',
    author: 'Sarah Johnson',
    date: 'August 12, 2025',
    image: '/images/blog/sustainable.jpg',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Choosing the Right Construction Materials',
    excerpt: 'A comprehensive guide to selecting the best materials for your construction project.',
    category: 'Tips & Guides',
    author: 'Michael Brown',
    date: 'August 10, 2025',
    image: '/images/blog/materials.jpg',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Commercial vs Residential Construction',
    excerpt: 'Understanding the key differences between commercial and residential construction projects.',
    category: 'Education',
    author: 'Emily Wilson',
    date: 'August 8, 2025',
    image: '/images/blog/comparison.jpg',
    readTime: '8 min read'
  },
  {
    id: 5,
    title: 'Project Management Best Practices',
    excerpt: 'Essential project management tips for successful construction project delivery.',
    category: 'Management',
    author: 'David Clark',
    date: 'August 5, 2025',
    image: '/images/blog/management.jpg',
    readTime: '6 min read'
  },
  {
    id: 6,
    title: 'Safety Measures in Construction',
    excerpt: 'Important safety guidelines and protocols for construction sites.',
    category: 'Safety',
    author: 'Robert Taylor',
    date: 'August 3, 2025',
    image: '/images/blog/safety.jpg',
    readTime: '5 min read'
  }
];

const categories = [
  'All',
  'Industry Trends',
  'Sustainability',
  'Tips & Guides',
  'Education',
  'Management',
  'Safety'
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Construction Insights & News
            </h1>
            <p className="text-xl text-gray-600">
              Stay updated with the latest construction industry news,
              tips, and best practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  } transition duration-300`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition duration-300">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <FaCalendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <FaUser className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary hover:text-primary-dark font-medium transition duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/90 mb-8">
              Get the latest construction insights and updates delivered to your inbox
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
