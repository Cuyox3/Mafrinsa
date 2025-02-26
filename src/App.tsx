import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen">
      
      {/* Navegacion */}
      <nav className="fixed top-0 w-full z-30 p-4 md:p-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold tracking-wider text-white">MAF AUTOMATION</h1>
          
          {/* Desktop */}
          <div className="hidden md:flex gap-8">
            <a href="#" className="nav-link my-auto text-white">INICIO</a>
            <a href="/AboutUs" className="nav-link my-auto text-white">SOBRE NOSOTROS</a>
            <a href="/Contacto" className="nav-link btn text-white">CONTACTO</a>
          </div>

          {/* Mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-screen w-3/4 bg-black text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 flex flex-col gap-6 p-6`}
      >
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="self-end"
        >
          <X size={32} />
          </button>
        <a href="#" className="text-xl" onClick={() => setIsMenuOpen(false)}>INICIO</a>
        <a href="/AboutUs" className="text-xl" onClick={() => setIsMenuOpen(false)}>SOBRE NOSOTROS</a>
        <a href="/Contacto" className="text-xl" onClick={() => setIsMenuOpen(false)}>CONTACTO</a>
      </div>
      
      {/* Desarrollo de Maquinaria */}
      <section id="maquinaria" className="section" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1548945665-56d2712b4986?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80")'
      }}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-2xl md:text-6xl font-light mb-2 md:mb-4">DESARROLLO DE</h2>
          <h3 className="text-4xl md:text-7xl font-bold mb-4 md:mb-8">MAQUINARIA</h3>
          <Link to="/maquinaria" className="btn">VER MAS</Link>
        </div>
      </section>

      {/* Mantenimiento Industrial */}
      <section id="mantenimiento" className="section" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1500461267717-bdeacf8ee48c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80")'
      }}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-2xl md:text-6xl font-light mb-2 md:mb-4">MANTENIMIENTO</h2>
          <h3 className="text-4xl md:text-7xl font-bold mb-4 md:mb-8">INDUSTRIAL</h3>
          <Link to="/mantenimiento" className="btn">DESCUBRIR MÁS</Link>
        </div>
      </section>

      {/* Soportes de Ingeniería */}
      <section id="ingenieria" className="section" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1477168561719-12b71b09935b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80")'
      }}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-2xl md:text-6xl font-light mb-2 md:mb-4">SOPORTES DE</h2>
          <h3 className="text-4xl md:text-7xl font-bold mb-4 md:mb-8">INGENIERÍA</h3>
          <Link to="/ingenieria" className="btn">VER SERVICIOS</Link>
        </div>
      </section>

      {/* Refaccionamiento */}
      <section id="refacciones" className="section" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80")'
      }}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-6xl font-light mb-2 md:mb-4">SERVICIOS DE</h2>
          <h3 className="text-4xl md:text-7xl font-bold mb-4 md:mb-8">REFACCIONES</h3>
          <Link to="/refacciones" className="btn">CONOCER MÁS</Link>
        </div>
      </section>

      {/* Manufactura */}
      <section id="manufactura" className="section" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1484018386541-7281abd067dd?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80")'
      }}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-2xl md:text-6xl font-light mb-2 md:mb-4">SOLUCIONES DE</h2>
          <h3 className="text-3xl md:text-7xl font-bold mb-4 md:mb-8">MANUFACTURA</h3>
          <Link to="/manufactura" className="btn">SABER MÁS</Link>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <ChevronDown className="animate-bounce w-8 h-8 text-white" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-4 md:py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-4 md:gap-0">
          <span className="text-center">MAF AUTOMATION © {new Date().getFullYear()} | Design by: Cuyox3</span>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
            <a href="#" className="nav-link">POLÍTICA DE PRIVACIDAD</a>
            <a href="#" className="nav-link">CONTACTO</a>
          </div>
        </div>
      </footer>
    </div>
  );
}