import { SERVICES } from '@/constants';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';

export default function Services() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Our Services</h1>
          <p className="text-xl text-slate-600">
            Comprehensive local workforce solutions tailored for households and businesses. 
            Select a service to learn more and book.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-24">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-slate-100 hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 relative aspect-video lg:aspect-auto">
                    <img 
                      src={`https://picsum.photos/seed/${service.id}/800/600`} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                    <CardTitle className="text-3xl mb-4">{service.title}</CardTitle>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.longDescription}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-slate-50">
                      <div>
                        <p className="text-sm text-slate-500 font-medium mb-1 uppercase tracking-wider">Pricing</p>
                        <p className="text-xl font-bold text-primary">{service.priceRange}</p>
                      </div>
                      <div className="flex gap-4 ml-auto">
                        <Button variant="outline" asChild>
                          <Link to={`/services/${service.id}`}>Learn More</Link>
                        </Button>
                        <Button asChild className="gap-2">
                          <Link to="/booking">
                            Book Now
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <CTABanner />
    </div>
  );
}
