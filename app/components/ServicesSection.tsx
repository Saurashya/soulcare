'use client';

import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import CTAButton from './CTAButton';
import { services } from '@/data/services';

export default function ServicesSection() {
  const featuredServices = services.slice(0, 3);

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
              What We Offer
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E6F5C] mb-8 font-['Playfair_Display'] leading-tight">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of healing modalities, each designed to support
            your unique journey toward wellness and transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {featuredServices.map((service, index) => (
            <div key={service.id} className="w-full">
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                slug={service.slug}
                index={index}
              />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <CTAButton href="/services" variant="secondary">
            View All Services
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}