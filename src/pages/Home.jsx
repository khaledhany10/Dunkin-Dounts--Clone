import { motion } from "framer-motion";
const iphoneweb = "/img/iphone_web.png";
const GooglePlay = "/img/play_store.png";
const AppStore = "/img/app_store.png";
const donut4 = "/img/three-pink-donuts.png";
const drinks = "/website_images/coffee/Cappuccino.png";
const dounts =  "/website_images/dounts/frosted-sprinkles-donut.png";
const sandwiches = "/website_images/sandwiches/turkey-sausage-egg-and-cheese.png";

export default function Home() {
  const bestfood = [
    { img: drinks, name: "Cappuccino.png" },
    { img: dounts, name: "Frosted Sprinkles Donut" },
    { img: sandwiches, name: "Turkey Sausage Egg Cheese" },
  ];

  return (
    <div>
      <section className="bg-secondary py-16 px-4 text-center min-h-screen flex items-center">
        <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-start">
          <div className="flex-1 space-y-5">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-6xl font-bold text-primary mb-4"
              initial={{ y: -80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                mass: 2,
              }}
            >
              Welcome to Dunkin Donuts!
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-2xl mb-6 text-gray-700"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                mass: 0.8,
              }}
            >
              Raised ring donut with strawberry frosting and colorful round sprinkles.
            </motion.p>
            <div className="flex gap-4">
              <motion.a
                href="https://wa.me/201110028075"
                className="bg-primary text-white px-6 py-2 rounded-full text-center hover:bg-[#ac3e5e] duration-200"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.5,
                  mass: 3,
                }}
              >
                Order Now
              </motion.a>
              <motion.a
                href="/menu"
                className="border-[1px] border-primary text-primary px-6 py-2 rounded-full text-center hover:bg-[#ac3e5e] hover:text-white duration-200"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.3,
                  mass: 3,
                }}
              >
                View Menu
              </motion.a>
            </div>
          </div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            <img src={donut4} alt="Donut" className="w-64 sm:w-80 md:w-[400px] max-w-full h-auto" />
          </motion.div>
        </div>
      </section>

      <div className="relative">
        <svg
          className="absolute -bottom-1 left-0 w-full transform scale-y-[-1]"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f1f5f9"
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <section className="py-16 px-4 text-center">
        <motion.h2
          className="text-3xl font-bold font-sans mb-8 text-primary"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.5,
          }}
        >
          Best Selling Items
        </motion.h2>

        <motion.div
          className="text-primary w-[80%] mx-auto py-10 flex items-center justify-around flex-wrap gap-6 bg-[#fdeaf0] rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {bestfood.map(({ img, name }, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img src={img} className="mx-auto w-48 mb-2" alt={name} />
              <p className="text-xl font-semibold text-primary">{name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="/menu"
          className="inline-block mt-8 bg-primary hover:bg-[#ac3e5e] duration-200 text-white px-6 py-2 rounded-full"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.8,
          }}
        >
          View Full Menu
        </motion.a>
      </section>

      <section className="flex items-center justify-around flex-wrap py-10 px-4 text-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.4,
            }}
          >
            <h2 className="text-4xl font-bold mb-4">Download Our App</h2>
            <p className="mb-4 text-2xl">Order your favorite treats on the go!</p>
          </motion.div>
          <div className="flex justify-center space-x-4">
            <motion.img
              src={GooglePlay}
              alt="Google Play"
              className="w-32 hover:-translate-y-2 hover:cursor-pointer duration-200"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.3,
              }}
            />
            <motion.img
              src={AppStore}
              alt="App Store"
              className="w-32 hover:-translate-y-2 hover:cursor-pointer duration-200"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.5,
              }}
            />
          </div>
        </div>

        <motion.div
          className="mt-8 md:mt-0"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.5,
          }}
        >
          <img className="size-96" src={iphoneweb} loading="lazy" alt="iphone_web" />
        </motion.div>
      </section>
    </div>
  );
}
