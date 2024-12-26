import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

const upcomingEvents = [
  {
    title: "World Athletics Championship",
    date: "March 15-20, 2024",
    location: "London, UK",
    participants: "2000+ Athletes",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "International Swimming Meet",
    date: "April 5-8, 2024",
    location: "Sydney, Australia",
    participants: "500+ Athletes",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Global Sports Summit",
    date: "May 1-3, 2024",
    location: "New York, USA",
    participants: "1000+ Attendees",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Upcoming() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Upcoming Events</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join us at these exciting upcoming sports events
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.participants}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}