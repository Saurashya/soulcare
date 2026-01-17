'use client';

import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Anxiety Recovery',
    content: 'Soulcare changed my life. The hypnotherapy sessions helped me overcome decades of anxiety. I feel like a completely different person—calm, confident, and at peace with myself.',
  },
  {
    name: 'Michael Chen',
    role: 'Past Life Regression Client',
    content: 'The past life regression session was profound. I gained insights into patterns that were affecting my relationships, and I finally understand my life\'s purpose. Thank you, Soulcare.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Energy Healing Client',
    content: 'After just one energy healing session, I felt lighter and more balanced than I have in years. The practitioner\'s gentle approach and deep intuition created a safe, transformative space.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-[#F7F6F2] relative">
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
              Client Stories
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E6F5C] mb-8 font-['Playfair_Display'] leading-tight">
            Stories of Transformation
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hear from those who have found healing and peace through their journey with Soulcare
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full">
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}