'use client';

import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Timeline from '@/components/Timeline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  const t = useTranslations();

  // Expériences
  const experiences = [
    {
      period: t('experience.jobs.support.period'),
      place: t('experience.jobs.support.place'),
      role: t('experience.jobs.support.role'),
      description: t('experience.jobs.support.description'),
    },
    {
      period: t('experience.jobs.nas.period'),
      place: t('experience.jobs.nas.place'),
      role: t('experience.jobs.nas.role'),
      description: t('experience.jobs.nas.description'),
    },
    {
      period: t('experience.jobs.admin.period'),
      place: t('experience.jobs.admin.place'),
      role: t('experience.jobs.admin.role'),
      description: t('experience.jobs.admin.description'),
    },
    {
      period: t('experience.jobs.maintenance.period'),
      place: t('experience.jobs.maintenance.place'),
      role: t('experience.jobs.maintenance.role'),
      description: t('experience.jobs.maintenance.description'),
    },
  ];

  // Formations
  const education = [
    {
      period: t('education.bts.period'),
      place: t('education.bts.school'),
      role: t('education.bts.diploma'),
      description: '',
    },
    {
      period: t('education.bac.period'),
      place: t('education.bac.school'),
      role: t('education.bac.diploma'),
      description: '',
    },
  ];

  return (
    <>
      <main>
        {/* Hero plein écran */}
        <Hero
          name={t('profile.name')}
          title={t('profile.title')}
          subtitle={t('profile.subtitle')}
          description={t('profile.description')}
          address={t('contact.address')}
          drivingLicense={t('contact.drivingLicense')}
          degree={t('contact.degree')}
        />

        {/* Section côte à côte */}
        <Section id="career" title="Parcours">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Expériences */}
            <div>
              <h3 className="text-3xl font-semibold text-[#E63946] mb-6">
                {t('experience.title')}
              </h3>
              <Timeline items={experiences} />
            </div>

            {/* Diplômes et Formations */}
            <div>
              <h3 className="text-3xl font-semibold text-[#E63946] mb-6">
                {t('education.title')}
              </h3>
              <Timeline items={education} />
            </div>
          </div>
        </Section>

        <section
          id="skills"
          className="max-w-5xl mx-auto px-6 py-20 bg-[#f3f3f3] flex flex-col justify-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#E63946] mb-14 border-b-2 border-red-500 pb-2">
            {t('skills.title')}
          </h2>
          <div className="text-black max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              'development',
              'systems',
              'security',
              'virtualization',
              'maintenance',
            ].map((key) => (
              <div
                key={key}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#E63946] capitalize">
                  {key}
                </h3>
                <p className="text-gray-700 text-lg sm:text-xl mt-3">
                  {t(`skills.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="extras"
          className="max-w-5xl mx-auto px-6 py-20 bg-[#f3f3f3] flex flex-col justify-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#E63946] mb-14 border-b-2 border-red-500 pb-2">
            {t('extras.title')}
          </h2>
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#E63946] mb-5">
              {t('extras.subtitle')}
            </h3>
            <p className="text-gray-700 text-lg sm:text-xl">
              {t('extras.description')}
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="w-full px-6 py-10 bg-[#E63946] flex flex-col items-center justify-center text-[#FAFAFA]"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-14">
            Contactez-moi
          </h2>
          <div className="flex flex-col items-center gap-2 max-w-4xl text-center">
            <p className="text-xl md:text-2xl">{t('contact.address')}</p>
            <p className="text-xl md:text-2xl">{t('contact.phone')}</p>
            <p className="text-xl md:text-2xl">{t('contact.email')}</p>
            <p className="text-xl md:text-2xl">
              {t('contact.location')} - {t('contact.age')} -{' '}
              {t('contact.drivingLicense')}
            </p>
            <a
              href={`mailto:${t('contact.email')}`}
              className="mt-5 px-8 py-4 bg-white text-[#E63946] font-semibold rounded-full hover:bg-[#F5F5F5] transition"
            >
              Envoyer un email
            </a>
          </div>
        </section>

        <footer className="bg-[#f3f3f3] text-[#1d1d1d] py-10 text-center w-full">
          <p className="text-lg md:text-xl">
            © 2025 Maxime Ryckebusch. Tous droits réservés.
          </p>
          <div className="flex justify-center gap-5 mt-5">
            <a
              href="https://github.com/Nagutos"
              className="text-[#E63946] hover:text-[#F07178]"
            >
              <FaGithub className="text-[#E63946] w-10 h-10 cursor-pointer hover:text-[#F07178]" />
            </a>
            <a href="#" className="text-[#E63946] hover:text-[#F07178]">
              <FaLinkedin className="text-[#E63946] w-10 h-10 hover:text-[#F07178]"></FaLinkedin>
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
