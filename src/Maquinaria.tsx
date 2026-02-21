import React, { useEffect } from 'react';
import { Menu, X, Cog, Bot, Combine, Network, Sandwich, Car, FlaskRound as Flask, Package, Box, Trees, Workflow, Cable, Cpu, Wrench } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#1A237E,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#311B92,transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSAyOS41aC0xdi0xaDFWMjkuNXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] bg-repeat opacity-10" />
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

        {/* Main Content */}
        <main className="container mx-auto px-4 py-16">
          {/* Hero  */}
          <div className="relative max-w-4xl mx-auto text-center mb-14 md:mb-24">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="relative mt-12 md:mt-20">
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Desarrollo de{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Maquinaria
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Soluciones de automatización industrial personalizadas para optimizar sus procesos productivos. Desarrollamos soluciones integrales de automatización y maquinaria especializada para potenciar la eficiencia de su industria
              </p>
            </div>
          </div>

          {/* Servicios */}
          <section className="mb-24 md:mb-32">

            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-4">Nuestros Servicios</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Maquinaria Personalizada */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Maquinaria Personalizada</h3>
                  <p className="text-gray-400 mb-6">
                    Diseño y fabricación de maquinaria específica para sus necesidades productivas, optimizando espacio y eficiencia.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Cog className="w-5 h-5 text-indigo-400" />
                      Diseño mecánico especializado
                    </li>
                    <li className="flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-indigo-400" />
                      Control electrónico avanzado
                    </li>
                  </ul>
                </div>
              </div>

              {/* Automatizacion de Procesos */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Workflow className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Automatización de Procesos</h3>
                  <p className="text-gray-400 mb-6">
                    Transformamos procesos manuales en sistemas automatizados eficientes y precisos.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Bot className="w-5 h-5 text-purple-400" />
                      Robotización industrial
                    </li>
                    <li className="flex items-center gap-2">
                      <Network className="w-5 h-5 text-purple-400" />
                      Sistemas de control avanzado
                    </li>
                  </ul>
                </div>
              </div>

              {/* Integracion de Sistemas */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cable className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Integración de Sistemas</h3>
                  <p className="text-gray-400 mb-6">
                    Conectamos y sincronizamos diferentes sistemas para crear una operación unificada y eficiente.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Combine className="w-5 h-5 text-pink-400" />
                      Integración de equipos
                    </li>
                    <li className="flex items-center gap-2">
                      <Network className="w-5 h-5 text-pink-400" />
                      Comunicación entre sistemas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Industrias */}
          <section className="relative">

            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-4xl font-bold mb-4">Industrias que Servimos</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Nuestra experiencia abarca múltiples sectores industriales, cada uno con sus desafíos únicos y requerimientos específicos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Alimenticia */}
              <div className="group bg-gradient-to-br from-indigo-500/5 to-transparent p-6 rounded-2xl hover:from-indigo-500/10 transition-colors duration-300 border border-white/5 hover:border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10">
                    <Sandwich className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Industria Alimenticia</h3>
                </div>
                <p className="text-gray-400">
                  Soluciones que cumplen con los más altos estándares de higiene y seguridad alimentaria.
                </p>
              </div>

              {/* Automotriz */}
              <div className="group bg-gradient-to-br from-purple-500/5 to-transparent p-6 rounded-2xl hover:from-purple-500/10 transition-colors duration-300 border border-white/5 hover:border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Car className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Industria Automotriz</h3>
                </div>
                <p className="text-gray-400">
                  Automatización de precisión para líneas de ensamblaje y control de calidad.
                </p>
              </div>

              {/* Farmaceutica */}
              <div className="group bg-gradient-to-br from-pink-500/5 to-transparent p-6 rounded-2xl hover:from-pink-500/10 transition-colors duration-300 border border-white/5 hover:border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Flask className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Industria Farmacéutica</h3>
                </div>
                <p className="text-gray-400">
                  Equipos especializados que cumplen con las normativas GMP y FDA.
                </p>
              </div>

              {/* Cartonera */}
              <div className="group bg-gradient-to-br from-blue-500/5 to-transparent p-6 rounded-2xl hover:from-blue-500/10 transition-colors duration-300 border border-white/5 hover:border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Package className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Industria Cartonera</h3>
                </div>
                <p className="text-gray-400">
                  Sistemas automatizados para producción y manipulación de cartón.
                </p>
              </div>

              {/* Empaquetado */}
              <div className="group bg-gradient-to-br from-emerald-500/5 to-transparent p-6 rounded-2xl hover:from-emerald-500/10 transition-colors duration-300 border border-white/5 hover:border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10">
                    <Box className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Industria de Empaquetado</h3>
                </div>
                <p className="text-gray-400">
                  Soluciones eficientes para empaque y paletizado automático.
                </p>
              </div>

              {/* Maderera */}
              <div className="group bg-gradient-to-br from-amber-500/5 to-transparent p-6 rounded-2xl hover:from-amber-500/10 transition-colors duration-300 border border-white/5 hover:border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-amber-500/10">
                    <Trees className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Transformación de la Madera</h3>
                </div>
                <p className="text-gray-400">
                  Automatización de procesos de corte, tratamiento y paletizado de madera.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="relative max-w-4xl mx-auto mt-24">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-[#0A0F1E]/80 backdrop-blur-xl p-12 rounded-3xl border border-white/10">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">¿Listo para automatizar su industria?</h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Permítanos ayudarle a transformar su producción con soluciones de automatización personalizadas.
                </p>
                <a href="/Contacto">
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                    Solicitar Consultoría
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