import Link from 'next/link';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E6F5C] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="flex-[1_1_300px] min-w-[250px]">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-2xl font-bold font-['Playfair_Display']">
                Soulcare
              </span>
            </div>
            <p className="text-[#4CAF8F] mb-4 leading-relaxed">
              Heal Your Mind. Restore Your Inner Peace.
            </p>
            <p className="text-sm text-[#4CAF8F]/80 italic">
              &ldquo;The journey of a thousand miles begins with a single step.&rdquo;
            </p>
            <div className="mt-6 flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4CAF8F] to-[#1E6F5C] flex items-center justify-center hover-scale-sm cursor-pointer">
                <span className="text-white text-sm font-bold">F</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center hover-scale-sm cursor-pointer">
                <span className="text-white text-sm font-bold">I</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E6F5C] to-[#2D8A72] flex items-center justify-center hover-scale-sm cursor-pointer">
                <span className="text-white text-sm font-bold">T</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-[1_1_200px] min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4 font-['Playfair_Display']">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[#4CAF8F] hover:text-[#D4AF37] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#4CAF8F] hover:text-[#D4AF37] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#4CAF8F] hover:text-[#D4AF37] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#4CAF8F] hover:text-[#D4AF37] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-[1_1_250px] min-w-[250px]">
            <h3 className="text-lg font-semibold mb-4 font-['Playfair_Display']">
              Contact
            </h3>
            <ul className="flex flex-col space-y-3 text-[#4CAF8F]">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>info@soulcare.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 Healing Way<br />Peaceful Valley, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4CAF8F]/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#4CAF8F] text-sm">
              © {currentYear} Soulcare Hypnotherapy and Healing Center. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-[#4CAF8F] hover:text-[#D4AF37] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#4CAF8F] hover:text-[#D4AF37] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

