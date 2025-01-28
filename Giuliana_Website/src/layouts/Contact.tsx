import React, { useState } from "react";

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, { // Aca hay que armar un backend que procese los datos del form
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
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
         <div className="max-w-lg m-3 mx-auto p-6 bg-white shadow-md shadow-black">
         <h2 className="text-2xl text-center font-bold mb-4">Contactame!</h2>
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
                    <label className="block text-gray-700">Mensaje</label>
                    <textarea
                        name="shortMessage"
                        value={formData.shortMessage}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={4}
                        required
                    />
                </div>
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
                {error && "Hubo un error, click para intentar de nuevo"}
                </button>
            </form>
            </div>
        </>
    )
}

export default Contact;