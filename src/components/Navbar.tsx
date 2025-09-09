'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
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

  // 👉 détermine la langue alternative
  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const newPath = `/${otherLocale}${pathname.replace(/^\/(fr|en)/, '')}`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-xl z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Liens */}
        <div className="flex space-x-8 font-sans">
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

        {/* Bouton langue */}
        <Link
          href={newPath}
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
    </nav>
  );
}
