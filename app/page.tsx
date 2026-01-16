'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Heart, Sun, Layers } from 'lucide-react';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';
import CTAButton from './components/CTAButton';
import { services } from '@/data/services';

// Testimonials data
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

// Healing process steps
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

export default function Home() {
  const featuredServices = services.slice(0, 3);

  return (
    <div className="bg-[#F7F6F2]">
      {/* Hero Section */}
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
                Heal Your Mind.
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <div className="flex items-center space-x-2 text-[#1E6F5C] text-sm">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Trusted by 1000+ clients</span>
              </div>
              <div className="flex items-center space-x-2 text-[#1E6F5C] text-sm">
                <Heart className="w-4 h-4 text-[#D4AF37]" />
                <span>95% satisfaction rate</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
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

      {/* About Preview Section */}
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

      {/* Services Preview Section */}
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

      {/* Healing Process Section */}
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

      {/* Testimonials Section */}
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

      {/* Final CTA Section */}
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
    </div>
  );
}

