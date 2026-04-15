import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <span className="text-white font-bold text-xl leading-none">MB</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
            Local Jobs Hub
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === link.href
                  ? 'text-primary'
                  : 'text-slate-600'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" asChild className="gap-2">
            <a href="https://wa.me/254115029200" target="_blank" rel="noreferrer">
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>
          <Button size="sm" asChild variant="ghost">
            <Link to="/signin">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/booking">Hire Now</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="tel:+1234567890">
              <Phone className="w-5 h-5" />
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-10">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary',
                      location.pathname === link.href
                        ? 'text-primary'
                        : 'text-slate-600'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-slate-100" />
                <div className="flex flex-col gap-4">
                  <Button variant="outline" className="w-full justify-start gap-2" asChild>
                    <a href="https://wa.me/254115029200" target="_blank" rel="noreferrer">
                      <MessageSquare className="w-5 h-5" />
                      WhatsApp Chat
                    </a>
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" asChild>
                      <Link to="/signin">Sign In</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/signup">Sign Up</Link>
                    </Button>
                  </div>
                  <Button className="w-full" asChild>
                    <Link to="/booking">Hire Now</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
