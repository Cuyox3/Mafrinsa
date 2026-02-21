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
            <footer className="mt-20 py-8 border-t border-gray-800">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-400 gap-8">
                <div className="text-center md:text-left">
                  <p>© {new Date().getFullYear()} MAF AUTOMATION.</p>
                  <p className="mt-1">Todos los derechos reservados.</p>
                </div>
                
                <div className="flex flex-row flex-wrap justify-center gap-4 w-full md:w-auto items-center">
                  <a className="link flex items-center justify-center gap-2 !m-0" href="https://www.instagram.com/maf_automation/" target="_blank">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m12.4 2.25a.75.75 0 0 1 .75.75.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75.75.75 0 0 1 .75-.75M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
                    Instagram
                  </a>
                  
                  <a className="link flex items-center justify-center gap-2 !m-0" href="https://wa.me/+5215638533118" target="_blank">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.3s-1.47-.73-1.7-.81c-.23-.08-.4-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.26-.13-1.1-.4-2.1-1.3-.77-.69-1.29-1.55-1.44-1.8-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.85-.2-.5-.4-.43-.56-.43z"/></svg>
                    WhatsApp
                  </a>

                  <a className="link flex items-center justify-center gap-2 !m-0" href="mailto:laura.lopez@mafrinsa.com.mx">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    Correo
                  </a>
                </div>
            </div>
            </footer>
    </div>
  );
}