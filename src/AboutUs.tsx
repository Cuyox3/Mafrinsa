import { Award, Target, Lightbulb, Users, Rocket, Code, Cpu, Cog, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">

        {/* Navegacion */}
        <nav className="fixed top-0 w-full z-50 p-8">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold tracking-wider">MAFRINSA</h1>
            <div className="flex gap-8">
                <a href="/" className="nav-link my-auto">INICIO</a>
                <a href="/AboutUs" className="nav-link my-auto">SOBRE NOSOTROS</a>
                <a href="/Contacto" className="nav-link btn">CONTACTO</a>
            </div>
            </div>
        </nav>

        {/* Contenido Principal */}
        <main className="container mx-auto px-4 py-12">
          
          <div className="text-center mt-20 mb-20">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Innovación en Automatización
            </h1>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Industrial
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Más de una década transformando la industria a través de soluciones tecnológicas avanzadas
            </p>
          </div>

          {/* Nuestra Historia */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-300">
                Fundada en 2010, Mafrinsa nació con la visión de revolucionar la industria manufacturera en México. 
                Comenzamos como un pequeño equipo de ingenieros apasionados y hemos crecido hasta convertirnos en líderes 
                en soluciones de automatización industrial.
              </p>
              <p className="text-lg text-gray-300">
                Hoy, con más de 50 proyectos exitosos y un equipo de 30+ expertos, seguimos impulsando la innovación 
                y la excelencia en cada solución que desarrollamos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">50+</h3>
                <p className="text-gray-400">Proyectos Completados</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">30+</h3>
                <p className="text-gray-400">Expertos en el Equipo</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">98%</h3>
                <p className="text-gray-400">Satisfacción del Cliente</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">15+</h3>
                <p className="text-gray-400">Años en el área</p>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Nuestros Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovación Constante</h3>
                <p className="text-gray-400">
                  Buscamos continuamente nuevas formas de mejorar y optimizar los procesos industriales.
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excelencia Técnica</h3>
                <p className="text-gray-400">
                  Mantenemos los más altos estándares de calidad en cada proyecto que desarrollamos.
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Compromiso Total</h3>
                <p className="text-gray-400">
                  Nos dedicamos a superar las expectativas de nuestros clientes en cada proyecto.
                </p>
              </div>
            </div>
          </div>

          {/* Tecnologias */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Tecnologías que Dominamos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-800 flex items-center gap-4 hover:border-blue-500/50 transition-colors">
                <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold">PLC</h3>
                  <p className="text-sm text-gray-400">Programación Avanzada</p>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-800 flex items-center gap-4 hover:border-blue-500/50 transition-colors">
                <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Cog className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Robótica</h3>
                  <p className="text-sm text-gray-400">Integración y Control</p>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-800 flex items-center gap-4 hover:border-blue-500/50 transition-colors">
                <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold">SCADA</h3>
                  <p className="text-sm text-gray-400">Sistemas de Control</p>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-800 flex items-center gap-4 hover:border-blue-500/50 transition-colors">
                <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold">IoT</h3>
                  <p className="text-sm text-gray-400">Industria 4.0</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Mafrinsa. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;