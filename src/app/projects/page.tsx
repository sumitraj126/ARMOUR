import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = generateMetadata({
  title: 'Our Projects',
  description: 'Explore our portfolio of successful construction projects including commercial buildings, residential developments, and industrial facilities.',
  keywords: ['construction portfolio', 'building projects', 'completed constructions', 'construction case studies'],
  ogImage: '/images/projects/projects-hero.jpg'
});

export default function ProjectsPage() {
  return <ProjectsContent />;
}
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
    location: 'Waterfront Area',
    year: '2023',
    image: '/images/projects/residential-tower.jpg',
    description: 'High-end residential tower with premium amenities and panoramic views.'
  },
  {
    id: 3,
    title: 'Manufacturing Facility',
    category: 'industrial',
    location: 'Industrial Park',
    year: '2024',
    image: '/images/projects/manufacturing.jpg',
    description: 'Modern manufacturing facility with advanced automation systems.'
  },
  {
    id: 4,
    title: 'Shopping Mall',
    category: 'commercial',
    location: 'City Center',
    year: '2023',
    image: '/images/projects/shopping-mall.jpg',
    description: 'Multi-level shopping complex with entertainment facilities.'
  },
  {
    id: 5,
    title: 'Luxury Villas',
    category: 'residential',
    location: 'Suburban Area',
    year: '2024',
    image: '/images/projects/villas.jpg',
    description: 'Collection of custom-designed luxury villas with modern amenities.'
  },
  {
    id: 6,
    title: 'Warehouse Complex',
    category: 'industrial',
    location: 'Logistics Hub',
    year: '2023',
    image: '/images/projects/warehouse.jpg',
    description: 'Large-scale warehouse facility with advanced storage systems.'
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: FaSearch },
  { id: 'commercial', label: 'Commercial', icon: FaBuilding },
  { id: 'residential', label: 'Residential', icon: FaHome },
  { id: 'industrial', label: 'Industrial', icon: FaIndustry }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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
              Our Projects
            </h1>
            <p className="text-xl text-gray-600">
              Explore our portfolio of successful construction projects,
              showcasing our commitment to quality and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                } transition duration-300`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <p className="text-lg font-semibold">{project.location}</p>
                      <p className="text-sm">Completed in {project.year}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-semibold">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {project.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Projects Completed' },
              { number: '15+', label: 'Years Experience' },
              { number: '50+', label: 'Team Members' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Build Your Dream Project?
          </h2>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition duration-300"
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
