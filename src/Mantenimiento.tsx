import React, { useEffect } from 'react';
import './index.css';

import { Wrench, Zap, Shield, Repeat, Sparkles, Clock, Activity, Factory, CheckCircle2,
         AlertTriangle,Gauge,Power,ArrowRight,Phone, Mail, Calendar} from 'lucide-react';

function App() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen bg-[#0B1120] text-white overflow-hidden">
      {/* Background animado */}
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
        <nav className="fixed top-0 w-full z-50 p-8">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <a href="/">
                  <h1 className="text-2xl font-bold tracking-wider">MAFRINSA</h1>
                </a> 
                <div className="flex gap-8">
                <a href="/" className="nav-link my-auto">INICIO</a>
                <a href="/AboutUs" className="nav-link my-auto">SOBRE NOSOTROS</a>
                <a href="/Contacto" className="nav-link btn">CONTACTO</a>
            </div>
            </div>
        </nav>

        {/* Contenido */}
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-3xl -z-10" />
            
            <h1 className="text-6xl font-bold mt-10 mb-6 leading-tight">
              Servicios de{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Mantenimiento Industrial
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Soluciones integrales para mantener su planta operando al máximo rendimiento
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>24/7 Soporte</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
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
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-50 group-hover:opacity-70" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group-hover:translate-y-[-4px]">
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
                    Inspecciones periódicas programadas
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
            <div className="group relative">
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
            <div className="group relative">
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
            <div className="group relative">
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
            <div className="relative bg-gray-900/50 backdrop-blur-xl p-12 rounded-2xl border border-white/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h2 className="text-3xl font-bold mb-6">¿Necesita nuestros servicios?</h2>
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
        <footer className="mt-20 py-8 border-t border-white/10 backdrop-blur-md">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Mafrinsa. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;