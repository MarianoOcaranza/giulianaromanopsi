import React from "react"
import {motion} from 'framer-motion'

const Presentation: React.FC = () => {
    return (
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
            className="bg-green-500 text-lg hover:bg-green-700 transition-all duration-300 text-white py-3 px-6 rounded shadow-md w-full text-center"
          >
            ¡Contáctame!
          </a>
          <a
            href="/about"
            className="bg-indigo-600 text-white text-sm px-6 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md w-full text-center"
          >
            Conoce más sobre mi trabajo
          </a>
        </div>
      </motion.div>
    );
  };
  
export default Presentation