import React from "react"


const Presentation: React.FC = ()=> {
    return (
        <>
        <div className="m-auto max-w-full min-h-60 p-10">
            <h1 className="mb-4 text-6xl font-extrabold text-gray-900 dark:text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-700 from-purple-950">Giuliana </span>Romano</h1>
            <p className='text-2xl'>Licenciada en Psicologia</p>
            <p className='text-xl'>M.N. 83604</p>
            <div className='text-center mt-10'>
            <a className='bg-indigo-500 hover:bg-violet-500 cursor-pointer transition-all duration-300 text-gray-100 font-semibold py-3 px-4 rounded shadow' href='/Contact'>Contactame!</a>
            </div>
        </div>
       
        </>
    )
}

export default Presentation