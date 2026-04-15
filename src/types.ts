export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: any;
  image: string;
  priceRange: string;
  longDescription: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: any;
}

export interface Provider {
  id: string;
  name: string;
  bio: string;
  serviceId: string;
  serviceName: string;
  rating: number;
  photo: string;
  verified: boolean;
}
