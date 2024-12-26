import { motion } from 'framer-motion';
import { Shield, Target, Users } from 'lucide-react';

export default function About() {
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
            <h2 className="text-4xl font-bold text-white mb-6">About Kaptiva</h2>
            <p className="text-gray-400 mb-8">
              Leading the way in sports management and marketing with innovative solutions
              and exceptional service. Our commitment to excellence has made us a trusted
              partner for athletes and organizations worldwide.
            </p>
            <div className="space-y-6">
              {[
                { icon: Shield, title: 'Our Mission', text: 'To elevate sports management through innovation' },
                { icon: Target, title: 'Our Vision', text: 'Setting new standards in sports excellence' },
                { icon: Users, title: 'Our Values', text: 'Integrity, passion, and dedication' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="About Kaptiva"
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}