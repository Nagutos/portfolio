import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#E63946] mb-14 border-b-2 border-red-500 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
