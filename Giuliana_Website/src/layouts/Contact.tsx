import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const Contact: React.FC = ()=> {
const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        shortMessage: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleRecaptcha = (token: string | null) => {
        setRecaptchaToken(token);
      };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (!recaptchaToken) {
            setError(true);
            setIsSubmitting(false);
            alert('Por favor, completa el reCAPTCHA para verificar que no eres un bot');
            return;
        }
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...formData, "g-recaptcha-response": recaptchaToken}),
            });
            if (response.ok) {
                setSuccess(true);
                setError(false);
                setFormData({ firstName: "", lastName: "", email: "", phone: "", shortMessage: ""})
            }
            else {
                setError(true);
            }
        } catch (error) {
            console.error("Error: ", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
         <div className="max-w-lg min-h-[450px] items-center justify-center flex flex-col m-3 mx-auto p-6 bg-white shadow-md shadow-black">
         <h2 className="text-2xl text-center font-bold mb-4">Contactame!</h2>
         <div className='text-center'>
            <p className="mb-4">Enviame un WhatsApp con tu nombre y tu consulta!</p>
            <a className="bg-green-400 hover:bg-green-600 transition-all duration-300 p-3" href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUM}`} target="_blank" rel='noopener noreferrer'>Ir a WhatsApp</a>
         </div>
         
         <p className='mt-6 text-xl mb-3'>Sino, podés enviarme un mail:</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Nombre</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Apellido</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Teléfono</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Mensaje breve</label>
                    <textarea
                        name="shortMessage"
                        value={formData.shortMessage}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={4}
                        required
                    />
                </div>
                <ReCAPTCHA sitekey="6Lf4g98qAAAAABuJZhlYmqVvcjqiG1xkE9X3drZo" onChange={handleRecaptcha} />
                <button
                    type="submit"
                    className={`w-full 
                                ${isSubmitting ? 'bg-gray-500' : ''}
                                ${success ? 'bg-green-500' : ''} 
                                ${error ? 'bg-red-500 hover:bg-red-600' : ''} 
                                ${!isSubmitting && !success && !error ? 'bg-blue-500 hover:bg-blue-600' : ''} 
                                 text-white py-2 rounded`}
                    disabled={isSubmitting || success}
                >
                {isSubmitting && "Enviando..."}
                {success && !isSubmitting && "Enviado con éxito!"}
                {!isSubmitting && !success && !error && "Enviar"}
                {error && !isSubmitting && !success && "Hubo un error, click para intentar de nuevo"}
                </button>
            </form>
            </div>
        </>
    )
}

export default Contact;