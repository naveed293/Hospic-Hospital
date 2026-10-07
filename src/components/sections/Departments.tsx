import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowButton } from '@/components/ui/ArrowButton';
import { Reveal } from '@/components/ui/Reveal';
import { departments } from '@/data/content';
import { AppointmentForm } from './AppointmentForm';

export function Departments() {
  const [department, setDepartment] = useState('');

  const bookDepartment = (name: string) => {
    setDepartment(name);
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="departments" className="scroll-mt-20 bg-surface py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            label="Departments"
            labelVariant="white"
            title={
              <>
                Specialized departments
                <br className="hidden sm:block" /> for whole-person care
              </>
            }
          />
          <Reveal delay={120} className="shrink-0">
            <ArrowButton href="#doctors" variant="white">
              Meet Specialists
            </ArrowButton>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {departments.map((dept, i) => (
            <Reveal key={dept.name} delay={(i % 2) * 100} className="h-full">
              <article className="group grid h-full gap-4 rounded-2xl bg-white p-3 transition-shadow duration-500 hover:shadow-[0_24px_48px_-24px_rgba(12,26,51,0.28)] sm:grid-cols-2">
                <div className="relative min-h-[220px] overflow-hidden rounded-xl sm:min-h-[280px]">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col p-2 sm:p-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-line text-ink transition-colors duration-300 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                    <dept.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-auto pt-8 font-display text-2xl font-medium text-ink">{dept.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{dept.description}</p>
                  <a
                    href="#appointment"
                    onClick={(e) => {
                      e.preventDefault();
                      bookDepartment(dept.name);
                    }}
                    className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-brand-500"
                  >
                    Book a Visit
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <AppointmentForm department={department} onDepartmentChange={setDepartment} />
      </Container>
    </section>
  );
}
