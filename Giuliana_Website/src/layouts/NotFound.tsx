const NotFound: React.FC = () => {
    return (
      <div className="text-center items-center justify-center flex-col flex min-h-screen">
        <h1 className="text-4xl font-bold text-purple-600">404</h1>
        <p className="text-lg text-gray-700 mt-2 mb-10">La página que buscas no existe.</p>
        <a href="/" className='bg-blue-600 p-4 rounded'>Volver al inicio</a>
      </div>
      
    );
  };
  
  export default NotFound;
  