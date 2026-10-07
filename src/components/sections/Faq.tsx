import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowButton } from '@/components/ui/ArrowButton';
import { Reveal } from '@/components/ui/Reveal';
import { faqs } from '@/data/content';
import { cn } from '@/utils/cn';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeader
            label="FAQ’s"
            title={
              <>
                Frequently asked
                <br className="hidden sm:block" /> questions
              </>
            }
          />
          <Reveal delay={160} className="mt-10">
            <div className="max-w-sm rounded-2xl bg-surface p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-500">
                <MessageCircle className="h-5 w-5" />
              </span>
              <p className="mt-5 font-display text-lg font-medium text-ink">Need help?</p>
              <p className="mt-1 text-[15px] text-muted">Get in touch with our friendly care team.</p>
              <ArrowButton href="#contact" size="sm" className="mt-5">
                Get In Touch
              </ArrowButton>
            </div>
          </Reveal>
        </div>

        <div className="space-y-3 lg:col-span-7">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 60}>
                <div
                  className={cn(
                    'rounded-2xl border transition-colors duration-300',
                    isOpen ? 'border-brand-100 bg-brand-50/50' : 'border-line bg-white hover:border-brand-100',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="font-display text-[17px] font-medium text-ink">{faq.question}</span>
                    <span
                      className={cn(
                        'grid h-8 w-8 shrink-0 place-items-center rounded-full text-white transition-all duration-300',
                        isOpen ? 'rotate-180 bg-brand-500' : 'bg-navy-900',
                      )}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    className={cn(
                      'grid transition-[grid-template-rows] duration-500 ease-out',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
