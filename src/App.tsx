import './index.css';

const App: React.FC = () => {
  return (
    <div className="container ">
      <header>
        <h1 className=' text-fuchsia-300'>Shape Body Center - SPA</h1>
        <nav>
          <ul>
            <li><a href="/intro">Inicio</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="intro" className="intro-section">
          <h2>Bienvenido a Shape Body Center</h2>
          <p>Somos un centro dedicado a tu bienestar y salud física.</p>
        </section>
        <section id="services" className="services-section">
          <h2>Nuestros Servicios</h2>
          <ul>
            <li>Servicio 1</li>
            <li>Servicio 2</li>
            <li>Servicio 3</li>
          </ul>
        </section>
        <section id="contact" className="contact-section">
          <h2>Contacto</h2>
          <p>Ponte en contacto con nosotros para obtener más información.</p>
          <p>Email: info@shapebodycenter.com</p>
          <p>Teléfono: +123456789</p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Shape Body Center. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
