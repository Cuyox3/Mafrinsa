import React, { useEffect, useState } from 'react';
import './index.css';
import { Cog, Cpu, Wind, Globe, Ruler, Gauge, ArrowRight, PenTool as Tool, Boxes, ShieldCheck } from 'lucide-react';
import {X, Menu} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1A237E,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#311B92,transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSAyOS41aC0xdi0xaDFWMjkuNXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] bg-repeat opacity-20" />
      </div>

      <div className="relative z-10 overflow-hidden">

        {/* Navegacion */}
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

        {/* Contenido */}
        <main className="container mx-auto px-4 py-16">

          {/* Hero  */}
          <div className="relative max-w-4xl mx-auto text-center mb-12 md:mb-20">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="relative">
              
              <h1 className="text-4xl md:text-6xl font-bold mt-16 mb-8 md:mb-6 leading-tight">
                Servicios de{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Refaccionamiento
                </span>
              </h1>

              <p className="text-xl md:text-xl text-gray-400 max-w-2xl mx-auto">
                Soluciones completas en refacciones y equipos industriales para mantener su operación en óptimo funcionamiento
              </p>
              
            </div>
          </div>

          {/* Servicios */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24">

            {/* Equipo de Control  */}
            <div className="group relative p-1 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-transparent to-transparent hover:from-indigo-500/30 transition-all duration-300">
              <div className="relative bg-[#0A0F1E]/80 backdrop-blur-xl p-8 rounded-[1.4rem] border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-[1.4rem]" />
                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Refaccionamiento de Equipo de Control</h3>
                  <p className="text-gray-400 mb-6">
                    Mantenimiento y reemplazo especializado de componentes de control industrial.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-indigo-400" />
                      <span className="text-gray-300">PLCs y sistemas de control</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-indigo-400" />
                      <span className="text-gray-300">Pantallas HMI</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-indigo-400" />
                      <span className="text-gray-300">Sensores industriales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Partes Mecanicas  */}
            <div className="group relative p-1 rounded-3xl bg-gradient-to-br from-purple-500/20 via-transparent to-transparent hover:from-purple-500/30 transition-all duration-300">
              <div className="relative bg-[#0A0F1E]/80 backdrop-blur-xl p-8 rounded-[1.4rem] border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-[1.4rem]" />
                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Ruler className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Elementos Mecánicos Sobre Medida</h3>
                  <p className="text-gray-400 mb-6">
                    Fabricación y adaptación de piezas mecánicas según especificaciones exactas.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Tool className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Diseño personalizado</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Tool className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Fabricación de precisión</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Tool className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Adaptación de componentes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Equipo Neumatico */}
            <div className="group relative p-1 rounded-3xl bg-gradient-to-br from-pink-500/20 via-transparent to-transparent hover:from-pink-500/30 transition-all duration-300">
              <div className="relative bg-[#0A0F1E]/80 backdrop-blur-xl p-8 rounded-[1.4rem] border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-[1.4rem]" />
                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Wind className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Refaccionamiento de Equipos Neumáticos</h3>
                  <p className="text-gray-400 mb-6">
                    Mantenimiento y reparación de sistemas neumáticos industriales.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Gauge className="w-5 h-5 text-pink-400" />
                      <span className="text-gray-300">Válvulas y actuadores</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Gauge className="w-5 h-5 text-pink-400" />
                      <span className="text-gray-300">Compresores</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Gauge className="w-5 h-5 text-pink-400" />
                      <span className="text-gray-300">Sistemas de filtración</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Importados */}
            <div className="group relative p-1 rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-transparent hover:from-blue-500/30 transition-all duration-300">
              <div className="relative bg-[#0A0F1E]/80 backdrop-blur-xl p-8 rounded-[1.4rem] border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-[1.4rem]" />
                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Importación de Equipos</h3>
                  <p className="text-gray-400 mb-6">
                    Gestión integral de importación de equipos y refacciones industriales.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Boxes className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Proveedores certificados</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Garantía internacional</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Cog className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Soporte técnico especializado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* CTA  */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-[#0A0F1E]/80 backdrop-blur-xl p-12 rounded-3xl border border-white/10">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">¿Necesita refacciones especializadas?</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-xl">
                  Nuestro equipo de expertos está listo para ayudarle a encontrar la solución perfecta para sus necesidades de refaccionamiento.
                </p>
                <a href="/Contacto">
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-lg">
                    Solicitar Cotización
                  </button>
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 md:mt-20 py-8 border-t border-white/5">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Mafrinsa. Todos los derechos reservados.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;