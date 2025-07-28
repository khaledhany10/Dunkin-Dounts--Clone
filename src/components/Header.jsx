import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "/img/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="fixed bg-secondary w-full z-50 ">
      <div className="w-[85%] mx-auto flex justify-between items-center px-4 py-2 md:py-4">

        <Link to="/" className="text-2xl font-bold text-primary">
          <img src={logo} alt="logo" className="w-28" />
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ to, label }) => (
            <div key={to} className="relative inline-block group">
              <Link
                to={to}
                className="hover:text-primary text-[22px] duration-200"
              >
                {label}
              </Link>
              <span
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full"
              />
            </div>
          ))}
        </nav>

        <a
          href="https://wa.me/201110028075"
          className="hidden md:inline-block bg-primary text-white px-6 py-2 rounded-3xl hover:bg-[#ac3e5e] duration-200"
        >
          Contact Us
        </a>

        <div
          className="md:hidden text-2xl text-primary cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary px-4 py-2 w-full rounded-b-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className="text-lg text-primary w-full text-center hover:bg-[#fdc2d3] duration-200 rounded-lg"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
