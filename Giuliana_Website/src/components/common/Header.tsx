import React from "react";
import { useLocation } from "react-router";

 
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <nav className='bg-purple-900 shadow p-4 sticky z-1 top-0 text-white w-full'>
        <div className='container mx-auto flex md:justify-around justify-between items-center'>
            <div>
              <h1 className='text-2xl font-bold'>Lic. Giuliana Romano</h1>
              <p className='font-extralight text-md'>M.N. 83604 | MP-087043</p>
            </div>
            <button className='md:hidden text-2xl cursor-pointer' onClick={()=> setOpenNav(!openNav)}>
                {openNav ? 'x' : '☰'}
            </button>
            <ul className='hidden md:flex space-x-4'>
                <li><a href="/" className={`p-4 text-lg transition-all duration-300 ${location.pathname=='/' ? 'text-indigo-300' : ''} hover:text-indigo-300`}>Inicio</a></li>
                <li><a href="/about" className={`p-4 text-lg transition-all duration-300 ${location.pathname=='/about' ? 'text-indigo-300' : ''} hover:text-indigo-300`}>Sobre mi</a></li>
                <li><a href="/contact" className={`p-4 text-lg transition-all duration-300 ${location.pathname=='/contact' ? 'text-indigo-300' : ''} hover:text-indigo-300`}>Contacto</a></li>
            </ul>                
        </div>
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${openNav ? 'max-h-40' : 'max-h-0'}`}>
            <ul className='flex gap-5 flex-col items-center p-4 space-y-2'>
                <li><a href="/" className={`p-2 text-lg pr-4 pl-4 hover:text-indigo-300 transition-all duration-300 ${location.pathname=='/' ? 'text-indigo-300' : ''}`}>Inicio</a></li>
                <li><a href="/about" className={`p-2 text-lg pr-4 pl-4 hover:text-indigo-300 transition-all duration-300 ${location.pathname=='/about' ? 'text-indigo-300' : ''}`}>Sobre mi</a></li>
                <li><a href="/contact" className={`p-2 text-lg pr-4 pl-4 hover:text-indigo-300 transition-all duration-300 ${location.pathname=='/contact' ? 'text-indigo-300' : ''}`}>Contacto</a></li>
            </ul>           
        </div>         
    </nav>
  );
}