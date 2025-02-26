import { useEffect, useState } from 'react';
import { Cpu, Notebook as Robot, X, Shield, Zap, Workflow, Lightbulb, Users, Timer, CheckCircle, Menu } from 'lucide-react';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0A0F1E] text-white">

        {/* Animated background */}
        <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1A237E,transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#311B92,transparent_70%)]" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSAyOS41aC0xdi0xaDFWMjkuNXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] bg-repeat opacity-10" />
        </div>

        {/* Content */}
        <div className="relative z-10">
            <main>

                {/* Hero */}
                <div className="relative h-[100vh] flex items-center overflow-hidden ">

                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/90 to-transparent z-10"/>

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

                        <div className="container mx-auto px-4 relative z-20">

                            <div className="max-w-3xl mt-20">
                                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                Soportes de{' '}
                                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                                        Ingeniería
                                    </span>
                                </h1>
                                <p className="text-2xl md:text-xl text-gray-300 mb-10 md:mb-8">
                                    Transformamos la industria con soluciones de ingeniería avanzadas y personalizadas para cada sector.
                                </p>
                                <div className="flex gap-4 mb-20 md:mb-0">
                                    <a href="#Servicios">
                                        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                                            Explorar Servicios
                                        </button>
                                    </a>
                                    
                                    <a href="/Contacto">
                                        <button className="border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                                            Contactar
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>

                {/* Servicios */}
                <section className="py-20" id='Servicios'>
                    <div className="container mx-auto px-4">
                        <h2 className="text-5xl font-bold mb-16 text-center">Servicios Destacados</h2>
                        
                        {/* PLC and Automation */}
                        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
                            <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
                                <img
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
                                alt="PLC Programming"
                                className="relative rounded-3xl w-full object-cover aspect-video"
                                />
                            </div>
                            </div>
                            <div className="lg:w-1/2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-indigo-500/10">
                                <Cpu className="w-6 h-6 text-indigo-400" />
                                </div>
                                <h3 className="text-2xl font-bold">Programación PLC y Automatización</h3>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Desarrollamos soluciones de control automatizado utilizando PLCs de última generación, 
                                integrando sistemas complejos y optimizando procesos industriales.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-indigo-400" />
                                <span>Programación estructurada y eficiente</span>
                                </li>
                                <li className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-indigo-400" />
                                <span>Integración con sistemas SCADA</span>
                                </li>
                                <li className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-indigo-400" />
                                <span>Monitoreo en tiempo real</span>
                                </li>
                            </ul>
                            </div>
                        </div>

                        {/* Robotics */}
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-24">
                            <div className="lg:w-1/2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-purple-500/10">
                                <Robot className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-2xl font-bold">Robótica Industrial</h3>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Implementamos soluciones robóticas avanzadas para automatizar procesos complejos
                                y mejorar la eficiencia productiva.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-purple-400" />
                                <span>Programación de robots industriales</span>
                                </li>
                                <li className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-purple-400" />
                                <span>Células robotizadas completas</span>
                                </li>
                                <li className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-purple-400" />
                                <span>Integración con sistemas existentes</span>
                                </li>
                            </ul>
                            </div>
                            <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
                                <img
                                src="https://plus.unsplash.com/premium_photo-1661877302862-1549f9af7a5e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Industrial Robotics"
                                className="relative rounded-3xl w-full object-cover aspect-video"
                                />
                            </div>
                            </div>
                        </div>

                        {/* Safety and Risk Analysis */}
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
                                    <img
                                    src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Industrial Safety"
                                    className="relative rounded-3xl w-full object-cover aspect-video"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-red-500/10">
                                    <Shield className="w-6 h-6 text-red-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Seguridad Industrial</h3>
                                </div>
                                <p className="text-gray-400 mb-6">
                                    Evaluamos y mejoramos la seguridad de sus instalaciones industriales,
                                    implementando sistemas de protección avanzados.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-red-400" />
                                    <span>Análisis de riesgos exhaustivo</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-red-400" />
                                    <span>Sistemas de seguridad certificados</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-red-400" />
                                    <span>Capacitación en seguridad</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Servicios Adicionales */}
                <section className="py-20 bg-white/5">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Servicios Adicionales</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Electricas */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="w-12 h-12 mb-6 rounded-xl bg-amber-500/10 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-amber-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Soluciones Eléctricas</h3>
                            <p className="text-gray-400">Diseño e implementación de sistemas eléctricos industriales completos.</p>
                            </div>

                            {/* Diseño  */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="w-12 h-12 mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                <Lightbulb className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Servicios de Diseño</h3>
                            <p className="text-gray-400">Diseño mecánico y eléctrico para proyectos industriales.</p>
                            </div>

                            {/* Integracion Procesos */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="w-12 h-12 mb-6 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                <Workflow className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Integración de Procesos</h3>
                            <p className="text-gray-400">Conectamos y optimizamos sus sistemas industriales.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Por Que Elegirnos */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-16 text-center">¿Por qué Elegirnos?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-indigo-500/10 flex items-center justify-center">
                            <Users className="w-8 h-8 text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Equipo Experto</h3>
                        <p className="text-gray-400">Profesionales altamente calificados con años de experiencia.</p>
                        </div>
                        <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-500/10 flex items-center justify-center">
                            <Timer className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Respuesta Rápida</h3>
                        <p className="text-gray-400">Atención inmediata a sus necesidades y emergencias.</p>
                        </div>
                        <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pink-500/10 flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-pink-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Calidad Garantizada</h3>
                        <p className="text-gray-400">Soluciones probadas y certificadas internacionalmente.</p>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Stats */}
                <div className="bg-gradient-to-b from-[#0A0F1E] to-[#0A0F1E]/50 py-20">
                    <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                        <div className="text-4xl font-bold text-indigo-400 mb-2">+500</div>
                        <div className="text-gray-400">Proyectos Completados</div>
                        </div>
                        <div className="text-center">
                        <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                        <div className="text-gray-400">Años de Experiencia</div>
                        </div>
                        <div className="text-center">
                        <div className="text-4xl font-bold text-pink-400 mb-2">98%</div>
                        <div className="text-gray-400">Clientes Satisfechos</div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-b from-transparent to-indigo-950/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl font-bold mb-6">¿Listo para Transformar su Industria?</h2>
                            <p className="text-xl text-gray-400 mb-8">
                            Permítanos ayudarle a optimizar sus procesos con soluciones de ingeniería avanzadas.
                            </p>
                            <a href="/Contacto">
                                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                                Solicitar Consultoría Gratuita
                                </button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-8 border-t border-white/5">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Mafrinsa. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    </div>
  );
}

export default App;