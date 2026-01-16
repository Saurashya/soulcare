import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import CTAButton from '@/app/components/CTAButton';
import type { Metadata } from 'next';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Soulcare Hypnotherapy & Healing Center`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-[#F7F6F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center text-[#1E6F5C] font-medium hover:text-[#D4AF37] transition-colors mb-12 group text-base"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        {/* Service Header */}
        <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-healing mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E6F5C] mb-8 font-['Playfair_Display'] leading-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10">
            {service.description}
          </p>

          {service.duration && service.price && (
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="bg-[#F7F6F2] rounded-lg px-6 py-3">
                <span className="text-sm text-gray-600">Duration</span>
                <p className="text-lg font-semibold text-[#1E6F5C]">{service.duration}</p>
              </div>
              <div className="bg-[#F7F6F2] rounded-lg px-6 py-3">
                <span className="text-sm text-gray-600">Investment</span>
                <p className="text-lg font-semibold text-[#D4AF37]">{service.price}</p>
              </div>
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-healing mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E6F5C] mb-8 font-['Playfair_Display']">
            Benefits
          </h2>
          <ul className="space-y-5">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#4CAF8F] to-[#1E6F5C] flex items-center justify-center mr-4 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Who It's For Section */}
        <div className="bg-gradient-to-br from-[#1E6F5C] to-[#4CAF8F] rounded-3xl p-8 md:p-12 lg:p-16 shadow-healing mb-8 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-['Playfair_Display']">
            Who Is This For?
          </h2>
          <ul className="space-y-5">
            {service.whoItsFor.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center mr-4 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg leading-relaxed opacity-95">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-healing">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E6F5C] mb-6 font-['Playfair_Display']">
            Ready to Experience {service.title}?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Take the first step toward transformation. Book your consultation 
            and discover how this service can support your healing journey.
          </p>
          <CTAButton href="/contact" variant="primary">
            Schedule Your Session
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

