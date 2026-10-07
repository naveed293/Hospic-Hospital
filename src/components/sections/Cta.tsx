import { SectionLabel } from '@/components/ui/SectionLabel';
import { ArrowButton } from '@/components/ui/ArrowButton';
import { Reveal } from '@/components/ui/Reveal';
import { images } from '@/data/images';

export function Cta() {
  return (
    <Reveal className="mt-20 lg:mt-24">
      <div className="relative isolate overflow-hidden rounded-3xl bg-navy-900">
        <img
          src={images.ctaDoctor}
          alt="Smiling doctor with arms crossed"
          loading="lazy"
          className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover object-right md:w-[68%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-r from-navy-900 via-navy-900/85 to-navy-900/10 md:via-navy-900/70"
        />
        <div aria-hidden className="absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />

        <div className="relative max-w-xl px-6 py-14 sm:px-12 lg:py-20">
          <SectionLabel variant="dark">Our doctors</SectionLabel>
          <h2 className="mt-5 font-display text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-white sm:text-[46px]">
            Talk to a specialist
            <br /> who truly listens
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/70">
            Same-week appointments with experienced doctors across every major specialty.
          </p>
          <ArrowButton href="#appointment" variant="white" className="mt-8">
            Book An Appointment
          </ArrowButton>
        </div>
      </div>
    </Reveal>
  );
}
