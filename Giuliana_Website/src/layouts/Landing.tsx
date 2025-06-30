import React from "react";
import Image from "../assets/mainimage.jpeg";
import { motion } from "framer-motion";
import { MessageCircle, User2 } from "lucide-react";

const Landing: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:justify-center min-h-screen container mx-auto px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col text-left items-start mx-auto p-8"
      >
        <h1 className="mb-6 text-6xl md:text-7xl font-extrabold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r to-sky-700 from-purple-950">
            Giuliana
          </span>{" "}
          Romano
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 font-light">Licenciada en Psicología</p>
        <p className="text-lg text-gray-800 font-extralight mb-6">M.N. 83604 | MP-087043</p>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 bg-green-500 text-lg hover:bg-green-700 transition-all duration-300 text-white py-3 px-6 rounded-lg shadow-md w-full"
          >
            <MessageCircle className="w-5 h-5" />
            ¡Contactame!
          </a>
          <a
            href="/about"
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white text-sm px-6 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md w-full"
          >
            <User2 className="w-4 h-4" />
            Conoce más sobre mi trabajo
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-8 lg:mt-0"
      >
        <img
          src={Image}
          alt="Giuliana Romano"
          className="w-full max-w-md lg:max-w-lg object-cover rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Landing;
