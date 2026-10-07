import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { ArrowButton } from '@/components/ui/ArrowButton';
import { departments, navLinks } from '@/data/content';
import { cn } from '@/utils/cn';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDeptOpen, setMobileDeptOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = 'home';
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 140) current = link.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileDeptOpen(false);
  };

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        solid
          ? 'bg-navy-950/90 py-3 shadow-[0_12px_40px_-12px_rgba(7,18,37,0.55)] backdrop-blur-xl'
          : 'bg-transparent py-5',
      )}
    >
      <Container className="flex items-center justify-between gap-6">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              const linkClass = cn(
                'relative flex items-center gap-1 rounded-full px-4 py-2 text-[15px] transition-colors',
                isActive ? 'text-white' : 'text-white/70 hover:text-white',
              );

              if (link.hasDropdown) {
                return (
                  <li key={link.label} className="group relative">
                    <a href={link.href} className={linkClass} aria-haspopup="true">
                      {link.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    </a>
                    <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <ul className="rounded-2xl bg-white p-2 shadow-[0_24px_48px_-16px_rgba(7,18,37,0.35)] ring-1 ring-black/5">
                        {departments.map((dept) => (
                          <li key={dept.name}>
                            <a
                              href="#departments"
                              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface"
                            >
                              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-500">
                                <dept.icon className="h-[18px] w-[18px]" />
                              </span>
                              {dept.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-400" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ArrowButton href="#doctors" size="sm" className="hidden sm:inline-flex">
            Find Doctors
          </ArrowButton>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile navigation */}
      <div
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-500 lg:hidden',
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'pointer-events-none grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <Container>
            <nav aria-label="Mobile" className="mt-3 rounded-2xl bg-white p-2 shadow-xl">
              <ul className="divide-y divide-line">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <li key={link.label}>
                      <button
                        type="button"
                        onClick={() => setMobileDeptOpen((open) => !open)}
                        aria-expanded={mobileDeptOpen}
                        className="flex w-full items-center justify-between px-4 py-3.5 text-left font-medium text-ink"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn('h-4 w-4 transition-transform duration-300', mobileDeptOpen && 'rotate-180')}
                        />
                      </button>
                      <div
                        className={cn(
                          'grid transition-[grid-template-rows] duration-300',
                          mobileDeptOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                        )}
                      >
                        <div className="overflow-hidden">
                          <ul className="grid grid-cols-2 gap-2 px-2 pb-3">
                            {departments.map((dept) => (
                              <li key={dept.name}>
                                <a
                                  href="#departments"
                                  onClick={closeMenu}
                                  className="flex items-center gap-2 rounded-xl bg-surface px-3 py-2.5 text-sm text-ink"
                                >
                                  <dept.icon className="h-4 w-4 text-brand-500" />
                                  {dept.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className={cn(
                          'block px-4 py-3.5 font-medium',
                          active === link.id ? 'text-brand-500' : 'text-ink',
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  ),
                )}
              </ul>
              <div className="p-2 pt-3">
                <ArrowButton href="#doctors" onClick={closeMenu} className="w-full justify-between">
                  Find Doctors
                </ArrowButton>
              </div>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
