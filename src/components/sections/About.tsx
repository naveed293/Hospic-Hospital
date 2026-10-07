import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ArrowButton } from '@/components/ui/ArrowButton';
import { Reveal } from '@/components/ui/Reveal';
import { ScrollRevealText } from '@/components/ui/ScrollRevealText';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { images } from '@/data/images';
import { stats, type Stat } from '@/data/content';

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const count = useCountUp(stat.value ?? 0, start);

  return (
    <div className="py-6 md:flex-1 md:px-8 md:py-2 lg:flex-none lg:px-0 lg:py-7">
      <p className="font-display text-5xl font-medium tracking-tight text-ink lg:text-[56px]">
        {stat.display ?? count}
        {stat.suffix && <span className="text-brand-500">{stat.suffix}</span>}
      </p>
      <p className="mt-2 text-[15px] text-muted">{stat.label}</p>
    </div>
  );
}

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>About us</SectionLabel>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <ScrollRevealText
              text="We're devoted to outstanding medical care, delivered by skilled specialists in modern, welcoming facilities."
              className="font-display text-[26px] font-medium leading-[1.3] tracking-[-0.02em] sm:text-[34px] lg:text-[40px]"
            />
            <Reveal className="mt-8">
              <ArrowButton href="#services" variant="surface">
                About Us
              </ArrowButton>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="group h-[360px] overflow-hidden rounded-2xl lg:h-[400px]">
              <img
                src={images.aboutPrimary}
                alt="Doctor consulting with a patient"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-3">
            <div className="group h-[360px] overflow-hidden rounded-2xl lg:h-[400px]">
              <img
                src={images.aboutSecondary}
                alt="Two doctors discussing a case"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <div
            ref={ref}
            className="flex flex-col justify-center divide-y divide-line md:col-span-2 md:flex-row md:divide-x md:divide-y-0 lg:col-span-5 lg:flex-col lg:divide-x-0 lg:divide-y lg:pl-14"
          >
            {stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} start={inView} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
