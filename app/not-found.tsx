import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#F7F6F2] min-h-screen flex items-center justify-center pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-9xl font-bold text-[#1E6F5C] mb-4 font-['Playfair_Display']">
          404
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E6F5C] mb-6 font-['Playfair_Display']">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-700 mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's guide you back to your healing journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1E6F5C] text-white rounded-full font-semibold hover:bg-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1E6F5C] border-2 border-[#1E6F5C] rounded-full font-semibold hover:bg-[#1E6F5C] hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}

