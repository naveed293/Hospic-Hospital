import { useCallback, useState } from 'react';
import { Play, Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { VideoModal } from '@/components/ui/VideoModal';
import { testimonials, type Testimonial } from '@/data/content';
import { images, videos } from '@/data/images';

function QuoteCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full min-h-[340px] flex-col justify-between rounded-2xl bg-surface p-7 transition-colors duration-300 hover:bg-brand-50/70">
      <div>
        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <blockquote className="mt-5 text-[15px] leading-relaxed text-ink/80">“{testimonial.quote}”</blockquote>
      </div>
      <figcaption className="mt-8 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
        />
        <div>
          <p className="font-semibold text-ink">{testimonial.name}</p>
          <p className="text-sm text-muted">{testimonial.location}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function VideoCard({ image, label, onPlay }: { image: string; label: string; onPlay: () => void }) {
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`Play video: ${label}`}
      className="group relative block h-full min-h-[340px] w-full overflow-hidden rounded-2xl text-left"
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
      <div className="absolute bottom-5 left-5 flex items-center gap-3">
        <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white text-brand-500">
          <span className="absolute inset-0 animate-ping-slow rounded-full bg-white/70" />
          <Play className="relative h-4 w-4 translate-x-px fill-current" />
        </span>
        <span className="font-medium text-white">{label}</span>
      </div>
    </button>
  );
}

export function Testimonials() {
  const [videoOpen, setVideoOpen] = useState(false);
  const openVideo = useCallback(() => setVideoOpen(true), []);
  const closeVideo = useCallback(() => setVideoOpen(false), []);

  return (
    <section id="testimonials" className="scroll-mt-20 bg-white pb-20 lg:pb-28">
      <Container>
        <SectionHeader
          label="Testimonials"
          title={
            <>
              Real patients,
              <br /> real recovery stories
            </>
          }
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="h-full">
            <QuoteCard testimonial={testimonials[0]} />
          </Reveal>
          <Reveal delay={100} className="h-full">
            <QuoteCard testimonial={testimonials[1]} />
          </Reveal>
          <Reveal delay={200} className="h-full">
            <VideoCard image={images.testimonialVideo1} label="Patient Story" onPlay={openVideo} />
          </Reveal>
          <Reveal className="h-full">
            <VideoCard image={images.testimonialVideo2} label="Recovery Journey" onPlay={openVideo} />
          </Reveal>
          <Reveal delay={100} className="h-full">
            <QuoteCard testimonial={testimonials[2]} />
          </Reveal>
          <Reveal delay={200} className="h-full">
            <QuoteCard testimonial={testimonials[3]} />
          </Reveal>
        </div>
      </Container>

      <VideoModal open={videoOpen} src={videos.patientStory} title="Patient story" onClose={closeVideo} />
    </section>
  );
}
