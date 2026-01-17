'use client';

import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

export default function FinalCTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#1E6F5C] via-[#2D8A72] to-[#4CAF8F] text-white relative overflow-hidden">
      {/* Subtle separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider bg-white/10 px-4 py-2 rounded-full">
              Ready to Begin?
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-['Playfair_Display'] leading-tight">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-95 max-w-3xl mx-auto">
            Take the first step toward transformation. Book your consultation and discover
            how Soulcare can support you on your path to wholeness and peace.
          </p>
          <CTAButton href="/contact" variant="primary">
            Schedule Your Session
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}