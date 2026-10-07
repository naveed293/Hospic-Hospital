import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ArrowButton } from '@/components/ui/ArrowButton';
import { Reveal } from '@/components/ui/Reveal';
import { services } from '@/data/content';

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-surface py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Sticky intro */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionLabel variant="white">Our services</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 max-w-md font-display text-[34px] font-medium leading-[1.1] tracking-[-0.025em] text-ink sm:text-[44px] lg:text-[50px]">
              Quality care for every stage of life
            </h2>
          </Reveal>
          <Reveal delay={160} className="mt-9">
            <ArrowButton href="#appointment">Book An Appointment</ArrowButton>
          </Reveal>
        </div>

        {/* Service cards */}
        <div className="space-y-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="group flex min-h-[200px] gap-4 rounded-2xl bg-white p-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(12,26,51,0.28)] sm:min-h-[220px] sm:gap-6">
                <div className="flex flex-1 flex-col p-2 sm:p-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface text-ink transition-colors duration-300 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                    <service.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-auto pt-8 font-display text-xl font-medium text-ink sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">{service.description}</p>
                </div>
                <div className="relative w-28 shrink-0 overflow-hidden rounded-xl sm:w-44 lg:w-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
