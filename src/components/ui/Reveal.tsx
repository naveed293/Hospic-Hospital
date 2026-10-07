import type { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/utils/cn';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Fades + slides its children up when they scroll into view. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-[opacity,translate] duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  );
}
