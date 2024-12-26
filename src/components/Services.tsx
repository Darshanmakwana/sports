import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Trophy, Users, Target, Globe, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Calendar,
    title: "Event Management",
    description: "Full-service event planning and execution for sporting events of any scale."
  },
  {
    icon: Trophy,
    title: "Sports Marketing",
    description: "Strategic marketing solutions to elevate your brand in the sports industry."
  },
  {
    icon: Users,
    title: "Athlete Management",
    description: "Comprehensive career development and management for professional athletes."
  },
  {
    icon: Target,
    title: "Sponsorship",
    description: "Connect brands with athletes and events for meaningful partnerships."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access to worldwide sports industry connections and opportunities."
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Data-driven insights to optimize athletic and business performance."
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gray-900" id="services">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for sports management and marketing needs
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 cursor-pointer"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}