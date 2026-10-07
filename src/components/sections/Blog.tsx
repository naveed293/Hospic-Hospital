import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { posts } from '@/data/content';
import { Cta } from './Cta';

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-20 bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeader
          align="center"
          label="Blog & news"
          labelVariant="white"
          title={
            <>
              Fresh health insights
              <br className="hidden sm:block" /> and wellness advice
            </>
          }
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 120}>
              <a href="#blog" className="group block">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 grid h-11 w-11 scale-75 place-items-center rounded-full bg-white text-brand-500 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-3 text-sm text-muted">
                  <span className="rounded-full bg-white px-3 py-1 font-medium text-ink">{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-muted/50" />
                  <time>{post.date}</time>
                </div>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-brand-500 sm:text-2xl">
                  {post.title}
                </h3>
              </a>
            </Reveal>
          ))}
        </div>

        <Cta />
      </Container>
    </section>
  );
}
