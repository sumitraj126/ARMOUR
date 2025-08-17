import { generateMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

// This would typically come from your database or CMS
const getBlogPost = (id: string) => {
  const blogPosts = [
    {
      id: '1',
      title: 'Top Construction Trends for 2025',
      description: 'Discover the latest innovations and trends shaping the construction industry this year.',
      author: 'John Smith',
      date: 'August 15, 2025',
      image: '/images/blog/trends.jpg',
      keywords: ['construction trends', '2025 trends', 'building innovation', 'construction technology']
    },
    {
      id: '2',
      title: 'Sustainable Building Practices',
      description: 'Learn about eco-friendly construction methods and sustainable building materials for modern projects.',
      author: 'Sarah Johnson',
      date: 'August 17, 2025',
      image: '/images/blog/sustainable.jpg',
      keywords: ['sustainable construction', 'eco-friendly building', 'green construction', 'sustainable materials']
    }
  ];

  return blogPosts.find(post => post.id === id);
};

export async function generateBlogPostMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = getBlogPost(params.id);
  
  if (!post) {
    return generateMetadata({
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    });
  }

  return generateMetadata({
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    ogImage: post.image
  });
}
