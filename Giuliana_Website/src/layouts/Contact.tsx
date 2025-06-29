import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-lg min-h-[450px] flex flex-col items-center justify-center m-5 mx-auto p-8 bg-white rounded-2xl shadow-lg shadow-black">
      <h2 className="text-3xl font-bold text-center mb-6 text-violet-800">¡Contactame!</h2>

      <div className="text-center mb-6">
        <p className="mb-4 text-gray-700 text-lg">Podés enviarme un WhatsApp con tu nombre y tu consulta:</p>
        <a
          className="flex items-center gap-2 bg-green-500 hover:bg-green-700 transition-all duration-300 text-white py-2 px-4 rounded-lg shadow-md justify-center"
          href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUM}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-5 h-5" /> Ir a WhatsApp
        </a>
      </div>

      <div className="text-center mt-6">
        <p className="text-lg text-gray-700 mb-2">O si preferís, podés escribirme un mail:</p>
        <div className="flex items-center justify-center gap-2">
          <Mail className="w-5 h-5 text-violet-700" />
          <p className="text-gray-800 font-medium">giuliana19romano99@gmail.com</p>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-600 text-sm">Te responderé lo antes posible. ¡Gracias por tu confianza!</p>
      </div>
    </div>
  );
};

export default Contact;
