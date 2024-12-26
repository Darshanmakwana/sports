import { motion } from 'framer-motion';
import { Award, Target, Users } from 'lucide-react';

export default function Programs() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Athlete Programs</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive development programs designed for elite athletes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: 'Elite Training',
              text: 'Advanced training programs tailored to your sport'
            },
            {
              icon: Target,
              title: 'Performance Goals',
              text: 'Structured goal setting and achievement tracking'
            },
            {
              icon: Users,
              title: 'Team Development',
              text: 'Collaborative training and team building exercises'
            }
          ].map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <program.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{program.title}</h3>
              <p className="text-gray-400">{program.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}