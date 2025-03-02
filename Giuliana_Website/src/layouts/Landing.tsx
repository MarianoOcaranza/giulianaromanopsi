import React from "react";
import Image from '../assets/mainimage.jpeg';
import Presentation from "../components/landing/Presentation";
import {motion} from 'framer-motion'

const Landing: React.FC = ()=> {
    return (
        <section className="flex flex-col lg:flex-row items-center lg:justify-center min-h-screen container mx-auto px-4">
          <Presentation />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 lg:mt-0"
          >
            <img
              src={Image}
              alt="main_image"
              className="w-full max-w-md lg:max-w-lg object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </section>
      );
}

export default Landing;