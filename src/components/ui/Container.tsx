import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8', className)}>{children}</div>;
}
