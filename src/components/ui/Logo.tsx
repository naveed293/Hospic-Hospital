import { cn } from '@/utils/cn';

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn('h-8 w-8', className)} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#1E6BFF" />
      <path d="M13 7.5h6v5.5h5.5v6H19v5.5h-6V19H7.5v-6H13z" fill="#fff" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export function Logo({ className, dark = false }: LogoProps) {
  return (
    <a href="#home" className={cn('flex items-center gap-2.5', className)} aria-label="Hospic home">
      <LogoMark />
      <span
        className={cn(
          'font-display text-[26px] font-semibold tracking-tight',
          dark ? 'text-ink' : 'text-white',
        )}
      >
        Hospic
      </span>
    </a>
  );
}
