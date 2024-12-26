import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function EventManagement() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Event Management</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            End-to-end event planning and execution for sports events of any scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Calendar,
              title: 'Planning',
              text: 'Comprehensive event planning and scheduling'
            },
            {
              icon: MapPin,
              title: 'Venue Management',
              text: 'Strategic venue selection and coordination'
            },
            {
              icon: Users,
              title: 'Staff Coordination',
              text: 'Professional event staff and volunteer management'
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
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