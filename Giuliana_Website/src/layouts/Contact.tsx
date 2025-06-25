import React, { } from 'react'

const Contact: React.FC = ()=> {  
    return (
        <>
         <div className="max-w-lg min-h-[450px] items-center justify-center flex flex-col m-3 mx-auto p-6 bg-white shadow-md shadow-black">
         <h2 className="text-2xl text-center font-bold mb-4">Contactame!</h2>
         <div className='text-center'>
            <p className="mb-4">Enviame un WhatsApp con tu nombre y tu consulta!</p>
            <a className="bg-green-400 hover:bg-green-600 transition-all duration-300 p-3" href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUM}`} target="_blank" rel='noopener noreferrer'>Ir a WhatsApp</a>
         </div>
         
         <p className='mt-6 text-xl mb-3'>Sino, podés enviarme un mail a:</p>
         <p>giuliana19romano99@gmail.com</p>
        </div>
        </>
    )
}

export default Contact;