import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const positions = [
  {
    title: "Sports Marketing Manager",
    department: "Marketing",
    location: "New York, USA",
    type: "Full-time"
  },
  {
    title: "Event Coordinator",
    department: "Events",
    location: "London, UK",
    type: "Full-time"
  },
  {
    title: "Athlete Relations Specialist",
    department: "Athlete Management",
    location: "Los Angeles, USA",
    type: "Full-time"
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time"
  }
];

export default function Careers() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore exciting career opportunities at Kaptiva
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-gray-400">{position.department}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-blue-400 mb-1">{position.location}</p>
                  <p className="text-gray-500">{position.type}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}