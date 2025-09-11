'use client';

import { useTranslations } from 'next-intl';
import { getMyActualAge } from '@/utils/helpers';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import { experienceKeys, educationKeys, projectKeys } from '@/constants/data';

export default function HomePage() {
  const t = useTranslations();

  // Expériences
  const experiences = experienceKeys.map((key) => ({
    period: t(`experience.jobs.${key}.period`),
    place: t(`experience.jobs.${key}.place`),
    role: t(`experience.jobs.${key}.role`),
    description: t(`experience.jobs.${key}.description`),
  }));

  // Formations
  const education = educationKeys.map((key) => ({
    period: t(`education.${key}.period`),
    place: t(`education.${key}.school`),
    role: t(`education.${key}.diploma`),
    description: '',
  }));

  // Projets
  const projects = projectKeys.map((key) => ({
    title: t(`projects.items.${key}.title`),
    description: t(`projects.items.${key}.description`),
    image: `/images/${key}.png`,
    link: t(`projects.items.${key}.link`, { defaultMessage: '' }), // fallback
  }));

  return (
    <>
      <main>
        {/* Hero plein écran */}
        <Hero
          name={t('profile.name')}
          title={t('profile.title')}
          subtitle={t('profile.subtitle')}
          Paragraph1={t('profile.Paragraph1')}
          Paragraph2={t('profile.Paragraph2')}
          Paragraph3={t('profile.Paragraph3')}
          Paragraph4={t('profile.Paragraph4')}
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
          className="max-w-6xl mx-auto px-6 py-20 bg-[#f3f3f3] grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* Bloc Compétences */}
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left text-[#E63946] border-b-2 border-red-500 pb-2">
              {t('skills.title')}
            </h2>
            <div className="text-black grid grid-cols-1 gap-8">
              {[
                'development',
                'systems',
                'security',
                'virtualization',
                'maintenance',
              ].map((skillKey) => (
                <div
                  key={skillKey}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#E63946] capitalize">
                    {t(`skills.${skillKey}.title`)}
                  </h3>
                  <p className="text-gray-700 text-lg sm:text-xl mt-3">
                    {t(`skills.${skillKey}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bloc Centres d’intérêt */}
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left text-[#E63946] border-b-2 border-red-500 pb-2">
              {t('interest.title')}
            </h2>
            <div className="text-black grid grid-cols-1 gap-8">
              {[
                'informatique',
                'sous_titrage',
                'jeux_video',
                'jap_animation',
                'musique',
              ].map((interestKey) => (
                <div
                  key={interestKey}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#E63946] capitalize">
                    {t(`interest.${interestKey}.title`)}
                  </h3>
                  <p className="text-gray-700 text-lg sm:text-xl mt-3">
                    {t(`interest.${interestKey}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Projects
          heading={t('projects.heading')}
          viewLinkText={t('projects.viewLinkText')}
          projects={projects}
        />

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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-5">
            {t('contact.contactMe')}
          </h2>
          <div className="flex flex-col items-center gap-2 max-w-4xl text-center">
            <p className="text-xl md:text-2xl">{t('contact.address')}</p>
            <p className="text-xl md:text-2xl">{t('contact.phone')}</p>
            <p className="text-xl md:text-2xl">{t('contact.email')}</p>
            <p className="text-xl md:text-2xl">
              {t('contact.location')} - {getMyActualAge() + t('contact.age')} -{' '}
              {t('contact.drivingLicense')}
            </p>
            <a
              href={`mailto:${t('contact.email')}`}
              className="mt-5 px-8 py-4 bg-white text-[#E63946] font-semibold rounded-full hover:bg-[#F5F5F5] transition"
            >
              {t('contact.sendEmail')}
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
