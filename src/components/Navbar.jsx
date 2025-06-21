import { useState } from 'react';

const links = [
  { name: 'Home',    href: '#home'     },
  { name: 'About',   href: '#about'    },
  { name: 'Projects',href: '#projects' },
  { name: 'Contact', href: '#contact'  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="text-xl font-extrabold tracking-tight">
          Kiran Gunathilaka
        </a>

        {/* mobile toggle */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
          </div>
        </button>

        {/* desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <li key={l.name}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wide transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* mobile sheet */}
      {open && (
        <ul className="space-y-4 px-6 pb-6 pt-2 md:hidden">
          {links.map(l => (
            <li key={l.name}>
              <a
                href={l.href}
                className="block text-lg font-medium"
                onClick={() => setOpen(false)}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
