'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

type NavProps = {
  home: string;
  parcours: string;
  skills: string;
  extra: string;
  contact: string;
  locale: string;
};

export default function Navbar({
  home,
  parcours,
  skills,
  extra,
  contact,
  locale,
}: NavProps) {
  const links = [
    { label: home, href: '#hero' },
    { label: parcours, href: '#career' },
    { label: skills, href: '#skills' },
    { label: extra, href: '#extras' },
    { label: contact, href: '#contact' },
  ];

  const pathname = usePathname();
  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const newPath = `/${otherLocale}${pathname.replace(/^\/(fr|en)/, '')}`;

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-xl z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        {/*<div className="text-[#E63946] font-bold text-2xl">MonLogo</div>*/}

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 font-sans">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[#E63946] font-bold text-xl px-1
              after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 
              after:bg-[#E63946] after:transition-all after:duration-300
              hover:after:w-full hover:after:left-0"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Langue desktop */}
        <Link
          href={newPath}
          className="hidden md:flex items-center space-x-2 border border-[#E63946] rounded-full px-3 py-1 hover:bg-[#E63946]/10 transition"
        >
          <Image
            src={
              otherLocale === 'fr'
                ? '/flags/France.svg'
                : '/flags/United_Kingdom.svg'
            }
            alt={otherLocale === 'fr' ? 'Français' : 'English'}
            width={24}
            height={24}
          />
          <span className="text-[#E63946] font-semibold uppercase">
            {otherLocale.toUpperCase()}
          </span>
        </Link>

        {/* Burger button mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          aria-label="Menu"
        >
          {/* bar 1 */}
          <span
            className={`absolute h-0.5 w-6 bg-[#E63946] transition-all duration-300 ${
              open ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`}
          />
          {/* bar 2 (middle) */}
          <span
            className={`absolute h-0.5 w-6 bg-[#E63946] transition-all duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* bar 3 */}
          <span
            className={`absolute h-0.5 w-6 bg-[#E63946] transition-all duration-300 ${
              open ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center bg-white/90 backdrop-blur-md space-y-4 py-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#E63946] font-bold text-lg"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <Link
            href={newPath}
            onClick={() => setOpen(false)}
            className="flex items-center space-x-2 border border-[#E63946] rounded-full px-3 py-1 hover:bg-[#E63946]/10 transition"
          >
            <Image
              src={
                otherLocale === 'fr'
                  ? '/flags/France.svg'
                  : '/flags/United_Kingdom.svg'
              }
              alt={otherLocale === 'fr' ? 'Français' : 'English'}
              width={24}
              height={24}
            />
            <span className="text-[#E63946] font-semibold uppercase">
              {otherLocale.toUpperCase()}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
