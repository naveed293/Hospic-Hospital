import { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  open: boolean;
  src: string;
  title?: string;
  onClose: () => void;
}

export function VideoModal({ open, src, title, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ?? 'Video'}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-navy-950/85 p-4 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-4xl animate-zoom-in" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-14 right-0 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
          <video src={src} className="aspect-video w-full" controls autoPlay playsInline />
        </div>
        {title && <p className="mt-4 text-center text-sm text-white/70">{title}</p>}
      </div>
    </div>
  );
}
