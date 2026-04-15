import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <span className="text-white font-bold text-xl leading-none">MB</span>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Local Jobs Hub
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Connecting you with vetted, reliable local service providers. 
              Quality workforce at your doorstep, whenever you need it.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/booking" className="hover:text-primary transition-colors">Book a Service</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-6">Popular Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services/house-helps" className="hover:text-primary transition-colors">House Helps</Link></li>
              <li><Link to="/services/cleaning" className="hover:text-primary transition-colors">Cleaning Services</Link></li>
              <li><Link to="/services/security-guards" className="hover:text-primary transition-colors">Security Guards</Link></li>
              <li><Link to="/services/drivers" className="hover:text-primary transition-colors">Drivers</Link></li>
              <li><Link to="/services/catering" className="hover:text-primary transition-colors">Catering Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+254115029200" className="hover:text-primary transition-colors">+254 115 029 200</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:mbbusiness779@gmail.com" className="hover:text-primary transition-colors">mbbusiness779@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MB Business Local Jobs Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
