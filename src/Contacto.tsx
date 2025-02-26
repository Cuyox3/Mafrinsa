import React, { useState } from 'react';
import { Menu, X, Mail, Phone, Clock, Send, Loader2, MessageSquare, Building, Users } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormState({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
        {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1A237E,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#311B92,transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSAyOS41aC0xdi0xaDFWMjkuNXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] bg-repeat opacity-20" />
      </div>

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
            <main className="container mx-auto px-4 py-12">

                {/* Title  */}
                <div className="text-center mt-10 md:mt-20 mb-8 md:mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    Conectemos Tu Visión con Nuestra Experiencia!
                    </h1>
                    <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
                    Estamos listos para transformar tus ideas en soluciones de automatización innovadoras!
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Form */}
                    <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 shadow-xl">
                    <h2 className="text-2xl font-bold mb-6">Cuéntanos sobre tu Proyecto</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Nombre</label>
                                <input
                                type="text"
                                value={formState.name}
                                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                type="email"
                                value={formState.email}
                                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                required
                                />
                            </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Empresa</label>
                                <input
                                type="text"
                                value={formState.company}
                                onChange={(e) => setFormState(prev => ({ ...prev, company: e.target.value }))}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Teléfono</label>
                                <input
                                type="tel"
                                value={formState.phone}
                                onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                required
                                />
                            </div>
                        </div>

                        <div>
                        <label className="block text-sm font-medium mb-2">Tipo de Proyecto</label>
                        <select
                            value={formState.projectType}
                            onChange={(e) => setFormState(prev => ({ ...prev, projectType: e.target.value }))}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            required
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="automation">Automatización de Procesos</option>
                            <option value="machinery">Desarrollo de Maquinaria</option>
                            <option value="integration">Integración de Sistemas</option>
                            <option value="consulting">Consultoría</option>
                        </select>
                        </div>

                        <div>
                        <label className="block text-sm font-medium mb-2">Mensaje</label>
                        <textarea
                            value={formState.message}
                            onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                            rows={4}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                            required
                        ></textarea>
                        </div>

                        <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                        {isSubmitting ? (
                            <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Enviando...
                            </>
                        ) : (
                            <>
                            <Send className="w-5 h-5" />
                            Enviar Mensaje
                            </>
                        )}
                        </button>
                    </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors group">
                        <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900/30 transition-colors">
                            <MessageSquare className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Chat en Vivo</h3>
                        <p className="text-gray-400">Disponible 24/7 para atender tus consultas</p>
                        </div>

                        <div className="bg-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors group">
                        <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900/30 transition-colors">
                            <Users className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Soporte Técnico</h3>
                        <p className="text-gray-400">Equipo especializado a tu disposición</p>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
                        <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Building className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                              <h4 className="font-medium mb-1">Oficina Principal</h4>
                              <p className="text-gray-400">Invierno 2B, Pueblo San Juan Ixtacala, 54160 Tlalnepantla, Méx.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                            <h4 className="font-medium mb-1">Email</h4>
                            <p className="text-gray-400">info@mafrinsa.com</p>
                            <p className="text-gray-400">ventas@mafrinsa.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                            <h4 className="font-medium mb-1">Teléfono</h4>
                            <p className="text-gray-400">+52 55 9079 6751</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Clock className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                            <h4 className="font-medium mb-1">Horario de Atención</h4>
                            <p className="text-gray-400">Lunes a Viernes: 8:00 AM - 5:30 PM</p>
                            <p className="text-gray-400">Sábado: 9:00 AM - 2:00 PM</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </main>

            {/* Footer */}
            <footer className="mt-20 py-8 border-t border-gray-800">
            <div className="container mx-auto px-4 text-center text-gray-400">
                <p>© {new Date().getFullYear()} MAF AUTOMATION. Todos los derechos reservados.</p>
            </div>
            </footer>

        </div>
    </div>
  );
}

export default App;