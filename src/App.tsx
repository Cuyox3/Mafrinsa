import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold tracking-wider">MAFRINSA</h1>
          <div className="flex gap-8">
            <a href="#" className="nav-link my-auto">INICIO</a>
            <a href="/AboutUs" className="nav-link my-auto">SOBRE NOSOTROS</a>
            <a href="/Contacto" className="nav-link btn">CONTACTO</a>
          </div>
        </div>
      </nav>

      {/* Desarrollo de Maquinaria */}
      <section id="maquinaria" className="section" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1548945665-56d2712b4986?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80")'
      }}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-light mb-4">DESARROLLO DE</h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-8">MAQUINARIA</h3>
          <Link to="/maquinaria" className="btn">EXPLORAR SOLUCIONES</Link>
        </div>
      </section>

      {/* Mantenimiento Industrial */}
      <section id="mantenimiento" className="section" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1500461267717-bdeacf8ee48c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80")'
      }}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-light mb-4">MANTENIMIENTO</h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-8">INDUSTRIAL</h3>
          <Link to="/mantenimiento" className="btn">DESCUBRIR MÁS</Link>
        </div>
      </section>

      {/* Soportes de Ingeniería */}
      <section id="ingenieria" className="section" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1477168561719-12b71b09935b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80")'
      }}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-light mb-4">SOPORTES DE</h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-8">INGENIERÍA</h3>
          <Link to="/ingenieria" className="btn">VER SERVICIOS</Link>
        </div>
      </section>

      {/* Refaccionamiento */}
      <section id="refacciones" className="section" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80")'
      }}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-light mb-4">SERVICIO DE</h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-8">REFACCIONAMIENTO</h3>
          <Link to="/refacciones" className="btn">CONOCER MÁS</Link>
        </div>
      </section>

      {/* Manufactura */}
      <section id="manufactura" className="section" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1484018386541-7281abd067dd?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80")'
      }}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-light mb-4">SOLUCIONES DE</h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-8">MANUFACTURA</h3>
          <Link to="/manufactura" className="btn">SABER MÁS</Link>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <ChevronDown className="animate-bounce w-8 h-8" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span>MAFRINSA © {new Date().getFullYear()}</span>
          <div className="flex gap-8">
            <a href="#" className="nav-link">POLÍTICA DE PRIVACIDAD</a>
            <a href="#" className="nav-link">CONTACTO</a>
          </div>
        </div>
      </footer>
    </div>
  );
}