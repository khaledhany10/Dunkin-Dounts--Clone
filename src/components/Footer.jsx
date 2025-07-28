import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/img/logo.png"


export default function Footer() {
  return (

    <footer className=" bg-secondary pt-10 mt-10 h-auto">

      <div className="relative">
        <svg
          className="absolute -top-10 right-0 w-full transform scale-x-[-1]"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f1f5f9"
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
          />
        </svg>

      </div>
      <div className="w-[85%] mx-auto mb-4 px-4 pt-28 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <motion.div
          className='space-y-2 mx-auto'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.2,
          }}
        >
          <Link to="/" className="">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
          <p className="text-lg">
            Donut is your sweet escape! Explore our delicious menu and get the best donuts delivered fresh to your door.
          </p>
        </motion.div>

        <motion.div
          className='md:mx-auto '
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.4,
          }}
        >
          <h3 className="text-xl text-primary font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col flex-wrap gap-4">
            <li className='flex gap-2 hover:translate-x-2 duration-200 w-fit'>
              <FaAngleDoubleRight />
              <Link to="/" className="hover:text-primary duration-200">Home</Link>
            </li>
            <li className='flex gap-2 hover:translate-x-2 duration-200 w-fit'>
              <FaAngleDoubleRight />
              <Link to="/menu" className="hover:text-primary duration-200">Menu</Link>
            </li>
            <li className='flex gap-2 hover:translate-x-2 duration-200 w-fit'>
              <FaAngleDoubleRight />
              <Link to="/about" className="hover:text-primary duration-200">About</Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className='md:mx-auto '
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.6,
          }}
        >
          <h3 className="text-xl font-semibold text-primary mb-4">Contact</h3>
          <ul className="space-y-3 text-base text-darkText">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" />
              <span>01110028075</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" />
              <span>Cairo, Egypt</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className='md:mx-auto '
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.5,
          }}
        >
          <h3 className="text-xl font-semibold text-primary mb-4">Follow Us</h3>
          <div className="flex gap-3">
            <Link href="#" className="hover:text-primary hover:scale-125 duration-200">
              <FaFacebookF size={22} />
            </Link>
            <Link href="#" className="hover:text-primary hover:scale-125 duration-200">
              <FaInstagram size={22} />
            </Link>
            <Link href="#" className="hover:text-primary hover:scale-125 duration-200">
              <FaWhatsapp size={22} />
            </Link>
          </div>
        </motion.div>

      </div>

      <div className="text-center py-4 text-sm text-gray-800 border-slate-300 border-t-[1px]">
        © {new Date().getFullYear()} Donut. All rights reserved.
      </div>
    </footer>

  );
}