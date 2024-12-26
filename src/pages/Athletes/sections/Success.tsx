import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const successStories = [
  {
    name: "Alex Thompson",
    sport: "Track & Field",
    achievement: "Olympic Gold Medalist",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sarah Chen",
    sport: "Swimming",
    achievement: "World Record Holder",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Marcus Williams",
    sport: "Basketball",
    achievement: "MVP 2023",
    image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Success() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Success Stories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the athletes who have achieved extraordinary success with our support
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Trophy className="w-8 h-8 text-yellow-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-1">{story.name}</h3>
                  <p className="text-gray-300">{story.sport}</p>
                  <p className="text-blue-400 font-semibold">{story.achievement}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}