'use client';

import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  index?: number;
}

export default function TestimonialCard({ 
  name, 
  role, 
  content,
  index = 0 
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="bg-white rounded-3xl p-8 shadow-healing hover:shadow-healing-lg hover:-translate-y-2 transition-all duration-500 border border-[#4CAF8F]/10 h-full relative overflow-hidden group"
    >
      {/* Decorative quote background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#4CAF8F]/5 to-transparent rounded-full -ml-12 -mb-12" />

      <div className="relative z-10 flex flex-col h-full">
        <Quote className="w-12 h-12 text-[#D4AF37] mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
        <p className="text-gray-700 leading-relaxed mb-8 italic text-base flex-1">
          &ldquo;{content}&rdquo;
        </p>
        <div className="border-t border-[#4CAF8F]/20 pt-6 flex-shrink-0">
          <p className="font-semibold text-lg text-[#1E6F5C] font-['Playfair_Display'] mb-1">
            {name}
          </p>
          <p className="text-sm text-gray-500 font-medium">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

