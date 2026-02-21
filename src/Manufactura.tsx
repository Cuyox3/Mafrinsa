import { useEffect } from 'react';
import { Scissors, Flame, Hammer, Cog, Cpu, Ruler, Zap, Gauge, Settings, Layers, Wrench, Workflow, X, Menu } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1A237E,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#311B92,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(41,98,255,0.03)_25%,transparent_25%,transparent_75%,rgba(41,98,255,0.03)_75%,rgba(41,98,255,0.03))_0_0/50px_50px] opacity-5" />
      </div>

      <div className="relative z-10 overflow-hidden">

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-30 p-4 md:p-8">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <h1 className="text-xl md:text-2xl font-bold tracking-wider text-white">MAF AUTOMATION</h1>
            
            {/* Desktop */}
            <div className="hidden md:flex gap-8">
              <a href="/" className="nav-link my-auto text-white">INICIO</a>
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
          <a href="/" className="text-xl" onClick={() => setIsMenuOpen(false)}>INICIO</a>
          <a href="/AboutUs" className="text-xl" onClick={() => setIsMenuOpen(false)}>SOBRE NOSOTROS</a>
          <a href="/Contacto" className="text-xl" onClick={() => setIsMenuOpen(false)}>CONTACTO</a>
        </div>

        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="relative max-w-4xl mx-auto text-center mb-10 md:mb-16">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="relative mt-10 md:mt-20">
                
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Soluciones de{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                        Manufactura
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Tecnología de punta y precisión milimétrica en cada proceso de manufactura
                    </p>
                
                </div>
          </div>

          {/* Servicios */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            {/* CNC Cortadora Laser */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative h-full bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors overflow-hidden">
                <div className="absolute right-0 top-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Scissors className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Corte Láser CNC</h3>
                  <p className="text-gray-400 mb-6">
                    Precisión excepcional en cortes complejos con nuestra tecnología láser CNC de última generación.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-blue-400" />
                      Precisión de hasta 0.1mm
                    </li>
                    <li className="flex items-center gap-2">
                      <Layers className="w-5 h-5 text-blue-400" />
                      Múltiples materiales
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tratamientos Térmicos */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative h-full bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors overflow-hidden">
                <div className="absolute right-0 top-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Flame className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Tratamientos Térmicos</h3>
                  <p className="text-gray-400 mb-6">
                    Optimización de propiedades mecánicas mediante procesos térmicos controlados.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Gauge className="w-5 h-5 text-orange-400" />
                      Control preciso de temperatura
                    </li>
                    <li className="flex items-center gap-2">
                      <Workflow className="w-5 h-5 text-orange-400" />
                      Procesos personalizados
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* dobladora cnc */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative h-full bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors overflow-hidden">
                <div className="absolute right-0 top-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Hammer className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Dobladora CNC</h3>
                  <p className="text-gray-400 mb-6">
                    Doblado preciso y consistente para piezas metálicas complejas.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-purple-400" />
                      Programación avanzada
                    </li>
                    <li className="flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-purple-400" />
                      Alta precisión angular
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Maquinado Convencional */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative h-full bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors overflow-hidden">
                <div className="absolute right-0 top-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cog className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Maquinados Convencionales</h3>
                  <p className="text-gray-400 mb-6">
                    Torno y fresado tradicional con la experiencia de maestros artesanos.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-emerald-400" />
                      Experiencia artesanal
                    </li>
                    <li className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-emerald-400" />
                      Versatilidad en piezas
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* maquinado cnc */}
            <div className="group relative lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative h-full bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors overflow-hidden">
                <div className="absolute right-0 top-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Maquinados CNC</h3>
                  <p className="text-gray-400 mb-6">
                    Tecnología de control numérico computarizado para la máxima precisión y repetibilidad.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-indigo-400" />
                        <span>Alta velocidad</span>
                      </div>
                    </div>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-5 h-5 text-indigo-400" />
                        <span>Precisión micrométrica</span>
                      </div>
                    </div>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Settings className="w-5 h-5 text-indigo-400" />
                        <span>Programación CAD/CAM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-[#0A0F1E]/80 backdrop-blur-xl p-6 md:p-12 rounded-3xl border border-white/10">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 ">¿Necesita soluciones de manufactura precisas?</h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                  Contamos con la tecnología y experiencia para convertir sus diseños en realidad con la máxima precisión y calidad.
                </p>
                <a href="/Contacto">
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                    Solicitar Cotización
                  </button>
                </a>
              </div>
            </div>
          </div>
        </main>

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
    </div>
  );
}

export default App;