import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'Full-service planning and execution for sporting events.',
    link: '/services#event-management',
  },
  {
    icon: Trophy,
    title: 'Sports Marketing',
    description: 'Strategic marketing solutions for sports brands.',
    link: '/services#sports-marketing',
  },
  {
    icon: Users,
    title: 'Athlete Management',
    description: 'Comprehensive career development for athletes.',
    link: '/services#athlete-management',
  },
  {
    icon: Target,
    title: 'Consulting',
    description: 'Expert guidance for sports organizations.',
    link: '/services#consulting',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for all your sports management needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}