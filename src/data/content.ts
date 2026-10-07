import type { LucideIcon } from 'lucide-react';
import {
  Ambulance,
  Award,
  Baby,
  Bone,
  Brain,
  HeartPulse,
  Microscope,
  Scan,
  ScanLine,
  ShieldCheck,
  Siren,
  Stethoscope,
} from 'lucide-react';
import { images } from './images';

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */
export interface NavLink {
  label: string;
  href: string;
  id: string;
  hasDropdown?: boolean;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Department', href: '#departments', id: 'departments', hasDropdown: true },
  { label: 'Pricing', href: '#pricing', id: 'pricing' },
  { label: 'Blog', href: '#blog', id: 'blog' },
];

/* ------------------------------------------------------------------ */
/* About stats                                                         */
/* ------------------------------------------------------------------ */
export interface Stat {
  value?: number;
  display?: string;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 200, suffix: '+', label: 'Experienced Doctors' },
  { value: 98, suffix: '%', label: 'Patient Satisfaction' },
  { display: '24/7', label: 'Emergency Care' },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */
export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const services: Service[] = [
  {
    title: 'Emergency care',
    description:
      'Round-the-clock emergency response with rapid triage and critical-care teams always on standby.',
    icon: Ambulance,
    image: images.services.emergency,
  },
  {
    title: 'General medicine',
    description:
      'Thorough check-ups, accurate diagnosis and clear treatment plans for everyday health concerns.',
    icon: Stethoscope,
    image: images.services.general,
  },
  {
    title: "Women's health",
    description:
      'Personalised gynecology, maternity and preventive care designed for every stage of life.',
    icon: Baby,
    image: images.services.women,
  },
  {
    title: 'Diagnostic imaging',
    description:
      'High-precision MRI, CT, ultrasound and digital X-ray with fast and reliable reporting.',
    icon: ScanLine,
    image: images.services.imaging,
  },
];

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */
export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    title: 'Experienced specialists',
    description:
      'Board-certified physicians and surgeons with decades of combined clinical experience.',
    icon: Award,
  },
  {
    title: 'Advanced technology',
    description: 'Modern diagnostic and treatment equipment for safer, more precise outcomes.',
    icon: Microscope,
  },
  {
    title: 'Trusted healthcare',
    description:
      'Thousands of families rely on us for honest advice and consistent, high-quality care.',
    icon: ShieldCheck,
  },
  {
    title: '24/7 emergency care',
    description: 'Emergency physicians and ambulances ready every hour of every day, all year.',
    icon: Siren,
  },
];

