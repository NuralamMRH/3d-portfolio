import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onLinkClick }) {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <ul className="nav-ul">
      {navItems.map((item) => (
        <li key={item.name} className="nav-li">
          <a
            className="nav-link cursor-pointer"
            href={item.href}
            onClick={onLinkClick}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-md bg-primary/70 border-b border-white/5">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-2">
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-white hover:text-lavender transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-lavender" />
            <span>MD NURALAM</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden p-1 rounded-md"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden bg-midnight/95 border-b border-white/10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="py-4">
            <Navigation onLinkClick={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
