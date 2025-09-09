import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
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
  );
}
