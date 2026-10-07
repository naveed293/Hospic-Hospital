import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

/** Words fade from light to dark as the paragraph scrolls through the viewport. */
export function ScrollRevealText({ text, className }: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(' ');

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.88;
        const end = vh * 0.35;
        const value = (start - rect.top) / (start - end);
        setProgress(Math.min(1, Math.max(0, value)));
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
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn(
            'transition-colors duration-300',
            i / words.length < progress ? 'text-ink' : 'text-ink/20',
          )}
        >
          {word}{' '}
        </span>
      ))}
    </p>
  );
}
