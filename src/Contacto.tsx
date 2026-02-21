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
    
    const phoneNumber = "525638533118";
    const text = `Hola MAF AUTOMATION, me gustaría contactarlos para mi proyecto:
Nombre: ${formState.name}
Email: ${formState.email}
Empresa: ${formState.company}
Teléfono: ${formState.phone}
Tipo de Proyecto: ${formState.projectType}
Mensaje: ${formState.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

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
                            <p className="text-gray-400">+52 56 3853 3118</p>
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