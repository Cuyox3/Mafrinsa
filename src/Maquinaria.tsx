import React, { useState, useEffect } from 'react';
import { Factory, Cog, Building2, Truck, Pill as Pills, Package, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const industries = [
    {
      icon: Package,
      title: "Industria Alimenticia",
      description: "Equipos especializados para procesamiento y empaque de alimentos con estándares sanitarios."
    },
    {
      icon: Truck,
      title: "Industria Automotriz",
      description: "Soluciones de automatización para líneas de ensamblaje y control de calidad."
    },
    {
      icon: Pills,
      title: "Industria Farmacéutica",
      description: "Equipos de precisión para producción y empaque de medicamentos."
    },
    {
      icon: Package,
      title: "Industria Cartonera",
      description: "Maquinaria especializada para fabricación y procesamiento de cartón."
    },
    {
      icon: MoreHorizontal,
      title: "Y Más Industrias",
      description: "Adaptamos nuestras soluciones a cualquier sector industrial."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length);
  };

  return (
    <div className="min-h-screen bg-black">

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

      {/* Servicios */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Desarrollo de Maquinaria Especializada</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Diseñamos y fabricamos maquinaria industrial a medida, adaptada a las necesidades específicas de su empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-blue-900/20 transition-shadow border border-gray-800">
              <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
                <Cog className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Automatización de Procesos</h3>
              <p className="text-gray-400">Optimizamos sus líneas de producción con tecnología de vanguardia y sistemas inteligentes.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-blue-900/20 transition-shadow border border-gray-800">
              <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Maquinaria Personalizada</h3>
              <p className="text-gray-400">Desarrollamos equipos específicos para sus necesidades de producción y eficiencia.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-blue-900/20 transition-shadow border border-gray-800">
              <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Integración de Sistemas Automáticos</h3>
              <p className="text-gray-400">Conectamos sus sistemas y maquinaria para una operación sincronizada y eficiente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Carousel */}
      <section className="mb-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Industrias a las que Servimos</h2>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-xl bg-gray-800 p-8 min-h-[300px] relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  {React.createElement(industries[currentSlide].icon, { className: "w-6 h-6 text-blue-400" })}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">{industries[currentSlide].title}</h3>
                  <p className="text-gray-300">{industries[currentSlide].description}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {industries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
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

export default App;
