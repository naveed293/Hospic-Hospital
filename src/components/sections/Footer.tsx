import type { ReactNode } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { socialLinks } from '@/components/ui/SocialIcons';
import { contactInfo, departments, openingHours } from '@/data/content';

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-base font-semibold text-white">{title}</h4>
      <ul className="mt-5 space-y-3 text-[15px] text-white/65">{children}</ul>
    </div>
  );
}

const linkClass = 'transition-colors hover:text-white';

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy-950 pt-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
              Compassionate, modern healthcare for every member of your family — from routine checkups to
              specialist treatment.
            </p>
            <ul className="mt-6 space-y-2.5 text-[15px] text-white/80">
              {openingHours.map((line) => (
                <li key={line} className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-brand-400" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 ring-1 ring-white/10 transition-colors hover:bg-brand-500 hover:text-white hover:ring-brand-500"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <FooterColumn title="Contact Info">
              <li>
                <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`} className={`flex items-start gap-2.5 ${linkClass}`}>
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className={`flex items-start gap-2.5 ${linkClass}`}>
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                {contactInfo.address}
              </li>
            </FooterColumn>

            <FooterColumn title="Essential Pages">
              <li>
                <a href="#home" className={linkClass}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className={linkClass}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#appointment" className={linkClass}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className={linkClass}>
                  FAQ
                </a>
              </li>
            </FooterColumn>

            <FooterColumn title="Departments">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <a href="#departments" className={linkClass}>
                    {dept.name}
                  </a>
                </li>
              ))}
            </FooterColumn>
          </div>
        </div>
      </Container>

      {/* Giant wordmark */}
      <div aria-hidden className="relative mt-16 select-none overflow-hidden">
        <p className="translate-y-[18%] bg-linear-to-b from-white/[0.16] to-white/0 bg-clip-text text-center font-display text-[length:clamp(72px,19vw,270px)] font-semibold leading-none tracking-[-0.04em] text-transparent">
          HOSPIC
        </p>
      </div>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} Hospic. All rights reserved.</p>
          <p>Crafted with React &amp; Tailwind CSS</p>
        </Container>
      </div>
    </footer>
  );
}
