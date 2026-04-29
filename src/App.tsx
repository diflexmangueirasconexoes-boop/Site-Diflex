/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ShoppingBag, 
  Hammer, 
  Car, 
  MoveRight,
  Droplets,
  Settings,
  CircleCheck,
  Facebook,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS, PRODUCT_CATEGORIES, SERVICES, Product } from './constants';

const WHATSAPP_NUMBER = "5591992699577";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento.`;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = activeCategory === "Todas" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="https://i.ibb.co/4wm8t3Wv/Whats-App-Image-2026-04-29-at-09-15-59-Picsart-Background-Remover.png" 
              alt="Diflex Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            {['Home', 'Sobre', 'Produtos', 'Serviços', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`hover:text-brand-secondary transition-colors ${
                  scrolled ? "text-gray-700" : "text-white sm:text-gray-700 lg:text-white"
                }`}
              >
                {item}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-secondary hover:bg-orange-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all shadow-lg"
            >
              <Phone size={16} />
              Orçamento
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-20"
          >
            <div className="flex flex-col items-center gap-8 p-8 text-xl font-display font-bold">
              {['Home', 'Sobre', 'Produtos', 'Serviços', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-primary text-white px-8 py-3 rounded-full w-full text-center"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/k20Cydqm/Chat-GPT-Image-29-de-abr-de-2026-09-36-45.png" 
            alt="Profissional prensando mangueira hidráulica"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75 z-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white drop-shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              DIFLEX <br />
              <span className="text-brand-secondary">Mangueiras & Conexões</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Soluções robustas em mangueiras hidráulicas, montagem especializada e acessórios industriais de alta performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#produtos" 
                className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
              >
                <ShoppingBag size={20} />
                Nossos Produtos
              </a>
              <a 
                href={WHATSAPP_LINK}
                className="bg-brand-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-xl"
              >
                <Phone size={20} />
                WhatsApp Orçamentos
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 rounded-full bg-white/20 relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm">Qualidade e Precisão</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">Sobre a Diflex</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A Diflex é especialista na distribuição de mangueiras e conexões em âmbito nacional. Contamos com um estoque completo e variado para atender às mais diversas necessidades das linhas de produção ou manutenção industrial.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Trabalhamos com os mais rígidos padrões de qualidade, garantindo eficiência, segurança e durabilidade em cada componente fornecido.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CircleCheck className="text-brand-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Pronta Entrega</h4>
                  <p className="text-sm text-gray-500">Estoque variado sempre disponível.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="text-brand-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Alta Pressão</h4>
                  <p className="text-sm text-gray-500">Produtos testados para uso severo.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://i.ibb.co/VYLqB5VM/Captura-de-tela-2026-04-29-104500.jpg" 
              alt="Instalações da Diflex" 
              className="rounded-2xl shadow-2xl w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute -bottom-8 -left-8 bg-brand-primary text-white p-8 rounded-xl hidden lg:block">
              <div className="text-4xl font-bold mb-1">50+</div>
              <div className="text-sm opacity-80">Anos de Experiência no Mercado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm">O que fazemos</span>
          <h2 className="text-4xl font-bold mt-2">Nossos Serviços Especializados</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center mb-6">
                {service.icon === "Hammer" && <Hammer size={32} />}
                {service.icon === "Car" && <Car size={32} />}
                {service.icon === "ShoppingBag" && <Settings size={32} />}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href={WHATSAPP_LINK} className="text-brand-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Saiba Mais <MoveRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Catalog */}
      <section id="produtos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm">Catálogo Completo</span>
            <h2 className="text-4xl font-bold mt-2 mb-8">Nossa Linha de Produtos</h2>
            
            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory("Todas")}
                className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors border overflow-hidden ${
                  activeCategory === "Todas" ? "text-white border-transparent" : "bg-white text-gray-600 border-gray-200"
                }`}
              >
                <span className="relative z-10">Todas</span>
                {activeCategory === "Todas" && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-brand-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
              {PRODUCT_CATEGORIES.map(cat => (
                <motion.button 
                  key={cat}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors border overflow-hidden ${
                    activeCategory === cat ? "text-white border-transparent" : "bg-white text-gray-600 border-gray-200"
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-brand-primary"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ 
                    duration: 0.4,
                    delay: idx * 0.05,
                    layout: { type: "spring", stiffness: 200, damping: 25 }
                  }}
                  key={p.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer"
                >
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-primary/5 animate-pulse z-0" />
                    <img 
                      src={p.image} 
                      alt={p.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onLoad={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.previousElementSibling?.classList.add('opacity-0');
                        target.classList.remove('opacity-0');
                      }}
                      className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 opacity-0 z-10"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-brand-primary/80 backdrop-blur-md text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded-lg tracking-wider border border-white/20 shadow-xl">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-brand-secondary transition-colors line-clamp-1">{p.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2">
                      {p.description}
                    </p>
                    
                    {p.features && (
                      <ul className="space-y-2 mb-8">
                        {p.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                            <ChevronRight size={14} className="text-brand-secondary" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    <a 
                      href={WHATSAPP_LINK} 
                      className="w-full flex items-center justify-center gap-2 bg-brand-primary py-3 text-white font-bold rounded-lg hover:bg-blue-900 transition-all shadow-md active:scale-95"
                    >
                      <ShoppingBag size={18} />
                      Consultar Orçamento
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm">Fale Conosco</span>
              <h2 className="text-4xl font-bold mt-2 mb-8">Estamos Prontos para Atender Sua Demanda</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-brand-primary rounded-lg flex items-center justify-center">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Nosso Endereço</h4>
                    <p className="text-gray-500">Tv. Lomas Valentinas, 1741 - Marco</p>
                    <p className="text-gray-500">Belém, PA - CEP 66093-671</p>
                    <a 
                      href="https://maps.app.goo.gl/GVzZqL7MbkcGJkBL7" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-brand-primary text-sm font-bold hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      Ver no Google Maps <ChevronRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-brand-primary rounded-lg flex items-center justify-center">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Telefones & WhatsApp</h4>
                    <p className="text-gray-500">(91) 99269-9577 (WhatsApp)</p>
                    <p className="text-gray-500">(91) 3276-9000 / 3276-3084</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-brand-primary rounded-lg flex items-center justify-center">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">E-mail</h4>
                    <p className="text-gray-500">diflexmangueirasconexoes@gmail.com</p>
                    <p className="text-gray-500">diflex.nfe@hotmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-primary hover:text-white transition-all">
                  <Facebook />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-primary hover:text-white transition-all">
                  <Instagram />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-tighter">Envie sua Mensagem</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all bg-white" placeholder="Seu nome" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Telefone</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all bg-white" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all bg-white" placeholder="seu@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Assunto</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all bg-white">
                    <option>Orçamento de Mangueiras</option>
                    <option>Conexões Industriais</option>
                    <option>Serviços de Montagem</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all bg-white" placeholder="Descreva sua necessidade..."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-all shadow-lg active:scale-95 uppercase tracking-widest text-sm">
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
             <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://i.ibb.co/4wm8t3Wv/Whats-App-Image-2026-04-29-at-09-15-59-Picsart-Background-Remover.png" 
                alt="Diflex Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-6">
              Líder no mercado de mangueiras e conexões hidráulicas. Qualidade técnica, precisão e comprometimento com o sucesso da sua indústria.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#produtos" className="hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Serviços</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Horário de Atendimento</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Segunda a Sexta: 08:00 - 18:00</li>
              <li>Sábado: 08:00 - 12:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Diflex Mangueiras e Conexões. Todos os direitos reservados.</p>
        </div>
      </footer>
      
      {/* WhatsApp Floating Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
           Atendimento Online
        </span>
        <Phone size={24} />
      </a>
    </div>
  );
}
