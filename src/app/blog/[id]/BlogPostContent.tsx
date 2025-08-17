'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaTag, FaArrowLeft } from 'react-icons/fa';

interface BlogPostContentProps {
  id: string;
}

export default function BlogPostContent({ id }: BlogPostContentProps) {
  const blogPost = {
    id: 1,
    title: 'Top Construction Trends for 2025',
    content: `
      <h2>Introduction</h2>
      <p>The construction industry is constantly evolving with new technologies and methodologies emerging each year. In 2025, we're seeing several groundbreaking trends that are reshaping how we approach construction projects.</p>

      <h2>1. Sustainable Construction Materials</h2>
      <p>One of the biggest trends we're seeing is the increased use of eco-friendly and sustainable building materials. From recycled steel to bamboo and even mushroom-based materials, contractors are finding innovative ways to reduce their environmental impact.</p>

      <h2>2. AI and Machine Learning in Construction</h2>
      <p>Artificial Intelligence and Machine Learning are revolutionizing project planning and execution. These technologies are helping to optimize resource allocation, predict potential issues before they arise, and improve overall project efficiency.</p>

      <h2>3. Advanced Safety Technologies</h2>
      <p>Worker safety remains a top priority, and new technologies are making it easier to ensure everyone stays safe on the job site. From wearable tech that monitors vital signs to AI-powered cameras that detect safety violations, the industry is embracing innovation to protect its workforce.</p>
    `,
    author: 'John Smith',
    date: 'August 15, 2025',
    category: 'Industry Trends',
    image: '/images/blog/trends.jpg',
    readTime: '5 min read'
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{blogPost.title}</h1>
            <div className="flex items-center justify-center gap-6 text-lg">
              <span className="flex items-center gap-2">
                <FaCalendar />
                {blogPost.date}
              </span>
              <span className="flex items-center gap-2">
                <FaUser />
                {blogPost.author}
              </span>
              <span className="flex items-center gap-2">
                <FaTag />
                {blogPost.category}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
            >
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Link>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
