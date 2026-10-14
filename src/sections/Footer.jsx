import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 py-8 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs">
        <span className="font-semibold text-white">MD NURALAM</span>
        <span className="hidden sm:inline text-neutral-600">|</span>
        <span>Founder of <a href="https://www.rancoded.com" target="_blank" rel="noopener noreferrer" className="text-lavender hover:underline">RANCODED</a></span>
        <span className="hidden sm:inline text-neutral-600">|</span>
        <span>Dhaka, Bangladesh</span>
      </div>
      <div className="flex items-center gap-4">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-lavender/50 hover:bg-white/10 transition-colors"
            title={social.name}
            aria-label={social.name}
          >
            <img src={social.icon} className="w-4 h-4 object-contain" alt={social.name} />
          </a>
        ))}
      </div>
      <p className="text-xs text-neutral-500">
        © {new Date().getFullYear()} MD Nuralam. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
