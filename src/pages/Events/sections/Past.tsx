import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const pastEvents = [
  {
    title: "Summer Athletics Championship",
    year: "2023",
    location: "Berlin, Germany",
    highlight: "Record-breaking attendance",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Winter Sports Festival",
    year: "2023",
    location: "Oslo, Norway",
    highlight: "20+ countries participated",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Global Tennis Open",
    year: "2023",
    location: "Melbourne, Australia",
    highlight: "Highest viewership",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&auto=format&fit=crop& <boltAction type="file" filePath="src/pages/Events/sections/Past.tsx">w=800&q=80"
  }
];

export default function Past() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Past Events</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Relive the moments from our successfully managed events
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
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
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-blue-400 mb-1">{event.year}</p>
              <p className="text-gray-400 mb-2">{event.location}</p>
              <p className="text-gray-500">{event.highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}