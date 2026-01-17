'use client';

import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-pattern">
      {/* Background Gradient with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E6F5C]/8 via-[#4CAF8F]/3 to-[#D4AF37]/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#4CAF8F]/3 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1E6F5C] mb-6 font-['Playfair_Display'] leading-[1.1]">
              Heal Your Body. <br/>Heal Your Soul.
              <br />
              <span className="text-gradient-gold">Restore Your Inner Peace.</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-6 italic"
            >
              A sanctuary for holistic healing and transformation
            </motion.p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Professional Hypnotherapy & Holistic Healing Services
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center !my-2"
          >
            <CTAButton href="/contact" variant="primary">
              Book a Session
            </CTAButton>
            <CTAButton href="/services" variant="secondary">
              Explore Services
            </CTAButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-sm text-gray-500"
          >
            <span>No pressure. No judgment. Just healing.</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#1E6F5C] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-[#1E6F5C] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}