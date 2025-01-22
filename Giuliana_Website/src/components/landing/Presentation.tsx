import React from "react"


const Presentation: React.FC = ()=> {
    return (
        <>
        <div className="m-auto max-w-full min-h-60 p-10">
            <h1 className="mb-4 text-6xl font-extrabold text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-700 from-purple-950">Giuliana </span>Romano</h1>
            <p className='text-2xl'>Licenciada en Psicología</p>
            <p className='text-xl'>M.N. 83604</p>
            <div className='text-center mt-10'>
            <div className='flex flex-col items-center'>
                <a className='bg-indigo-500 w-1/2 hover:bg-indigo-950 transition-all duration-300 text-gray-100 font-semibold py-3 px-4 rounded shadow mb-4' href='/Contact'>Contactame!</a>
                <a href="/About" className="bg-gradient-to-r p-2 rounded text-white bg-purple-700 text-sm font-semibold hover:bg-purple-950 transition-all duration-300 shadow">Conoce más sobre mi trabajo</a>
            </div>
            
            </div>
        </div>
       
        </>
    )
}

export default Presentation