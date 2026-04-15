import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Hire a Professional?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Get matched with the perfect service provider in minutes. 
            Reliable, vetted, and affordable local workforce at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg gap-2" asChild>
              <Link to="/booking">
                Book a Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg gap-2 bg-transparent text-white border-white/30 hover:bg-white/10" asChild>
              <a href="https://wa.me/254115029200" target="_blank" rel="noreferrer">
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-8 text-white/60 text-sm font-medium">
            Same-day service available for urgent requests!
          </p>
        </div>
      </div>
    </section>
  );
}
