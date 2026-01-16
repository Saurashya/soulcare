'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className = ''
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-10 py-4 rounded-xl font-semibold text-base transition-all duration-500 shadow-healing hover:shadow-healing-lg transform hover:scale-105 relative overflow-hidden group';

  const variantClasses = variant === 'primary'
    ? 'bg-gradient-to-r from-[#1E6F5C] to-[#2D8A72] text-white hover:shadow-lg hover:shadow-[#1E6F5C]/30'
    : 'bg-white text-[#1E6F5C] border-2 border-[#1E6F5C] hover:bg-[#1E6F5C] hover:text-white hover:border-[#1E6F5C]';

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <Link
        href={href}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        <span className="relative z-10 flex items-center">
          {children}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
        {/* Shine effect on hover */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
      </Link>
    </motion.div>
  );
}

