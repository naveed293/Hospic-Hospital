import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { Reveal } from './Reveal';
import { SectionLabel, type LabelVariant } from './SectionLabel';

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  align?: 'left' | 'center';
  labelVariant?: LabelVariant;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  align = 'left',
  labelVariant = 'surface',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' && 'mx-auto max-w-3xl text-center', className)}>
      <Reveal>
        <SectionLabel variant={labelVariant}>{label}</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 font-display text-[34px] font-medium leading-[1.1] tracking-[-0.025em] text-ink sm:text-[44px] lg:text-[50px]">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
