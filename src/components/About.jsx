import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">Who am I?</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                I am a passionate B.Tech Computer Science Engineering student currently seeking full-stack development internships. I thrive on building scalable, user-centric applications and exploring cutting-edge technologies.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                My core interests lie in full-stack web development, cloud computing, and the integration of Generative AI into practical applications. I'm constantly learning and building projects that solve real-world problems.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">B.Tech CSE - IIIT Kota</p>
                    <p className="text-sm text-slate-500">Expected Graduation: 2029</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-secondary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-sm text-slate-500">Udaipur, Rajasthan</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors duration-300">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Current Status
              </h4>
              <p className="text-slate-400">
                Actively seeking Software Engineering and Full Stack Development intern roles where I can contribute to impactful projects and learn from experienced professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="mailto:ayushporwall17@gmail.com" className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center gap-4 hover:bg-slate-800 transition-colors duration-300 group">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-slate-500">Email Me</p>
                  <p className="text-sm font-medium text-slate-200 truncate">ayushporwall17@gmail.com</p>
                </div>
              </a>
              <a href="tel:+917568717288" className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center gap-4 hover:bg-slate-800 transition-colors duration-300 group">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Call Me</p>
                  <p className="text-sm font-medium text-slate-200">+91 7568717288</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
