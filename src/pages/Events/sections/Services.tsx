import { motion } from 'framer-motion';
import { Calendar, Users, Video } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Event Services</h2>
            <p className="text-gray-400 mb-8">
              Comprehensive event management services to ensure your sports event's success
            </p>
            <div className="space-y-6">
              {[
                { icon: Calendar, title: 'Event Planning', text: 'Full-service event planning and coordination' },
                { icon: Users, title: 'Staff Management', text: 'Professional event staff and volunteer coordination' },
                { icon: Video, title: 'Media Coverage', text: 'Complete media and broadcasting solutions' }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <service.icon className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Event Services"
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}