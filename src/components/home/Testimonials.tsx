import { motion } from 'motion/react';
import { TESTIMONIALS } from '@/constants';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">What Our Clients Say</h2>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Here's what some of our satisfied clients have to say about their experience with MB Business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-8 flex flex-col h-full">
                  <div className="mb-6 text-primary/20">
                    <Quote className="w-10 h-10 fill-current" />
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'text-slate-200'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-8 flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                    <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                        {testimonial.role}
                      </p>
                    </div>
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
