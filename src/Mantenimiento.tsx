import React, { useEffect, useState } from 'react';
import './index.css';
import { Menu, Zap, Shield, Repeat, Sparkles, Clock, Activity, X, CheckCircle2,
         AlertTriangle,Gauge,Power,ArrowRight,Phone, Mail, Calendar} from 'lucide-react';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen bg-[#0B1120] text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#1E3A8A,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_300px,#312E81,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_800px,#4F46E5,transparent)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      {/* Elementos Flotantes */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              opacity: 0.1
            }}
          >
            <div className="w-64 h-64 rounded-full bg-blue-500/20 blur-3xl" />
          </div>
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10">

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

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-3xl -z-10" />
            
            <h1 className="text-4xl md:text-6xl font-bold mt-16 md:mt-20 mb-6 leading-tight">
              Servicios de{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Mantenimiento Industrial
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Soluciones integrales para mantener su planta operando al máximo rendimiento
            </p>
            <div className="flex-column md:flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-2 md:mb-0">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>24/7 Soporte</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-2 md:mb-0">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Garantía Total</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Respuesta Rápida</span>
              </div>
            </div>
          </div>

          {/* Servicios  */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">

            {/* Mantenimiento Preventivo */}
            <div className="group relative max-w-[calc(100vw-41px)]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-50 group-hover:opacity-70 " />
              <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group-hover:translate-y-[-4px] ">
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  Mantenimiento Preventivo
                </h3>
                <p className="text-gray-400 mb-6">
                  Programa integral de mantenimiento para prevenir fallos y maximizar la vida útil de sus equipos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300 group-hover:translate-x-1 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    Inspecciones periódicas 
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 group-hover:translate-x-2 transition-transform delay-75">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    Calibración de equipos
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 group-hover:translate-x-3 transition-transform delay-100">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    Lubricación y ajustes
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <button className="flex items-center gap-2 text-blue-400 hover:gap-4 transition-all group-hover:text-blue-300">
                    <span>Ver más detalles</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Rehabilitación Eléctrica */}
            <div className="group relative max-w-[calc(100vw-41px)]">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-50 group-hover:opacity-70" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300 group-hover:translate-y-[-4px]">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                  Rehabilitación de Instalaciones Eléctricas
                </h3>
                <p className="text-gray-400 mb-6">
                  Modernización y reparación de sistemas eléctricos para garantizar seguridad y eficiencia.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300 group-hover:translate-x-1 transition-transform">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    Diagnóstico de instalaciones
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 group-hover:translate-x-2 transition-transform delay-75">
                    <Power className="w-5 h-5 text-yellow-400" />
                    Actualización de sistemas
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 group-hover:translate-x-3 transition-transform delay-100">
                    <Gauge className="w-5 h-5 text-yellow-400" />
                    Optimización de consumo
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <button className="flex items-center gap-2 text-yellow-400 hover:gap-4 transition-all group-hover:text-yellow-300">
                    <span>Ver más detalles</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Limpiezas Generales */}
            <div className="group relative max-w-[calc(100vw-41px)]">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-50 group-hover:opacity-70" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-300 group-hover:translate-y-[-4px]">
                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">
                  Limpiezas Generales
                </h3>
                <p className="text-gray-400 mb-6">
                  Servicios especializados de limpieza industrial para mantener sus instalaciones en óptimas condiciones.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300 group-hover:translate-x-1 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    Limpieza de maquinaria
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 group-hover:translate-x-2 transition-transform delay-75">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    Sanitización de áreas
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 group-hover:translate-x-3 transition-transform delay-100">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    Manejo de residuos
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <button className="flex items-center gap-2 text-green-400 hover:gap-4 transition-all group-hover:text-green-300">
                    <span>Ver más detalles</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Reacondicionamiento */}
            <div className="group relative max-w-[calc(100vw-41px)]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-50 group-hover:opacity-70" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 group-hover:translate-y-[-4px]">
                <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Repeat className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                  Reacondicionamiento de Equipos
                </h3>
                <p className="text-gray-400 mb-6">
                  Restauración y actualización de equipos para extender su vida útil y mejorar su rendimiento.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300 group-hover:translate-x-1 transition-transform">
                    <Activity className="w-5 h-5 text-purple-400" />
                    Evaluación de estado
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 group-hover:translate-x-2 transition-transform delay-75">
                    <Clock className="w-5 h-5 text-purple-400" />
                    Planificación de mejoras
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 group-hover:translate-x-3 transition-transform delay-100">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    Implementación de actualizaciones
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <button className="flex items-center gap-2 text-purple-400 hover:gap-4 transition-all group-hover:text-purple-300">
                    <span>Ver más detalles</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
          </div>

          {/* CTA */}
          <div className="relative" id="contact">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl opacity-50" />
            <div className="relative bg-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Necesita nuestros servicios?</h2>
                  <p className="text-gray-400 mb-8">
                    Nuestro equipo de expertos está listo para ayudarle a mantener su planta en óptimas condiciones.
                    Contáctenos para una evaluación personalizada.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>+52 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>contacto@mafrinsa.mx</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>Lun - Vie: 9:00 - 18:00</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl blur-xl" />
                  <div className="relative bg-gray-900/30 backdrop-blur-xl p-8 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-6">Solicitar Consulta</h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                      <textarea
                        placeholder="Mensaje"
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors"
                      ></textarea>
                      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Enviar Mensaje
                      </button>
                    </form>
                  </div>
                </div>
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