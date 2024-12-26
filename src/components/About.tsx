import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Globe, Heart } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">About Kaptiva</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Story</h3>
              <p className="text-gray-300">
                Since our founding, Kaptiva has been at the forefront of sports management 
                and marketing innovation. We've built our reputation on delivering 
                exceptional results for athletes, brands, and events worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Mission</h3>
              <p className="text-gray-300">
                We strive to elevate sports management through innovative solutions, 
                fostering meaningful connections between athletes, brands, and fans 
                while delivering exceptional value to our clients.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Award, title: 'Excellence', text: 'Committed to the highest standards' },
              { icon: Globe, title: 'Global Reach', text: 'Operating worldwide' },
              { icon: Heart, title: 'Passion', text: 'Driven by love for sports' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.2 }}
                className="text-center"
              >
                <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                <p className="text-gray-400">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}