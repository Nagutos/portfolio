'use client';

import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

type ProjectsProps = {
  heading: string;
  viewLinkText: string;
  projects: Project[];
};

export default function Projects({
  heading,
  viewLinkText,
  projects,
}: ProjectsProps) {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20 bg-[#f3f3f3]"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#E63946] mb-14 border-b-2 border-red-500 pb-2">
        {heading}
      </h2>

      <div
        className="
      grid 
      grid-cols-[auto]
      gap-8 
      justify-items-center
    "
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-white rounded-2xl p-6 shadow-md
              transition-transform duration-300 transform-gpu
              w-80 sm:w-144 md:w-172
              hover:scale-[1.03]
              flex flex-col overflow-visible
            "
            style={{ transformOrigin: 'center' }}
          >
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[16/9] rounded-xl overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#E63946]">
              {project.title}
            </h3>
            <p className="text-gray-700 text-base sm:text-lg mt-2 sm:mt-3">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-[#E63946] hover:underline"
              >
                {viewLinkText}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
