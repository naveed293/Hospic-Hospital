import { ArrowUpRight, Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ArrowButton } from '@/components/ui/ArrowButton';
import { images } from '@/data/images';

function RatingBadge() {
  return (
    <div className="flex items-center gap-4">
      <div>
        <p className="text-sm font-semibold text-white">Rated Excellent</p>
        <div className="mt-1.5 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="grid h-6 w-6 place-items-center rounded-md bg-amber-400">
              <Star className="h-3.5 w-3.5 fill-white text-white" />
            </span>
          ))}
        </div>
      </div>
      <div className="h-11 w-px bg-white/20" />
      <p className="text-sm leading-snug text-white/70">
        <span className="block text-base font-semibold text-white">4.9 / 5</span>
        3,000+ verified reviews
      </p>
    </div>
  );
}

function BookCard() {
  return (
    <div className="animate-float">
      <div className="flex w-full max-w-sm items-center gap-4 rounded-2xl bg-white/95 p-2.5 pr-5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur">
        <div className="relative shrink-0">
          <img
            src={images.heroCardDoctor}
            alt="Doctor available for appointments"
            className="h-[84px] w-[84px] rounded-xl object-cover object-top"
          />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-[3px] border-white bg-emerald-500" />
        </div>
        <div className="min-w-0">
          <p className="font-display text-lg font-semibold leading-tight text-ink">Book Appointment</p>
          <p className="mt-0.5 text-[13px] text-muted">Specialists available today</p>
          <a
            href="#appointment"
            className="group mt-2.5 inline-flex items-center gap-2 rounded-full bg-surface py-1 pl-4 pr-1 text-sm font-medium text-ink transition-colors hover:bg-brand-50"
          >
            Let’s Talk
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-white">
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[max(100svh,760px)] overflow-hidden bg-navy-950">
      {/* Background image + overlays */}
      <img
        src={images.hero}
        alt="Doctor checking in on a smiling senior patient"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full animate-hero-zoom object-cover object-[72%_center]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-navy-950/95 via-navy-950/65 to-navy-950/5" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-48 bg-linear-to-b from-navy-950/70 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-linear-to-t from-navy-950/85 via-navy-950/30 to-transparent" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy-950/40 lg:hidden" />

      <Container className="relative flex flex-col justify-end pb-8 pt-36 sm:pb-10 lg:pb-12">
        <div className="max-w-3xl">
          {/* Social proof */}
          <div className="flex animate-fade-up items-center gap-3">
            <div className="flex -space-x-3">
              {images.heroAvatars.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  style={{ zIndex: 3 - i }}
                  className="relative h-11 w-11 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="leading-tight">
              <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                4.9/5 rating
              </p>
              <p className="mt-0.5 text-[13px] text-white/65">Trusted by 2k+ patients worldwide</p>
            </div>
          </div>

          <h1
            className="mt-7 animate-fade-up font-display text-[46px] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-7xl lg:text-[88px]"
            style={{ animationDelay: '120ms' }}
          >
            Trusted care,
            <br />
            Healthier lives
          </h1>

          <p
            className="mt-6 max-w-md animate-fade-up text-base leading-relaxed text-white/75 sm:text-lg"
            style={{ animationDelay: '240ms' }}
          >
            Get dependable treatment from experienced physicians, supported by advanced diagnostics and a
            team that always puts you first.
          </p>

          <div className="mt-9 animate-fade-up" style={{ animationDelay: '360ms' }}>
            <ArrowButton href="#appointment">Book An Appointment</ArrowButton>
          </div>
        </div>

        <div
          className="mt-16 flex animate-fade-up flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mt-20"
          style={{ animationDelay: '480ms' }}
        >
          <RatingBadge />
          <BookCard />
        </div>
      </Container>
    </section>
  );
}
