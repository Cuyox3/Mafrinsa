import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="bg-black min-h-screen">

      {/* Desarrollo de Maquinaria */}
      <section id="maquinaria" className="section" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1548945665-56d2712b4986?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80")'
      }}>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-light mb-4">DESARROLLO DE</h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-8">MAQUINARIA</h3>
          <Link to="/maquinaria" className="btn">EXPLORAR SOLUCIONES</Link>
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