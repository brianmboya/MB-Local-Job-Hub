import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '@/constants';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Professional Services</h2>
          <p className="text-lg text-slate-600">
            We offer a wide range of specialized services to meet your daily needs. 
            Each professional is thoroughly vetted for your peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow border-slate-100 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-slate-500 line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-sm font-semibold text-primary">{service.priceRange}</span>
                  <Button variant="ghost" size="sm" asChild className="gap-1 group">
                    <Link to={`/services/${service.id}`}>
                      Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
