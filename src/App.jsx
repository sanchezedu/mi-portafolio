import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const projects = [
  { title: 'AutoTech', category: 'Automotriz', url: 'auto-tech-three.vercel.app', img: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400' },
  { title: 'Delizia', category: 'Restaurante', url: 'delizia-restaurant.vercel.app', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400' },
  { title: 'CIVILENG', category: 'Ing. Civil', url: 'civil-engineering-gray.vercel.app', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400' },
  { title: 'Aurora Cove', category: 'Hotel', url: 'aurora-cove.vercel.app', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400' },
  { title: 'VisionOptica', category: 'Óptica', url: 'vision-optica-premium.vercel.app', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400' },
  { title: 'Cookie Crush', category: 'Galletas', url: 'cookie-shop-kappa.vercel.app', img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400' },
  { title: 'Vintage', category: 'Antigüedades', url: 'vintage-collective.vercel.app', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400' },
  { title: 'Paws Clinic', category: 'Veterinaria', url: 'paws-clinic-chi.vercel.app', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400' },
  { title: 'Inmob-Premium', category: 'Inmobiliaria', url: 'inmob-premium.vercel.app', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400' },
  { title: 'LexCorp', category: 'Abogados', url: 'lexcorp-firma.vercel.app', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400' },
  { title: 'TransGlobal', category: 'Logística', url: 'transglobal-logistics.vercel.app', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400' },
]

const services = [
  { icon: 'fa-palette', title: 'Landing Pages', desc: 'Diseños únicos y profesionales que convierten visitantes en clientes.' },
  { icon: 'fa-code', title: 'Desarrollo React', desc: 'Aplicaciones web modernas, rápidas y escalables.' },
  { icon: 'fa-mobile-alt', title: 'Diseño Responsive', desc: 'Perfecto funcionamiento en móviles, tablets y desktop.' },
  { icon: 'fa-rocket', title: 'Deploy & Hosting', desc: 'Publicación profesional en Vercel, Netlify y más.' },
  { icon: 'fa-search', title: 'SEO', desc: 'Optimización para motores de búsqueda desde el inicio.' },
  { icon: 'fa-film', title: 'Animaciones', desc: 'Efectos visuales atractivos con GSAP y CSS.' },
]

const techs = ['React', 'Next.js', 'Tailwind CSS', 'GSAP', 'Vite', 'Vercel', 'GitHub', 'Figma', 'JavaScript', 'HTML5', 'CSS3', 'Node.js']

function App() {
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    gsap.fromTo('.hero-content > *', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.3 })
    gsap.fromTo('.hero-img', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 0.5 })
    
    gsap.fromTo('.project-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: projectsRef.current, start: 'top 80%' } })
    gsap.fromTo('.service-card', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' } })
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-sm z-50 py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-white no-underline">Edu<span className="text-[#e94560]">.dev</span></a>
          <nav className="flex items-center gap-6">
            <a href="#proyectos" className="text-white no-underline font-medium hover:text-[#e94560] transition">Proyectos</a>
            <a href="#servicios" className="text-white no-underline font-medium hover:text-[#e94560] transition">Servicios</a>
            <a href="#contacto" className="bg-[#e94560] text-white px-5 py-2 rounded-full font-semibold no-underline hover:bg-[#c1121f] transition">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-5 flex items-center gap-12">
          <div className="hero-content flex-1">
            <div className="text-[#e94560] font-semibold mb-4">¡Hola! Soy Edu</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">
              Desarrollo Web<br /><span className="text-[#e94560]">& Soluciones Digitales</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">Transformo ideas en experiencias digitales extraordinarias. Especialista en landing pages modernas con React, Tailwind CSS y animaciones GSAP.</p>
            <div className="flex gap-4 mb-8">
              <a href="#proyectos" className="bg-[#e94560] text-white px-8 py-3 rounded-full font-semibold no-underline hover:bg-[#c1121f] transition">Ver Proyectos</a>
              <a href="#contacto" className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold no-underline hover:bg-white/10 transition">Contactar</a>
            </div>
            <div className="flex gap-8">
              <div><div className="text-3xl font-bold text-[#e94560]">11</div><div className="text-xs text-gray-500 uppercase">Proyectos</div></div>
              <div><div className="text-3xl font-bold text-[#e94560]">100%</div><div className="text-xs text-gray-500 uppercase">Responsive</div></div>
              <div><div className="text-3xl font-bold text-[#e94560]">5+</div><div className="text-xs text-gray-500 uppercase">Años Exp.</div></div>
            </div>
          </div>
          <div className="hero-img flex-1 hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e94560] to-[#f5a623] rounded-3xl rotate-6"></div>
              <div className="absolute inset-0 bg-[#1a1a2e] rounded-3xl flex items-center justify-center">
                <span className="text-8xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 bg-white/5">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-4">
            {techs.map((t, i) => (
              <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} id="servicios" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Mis <span className="text-[#e94560]">Servicios</span></h2>
          <p className="text-gray-400 text-center mb-12">Lo que puedo ofrecerte</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="service-card p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#e94560]/50 transition">
                <div className="w-12 h-12 bg-[#e94560]/20 rounded-xl flex items-center justify-center text-[#e94560] text-xl mb-4">
                  <i className={`fas fa-${s.icon}`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section ref={projectsRef} id="proyectos" className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Mis <span className="text-[#e94560]">Proyectos</span></h2>
          <p className="text-gray-400 text-center mb-12">11 landing pages profesionalmente diseñadas</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <a key={i} href={`https://${p.url}`} target="_blank" rel="noopener noreferrer" className="project-card group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#e94560]/50 transition">
                <div className="relative h-40 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" loading="lazy" />
                  <div className="absolute top-3 right-3 bg-[#e94560] text-white text-xs px-3 py-1 rounded-full">{p.category}</div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-[#e94560] transition">{p.title}</h3>
                  <p className="text-[#e94560] text-sm">{p.url}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-[#e94560] to-[#c1121f] text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
          <p className="mb-8 opacity-90">Contáctame y hagamos realidad tu proyecto web</p>
          <a href="mailto:edu@local.dev" className="inline-block bg-white text-[#e94560] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
            Enviar Mensaje
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            <div>
              <a href="#" className="text-xl font-bold text-white no-underline">Edu<span className="text-[#e94560]">.dev</span></a>
              <p className="text-gray-500 text-sm mt-4">Desarrollo Web & Soluciones Digitales</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>edu@local.dev</li>
                <li>+593 99 999 9999</li>
                <li>Guayaquil, Ecuador</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#proyectos" className="text-gray-500 hover:text-white transition text-sm">Proyectos</a></li>
                <li><a href="#servicios" className="text-gray-500 hover:text-white transition text-sm">Servicios</a></li>
                <li><a href="https://github.com/sanchezedu" target="_blank" className="text-gray-500 hover:text-white transition text-sm">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-600 text-sm">
            © 2026 Edu.dev - Todos los derechos reservados
          </div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/593999999999" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp">
        <i className="fab fa-whatsapp text-white text-2xl"></i>
      </a>
    </div>
  )
}

export default App
