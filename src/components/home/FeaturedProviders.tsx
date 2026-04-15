import * as React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const PROVIDERS = [
  {
    id: '1',
    name: 'Sarah Wambui',
    service: 'Professional Cleaning',
    bio: 'Specializes in deep cleaning and organizing with over 5 years of experience in high-end residential properties.',
    rating: 4.9,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&h=400&auto=format&fit=crop',
    vetted: true,
  },
  {
    id: '2',
    name: 'David Omondi',
    service: 'Security Services',
    bio: 'Ex-military professional providing top-tier security for events and private residences. Highly disciplined and reliable.',
    rating: 5.0,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop',
    vetted: true,
  },
  {
    id: '3',
    name: 'Grace Atieno',
    service: 'Domestic Help',
    bio: 'Experienced nanny and housekeeper known for her excellent cooking skills and gentle care with children.',
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?q=80&w=400&h=400&auto=format&fit=crop',
    vetted: true,
  },
];

export default function FeaturedProviders() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#e9f5ed] text-[#28a745] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Top Rated Professionals
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a202c] mb-4">
              Meet Our Featured Providers
            </h2>
            <p className="text-[#718096] text-lg">
              Every professional on our platform is strictly vetted and background checked for your peace of mind.
            </p>
          </div>
          <Link to="/services">
            <Button variant="outline" className="group border-[#e2e8f0] text-[#004a99] hover:bg-[#004a99] hover:text-white transition-all">
              View All Providers
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROVIDERS.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-[#e2e8f0] hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {provider.vetted && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <ShieldCheck className="w-4 h-4 text-[#28a745]" />
                      <span className="text-[10px] font-bold text-[#1a202c] uppercase">Vetted</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-[#1a202c]">{provider.name}</h3>
                      <p className="text-[#004a99] font-semibold text-sm">{provider.service}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-[#f7fafc] px-2 py-1 rounded-md">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-bold text-[#1a202c]">{provider.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-[#718096] text-sm line-clamp-2 mb-6">
                    {provider.bio}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#e2e8f0]">
                    <span className="text-xs text-[#a0aec0] font-medium">
                      {provider.reviews} Verified Reviews
                    </span>
                    <Link to={`/booking?provider=${provider.id}`}>
                      <Button size="sm" className="bg-[#28a745] hover:bg-[#218838] text-white font-bold">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
