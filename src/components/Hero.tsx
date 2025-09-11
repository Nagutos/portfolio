import { FaMapMarkerAlt, FaCar } from 'react-icons/fa';
import { BsFillMortarboardFill } from 'react-icons/bs';

type HeroProps = {
  name: string;
  title: string;
  subtitle: string;
  Paragraph1: string;
  Paragraph2: string;
  Paragraph3: string;
  Paragraph4: string;
  address: string;
  drivingLicense: string;
  degree: string;
};

export default function Hero({
  name,
  title,
  subtitle,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
  address,
  drivingLicense,
  degree,
}: HeroProps) {
  return (
    <header
      id="hero"
      className="
        flex flex-col justify-center items-center bg-[#E63946] text-white text-center
        px-4 py-20 sm:px-6 sm:py-25
        min-h-[60vh] sm:min-h-screen
      "
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold">{name}</h1>
      <h2 className="text-xl sm:text-2xl mt-6">{title}</h2>

      <div
        className="
          flex flex-col sm:flex-row flex-wrap 
          items-center justify-center gap-10 max-w-4xl mt-6
        "
      >
        {/* Adresse */}
        <div className="text-lg sm:text-2xl flex flex-col sm:flex-row items-center gap-2 group relative text-center">
          <FaMapMarkerAlt className="text-white w-8 h-8 sm:w-10 sm:h-10" />
          {/* Texte visible sur mobile */}
          <span className="block sm:hidden">{address}</span>
          {/* Tooltip desktop */}
          <span className="hidden sm:inline-block absolute left-1/2 bottom-full mb-2 bg-[#FFFFFF] text-black text-sm px-2 py-1 rounded shadow-lg whitespace-nowrap z-10 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
            {address}
          </span>
        </div>

        {/* Permis */}
        <div className="text-lg sm:text-2xl flex flex-col sm:flex-row items-center gap-2 group relative text-center">
          <FaCar className="text-white w-8 h-8 sm:w-11 sm:h-10" />
          <span className="block sm:hidden">{drivingLicense}</span>
          <span className="hidden sm:inline-block absolute left-1/2 bottom-full mb-2 bg-[#FFFFFF] text-black text-sm px-2 py-1 rounded shadow-lg whitespace-nowrap z-10 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
            {drivingLicense}
          </span>
        </div>

        {/* Diplôme */}
        <div className="text-lg sm:text-2xl flex flex-col sm:flex-row items-center gap-2 group relative text-center">
          <BsFillMortarboardFill className="text-white w-8 h-8 sm:w-10 sm:h-10" />
          <span className="block sm:hidden">{degree}</span>
          <span className="hidden sm:inline-block absolute left-1/2 bottom-full mb-2 bg-[#FFFFFF] text-black text-sm px-2 py-1 rounded shadow-lg whitespace-nowrap z-10 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
            {degree}
          </span>
        </div>
      </div>

      <p className="mt-6 max-w-6xl mx-auto text-left text-lg sm:text-xl">
        {subtitle}
      </p>
      <p className="mt-6 max-w-6xl mx-auto text-left text-lg sm:text-xl">
        {Paragraph1}
      </p>
      <p className="mt-6 max-w-6xl mx-auto text-left text-lg sm:text-xl">
        {Paragraph2}
      </p>
      <p className="mt-6 max-w-6xl mx-auto text-left text-lg sm:text-xl">
        {Paragraph3}
      </p>
      <p className="mt-6 max-w-6xl mx-auto text-left text-lg sm:text-xl">
        {Paragraph4}
      </p>
      <div className="mt-3 mb-0 flex justify-center w-full animate-bounce hover:mouse-pointer">
        <button
          aria-label="Scroll vers la section suivante"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md shadow-lg transition-transform active:scale-95"
          onClick={(e) => {
            e.preventDefault();
            const target =
              document.getElementById('career') ||
              document.getElementById('projects');
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
