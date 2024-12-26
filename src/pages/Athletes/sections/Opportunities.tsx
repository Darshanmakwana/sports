import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const opportunities = [
  {
    title: "International Sports League",
    date: "March 2024",
    location: "Multiple Locations",
    image: "https://images.unsplash.com/photo-1471295253337-3ceaaad65897?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Elite Training Camp",
    date: "April 2024",
    location: "California, USA",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Global Sports Summit",
    date: "May 2024",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Opportunities() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Upcoming Opportunities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover upcoming events and opportunities for athletes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <img
                  src={opportunity.image}
                  alt={opportunity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center text-blue-400 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{opportunity.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{opportunity.title}</h3>
              <p className="text-gray-400">{opportunity.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}