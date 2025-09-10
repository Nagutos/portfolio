import { FaMapMarkerAlt, FaCar } from 'react-icons/fa';
import { BsFillMortarboardFill } from 'react-icons/bs';

type HeroProps = {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  address: string;
  drivingLicense: string;
  degree: string;
};

export default function Hero({
  name,
  title,
  subtitle,
  description,
  address,
  drivingLicense,
  degree,
}: HeroProps) {
  return (
    <header
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-[#E63946] text-white text-center px-6"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold">{name}</h1>
      <h2 className="text-xl sm:text-2xl mt-1">{title}</h2>

      <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mt-6">
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
          <FaCar className="text-white w-8 h-8 sm:w-10 sm:h-10" />
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

      <p className="mt-6 max-w-4xl mx-auto text-left text-lg sm:text-xl">
        {subtitle}
      </p>
      <p className="mt-4 max-w-4xl mx-auto text-left text-lg sm:text-xl">
        {description}
      </p>
    </header>
  );
}
