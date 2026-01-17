'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';

export default function AboutSection() {
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
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              About Us
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E6F5C] mb-8 font-['Playfair_Display'] leading-tight">
            Welcome to Soulcare
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            At Soulcare, we believe in the profound power of healing that comes from within.
            Our holistic approach combines ancient wisdom with modern therapeutic techniques
            to guide you on a transformative journey toward wholeness, peace, and self-discovery.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            With compassion, expertise, and a deep commitment to your wellbeing, we create
            a safe sanctuary where your mind, body, and spirit can find harmony and healing.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
          >
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4CAF8F] to-[#1E6F5C] flex items-center justify-center shadow-md">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1E6F5C]">1000+</p>
                <p className="text-sm text-gray-600">Sessions Completed</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center shadow-md">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1E6F5C]">95%</p>
                <p className="text-sm text-gray-600">Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>
          <Link
            href="/about"
            className="inline-flex items-center text-[#1E6F5C] font-semibold hover:text-[#D4AF37] transition-colors group text-lg"
          >
            Learn More About Us
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}