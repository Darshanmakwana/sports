import { motion } from 'framer-motion';
import { Award, Briefcase, TrendingUp } from 'lucide-react';

export default function AthleteRepresentation() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Athlete Representation"
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Athlete Representation</h2>
            <p className="text-gray-400 mb-8">
              Comprehensive career management and development for professional athletes.
            </p>
            <div className="space-y-6">
              {[
                { icon: Award, title: 'Career Development', text: 'Strategic career planning and guidance' },
                { icon: Briefcase, title: 'Contract Negotiation', text: 'Expert contract and endorsement negotiation' },
                { icon: TrendingUp, title: 'Brand Building', text: 'Personal brand development and management' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <item.icon className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}