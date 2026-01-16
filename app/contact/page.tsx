'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm, ContactFormState } from './actions';
import CTAButton from '../components/CTAButton';

export default function ContactPage() {
  const [state, setState] = useState<ContactFormState | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsPending(true);
    try {
      const result = await submitContactForm(null, formData);
      setState(result);
    } catch (error) {
      setState({
        success: false,
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    if (state?.success) {
      // Scroll to success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Reset form after 5 seconds
      const form = document.getElementById('contact-form') as HTMLFormElement;
      if (form) {
        setTimeout(() => {
          form.reset();
        }, 5000);
      }
    }
  }, [state?.success]);

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
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We&#39;re here to support you on your healing journey. 
              Reach out with any questions or to schedule your session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-[#F7F6F2] relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Success/Error Message */}
          {state?.message && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-2xl mx-auto mb-12 p-6 rounded-2xl ${
                state.success
                  ? 'bg-green-50 border-2 border-green-200 text-green-800'
                  : 'bg-red-50 border-2 border-red-200 text-red-800'
              }`}
            >
              <div className="flex items-start">
                {state.success ? (
                  <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                )}
                <p className="font-medium">{state.message}</p>
              </div>
            </motion.div>
          )}

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Contact Form */}
            <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-healing"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E6F5C] mb-8 font-['Playfair_Display']">
                Send Us a Message
              </h2>

              <form id="contact-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(new FormData(e.target as HTMLFormElement)); }} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#1E6F5C] mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      state?.errors?.name
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-300 focus:border-[#1E6F5C]'
                    } focus:outline-none focus:ring-2 focus:ring-[#1E6F5C]/20 transition-colors`}
                    placeholder="Your full name"
                    disabled={isPending}
                  />
                  {state?.errors?.name && (
                    <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#1E6F5C] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      state?.errors?.email
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-300 focus:border-[#1E6F5C]'
                    } focus:outline-none focus:ring-2 focus:ring-[#1E6F5C]/20 transition-colors`}
                    placeholder="your.email@example.com"
                    disabled={isPending}
                  />
                  {state?.errors?.email && (
                    <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#1E6F5C] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      state?.errors?.message
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-300 focus:border-[#1E6F5C]'
                    } focus:outline-none focus:ring-2 focus:ring-[#1E6F5C]/20 transition-colors resize-none`}
                    placeholder="Tell us about your needs, questions, or how we can help..."
                    disabled={isPending}
                  />
                  {state?.errors?.message && (
                    <p className="mt-1 text-sm text-red-600">{state.errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileHover={{ scale: isPending ? 1 : 1.02 }}
                  whileTap={{ scale: isPending ? 1 : 0.98 }}
                  className={`w-full px-8 py-4 bg-[#1E6F5C] text-white rounded-full font-semibold hover:bg-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-xl ${
                    isPending ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isPending ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="flex-[1_1_350px] min-w-[300px]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-6"
            >
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-[#1E6F5C] to-[#4CAF8F] rounded-3xl p-8 md:p-10 text-white shadow-healing">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 font-['Playfair_Display']">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a
                        href="mailto:info@soulcare.com"
                        className="text-[#D4AF37] hover:text-white transition-colors"
                      >
                        info@soulcare.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="text-[#D4AF37] hover:text-white transition-colors"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Address</p>
                      <p className="text-white/90">
                        123 Healing Way<br />
                        Peaceful Valley, CA 90210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Hours</p>
                      <p className="text-white/90">
                        Monday - Friday: 9:00 AM - 7:00 PM<br />
                        Saturday: 10:00 AM - 5:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-healing">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1E6F5C] mb-4 font-['Playfair_Display']">
                  Ready to Begin?
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  Schedule your consultation today and take the first step 
                  toward transformation.
                </p>
                <CTAButton href="/contact" variant="primary" className="w-full justify-center">
                  Book Session
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

