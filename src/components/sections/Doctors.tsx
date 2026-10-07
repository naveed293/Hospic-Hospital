import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { socialLinks } from '@/components/ui/SocialIcons';
import { doctors, type Doctor } from '@/data/content';
import { cn } from '@/utils/cn';

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      onMouseLeave={() => setOpen(false)}
      className="group relative aspect-[7/8] overflow-hidden rounded-2xl bg-navy-800"
    >
      <img
        src={doctor.image}
        alt={doctor.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy-950/90 via-navy-950/15 to-transparent" />

      {/* Social toggle */}
      <div className="absolute right-4 top-4 flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? `Hide ${doctor.name} social links` : `Show ${doctor.name} social links`}
          aria-expanded={open}
          className={cn(
            'grid h-10 w-10 place-items-center rounded-full ring-1 backdrop-blur-md transition-all duration-300',
            open
              ? 'bg-white text-brand-500 ring-white'
              : 'bg-white/20 text-white ring-white/30 hover:bg-white hover:text-brand-500',
          )}
        >
          <Plus className={cn('h-5 w-5 transition-transform duration-300', open && 'rotate-45')} />
        </button>
        <ul
          className={cn(
            'flex flex-col gap-2 transition-all duration-300',
            open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
          )}
        >
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={`${doctor.name} on ${social.label}`}
                tabIndex={open ? 0 : -1}
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink transition-colors hover:bg-brand-500 hover:text-white"
              >
                <social.icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 text-center">
        <h3 className="font-display text-xl font-medium text-white">{doctor.name}</h3>
        <p className="mt-1 text-sm text-white/70">{doctor.role}</p>
      </div>
    </article>
  );
}

export function Doctors() {
  return (
    <section id="doctors" className="scroll-mt-20 bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeader
          align="center"
          label="Our doctors"
          labelVariant="white"
          title={
            <>
              Meet the specialists
              <br className="hidden sm:block" /> behind your care
            </>
          }
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, i) => (
            <Reveal key={doctor.name} delay={(i % 3) * 100}>
              <DoctorCard doctor={doctor} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
