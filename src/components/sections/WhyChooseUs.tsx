import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { features } from '@/data/content';
import { images } from '@/data/images';

export function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <Container>
        <SectionHeader
          align="center"
          label="Why choose us"
          title={
            <>
              Why families trust us
              <br className="hidden sm:block" /> with their health
            </>
          }
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80} className="h-full">
              <div className="group flex h-full items-start justify-between gap-6 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-brand-200 hover:shadow-[0_24px_48px_-28px_rgba(30,107,255,0.45)] sm:p-7">
                <div>
                  <h3 className="font-display text-xl font-medium text-ink">{feature.title}</h3>
                  <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-muted">{feature.description}</p>
                </div>
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-500 ring-1 ring-brand-100 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  <feature.icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4">
          <div className="group overflow-hidden rounded-3xl">
            <img
              src={images.whyChoose}
              alt="Doctor reviewing results on a tablet with a senior patient"
              loading="lazy"
              className="h-[320px] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] sm:h-[460px] lg:h-[580px]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
