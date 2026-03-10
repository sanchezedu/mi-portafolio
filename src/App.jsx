import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const projects = [
  { title: 'AutoTech', category: 'Automotriz', url: 'auto-tech-three.vercel.app', img: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600' },
  { title: 'Delizia', category: 'Restaurante', url: 'delizia-restaurant.vercel.app', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600' },
  { title: 'CIVILENG', category: 'Ing. Civil', url: 'civil-engineering-gray.vercel.app', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600' },
  { title: 'Aurora Cove', category: 'Hotel', url: 'aurora-cove.vercel.app', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600' },
  { title: 'VisionOptica', category: 'Óptica', url: 'vision-optica-premium.vercel.app', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600' },
  { title: 'Cookie Crush', category: 'Galletas', url: 'cookie-shop-kappa.vercel.app', img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600' },
  { title: 'Vintage', category: 'Antigüedades', url: 'vintage-collective.vercel.app', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600' },
  { title: 'Paws Clinic', category: 'Veterinaria', url: 'paws-clinic-chi.vercel.app', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600' },
  { title: 'Inmob-Premium', category: 'Inmobiliaria', url: 'inmob-premium.vercel.app', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600' },
  { title: 'LexCorp', category: 'Abogados', url: 'lexcorp-firma.vercel.app', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600' },
  { title: 'TransGlobal', category: 'Logística', url: 'transglobal-logistics.vercel.app', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600' },
]

const services = [
  { icon: 'fa-palette', title: 'Landing Pages', desc: 'Diseños únicos y profesionales que convierten visitantes en clientes.', color: 'from-pink-500 to-rose-500' },
  { icon: 'fa-code', title: 'Desarrollo React', desc: 'Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías.', color: 'from-purple-500 to-indigo-500' },
  { icon: 'fa-mobile-alt', title: 'Diseño Responsive', desc: 'Perfecto funcionamiento en móviles, tablets y desktop.', color: 'from-blue-500 to-cyan-500' },
  { icon: 'fa-rocket', title: 'Deploy & Hosting', desc: 'Publicación profesional en Vercel con SSL gratuito.', color: 'from-amber-500 to-orange-500' },
  { icon: 'fa-search', title: 'SEO', desc: 'Optimización completa para motores de búsqueda.', color: 'from-green-500 to-emerald-500' },
  { icon: 'fa-film', title: 'Animaciones GSAP', desc: 'Efectos visuales atractivos y experiencias memorables.', color: 'from-red-500 to-pink-500' },
]

const techs = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'GSAP', icon: '✨' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Vercel', icon: '🚀' },
  { name: 'GitHub', icon: '📂' },
  { name: 'Figma', icon: '🎯' },
]

function App() {
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    // Hero animations
    gsap.fromTo('.hero-text > *', 
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, delay: 0.3, ease: 'power3.out' }
    )
    
    gsap.fromTo('.hero-visual',
      { opacity: 0, scale: 0.8, rotation: -5 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.2, delay: 0.5, ease: 'back.out(1.7)' }
    )

    // Services scroll animation
    gsap.fromTo('.service-card', 
      { opacity: 0, y: 50, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6, 
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 75%',
        }
      }
    )

    // Projects scroll animation
    gsap.fromTo('.project-card',
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
        }
      }
    )

    // Tech items animation
    gsap.fromTo('.tech-item',
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.4, 
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.tech-section',
          start: 'top 85%',
        }
      }
    )
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tight">
            <span className="text-white">Edu</span>
            <span className="text-[#e94560]">.dev</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#proyectos" className="text-sm text-gray-400 hover:text-white transition">Proyectos</a>
            <a href="#servicios" className="text-sm text-gray-400 hover:text-white transition">Servicios</a>
            <a href="#tecnologias" className="text-sm text-gray-400 hover:text-white transition">Tecnologías</a>
            <a href="#contacto" className="bg-[#e94560] hover:bg-[#c73659] text-white px-5 py-2 rounded-full text-sm font-medium transition">
              Contactar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-24 pb-20 px-6 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e94560]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="hero-text">
            <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[#e94560] mb-6">
              ✨ Desarrollo Web & Soluciones Digitales
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Creando experiencias
              <span className="block bg-gradient-to-r from-[#e94560] via-[#f472b6] to-[#c084fc] bg-clip-text text-transparent">
                digitales extraordinarias
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
              Transformo ideas en sitios web profesionales. Especialista en landing pages 
              modernas con React, Tailwind CSS y animaciones GSAP.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#proyectos" className="bg-[#e94560] hover:bg-[#c73659] text-white px-8 py-4 rounded-full font-semibold transition">
                Ver Proyectos
              </a>
              <a href="#contacto" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold transition">
                Contactar
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex gap-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#e94560]">11</div>
                <div className="text-sm text-gray-500">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#e94560]">100%</div>
                <div className="text-sm text-gray-500">Responsive</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#e94560]">5+</div>
                <div className="text-sm text-gray-500">Años Exp.</div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual flex justify-center">
            <div className="relative w-80 h-80">
              {/* Main card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e94560] to-[#c084fc] rounded-3xl rotate-3 opacity-80"></div>
              <div className="absolute inset-0 bg-[#1a1a2e] rounded-3xl border border-white/10 flex flex-col items-center justify-center p-8">
                <div className="text-7xl mb-4">🚀</div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Edu.dev</div>
                  <div className="text-gray-400 text-sm">Desarrollo Web</div>
                </div>
                <div className="flex gap-2 mt-6">
                  <div className="w-3 h-3 bg-[#e94560] rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Bar */}
      <section className="tech-section py-8 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-gray-500 mb-4 text-center">Tecnologías con las que trabajo</p>
          <div className="flex flex-wrap justify-center gap-6">
            {techs.map((tech, i) => (
              <div key={i} className="tech-item flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="servicios" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Mis <span className="text-[#e94560]">Servicios</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Lo que puedo ofrecerte para tu proyecto web
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="service-card group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#e94560]/30 transition-all duration-300 hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform`}>
                  <i className={`fas fa-${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="proyectos" className="py-24 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Mis <span className="text-[#e94560]">Proyectos</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              11 landing pages profesionalmente diseñadas y deployadas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <a 
                key={i} 
                href={`https://${project.url}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-card group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#e94560]/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-[#e94560] text-white text-xs px-3 py-1 rounded-full font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#e94560] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#e94560] text-sm truncate">{project.url}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e94560] to-[#c084fc]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para trabajar juntos?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contáctame y hagamos realidad tu proyecto web. Respondo en menos de 24 horas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:edu@local.dev" className="bg-white text-[#e94560] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
              ✉️ Enviar Email
            </a>
            <a href="https://wa.me/593999999999" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <a href="#" className="text-2xl font-bold">
                <span className="text-white">Edu</span>
                <span className="text-[#e94560]">.dev</span>
              </a>
              <p className="text-gray-500 text-sm mt-2">Desarrollo Web & Soluciones Digitales</p>
            </div>
            
            <div className="flex gap-6 text-gray-400">
              <a href="#proyectos" className="hover:text-white transition">Proyectos</a>
              <a href="#servicios" className="hover:text-white transition">Servicios</a>
              <a href="#contacto" className="hover:text-white transition">Contacto</a>
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2026 Edu.dev
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/593999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp text-white text-2xl"></i>
      </a>
    </div>
  )
}

export default App
