import React from "react";
import { motion } from "framer-motion";
import { User, HeartHandshake, BrainCog, CheckCircle, MessageCircle } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="container justify-center flex flex-col mx-auto mt-5 max-w-5xl px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-neutral-900 flex items-center justify-center gap-2">
          <HeartHandshake className="text-violet-700 w-8 h-8" />
          Tu bienestar, un paso más cerca cada día.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-violet-100 rounded-2xl shadow-md p-8"
      >
        <h3 className="text-3xl font-semibold text-violet-800 mb-4 flex items-center gap-2">
          <User className="text-violet-700 w-6 h-6" />
          ¿Quién soy?
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Mi nombre es <span className="font-semibold">Giuliana Romano</span>, soy Licenciada en Psicología y me recibí en la Universidad Abierta Interamericana (UAI).
          <br /><br />
          Realicé una diplomatura en Terapia Cognitivo-Conductual y una formación en Terapia Dialéctico Conductual. Actualmente, me encuentro capacitándome continuamente en Habilidades DBT y Terapia de Aceptación y Compromiso.
          <br /><br />
          Mi trabajo consiste en acompañar a las personas en su proceso de cambio, brindando herramientas para que puedan comprenderse mejor, regular sus emociones y construir una vida más plena.  
          Creo en el poder de la terapia como un espacio de crecimiento, donde cada pequeño avance es un logro significativo.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-purple-100 rounded-2xl shadow-md p-8 mt-10"
      >
        <h3 className="text-3xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
          <BrainCog className="text-purple-700 w-6 h-6" />
          ¿En qué me especializo?
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Trabajo con un enfoque <span className="font-semibold">cognitivo-conductual, DBT y ACT</span>, lo que significa que no solo exploramos lo que te pasa, sino que también buscamos estrategias prácticas para afrontar los desafíos del día a día.  
          <br /><br />
          A través de la Terapia Dialéctico Conductual (DBT) y la Terapia de Aceptación y Compromiso (ACT), combinamos herramientas para que puedas regular tus emociones, desarrollar mayor flexibilidad psicológica y acercarte a una vida más coherente con tus valores.
          <br /><br />
          Me gusta pensar que la terapia es un arte en constante construcción, donde juntos encontramos nuevas formas de ver, sentir y actuar.  
          Si estás buscando un espacio de escucha, sin juicios y con herramientas concretas, ¡estoy acá para ayudarte!
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          En las siguientes secciones podrás leer un poco más sobre estos enfoques y sus ventajas.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-purple-100 rounded-2xl shadow-md p-8 mt-10"
      >
        <h3 className="text-3xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
          <BrainCog className="text-purple-700 w-6 h-6" />
          Terapia Cognitivo Conductual y DBT
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          La Terapia Cognitivo-Conductual (TCC) y la Terapia Dialéctico Conductual (DBT) son enfoques basados en la evidencia que te ayudan a comprender tus pensamientos, emociones y conductas, y a desarrollar habilidades concretas para afrontar los desafíos cotidianos.
        </p>
        <h4 className="text-2xl font-semibold text-purple-700 mb-3">Ventajas de estos enfoques:</h4>
        <ul className="space-y-3">
          {[
            "Aprendés a identificar y modificar pensamientos automáticos negativos.",
            "Desarrollás habilidades para la regulación emocional.",
            "Mejorás tus estrategias de afrontamiento ante situaciones difíciles.",
            "Trabajamos sobre la aceptación y la flexibilidad psicológica.",
            "Incorporás técnicas de mindfulness y atención plena.",
            "Abordamos patrones de conducta que generan malestar y buscamos alternativas más saludables.",
          ].map((ventaja, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <CheckCircle className="text-purple-700 w-5 h-5 mr-2 mt-1" />
              <span>{ventaja}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="bg-purple-100 rounded-2xl shadow-md p-8 mt-10"
      >
        <h3 className="text-3xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
          <BrainCog className="text-purple-700 w-6 h-6" />
          Terapia de Aceptación y Compromiso (ACT)
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          La Terapia de Aceptación y Compromiso (ACT) es un enfoque que combina técnicas de mindfulness, aceptación y compromiso con los valores personales. 
          Su objetivo no es eliminar el malestar, sino ayudarte a relacionarte de manera diferente con tus pensamientos y emociones, para que puedas enfocarte en lo que realmente te importa.
        </p>
        <h4 className="text-2xl font-semibold text-purple-700 mb-3">¿Qué podés lograr con ACT?</h4>
        <ul className="space-y-3">
          {[
            "Desarrollar una mayor flexibilidad psicológica.",
            "Aprender a aceptar pensamientos y emociones difíciles, sin que te dominen.",
            "Conectar con tus valores y vivir de forma coherente con ellos.",
            "Fortalecer tu compromiso con las acciones que te acercan a una vida más plena.",
            "Incorporar prácticas de mindfulness para estar más presente.",
            "Reducir la lucha interna y aumentar tu bienestar emocional.",
          ].map((beneficio, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <CheckCircle className="text-purple-700 w-5 h-5 mr-2 mt-1" />
              <span>{beneficio}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.a
        href="/contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex items-center justify-center gap-2 bg-green-500 text-lg text-center mt-8 hover:bg-green-700 transition-all duration-300 text-white py-3 px-6 rounded-lg shadow-md w-full"
      >
        <MessageCircle className="w-5 h-5" />
        Click aquí para ir a la página de contacto
      </motion.a>

    </div>
  );
};

export default About;
