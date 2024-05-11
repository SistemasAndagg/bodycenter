import './index.css';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="bg-teal-500 text-white py-4 flex justify-center items-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-serif font-semibold italic">Shape Body Center</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 bg-gradient-to-b from-white to-teal-300">
        <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard title="Masajes Relajantes" description="Sumérgete en la tranquilidad con nuestros masajes personalizados." />
          <ServiceCard title="Tratamientos Faciales" description="Cuida tu piel con nuestros tratamientos faciales de alta calidad." />
          <ServiceCard title="Terapias Corporales" description="Equilibra cuerpo y mente con nuestras terapias corporales especializadas." />
          <ServiceCard title="Yoga y Meditación" description="Encuentra paz interior con nuestras clases de yoga y meditación." />
        </div>

        <div className="container mx-auto mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonios de Clientes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard name="María" testimonial="¡Excelente servicio! Me encantó la experiencia de relajación completa que ofrece Shape Body Center." />
            <TestimonialCard name="Juan" testimonial="Los tratamientos faciales aquí son increíbles. Mi piel nunca se ha visto tan bien." />
            <TestimonialCard name="Ana" testimonial="Las terapias corporales me ayudaron a aliviar el estrés y las tensiones musculares. ¡Altamente recomendado!" />
          </div>
        </div>

        <div className="container mx-auto mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Galería de Imágenes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="gallery1.jpg" alt="Galería 1" className="rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" />
            <img src="gallery2.jpg" alt="Galería 2" className="rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" />
            <img src="gallery3.jpg" alt="Galería 3" className="rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" />
            <img src="gallery4.jpg" alt="Galería 4" className="rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" />
            <img src="gallery5.jpg" alt="Galería 5" className="rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" />
            <img src="gallery6.jpg" alt="Galería 6" className="rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Shape Body Center. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

const ServiceCard: React.FC<{ title: string, description: string }> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2 text-teal-900">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const TestimonialCard: React.FC<{ name: string, testimonial: string }> = ({ name, testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <h3 className="text-lg font-semibold mb-2 text-teal-900">{name}</h3>
      <p>{testimonial}</p>
    </div>
  );
}

export default App;
