'use client';

import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <div className="bg-[#F7F6F2] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E6F5C] mb-6 font-['Playfair_Display'] leading-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Explore our comprehensive range of healing modalities, each designed to support 
              your unique journey toward wellness and transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-[#F7F6F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-10 mb-16">
          {services.map((service, index) => (
            <div key={service.id} className="flex-[1_1_300px] max-w-full md:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1.5rem)]">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative pb-20">
        {/* Decorative divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4CAF8F]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1E6F5C] to-[#4CAF8F] rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-healing"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-['Playfair_Display']">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
              Schedule a consultation to discover which service is right for you. 
              Our compassionate team is here to guide you every step of the way.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-white text-[#1E6F5C] rounded-full font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-healing hover:shadow-healing-lg transform hover:-translate-y-1 text-lg"
            >
              Book Your Session
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