/* ------------------------------------------------------------------ */
/* Departments                                                         */
/* ------------------------------------------------------------------ */
export interface Department {
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const departments: Department[] = [
  {
    name: 'Cardiology',
    description: 'Expert diagnosis and treatment for heart and vascular conditions.',
    icon: HeartPulse,
    image: images.departments.cardiology,
  },
  {
    name: 'Neurology',
    description: 'Specialised care for brain, spine and nervous system disorders.',
    icon: Brain,
    image: images.departments.neurology,
  },
  {
    name: 'Radiology',
    description: 'Accurate imaging services including MRI, CT scans and ultrasound.',
    icon: Scan,
    image: images.departments.radiology,
  },
  {
    name: 'Orthopedics',
    description: 'Care for bones, joints and sports injuries to restore your mobility.',
    icon: Bone,
    image: images.departments.orthopedics,
  },
];

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */
export interface Plan {
  name: string;
  price: number;
  description: string;
  idealFor: string;
  features: string[];
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Basic Health Check',
    price: 99,
    description: 'Essential screening for routine wellness and early detection of common issues.',
    idealFor: 'Ideal for routine wellness',
    features: [
      'General physician consultation',
      'Complete blood count (CBC)',
      'Blood pressure & sugar screening',
      'Basic urine analysis',
    ],
  },
  {
    name: 'Standard Health Check',
    price: 199,
    description: 'A broader assessment with advanced diagnostics and a detailed expert review.',
    idealFor: 'Ideal for proactive care',
    features: [
      'Everything in Basic',
      'Lipid & thyroid profile',
      'ECG heart screening',
      'Nutrition consultation',
    ],
    featured: true,
  },
  {
    name: 'Premium Health Check',
    price: 399,
    description: 'Our most complete package, designed for total peace of mind about your health.',
    idealFor: 'Ideal for complete coverage',
    features: [
      'Everything in Standard',
      'Full-body imaging scan',
      'Cardiac stress test',
      'Specialist follow-up session',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */
export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The team made a frightening surgery feel manageable. Every nurse and doctor explained each step, and my recovery was faster than I imagined.',
    name: 'Ethan Brooks',
    location: 'Denver, CO',
    avatar: images.avatars.ethan,
  },
  {
    quote:
      'Booking was simple and I was seen right on time. My cardiologist took real time to answer every question — I left feeling genuinely cared for.',
    name: 'Maria Lopez',
    location: 'Austin, TX',
    avatar: images.avatars.maria,
  },
  {
    quote:
      'From the emergency room to discharge, the care was calm, quick and professional. I am grateful to everyone who looked after my father.',
    name: 'James Walker',
    location: 'Chicago, IL',
    avatar: images.avatars.james,
  },
  {
    quote:
      'The maternity staff were incredible. They supported my wife and me day and night and made our first days as parents truly special.',
    name: 'Noah Williams',
    location: 'Seattle, WA',
    avatar: images.avatars.noah,
  },
];

/* ------------------------------------------------------------------ */
/* Doctors                                                             */
/* ------------------------------------------------------------------ */
export interface Doctor {
  name: string;
  role: string;
  image: string;
}

export const doctors: Doctor[] = [
  { name: 'Dr. Daniel Hayes', role: 'Chief Medical Officer', image: images.doctors.hayes },
  { name: 'Dr. Olivia Bennett', role: 'Senior Cardiologist', image: images.doctors.bennett },
  { name: 'Dr. Marcus Reed', role: 'Orthopedic Surgeon', image: images.doctors.reed },
  { name: 'Dr. Sophia Turner', role: 'Pediatric Specialist', image: images.doctors.turner },
  { name: 'Dr. Ryan Mitchell', role: 'Consultant Neurologist', image: images.doctors.mitchell },
  { name: 'Dr. Alex Morgan', role: 'General Physician', image: images.doctors.morgan },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'Do I need an appointment to visit?',
    answer:
      'Walk-ins are welcome for general consultations, but booking ahead guarantees your time slot and keeps waiting short. Emergency patients are always seen immediately.',
  },
  {
    question: 'Which insurance plans do you accept?',
    answer:
      'We work with most major insurance providers. Share your policy details with our billing desk and we will confirm your coverage before your visit.',
  },
  {
    question: 'How can I book an appointment?',
    answer:
      'Use the appointment form on this page, call our front desk, or visit us in person. You will receive a confirmation by SMS and email.',
  },
  {
    question: 'Do you provide 24/7 emergency care?',
    answer:
      'Yes. Our emergency department and ambulance service operate around the clock, every day of the year — including public holidays.',
  },
  {
    question: 'Can I choose my preferred doctor?',
    answer:
      'Absolutely. You can request a specific specialist when booking, subject to their availability on your chosen date.',
  },
  {
    question: 'Do you offer health checkup packages?',
    answer:
      'Yes — we offer Basic, Standard and Premium packages tailored to different needs and budgets. See the Health packages section above for details.',
  },
];

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */
export interface Post {
  category: string;
  date: string;
  title: string;
  image: string;
}

export const posts: Post[] = [
  {
    category: 'Health Tips',
    date: 'Oct 9, 2025',
    title: 'Why an annual health checkup is one of your smartest investments',
    image: images.blog1,
  },
  {
    category: 'Patient Care',
    date: 'Oct 16, 2025',
    title: 'Key health screenings every adult should schedule this year',
    image: images.blog2,
  },
];

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */
export const contactInfo = {
  phone: '+1 (800) 555-0199',
  email: 'care@hospic.com',
  address: '2450 Harbor Street, New York, NY 10001',
};

export const openingHours = [
  'Monday – Friday: 8:00 AM – 7:00 PM',
  'Saturday: 9:00 AM – 3:00 PM',
  'Sunday: Emergency only',
];
