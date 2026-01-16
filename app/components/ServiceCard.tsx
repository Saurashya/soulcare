'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Sparkles, 
  Layers, 
  Heart, 
  Sun, 
  Music,
  LucideIcon 
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
  index?: number;
}

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  sparkles: Sparkles,
  layers: Layers,
  heart: Heart,
  sun: Sun,
  music: Music,
};

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  slug,
  index = 0 
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Link href={`/services/${slug}`}>
        <div className="bg-white rounded-3xl p-8 shadow-healing hover:shadow-healing-lg hover:-translate-y-2 transition-all duration-500 h-full border border-[#4CAF8F]/10 group cursor-pointer relative overflow-hidden">
          {/* Subtle background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5F1]/0 to-[#B8E6D3]/0 group-hover:from-[#E8F5F1]/30 group-hover:to-[#B8E6D3]/20 transition-all duration-500 rounded-3xl" />

          {/* Content wrapper */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Icon */}
            <div className="mb-6 flex justify-start">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4CAF8F] to-[#1E6F5C] flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-[#4CAF8F]/40"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <IconComponent className="w-9 h-9 text-white" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold text-[#1E6F5C] mb-4 font-['Playfair_Display'] group-hover:text-[#D4AF37] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 text-base flex-1">
                {description}
              </p>

              {/* Read More Link */}
              <div className="flex items-center text-[#1E6F5C] font-semibold group-hover:text-[#D4AF37] transition-colors duration-300 mt-auto">
                <span>Learn More</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  className="ml-2 text-xl"
                >
                  →
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

