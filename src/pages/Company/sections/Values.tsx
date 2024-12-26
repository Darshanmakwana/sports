import { motion } from 'framer-motion';
import { Heart, Shield, Star, Target, Trophy, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Maintaining the highest standards of professional ethics"
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Driven by our love for sports and excellence"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together to achieve exceptional results"
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "Striving for perfection in everything we do"
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Pioneering new solutions in sports management"
  },
  {
    icon: Star,
    title: "Leadership",
    description: "Setting the standard in the sports industry"
  }
];

export default function Values() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The core principles that guide everything we do at Kaptiva
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg text-center"
            >
              <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}