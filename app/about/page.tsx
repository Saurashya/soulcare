'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, Sun, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We approach each person with deep empathy, understanding, and genuine care for their unique journey.',
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    description: 'Our practitioners are highly trained professionals committed to delivering the highest quality healing experiences.',
  },
  {
    icon: Sun,
    title: 'Transformation',
    description: 'We believe in your inherent capacity for growth, healing, and profound personal transformation.',
  },
  {
    icon: Target,
    title: 'Integrity',
    description: 'We operate with honesty, authenticity, and the highest ethical standards in all we do.',
  },
];

export default function AboutPage() {
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
              About Soulcare
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              A sanctuary for healing, transformation, and inner peace
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[#F7F6F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-healing">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E6F5C] mb-8 font-['Playfair_Display']">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                At Soulcare, our mission is to provide a compassionate, safe, and transformative
                healing space where individuals can discover their inner strength, release limiting
                patterns, and reconnect with their true essence. We are dedicated to supporting
                each person&apos;s unique journey toward wholeness, peace, and authentic living.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through the integration of ancient wisdom and modern therapeutic techniques,
                we empower our clients to heal from within, transform their lives, and create
                lasting positive change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white relative">
        {/* Decorative divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4CAF8F]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1E6F5C] to-[#4CAF8F] rounded-3xl p-8 md:p-12 lg:p-16 shadow-healing text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-['Playfair_Display']">
                Our Vision
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-95">
                We envision a world where every individual has access to healing modalities
                that honor the interconnectedness of mind, body, and spirit. Soulcare aims
                to be a beacon of light in the wellness community, setting the standard for
                compassionate, holistic healing practices.
              </p>
              <p className="text-lg leading-relaxed opacity-95">
                Through our work, we seek to contribute to a more peaceful, conscious, and
                healed collective, one transformation at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-[#F7F6F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E6F5C] mb-4 font-['Playfair_Display']">
              Our Philosophy
            </h2>
          </motion.div>

         <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-healing">
           <p className="text-lg text-gray-700 leading-relaxed mb-6">
             At Soulcare, we believe in a holistic approach to healing that recognizes
             the profound interconnection between the mind, body, and spirit. Our philosophy
             is rooted in the understanding that:
           </p>
           <ul className="space-y-4 text-lg text-gray-700 leading-relaxed list-none pl-0">
             <li className="flex items-start">
               <span className="text-[#D4AF37] mr-3 text-2xl">•</span>
               <span>
                 <strong className="text-[#1E6F5C]">Healing comes from within:</strong> Every
                 person possesses an innate capacity for self-healing and transformation.
               </span>
             </li>
             <li className="flex items-start">
               <span className="text-[#D4AF37] mr-3 text-2xl">•</span>
               <span>
                 <strong className="text-[#1E6F5C]">The subconscious holds wisdom:</strong> By
                 accessing deeper states of consciousness, we can release old patterns and
                 create new, empowering beliefs.
               </span>
             </li>
             <li className="flex items-start">
               <span className="text-[#D4AF37] mr-3 text-2xl">•</span>
               <span>
                 <strong className="text-[#1E6F5C]">Energy is everything:</strong> Our physical,
                 emotional, and spiritual wellbeing depends on the free flow of life force energy.
               </span>
             </li>
             <li className="flex items-start">
               <span className="text-[#D4AF37] mr-3 text-2xl">•</span>
               <span>
                 <strong className="text-[#1E6F5C]">Transformation is a journey:</strong> True
                 healing requires patience, compassion, and a commitment to personal growth.
               </span>
             </li>
             <li className="flex items-start">
               <span className="text-[#D4AF37] mr-3 text-2xl">•</span>
               <span>
                 <strong className="text-[#1E6F5C]">Every soul is unique:</strong> We honor each
                 person&apos;s individual path and customize our approach to meet their specific needs.
               </span>
             </li>
           </ul>
         </div>
       </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white relative pb-20">
        {/* Decorative divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4CAF8F]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E6F5C] mb-4 font-['Playfair_Display']">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center bg-white rounded-3xl p-8 shadow-healing text-center hover:shadow-healing-lg transition-all duration-300 border border-[#4CAF8F]/10 w-full"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4CAF8F] to-[#1E6F5C] flex items-center justify-center mx-auto mb-6 shadow-healing group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#1E6F5C] mb-4 font-['Playfair_Display']">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        </div>
      </section>
    </div>
  );
}

