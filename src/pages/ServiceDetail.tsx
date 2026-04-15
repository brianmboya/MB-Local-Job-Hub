import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '@/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ArrowLeft, ShieldCheck, Clock, Star, MessageSquare } from 'lucide-react';
import BookingForm from '@/components/booking/BookingForm';
import { motion } from 'motion/react';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const faqs = [
    {
      q: `How do you vet your ${service.title.toLowerCase()}?`,
      a: "Every professional undergoes a multi-stage vetting process including background checks, skill assessments, and reference verification."
    },
    {
      q: "What if I'm not satisfied with the service?",
      a: "We offer a satisfaction guarantee. If you're not happy with the service provided, we'll work to resolve the issue or provide a replacement professional."
    },
    {
      q: "How soon can I get a provider?",
      a: "Depending on the service and location, we can often match you with a provider within 24-48 hours. Urgent requests can sometimes be handled same-day."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to all services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Verified Service</Badge>
                  <h1 className="text-4xl font-bold text-slate-900">{service.title}</h1>
                </div>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-lg">
                <img 
                  src={`https://picsum.photos/seed/${service.id}-detail/1200/800`} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold mb-4">Service Overview</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="text-slate-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                      <li className="text-slate-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                        Professional equipment (where applicable)
                      </li>
                      <li className="text-slate-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                        Insurance coverage
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      Trust Indicators
                    </h3>
                    <ul className="space-y-3">
                      <li className="text-slate-600 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        4.9/5 Average Rating
                      </li>
                      <li className="text-slate-600 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        Punctuality Guaranteed
                      </li>
                      <li className="text-slate-600 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-slate-400" />
                        Background Verified
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full mb-12">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          </div>

          {/* Sidebar / Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-primary text-white p-8 rounded-2xl shadow-xl shadow-primary/20">
                <p className="text-primary-foreground/80 font-medium mb-2 uppercase tracking-wider text-sm">Starting From</p>
                <p className="text-4xl font-bold mb-6">{service.priceRange}</p>
                <Button variant="secondary" size="lg" className="w-full h-12 text-lg gap-2" asChild>
                  <a href="https://wa.me/254115029200" target="_blank" rel="noreferrer">
                    <MessageSquare className="w-5 h-5" />
                    Inquire on WhatsApp
                  </a>
                </Button>
                <p className="mt-4 text-center text-sm text-primary-foreground/60">
                  Instant response during business hours
                </p>
              </div>

              <div id="booking-section">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
