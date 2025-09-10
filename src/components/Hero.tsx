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
      className="h-155 flex flex-col justify-center items-center bg-[#E63946] text-white text-center px-6"
    >
      <h1 className="text-5xl font-extrabold">{name}</h1>
      <h2 className="text-2xl mt-1">{title}</h2>
      <br />
      <div className="flex flex-wrap items-center gap-8 max-w-4xl text-center md:text-left">
        {/* Adresse */}
        <p className="text-xl md:text-2xl flex items-center gap-2 group relative">
          <FaMapMarkerAlt className="text-white w-10 h-10 cursor-pointer" />
          <span
            className="absolute left-1/2 bottom-full mb-2 hidden group-hover:inline-block 
                 bg-[#FFFFFF] text-black text-sm px-2 py-1 rounded shadow-lg 
                 whitespace-nowrap z-10 transform -translate-x-1/2"
          >
            {address}
          </span>
        </p>

        {/* Permis */}
        <p className="text-xl md:text-2xl flex items-center gap-2 group relative">
          <FaCar className="text-white w-10 h-10 cursor-pointer" />
          <span
            className="absolute left-1/2 bottom-full mb-2 hidden group-hover:inline-block 
                 bg-[#FFFFFF] text-black text-sm px-2 py-1 rounded shadow-lg 
                 whitespace-nowrap z-10 transform -translate-x-1/2"
          >
            {drivingLicense}
          </span>
        </p>

        {/* Diplôme */}
        <p className="text-xl md:text-2xl flex items-center gap-2 group relative">
          <BsFillMortarboardFill className="text-white w-10 h-10 cursor-pointer" />
          <span
            className="absolute left-1/2 bottom-full mb-2 hidden group-hover:inline-block 
                 bg-[#FFFFFF] text-black text-sm px-2 py-1 rounded shadow-lg 
                 whitespace-nowrap z-10 transform -translate-x-1/2"
          >
            {degree}
          </span>
        </p>
      </div>
      <br />
      <p className="mt-2 max-w-4xl mx-auto text-left text-xl">{subtitle}</p>
      <p className="mt-4 max-w-4xl mx-auto text-left text-xl">{description}</p>
    </header>
  );
}
