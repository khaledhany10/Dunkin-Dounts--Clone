import React, { useState } from "react";
import products from "../Data/Products";
import { motion } from "framer-motion";

const Menu = () => {
  const [filter, setFilter] = useState("all");

  const filters = ["all", "donuts", "drinks", "sandwiches"];

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <section className=" w-[85%] mx-auto relative pb-10 pt-24" >

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-primary">
          Explore Menu
        </h2>
        <p className="text-center text-xl text-gray-600 mb-5">
          Choose from a wide variety of freshly made items
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full border hover:bg-primary hover:text-white duration-200 ${filter === category
                ? "bg-primary text-white"
                : "bg-white text-primary border-primary"
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white font-serif rounded-xl shadow-md overflow-hidden h-auto gap-8 flex flex-col pt-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 mx-auto object-contain hover:cursor-pointer hover:scale-110 duration-200"
              />

              <div className="py-4 px-6">
                <h3 className="text-xl text-center mb-4 font-semibold text-primary">
                  {product.name}
                </h3>

                <div className="flex justify-between items-center ">
                  <p className="text-gray-600 text-xl font-bold flex items-center">
                    {product.price} EGP
                  </p>
                  <a
                    href="https://wa.me/201110028075"
                    className="block text-center bg-primary text-white px-6 py-2 rounded-3xl hover:bg-[#ac3e5e] duration-200"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;
