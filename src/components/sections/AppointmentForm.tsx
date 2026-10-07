import { useState, type FormEvent, type ReactNode } from 'react';
import { ChevronDown, CircleCheck } from 'lucide-react';
import { ArrowButton } from '@/components/ui/ArrowButton';
import { Reveal } from '@/components/ui/Reveal';
import { departments } from '@/data/content';
import { cn } from '@/utils/cn';

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}

function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block pl-1 text-sm font-medium text-white/85">
        {label} <span className="text-brand-300">*</span>
      </label>
      {children}
      {error && <p className="mt-1.5 pl-4 text-xs text-rose-300">{error}</p>}
    </div>
  );
}

const inputBase =
  'h-[52px] w-full rounded-full border bg-white/[0.06] px-5 text-[15px] text-white outline-none transition placeholder:text-white/40 focus:bg-white/10 focus:ring-4 focus:ring-brand-500/25';

interface AppointmentFormProps {
  department: string;
  onDepartmentChange: (value: string) => void;
}

type Errors = Partial<Record<'name' | 'phone' | 'department', string>>;

export function AppointmentForm({ department, onDepartmentChange }: AppointmentFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = 'Please enter your full name';
    if (!/^\+?[\d\s()-]{7,}$/.test(phone.trim())) next.phone = 'Please enter a valid phone number';
    if (!department) next.department = 'Please choose a department';
    setErrors(next);

    if (Object.keys(next).length > 0) {
      setSuccess(null);
      return;
    }

    const firstName = name.trim().split(' ')[0];
    setSuccess(
      `Thank you, ${firstName}! Our team will call you shortly to confirm your ${department.toLowerCase()} appointment.`,
    );
    setName('');
    setPhone('');
    onDepartmentChange('');
  };

  return (
    <Reveal className="mt-16 lg:mt-20">
      <div
        id="appointment"
        className="relative scroll-mt-28 overflow-hidden rounded-3xl bg-navy-900 px-5 py-10 sm:px-10 sm:py-12 lg:px-14"
      >
        {/* Decorative background */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-32 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 300" preserveAspectRatio="none" fill="none">
            {Array.from({ length: 9 }).map((_, i) => (
              <path
                key={i}
                d={`M-50 ${270 - i * 22} C 300 ${120 - i * 16}, 700 ${380 - i * 22}, 1250 ${150 - i * 14}`}
                stroke="white"
                strokeOpacity="0.06"
                strokeWidth="1.5"
              />
            ))}
          </svg>
        </div>

        <h3 className="relative text-center font-display text-xl font-medium text-white sm:text-2xl">
          Book an appointment today for a free health checkup.
        </h3>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-start"
        >
          <Field label="Full Name" htmlFor="appt-name" error={errors.name}>
            <input
              id="appt-name"
              type="text"
              autoComplete="name"
              placeholder="e.g. John Carter"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={cn(inputBase, errors.name ? 'border-rose-400/70' : 'border-white/15 focus:border-brand-400')}
            />
          </Field>

          <Field label="Phone" htmlFor="appt-phone" error={errors.phone}>
            <input
              id="appt-phone"
              type="tel"
              autoComplete="tel"
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={cn(inputBase, errors.phone ? 'border-rose-400/70' : 'border-white/15 focus:border-brand-400')}
            />
          </Field>

          <Field label="Department" htmlFor="appt-dept" error={errors.department}>
            <div className="relative">
              <select
                id="appt-dept"
                value={department}
                onChange={(e) => onDepartmentChange(e.target.value)}
                className={cn(
                  inputBase,
                  'appearance-none pr-12',
                  !department && 'text-white/40',
                  errors.department ? 'border-rose-400/70' : 'border-white/15 focus:border-brand-400',
                )}
              >
                <option value="" disabled>
                  Select department
                </option>
                {departments.map((dept) => (
                  <option key={dept.name} value={dept.name}>
                    {dept.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
            </div>
          </Field>

          <div className="md:col-span-2 lg:col-span-1 lg:pt-7">
            <ArrowButton type="submit" variant="white" className="h-[52px] w-full justify-between lg:w-auto">
              Appointment Now
            </ArrowButton>
          </div>
        </form>

        {success && (
          <div
            role="status"
            className="relative mt-6 flex animate-fade-in items-center justify-center gap-2.5 rounded-2xl bg-emerald-500/15 px-4 py-3 text-center text-sm text-emerald-200 ring-1 ring-emerald-400/30"
          >
            <CircleCheck className="h-5 w-5 shrink-0" />
            {success}
          </div>
        )}
      </div>
    </Reveal>
  );
}
