import BookingForm from '@/components/booking/BookingForm';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function Booking() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Book a Service</h1>
          <p className="text-xl text-slate-600">
            Tell us what you need and we'll match you with the best local professional for the job.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BookingForm />
            </motion.div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-6 text-slate-900">Why Book With Us?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Vetted Professionals</h4>
                    <p className="text-sm text-slate-600">Every worker is background checked and verified for your safety.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Fast Matching</h4>
                    <p className="text-sm text-slate-600">We usually match you with a provider within 24 hours of your request.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Quality Guarantee</h4>
                    <p className="text-sm text-slate-600">Not satisfied? We'll provide a replacement or resolve the issue promptly.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="font-bold text-lg mb-4">Need Help?</h3>
              <p className="text-slate-400 text-sm mb-6">
                If you're unsure which service to choose, our support team is ready to assist you.
              </p>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-sm">
                  <span className="text-primary font-bold">Call:</span> +254 115 029 200
                </p>
                <p className="flex items-center gap-3 text-sm">
                  <span className="text-primary font-bold">WhatsApp:</span> 0115029200
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
