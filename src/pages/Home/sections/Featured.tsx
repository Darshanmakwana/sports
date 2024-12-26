import { motion } from 'framer-motion';
import { Trophy, Users, Star } from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    value: '500+',
    label: 'Events Managed',
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Athletes Represented',
  },
  {
    icon: Star,
    value: '98%',
    label: 'Client Satisfaction',
  },
];

export default function Featured() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}