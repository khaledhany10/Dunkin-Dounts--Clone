
import about from "/img/about.jpg"
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="p-6 w-[85%] mx-auto mt-24">
      <h1 className="text-3xl font-bold text-primary text-center mb-8">About Us</h1>

      <div className=" mb-10 h-auto flex flex-col lg:flex-row gap-10">
        <motion.img
          loading="lazy"
          src={about}
          alt="Our Store"
          className="rounded shadow w-full lg:w-1/2 object-cover"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="space-y-6 text-xl font-sans"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
          <p>
            Dunkin' is your favorite destination for donuts, coffee, and delicious sandwiches.
            We’ve been serving joy and flavor to our community for years with fresh ingredients,
            unique recipes, and a welcoming atmosphere.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">Our Branches</h2>
            <ul className="list-disc list-inside">
              <li>Nasr City - 10 El Tayaran St.</li>
              <li>Maadi - 23 Road 9</li>
              <li>Heliopolis - 5 Cleopatra St.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p><strong>Phone:</strong> 01110028075</p>
            <p><strong>Email:</strong> dunkin@gmail.com</p>
            <p><strong>Address:</strong> Cairo, Egypt</p>
          </div>

          <motion.a
            href="https://wa.me/201110028075"
            className="bg-primary text-white px-6 py-2 rounded inline-block hover:bg-[#ac3e5e] duration-200"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              mass: 2
            }}
          >
            Contact us WhatsApp
          </motion.a>
        </motion.div>
      </div>

      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220921.67989765527!2d31.687795176825787!3d30.097014413872994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fb6bab27551%3A0xf28ae9fac3a6e259!2z2K_Yp9mG2YPZhiDYr9mI2YbYqtiz!5e0!3m2!1sar!2seg!4v1752854830741!5m2!1sar!2seg"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded"
        ></iframe>
      </div>
    </div>
  );
}
