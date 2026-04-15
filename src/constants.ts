import { 
  Home, 
  Users, 
  Trash2, 
  ShieldCheck, 
  Car, 
  Briefcase, 
  Utensils, 
  CheckCircle2, 
  Clock, 
  Shield, 
  DollarSign,
  Star
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'house-helps',
    title: 'House Helps',
    description: 'Professional domestic workers and nannies for your home.',
    benefits: ['Background checked', 'Trained professionals', 'Reliable & punctual'],
    icon: Users,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=800&h=600&auto=format&fit=crop',
    priceRange: 'From $200/month',
    longDescription: 'Our house helps are carefully vetted and trained to provide the best domestic support. Whether you need a nanny, a housekeeper, or a general domestic worker, we have the right match for your family.'
  },
  {
    id: 'cleaning',
    title: 'Cleaning Services',
    description: 'Residential and commercial cleaning solutions.',
    benefits: ['Eco-friendly products', 'Deep cleaning options', 'Flexible scheduling'],
    icon: Home,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&h=600&auto=format&fit=crop',
    priceRange: 'From $30/session',
    longDescription: 'We offer comprehensive cleaning services for both homes and offices. Our team uses high-quality equipment and eco-friendly products to ensure a spotless and healthy environment.'
  },
  {
    id: 'garbage-collection',
    title: 'Garbage Collection',
    description: 'Reliable waste management for homes and businesses.',
    benefits: ['Regular schedules', 'Proper disposal', 'Affordable rates'],
    icon: Trash2,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&h=600&auto=format&fit=crop',
    priceRange: 'From $15/month',
    longDescription: 'Keep your surroundings clean with our timely garbage collection services. We offer flexible pickup schedules tailored to your needs, ensuring proper waste disposal and environmental responsibility.'
  },
  {
    id: 'security-guards',
    title: 'Security Guards',
    description: 'Professional security personnel for your safety.',
    benefits: ['Trained guards', '24/7 monitoring', 'Rapid response'],
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&h=600&auto=format&fit=crop',
    priceRange: 'Request Quote',
    longDescription: 'Our security guards are highly trained professionals dedicated to protecting your property and assets. We provide security for residential areas, commercial buildings, and special events.'
  },
  {
    id: 'drivers',
    title: 'Drivers',
    description: 'Personal and commercial drivers for safe transit.',
    benefits: ['Experienced drivers', 'Clean records', 'Punctual service'],
    icon: Car,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&h=600&auto=format&fit=crop',
    priceRange: 'From $50/day',
    longDescription: 'Need a reliable driver? Whether for personal use, corporate needs, or commercial logistics, our drivers are experienced, licensed, and committed to safety.'
  },
  {
    id: 'casual-workers',
    title: 'Casual Workers',
    description: 'General labor for short-term tasks and projects.',
    benefits: ['Quick deployment', 'Skilled & unskilled', 'Cost-effective'],
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&h=600&auto=format&fit=crop',
    priceRange: 'From $10/hour',
    longDescription: 'For those one-off tasks or short-term projects, our casual workers are ready to help. From loading/unloading to general maintenance, we provide the extra hands you need.'
  },
  {
    id: 'catering',
    title: 'Catering Services',
    description: 'Delicious food for events and corporate gatherings.',
    benefits: ['Custom menus', 'Professional service', 'Fresh ingredients'],
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&h=600&auto=format&fit=crop',
    priceRange: 'Request Quote',
    longDescription: 'Make your event memorable with our professional catering services. We offer a wide range of cuisines and custom menus to suit any occasion, from corporate lunches to private parties.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Verified Workers',
    description: 'Every provider undergoes a rigorous background check and vetting process.',
    icon: Shield
  },
  {
    title: 'Affordable Pricing',
    description: 'Competitive rates with no hidden fees. Get quality service within your budget.',
    icon: DollarSign
  },
  {
    title: 'Fast Response',
    description: 'Our streamlined process ensures you get matched with a provider quickly.',
    icon: Clock
  },
  {
    title: 'Professional Service',
    description: 'We pride ourselves on maintaining the highest standards of professionalism.',
    icon: CheckCircle2
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Wambui',
    role: 'Homeowner',
    content: 'The house help we hired through MB Business has been a blessing. Professional, kind, and very reliable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=100&h=100&auto=format&fit=crop'
  },
  {
    name: 'Michael Otieno',
    role: 'Business Owner',
    content: 'Their commercial cleaning service is top-notch. Our office has never looked better. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop'
  },
  {
    name: 'David Maina',
    role: 'Event Planner',
    content: 'Used their catering and security for a corporate event. Everything was seamless and professional.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&h=100&auto=format&fit=crop'
  }
];

export const FEATURED_PROVIDERS = [
  {
    id: 'p1',
    name: 'Mercy Wanjiku',
    bio: 'Experienced domestic manager with over 5 years of experience in childcare and home management.',
    serviceId: 'house-helps',
    serviceName: 'House Help',
    rating: 4.9,
    photo: 'https://picsum.photos/seed/mercy/400/400',
    verified: true
  },
  {
    id: 'p2',
    name: 'John Kamau',
    bio: 'Professional security specialist trained in rapid response and residential surveillance.',
    serviceId: 'security-guards',
    serviceName: 'Security Guard',
    rating: 4.8,
    photo: 'https://picsum.photos/seed/john/400/400',
    verified: true
  },
  {
    id: 'p3',
    name: 'Alice Atieno',
    bio: 'Expert commercial cleaner specializing in deep cleaning and eco-friendly sanitation.',
    serviceId: 'cleaning',
    serviceName: 'Cleaning Services',
    rating: 5.0,
    photo: 'https://picsum.photos/seed/alice/400/400',
    verified: true
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Choose a Service',
    description: 'Select the service you need from our wide range of categories.'
  },
  {
    step: '02',
    title: 'Request a Quote',
    description: 'Fill out a simple form with your requirements and location.'
  },
  {
    step: '03',
    title: 'Get Matched',
    description: 'We match you with a vetted professional who fits your needs.'
  },
  {
    step: '04',
    title: 'Service Delivered',
    description: 'Enjoy professional service and pay securely upon completion.'
  }
];
