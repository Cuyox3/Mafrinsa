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
        <footer className="mt-20 py-8 border-t border-white/5">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>© {new Date().getFullYear()} MAF AUTOMATION. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;