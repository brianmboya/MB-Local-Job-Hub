import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '@/constants';

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Why MB Business is Your Best Choice
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We understand that trust is the foundation of any service. That's why we've built a system that prioritizes safety, quality, and reliability above all else.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {WHY_CHOOSE_US.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/trust/800/800" 
                alt="Trust and Reliability" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary/10 rounded-full -z-10" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 max-w-[240px] text-center">
              <p className="text-3xl font-bold text-primary mb-1">2,000+</p>
              <p className="text-sm font-medium text-slate-600">Successful Placements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
