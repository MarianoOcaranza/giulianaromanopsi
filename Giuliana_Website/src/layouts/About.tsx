import React from "react";
import Banner from "../components/about/Banner";

const About: React.FC = ()=> {
    return (
        <>
            <div className="flex flex-col items-center">
            <Banner title='Tu bienestar, un paso más cerca cada día.'
            description=''
            bgColor="bg-pink-700"
            textAlign="text-center" 
            />
            <a className='bg-gray-200 w-1/2 text-center hover:bg-black hover:text-white transition-all duration-300 font-semibold py-3 px-4 shadow rounded-sm' href='/Contact'>Click aquí para ir a la página de contacto</a>
            <Banner
                    title='¿Quién soy?'
                    description="Mi nombre es Giuliana Romano, soy Licenciada en Psicología y me recibí a fines de 2023 en la Universidad Abierta Interamericana (UAI).
                    Soy de Merlo y atiendo pacientes en modalidad virtual.
                    Mi trabajo consiste en acompañar a las personas en su proceso de cambio, brindando herramientas para que puedan comprenderse mejor, regular sus emociones y construir una vida más plena. Creo en el poder de la terapia como un espacio de crecimiento, donde cada pequeño avance es un logro significativo.
                    "
                    bgColor='bg-violet-700'
                    textAlign='text-left'/>
                    
             <Banner
                    title='¿En qué me especializo?'
                    description="Trabajo con un enfoque cognitivo-conductual y DBT, lo que significa que no solo exploramos lo que te pasa, sino que también buscamos estrategias prácticas par afrontar los desafíos del día a día.
                    Me gusta pensar que la terapia es un arte en constante construcción, donde juntos encontramos nuevas formas de ver, sentir y actuar. Si estás buscando un espacio de escucha, sin juicios y con herramientas concretas, ¡estoy acá para ayudarte!"
                    bgColor='bg-purple-800'
                    textAlign="text-left"/>
            </div>
        </>
    )
}

export default About;