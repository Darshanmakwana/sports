import { motion } from 'framer-motion';
import { LineChart, Lightbulb, Target } from 'lucide-react';

export default function Consulting() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Sports Consulting</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Expert guidance and strategic consulting for sports organizations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: 'Strategic Planning',
              text: 'Develop comprehensive strategies for growth and success'
            },
            {
              icon: LineChart,
              title: 'Performance Analysis',
              text: 'Data-driven insights to optimize operations'
            },
            {
              icon: Target,
              title: 'Goal Achievement',
              text: 'Actionable plans to reach organizational objectives'
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}