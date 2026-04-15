import { motion } from 'motion/react';
import { ShieldCheck, Users, Target, Award, CheckCircle2 } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Vetted Workers', value: '5,000+' },
    { label: 'Happy Clients', value: '10k+' },
    { label: 'Service Categories', value: '15+' },
  ];

  return (
    <div className="pt-24">
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Our Mission is to Connect <span className="text-primary">Reliable Talent</span> with Local Needs
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                MB Business Local Jobs Hub was founded with a simple goal: to bridge the gap between skilled local workers and those who need their services, while ensuring safety and quality for everyone involved.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/about/800/800" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Award Winning</p>
                    <p className="text-sm text-slate-500">Local Service Provider</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Core Values</h2>
            <p className="text-lg text-slate-600">
              These principles guide everything we do, from how we vet our workers to how we support our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Integrity & Trust',
                description: 'We believe in honest communication and transparent processes. Trust is our most valuable asset.',
                icon: ShieldCheck
              },
              {
                title: 'Quality Excellence',
                description: 'We never compromise on the quality of service. Every placement is monitored for performance.',
                icon: CheckCircle2
              },
              {
                title: 'Community Focus',
                description: 'We are dedicated to empowering local workers and supporting local businesses and households.',
                icon: Users
              }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
