import React from "react";
import { useLocation } from "react-router";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();


  return (
    <nav className='bg-purple-800 shadow p-4 sticky z-50 top-0 text-white w-full transition-all duration-300 py-3'>
      <div className="container mx-auto flex md:justify-around justify-between items-center">
        <a href='/' className="transition-all duration-300">
          <h1 className='font-bold transition-all duration-300 text-2xl'>Lic. Giuliana Romano</h1>
          <p className='font-extralight transition-all duration-300 text-md'>M.N. 83604 | MP-087043</p>
        </a>
        
        <button className="md:hidden text-2xl cursor-pointer" onClick={() => setOpenNav(!openNav)}>
          {openNav ? 'x' : '☰'}
        </button>

        <ul className="hidden md:flex space-x-2">
          <li><a href="/" className={`p-4 text-md transition-all duration-300 ${location.pathname === '/' ? 'text-indigo-200' : ''} hover:text-indigo-200`}>Inicio</a></li>
          <li><a href="/about" className={`p-4 text-md transition-all duration-300 ${location.pathname === '/about' ? 'text-indigo-200' : ''} hover:text-indigo-200`}>Sobre mi</a></li>
          <li><a href="/professional" className={`p-4 text-md transition-all duration-300 ${location.pathname === '/professional' ? 'text-indigo-200' : ''} hover:text-indigo-200`}>Recorrido profesional</a></li>
          <li><a href="/contact" className={`p-4 text-md transition-all duration-300 ${location.pathname === '/contact' ? 'text-indigo-200' : ''} hover:text-indigo-200`}>Contacto</a></li>
        </ul>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${openNav ? 'max-h-50' : 'max-h-0'}`}>
        <ul className="flex gap-4 flex-col items-center p-3 space-y-2">
          <li><a href="/" className={`p-2 text-md pr-4 pl-4 hover:text-indigo-200 transition-all duration-300 ${location.pathname === '/' ? 'text-indigo-200' : ''}`}>Inicio</a></li>
          <li><a href="/about" className={`p-2 text-md pr-4 pl-4 hover:text-indigo-200 transition-all duration-300 ${location.pathname === '/about' ? 'text-indigo-200' : ''}`}>Sobre mi</a></li>
          <li><a href="/professional" className={`p-2 text-md pr-4 pl-4 hover:text-indigo-300 transition-all duration-300 ${location.pathname === '/professional' ? 'text-indigo-200' : ''}`}>Recorrido profesional</a></li>
          <li><a href="/contact" className={`p-2 text-md pr-4 pl-4 hover:text-indigo-200 transition-all duration-300 ${location.pathname === '/contact' ? 'text-indigo-200' : ''}`}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
