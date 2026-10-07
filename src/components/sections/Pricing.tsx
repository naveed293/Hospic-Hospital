import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { plans, type Plan } from '@/data/content';
import { images } from '@/data/images';
import { cn } from '@/utils/cn';

function PlanCard({ plan }: { plan: Plan }) {
  const featured = Boolean(plan.featured);

  return (
    <div
      className={cn(
        'relative flex h-full flex-col rounded-3xl p-2 transition-all duration-500 hover:-translate-y-1.5',
        featured
          ? 'bg-navy-900 shadow-[0_30px_60px_-25px_rgba(12,26,51,0.6)]'
          : 'bg-surface hover:shadow-[0_30px_60px_-30px_rgba(12,26,51,0.3)]',
      )}
    >
      <div className="px-5 pb-6 pt-5">
        <div className="flex items-center justify-between gap-3">
          <span
            className={cn(
              'rounded-full px-3 py-1 text-[13px] font-medium',
              featured ? 'bg-white/10 text-white' : 'bg-white text-ink',
            )}
          >
            {plan.name}
          </span>
          {featured && (
            <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
          )}
        </div>
        <p
          className={cn(
            'mt-6 font-display text-5xl font-medium tracking-tight',
            featured ? 'text-white' : 'text-ink',
          )}
        >
          ${plan.price}
          <span className={cn('ml-1.5 text-base font-normal', featured ? 'text-white/60' : 'text-muted')}>
            / checkup
          </span>
        </p>
        <p className={cn('mt-3 text-[15px] leading-relaxed', featured ? 'text-white/70' : 'text-muted')}>
          {plan.description}
        </p>
      </div>

      <div className="flex-1 rounded-2xl bg-white p-6">
        <p className="text-sm font-semibold text-ink">{plan.idealFor}</p>
        <div className="my-4 h-px bg-line" />
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-[15px] text-ink/80">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#appointment"
        className={cn(
          'group/btn mt-2 flex items-center justify-between rounded-full py-1.5 pl-6 pr-1.5 text-[15px] font-medium transition-colors',
          featured ? 'bg-brand-500 text-white hover:bg-brand-600' : 'bg-white text-ink hover:bg-brand-50',
        )}
      >
        Choose Plan
        <span
          className={cn(
            'grid h-9 w-9 place-items-center rounded-full',
            featured ? 'bg-white text-brand-500' : 'bg-brand-500 text-white',
          )}
        >
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45" />
        </span>
      </a>
    </div>
  );
}

/** Wide image with a soft parallax effect. */
function Showcase() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
        setOffset(Math.max(-1, Math.min(1, progress)) * -50);
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <Reveal className="mt-16 lg:mt-24">
      <div ref={ref} className="relative h-[280px] overflow-hidden rounded-3xl bg-navy-900 sm:h-[420px] lg:h-[560px]">
        <img
          src={images.surgery}
          alt="Surgical team operating in a modern theatre"
          loading="lazy"
          style={{ transform: `translate3d(0, ${offset}px, 0)` }}
          className="absolute inset-x-0 -top-[60px] h-[calc(100%+120px)] w-full object-cover will-change-transform"
        />
      </div>
    </Reveal>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <Container>
        <SectionHeader
          align="center"
          label="Health packages"
          title={
            <>
              Affordable health plans
              <br className="hidden sm:block" /> for every lifestyle
            </>
          }
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Showcase />
      </Container>
    </section>
  );
}
