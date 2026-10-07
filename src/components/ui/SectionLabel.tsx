import type { ReactNode } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/utils/cn';

export type LabelVariant = 'white' | 'surface' | 'dark';

interface SectionLabelProps {
  children: ReactNode;
  variant?: LabelVariant;
  className?: string;
}

export function SectionLabel({ children, variant = 'surface', className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 text-[13px] font-medium',
        variant === 'white' && 'bg-white text-ink shadow-[0_1px_2px_rgba(12,26,51,0.06)]',
        variant === 'surface' && 'bg-surface text-ink',
        variant === 'dark' && 'bg-white/10 text-white ring-1 ring-white/15 backdrop-blur',
        className,
      )}
    >
      <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-500 text-white">
        <Plus className="h-3 w-3" strokeWidth={3} />
      </span>
      {children}
    </span>
  );
}
