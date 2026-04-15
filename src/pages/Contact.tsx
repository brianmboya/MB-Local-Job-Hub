import * as React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent!', {
      description: "We'll get back to you as soon as possible.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Contact Us</h1>
          <p className="text-xl text-slate-600">
            Have questions? We're here to help. Reach out to us via any of the channels below or fill out the form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="border-slate-100 shadow-sm">
              <CardContent className="p-8 space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-600">+254 115 029 200</p>
                    <p className="text-xs text-slate-400 mt-1">Mon-Fri, 8am-6pm</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">WhatsApp</h3>
                    <p className="text-slate-600">+254 115 029 200</p>
                    <p className="text-xs text-slate-400 mt-1">Instant response</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-600">mbbusiness779@gmail.com</p>
                    <p className="text-xs text-slate-400 mt-1">We reply within 24h</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                    <p className="text-slate-600">Nairobi, Kenya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-6">Follow Our Updates</h3>
              <div className="flex gap-4 mb-8">
                <Button variant="outline" size="icon" className="bg-white/5 border-white/10 hover:bg-white/20">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/5 border-white/10 hover:bg-white/20">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/5 border-white/10 hover:bg-white/20">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4" />
                <span>Available 24/7 for emergency security needs</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-slate-100 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Write your message here..." className="min-h-[200px]" required />
                  </div>
                  <Button type="submit" size="lg" className="w-full md:w-auto px-12 h-12 text-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
