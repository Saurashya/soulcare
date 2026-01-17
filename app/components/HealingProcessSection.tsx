'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, Sun, Layers } from 'lucide-react';

const healingProcess = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We begin with a compassionate conversation about your needs, goals, and intentions for healing.',
    icon: Heart,
  },
  {
    step: 2,
    title: 'Personalized Treatment',
    description: 'A customized healing plan is created, tailored specifically to your unique journey and needs.',
    icon: Sparkles,
  },
  {
    step: 3,
    title: 'Guided Transformation',
    description: 'Experience deep healing through our professional techniques in a safe, supportive environment.',
    icon: Sun,
  },
  {
    step: 4,
    title: 'Integration & Growth',
    description: 'Receive guidance on integrating your transformation into daily life for lasting change.',
    icon: Layers,
  },
];

export default function HealingProcessSection() {
  return (
    <section className="py-32 bg-white relative">
      {/* Subtle separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4CAF8F]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              The Process
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E6F5C] mb-8 font-['Playfair_Display'] leading-tight">
            Your Healing Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A compassionate, step-by-step process designed to support your transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {healingProcess.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="flex flex-col items-center text-center group w-full"
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#4CAF8F] to-[#1E6F5C] flex items-center justify-center mx-auto shadow-healing group-hover:shadow-healing-lg group-hover:scale-110 transition-all duration-500">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center text-white font-bold shadow-lg"
                  >
                    {item.step}
                  </motion.div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#1E6F5C] mb-4 font-['Playfair_Display'] group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}