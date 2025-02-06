import React, { useEffect } from 'react';
import { Factory, Cog, Bot, Combine, Network, Sandwich, Car, FlaskRound as Flask, Package, Box, Trees, Workflow, Cable, Cpu, Wrench } from 'lucide-react';

function App() {

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#1A237E,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#311B92,transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSAyOS41aC0xdi0xaDFWMjkuNXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] bg-repeat opacity-10" />
      </div>

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

        {/* Main Content */}
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="relative max-w-4xl mx-auto text-center mb-24">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="relative mt-20">
              
              <h1 className="text-6xl font-bold mb-6 leading-tight">
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

          {/* Services Section */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-300 mb-4">Nuestros Servicios</h2>
              
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Custom Machinery */}
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

              {/* Process Automation */}
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

              {/* System Integration */}
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

          {/* Industries Section */}
          <section className="relative">

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Industrias que Servimos</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Nuestra experiencia abarca múltiples sectores industriales, cada uno con sus desafíos únicos y requerimientos específicos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Food Industry */}
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

              {/* Automotive Industry */}
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

              {/* Pharmaceutical Industry */}
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

              {/* Cardboard Industry */}
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

              {/* Packaging Industry */}
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

              {/* Wood Industry */}
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

          {/* CTA Section */}
          <div className="relative max-w-4xl mx-auto mt-24">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-[#0A0F1E]/80 backdrop-blur-xl p-12 rounded-3xl border border-white/10">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">¿Listo para automatizar su industria?</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Permítanos ayudarle a transformar su producción con soluciones de automatización personalizadas.
                </p>
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Solicitar Consultoría
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 py-8 border-t border-white/5">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Mafrinsa. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;