import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SERVICES } from '@/constants';
import { ArrowRight, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Hero() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Quote request sent!', {
      description: "We'll get back to you in 10 minutes.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="relative overflow-hidden bg-[#f7fafc] pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block bg-[#e9f5ed] text-[#28a745] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
              Trusted Local Service Provider
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-[#1a202c]">
              Trusted Local Workforce<br />At Your Service.
            </h1>
            <p className="text-lg text-[#718096] leading-relaxed max-w-xl">
              Connecting households and businesses with vetted, reliable, and professional workers for every need. 
              Verified professionals, background checked, and ready to start today.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {SERVICES.slice(0, 8).map((service) => (
                <Link 
                  key={service.id} 
                  to={`/services/${service.id}`}
                  className="bg-white border border-[#e2e8f0] p-4 rounded-xl flex flex-col gap-2 hover:shadow-md transition-all group"
                >
                  <div className="text-xl group-hover:scale-110 transition-transform">
                    {service.id === 'house-helps' && '🏠'}
                    {service.id === 'cleaning' && '✨'}
                    {service.id === 'garbage-collection' && '🗑️'}
                    {service.id === 'security-guards' && '🛡️'}
                    {service.id === 'drivers' && '🚗'}
                    {service.id === 'casual-workers' && '🏗️'}
                    {service.id === 'catering' && '🍽️'}
                    {!['house-helps', 'cleaning', 'garbage-collection', 'security-guards', 'drivers', 'casual-workers', 'catering'].includes(service.id) && '🤝'}
                  </div>
                  <div className="font-bold text-sm text-[#1a202c]">{service.title}</div>
                  <div className="text-[10px] text-[#a0aec0] line-clamp-1">{service.description}</div>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-8 mt-8 pt-8 border-t border-[#e2e8f0]">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#4a5568]">
                <div className="w-1.5 h-1.5 bg-[#28a745] rounded-full" />
                5,000+ Verified Workers
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#4a5568]">
                <div className="w-1.5 h-1.5 bg-[#28a745] rounded-full" />
                Background Checked
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#4a5568]">
                <div className="w-1.5 h-1.5 bg-[#28a745] rounded-full" />
                Same-day Availability
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-xl font-bold text-[#1a202c] mb-1">Get Matched Instantly</h2>
                <p className="text-sm text-[#718096] mb-6">Tell us your needs and receive a quote in 10 minutes.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="hero-name" className="text-[10px] font-bold uppercase tracking-wider text-[#4a5568]">Your Name</Label>
                    <Input id="hero-name" placeholder="John Doe" className="h-11 border-[#e2e8f0]" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="hero-phone" className="text-[10px] font-bold uppercase tracking-wider text-[#4a5568]">Phone Number</Label>
                    <Input id="hero-phone" type="tel" placeholder="07XX XXX XXX" className="h-11 border-[#e2e8f0]" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="hero-service" className="text-[10px] font-bold uppercase tracking-wider text-[#4a5568]">Service Needed</Label>
                    <select
                      id="hero-service"
                      className="flex h-11 w-full rounded-md border border-[#e2e8f0] bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="hero-location" className="text-[10px] font-bold uppercase tracking-wider text-[#4a5568]">Location</Label>
                    <Input id="hero-location" placeholder="e.g. Nairobi, Westlands" className="h-11 border-[#e2e8f0]" required />
                  </div>
                  
                  <Button type="submit" className="w-full h-12 bg-[#28a745] hover:bg-[#218838] text-white font-bold text-base mt-2">
                    Request Free Quote
                  </Button>
                </form>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-[#a0aec0] font-medium">
                  <ShieldCheck className="w-3 h-3" />
                  Your data is 100% secure and private
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#28a745]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=100&h=100&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?q=80&w=100&h=100&auto=format&fit=crop'
                ].map((src, i) => (
                  <img 
                    key={i}
                    src={src}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-xs font-medium text-[#718096]">
                <span className="text-[#1a202c] font-bold">4.9/5</span> from 2k+ happy clients
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
