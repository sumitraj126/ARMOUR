import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaTag, FaArrowLeft } from 'react-icons/fa';
import { generateBlogPostMetadata } from './metadata';

export const generateMetadata = generateBlogPostMetadata;

'use client';

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

    <h2>3. Modular and Prefabricated Construction</h2>
    <p>The rise of modular construction continues to accelerate. This approach not only speeds up project completion but also ensures consistent quality and reduces waste. Many commercial projects are now incorporating prefabricated elements to save time and money.</p>

    <h2>4. Advanced Safety Technology</h2>
    <p>Worker safety remains a top priority, and new technologies are making construction sites safer than ever. From wearable tech that monitors worker health to AI-powered systems that detect potential hazards, safety innovation is at an all-time high.</p>

    <h2>5. Virtual and Augmented Reality</h2>
    <p>VR and AR are transforming how we visualize and plan construction projects. These technologies allow clients to experience buildings before they're built and help workers understand complex installation procedures.</p>

    <h2>Conclusion</h2>
    <p>As we move through 2025, these trends are shaping the future of construction. Staying ahead of these developments is crucial for any construction company looking to maintain a competitive edge in the market.</p>
  `,
  category: 'Industry Trends',
  author: 'John Smith',
  date: 'August 15, 2025',
  image: '/images/blog/trends.jpg',
  readTime: '5 min read',
  tags: ['Technology', 'Innovation', 'Sustainability', 'Safety', 'Efficiency']
};

export default function BlogPost() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={blogPost.image}
                  alt={blogPost.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <FaCalendar className="w-4 h-4 mr-2" />
                  {blogPost.date}
                </div>
                <div className="flex items-center">
                  <FaUser className="w-4 h-4 mr-2" />
                  {blogPost.author}
                </div>
                <div className="flex items-center">
                  <FaTag className="w-4 h-4 mr-2" />
                  {blogPost.category}
                </div>
                <div>{blogPost.readTime}</div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {blogPost.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-6 border-t">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-6 border-t">
              <div className="flex items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/team/author.jpg"
                    alt={blogPost.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {blogPost.author}
                  </h3>
                  <p className="text-gray-600">
                    Construction Industry Expert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={`/images/blog/related-${i}.jpg`}
                      alt="Related Post"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition duration-300">
                      <Link href="#">
                        Related Construction Article {i}
                      </Link>
                    </h3>
                    <p className="text-gray-600">
                      Brief excerpt from the related article...
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
