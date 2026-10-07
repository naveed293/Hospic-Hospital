import type { MouseEventHandler, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'white' | 'surface';

interface ArrowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: 'button' | 'submit';
  variant?: Variant;
  size?: 'sm' | 'md';
  className?: string;
}

/** Pill button with the circular arrow badge used across the site. */
export function ArrowButton({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className,
}: ArrowButtonProps) {
  const classes = cn(
    'group inline-flex select-none items-center gap-3 rounded-full font-medium transition-all duration-300',
    size === 'md' ? 'py-1.5 pl-5 pr-1.5 text-[15px]' : 'py-1 pl-4 pr-1 text-sm',
    variant === 'primary' &&
      'bg-brand-500 text-white shadow-[0_10px_28px_-10px_rgba(30,107,255,0.75)] hover:bg-brand-600',
    variant === 'white' && 'bg-white text-ink hover:bg-brand-50',
    variant === 'surface' && 'bg-surface text-ink hover:bg-brand-50',
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <span
        className={cn(
          'grid shrink-0 place-items-center rounded-full',
          size === 'md' ? 'h-9 w-9' : 'h-8 w-8',
          variant === 'primary' ? 'bg-white text-brand-500' : 'bg-brand-500 text-white',
        )}
      >
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
          strokeWidth={2.25}
        />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
