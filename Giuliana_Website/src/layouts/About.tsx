import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="container justify-center flex flex-col mx-auto mt-5 max-w-5xl">
      {/* Sección 1 - Introducción */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-light text-gray-900">
          Tu bienestar, un paso más cerca cada día.
        </h2>
      </motion.div>

      {/* Sección 2 - Sobre Mí */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-violet-100 rounded-lg shadow-md p-8"
      >
        <h3 className="text-3xl font-semibold text-violet-800 mb-4">¿Quién soy?</h3>
        <p className="text-gray-700 leading-relaxed">
          Mi nombre es <span className="font-semibold">Giuliana Romano</span>, soy Licenciada en Psicología y me recibí a fines de 2023 en la Universidad Abierta Interamericana (UAI).  
          Soy de Merlo y atiendo pacientes en modalidad virtual.  
          <br /><br />
          Mi trabajo consiste en acompañar a las personas en su proceso de cambio, brindando herramientas para que puedan comprenderse mejor, regular sus emociones y construir una vida más plena.  
          Creo en el poder de la terapia como un espacio de crecimiento, donde cada pequeño avance es un logro significativo.
        </p>
      </motion.div>

      {/* Sección 3 - Especialización */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-purple-100 rounded-lg shadow-md p-8 mt-10"
      >
        <h3 className="text-3xl font-semibold text-purple-800 mb-4">¿En qué me especializo?</h3>
        <p className="text-gray-700 leading-relaxed">
          Trabajo con un enfoque <span className="font-semibold">cognitivo-conductual y DBT</span>, lo que significa que no solo exploramos lo que te pasa, sino que también buscamos estrategias prácticas para afrontar los desafíos del día a día.  
          <br /><br />
          Me gusta pensar que la terapia es un arte en constante construcción, donde juntos encontramos nuevas formas de ver, sentir y actuar.  
          Si estás buscando un espacio de escucha, sin juicios y con herramientas concretas, ¡estoy acá para ayudarte!
        </p>
      </motion.div>
      <a
          href="/contact"
          className="bg-green-500 text-lg text-center mt-6 hover:bg-green-700 transition-all duration-300 text-white py-3 px-6 rounded shadow-md w-full"
        >
          Click aquí para ir a la página de contacto
        </a>
    </div>
    
  );
};

export default About;
