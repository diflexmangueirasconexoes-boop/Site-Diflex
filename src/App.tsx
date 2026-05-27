/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ChevronDown,
  ShoppingBag, 
  Hammer, 
  Car, 
  MoveRight,
  Settings,
  ShieldCheck,
  Zap,
  Clock,
  Send,
  CheckCircle,
  Sparkles,
  Gauge,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS, PRODUCT_CATEGORIES, SERVICES, Product } from './constants';

const WHATSAPP_NUMBER = "559132769000";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20Diflex.`;

const getProductWhatsAppLink = (productTitle: string) => {
  const text = `Olá! Gostaria de fazer um orçamento para o produto: *${productTitle}*.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

const getServiceWhatsAppLink = (serviceTitle: string) => {
  const text = `Olá! Gostaria de obter mais informações sobre o serviço de: *${serviceTitle}*.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

// Map each category to its representative photo
const CATEGORY_MEDIAS: Record<string, { image: string, label: string }> = {
  "Mangueiras Hidráulicas": {
    image: "https://i.ibb.co/7JCvR8zQ/mangueira-hidra-ulica.jpg",
    label: "Mangueiras Hidráulicas"
  },
  "Mangueiras Industriais": {
    image: "https://i.ibb.co/8Dcxb0Rz/mangueira-ar-a-gua-300lb.jpg",
    label: "Mangueiras Industriais"
  },
  "Conexões Hidráulicas": {
    image: "https://i.ibb.co/B2MxS66z/terminal-hidra-ulico.jpg",
    label: "Conexões Hidráulicas"
  },
  "Conexões Pneumáticas": {
    image: "https://i.ibb.co/ymwwMkjc/tubo-em-PU.jpg",
    label: "Conexões Pneumáticas"
  },
  "Engates Rápidos": {
    image: "https://i.ibb.co/VcMCkBQF/engate-ra-pido-hidra-ulico.jpg",
    label: "Engates Rápidos"
  },
  "Abraçadeiras": {
    image: "https://i.ibb.co/QFhDhGkZ/abrac-adeira-recartilhada.jpg",
    label: "Abraçadeiras"
  },
  "Acessórios e Lava Jato": {
    image: "https://i.ibb.co/bMVvBf3m/acesso-rios-para-mangueira-de-a-gua.jpg",
    label: "Acessórios e Lava Jato"
  },
  "Válvulas": {
    image: "https://i.ibb.co/bRCVv8Wb/Valvula-Esfera-Tripartida-Classe-300.jpg",
    label: "Válvulas"
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: 'Orçamento de Mangueiras',
    mensagem: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create pre-filled WhatsApp text for the quote request
    const messageText = `Olá, gostaria de solicitar um orçamento!\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Assunto:* ${formData.assunto}\n` +
      `*Mensagem:* ${formData.mensagem}`;

    const customWaLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;
    
    // Open in new tab
    window.open(customWaLink, '_blank');
    setFormSubmitted(true);
    
    // Reset form success state after some time
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const handleCategorySelect = (categoryName: string) => {
    setActiveCategory(categoryName);
    const element = document.getElementById("produtos-detalhes-grid");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070708] text-gray-200 antialiased font-sans">
      
      {/* 1. HEADER (Desktop & Mobile view) */}
      <header className="w-full relative z-50 bg-[#040405] border-b border-red-950/40">
        {/* Navigation menu bar */}
        <nav className={`w-full transition-all duration-300 ${
          scrolled ? "fixed top-0 left-0 bg-[#09090b]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-red-950/40 py-3" : "relative bg-[#070709] py-4"
        }`}>
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            
            {/* Left element: Brand Logo and Name */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center">
                <img 
                  src="https://i.ibb.co/4wm8t3Wv/Whats-App-Image-2026-04-29-at-09-15-59-Picsart-Background-Remover.png" 
                  alt="Logo Diflex" 
                  className="h-9 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Center Links */}
            <div className="hidden md:flex items-center lg:gap-8 md:gap-5 text-xs font-semibold uppercase tracking-widest">
              {['HOME', 'SOBRE NÓS', 'PRODUTOS', 'SERVIÇOS', 'CONTATO'].map((item) => (
                <a 
                  key={item} 
                  href={item === "SOBRE NÓS" ? "#sobre" : `#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#E31B23] transition-colors relative py-1 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E31B23] transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA Action Button */}
            <div className="hidden md:block">
              <a 
                href="#contato"
                className="bg-[#E31B23] hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-sm tracking-wider uppercase inline-flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(227,27,35,0.3)] active:scale-95 border border-red-500/20"
              >
                <ShoppingBag size={14} />
                Faça seu Orçamento
              </a>
            </div>

            {/* Mobile Hamburger menu */}
            <button 
              className="md:hidden p-2 text-white hover:text-[#E31B23] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Alternar Menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 w-full z-40 bg-[#09090b]/98 backdrop-blur-lg border-b border-red-950/50 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-5 p-6 font-display font-medium text-center uppercase tracking-wider text-sm">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#E31B23] py-2 border-b border-red-950/20">Home</a>
              <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#E31B23] py-2 border-b border-red-950/20">Sobre Nós</a>
              <a href="#produtos" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#E31B23] py-2 border-b border-red-950/20">Produtos</a>
              <a href="#serviços" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#E31B23] py-2 border-b border-red-950/20">Serviços</a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#E31B23] py-2 border-b border-red-950/20">Contato</a>
              
              <div className="flex flex-col gap-3 pt-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] text-white py-3 rounded-md font-bold text-xs flex items-center justify-center gap-2"
                >
                  <Phone size={16} /> WhatsApp Vendas
                </a>
                <a 
                  href="#contato"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-[#E31B23] text-white py-3 rounded-md font-bold text-xs flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={16} /> Solicitar Orçamento
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* 2. HERO SECTION / BANNER PRINCIPAL */}
      <section id="home" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-gradient-to-tr from-[#020203] via-[#070709] to-[#020202] pt-14 md:pt-4">
        
        {/* Atmosphere Crimson Red Radial Glow Effect exactly matching user image style */}
        <div className="absolute right-[-10%] sm:right-[5%] top-[15%] w-[45vw] h-[45vw] rounded-full bg-red-600/15 blur-[120px] pointer-events-none z-0" />
        <div className="absolute left-[-5%] bottom-[-10%] w-[35vw] h-[35vw] rounded-full bg-red-900/10 blur-[130px] pointer-events-none z-0" />
        
        {/* Crisp industrial grids or carbon-infused texture overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(227,27,35,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(227,27,35,0.015)_1px,transparent_1px)] bg-[size:32px_32px] opacity-25 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.01),transparent)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 w-full grid md:grid-cols-12 gap-12 items-center flex-grow">
          
          {/* Hero Left Content Column with premium condensed typography & custom tight spacing */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Brand Top Identifier structured identically with red slashes and white outline box of mockup banner */}
              <div className="flex items-center gap-3.5 mb-6 select-none">
                <span className="text-[#E31B23] font-black italic text-lg tracking-tighter shrink-0">//</span>
                <span className="border border-white/20 px-3 py-1 text-white font-black text-xs uppercase tracking-widest inline-block select-none bg-black/40">DIFLEX MANGUEIRAS</span>
                <span className="text-[#E31B23] font-black italic text-lg tracking-tighter shrink-0">///</span>
              </div>

              {/* Stacked Title Structure with ultra high-impact typography pairing */}
              <div className="mb-6 select-none font-display italic">
                <span className="block text-white text-5xl sm:text-6xl lg:text-[76px] font-black uppercase tracking-tighter leading-[0.85] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  QUALIDADE E
                </span>
                <span className="block text-white text-5xl sm:text-6xl lg:text-[76px] font-black uppercase tracking-tighter leading-[0.85] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  PRECISÃO
                </span>
                <span className="block text-[#E31B23] text-5xl sm:text-6xl lg:text-[76px] font-black uppercase tracking-tighter leading-[0.85] drop-shadow-[0_0_25px_rgba(227,27,35,0.45)]">
                  EM CADA
                </span>
                <span className="block text-[#E31B23] text-5xl sm:text-6xl lg:text-[76px] font-black uppercase tracking-tighter leading-[0.85] drop-shadow-[0_0_25px_rgba(227,27,35,0.45)]">
                  CONEXÃO!
                </span>
              </div>
              
              {/* Refined clean description with high readability on dark background */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-[540px]">
                Soluções completas em mangueiras, conexões e acessórios para sua indústria com segurança, eficiência e durabilidade.
              </p>

              {/* Functional CTA Buttons with heavy borders and glowing states */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contato"
                  className="bg-[#E31B23] hover:bg-black hover:border-[#E31B23] border border-transparent text-white font-black text-xs uppercase tracking-widest text-center px-8 py-4 rounded-sm transition-all shadow-[0_0_25px_rgba(227,27,35,0.4)] hover:shadow-[0_0_35px_rgba(227,27,35,0.65)] duration-300 active:scale-95 flex items-center justify-center gap-2"
                >
                  <CheckCircle size={14} />
                  Solicitar Orçamento
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-transparent hover:bg-white/5 text-gray-100 font-extrabold text-xs uppercase tracking-widest text-center px-8 py-4 rounded-sm transition-all border border-gray-700 hover:border-white duration-300 flex items-center justify-center gap-2"
                >
                  <Phone size={14} className="text-[#E31B23]" />
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column - Showing premium high-definition diagnostic curving hydraulic hoses with metallic fixtures entirely without any cropping, expanded size */}
          <div className="md:col-span-6 lg:col-span-7 relative mt-8 md:mt-0 flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0 }}
              className="relative w-full max-w-[680px] xl:max-w-[760px] flex items-center justify-center lg:justify-end"
            >
              {/* Vibrant radial crimson atmosphere halo directly behind the hose to highlight premium engineering details, scaled up */}
              <div className="absolute w-96 h-96 sm:w-[480px] sm:h-[480px] rounded-full bg-red-600/25 blur-[100px] pointer-events-none z-0 scale-95" />
              <div className="absolute w-80 h-80 rounded-full border border-red-500/10 pointer-events-none z-0" />
              
              {/* Uncropped premium hydraulic hose image centered with pristine responsive handling, maximized space */}
              <img 
                src="https://i.postimg.cc/Ghh6V7ZR/Chat-GPT-Image-27-de-mai-de-2026-15-25-09.png" 
                alt="Mangueiras Hidráulicas Premium Multicamadas e Conexões Industriais Alta Performance" 
                className="relative z-10 w-full h-auto max-h-[480px] md:max-h-[520px] lg:max-h-[600px] xl:max-h-[700px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

        </div>

        {/* Banner Badges Bar - matching mockup bottom layout identically */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-red-500/10">
            {/* Badge 1 */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full border-2 border-[#E31B23] bg-[#0c0c0e] flex items-center justify-center text-white shadow-[0_0_15px_rgba(227,27,35,0.2)] shrink-0 transition-transform group-hover:scale-105">
                <ShoppingBag size={24} className="text-[#E31B23]" />
              </div>
              <div>
                <h4 className="font-black text-white text-sm uppercase tracking-wider font-display">PRONTA ENTREGA</h4>
                <p className="text-xs text-gray-400 font-medium mt-0.5">Estoque variado sempre disponível.</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full border-2 border-[#E31B23] bg-[#0c0c0e] flex items-center justify-center text-white shadow-[0_0_15px_rgba(227,27,35,0.2)] shrink-0 transition-transform group-hover:scale-105">
                <Gauge size={24} className="text-[#E31B23]" />
              </div>
              <div>
                <h4 className="font-black text-white text-sm uppercase tracking-wider font-display">ALTA PRESSÃO</h4>
                <p className="text-xs text-gray-400 font-medium mt-0.5">Produtos testados para uso severo.</p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full border-2 border-[#E31B23] bg-[#0c0c0e] flex items-center justify-center text-white shadow-[0_0_15px_rgba(227,27,35,0.2)] shrink-0 transition-transform group-hover:scale-105">
                <ShieldCheck size={24} className="text-[#E31B23]" />
              </div>
              <div>
                <h4 className="font-black text-white text-sm uppercase tracking-wider font-display font-black">QUALIDADE GARANTIDA</h4>
                <p className="text-xs text-gray-400 font-medium mt-0.5">Materiais de alta qualidade e máxima durabilidade.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating scroll down indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10 hidden sm:block">
          <a href="#serviços" className="flex flex-col items-center gap-1 text-xs text-gray-600 hover:text-white transition-colors">
            <span className="tracking-widest uppercase text-[8px] font-bold">Descobrir</span>
            <ChevronDown size={10} className="text-[#E31B23]" />
          </a>
        </div>
      </section>


      {/* 3. SEÇÃO DE SERVIÇOS ("O QUE FAZEMOS") */}
      <section id="serviços" className="relative py-24 bg-[#09090b] border-t border-b border-red-950/10">
        
        {/* Subtle details */}
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-red-950/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-[#E31B23] font-bold tracking-[0.25em] uppercase text-xs">O QUE FAZEMOS</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 uppercase tracking-wide flex items-center justify-center gap-3">
              <span className="text-red-600 text-lg md:text-xl font-normal">&raquo;</span>
              NOSSOS SERVIÇOS ESPECIALIZADOS
              <span className="text-red-600 text-lg md:text-xl font-normal">&laquo;</span>
            </h2>
            <div className="w-20 h-[3px] bg-[#E31B23] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(227,27,35,0.3)' }}
                className="bg-[#121215]/80 p-8 border border-red-950/20 rounded-lg shadow-2xl transition-all duration-300 relative group"
              >
                {/* Visual red corner accent highlight */}
                <span className="absolute top-0 right-0 w-[2px] h-0 bg-[#E31B23] transition-all group-hover:h-full group-hover:duration-500" />
                <span className="absolute bottom-0 left-0 w-[0px] h-[2px] bg-[#E31B23] transition-all group-hover:w-full group-hover:duration-500" />

                <div className="w-16 h-16 rounded-full border-2 border-red-600/30 flex items-center justify-center text-[#E31B23] mb-6 shadow-[0_0_15px_rgba(227,27,35,0.1)] group-hover:shadow-[0_0_20px_rgba(227,27,35,0.35)] transition-shadow">
                  {service.icon === "Hammer" && <Hammer size={26} />}
                  {service.icon === "Car" && <Car size={26} />}
                  {service.icon === "ShoppingBag" && <Settings size={26} />}
                </div>

                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>

                <a 
                  href={getServiceWhatsAppLink(service.title)} 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#E31B23] font-bold text-xs uppercase tracking-widest hover:text-white transition-all group/btn"
                >
                  <span className="border-b border-transparent group-hover/btn:border-[#E31B23] py-0.5">Saiba Mais</span>
                  <MoveRight size={14} className="group-hover/btn:translate-x-1.5 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Under services: Button triggering focus on physical Products category */}
          <div className="text-center">
            <a 
              href="#produtos" 
              className="bg-[#E31B23] hover:bg-red-700 text-white font-bold text-xs px-8 py-4 rounded-sm tracking-widest uppercase inline-flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] active:scale-95 duration-200"
            >
              <ShoppingBag size={14} />
              Catálogo Completo
            </a>
          </div>

        </div>
      </section>


      {/* 4. SEÇÃO DE PRODUTOS ("NOSSA LINHA DE PRODUTOS") */}
      <section id="produtos" className="relative py-24 bg-[#070708]">
        
        {/* Glow backdrop behind catalog */}
        <div className="absolute right-0 bottom-1/4 w-[40vw] h-[40vw] bg-red-950/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-[#E31B23] font-bold tracking-[0.25em] uppercase text-xs">NOSSA LINHA DE</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 uppercase tracking-wide">
              NOSSA LINHA DE <span className="text-[#E31B23] drop-shadow-[0_0_15px_rgba(227,27,35,0.25)]">PRODUTOS</span>
            </h2>
            <div className="w-20 h-[3px] bg-[#E31B23] mx-auto mt-4" />
          </div>

          {/* Premium Category Round Grid Elements (Just like requested mockup) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-4 mb-20">
            {PRODUCT_CATEGORIES.map((catName) => {
              const media = CATEGORY_MEDIAS[catName] || { 
                image: "https://i.ibb.co/7JCvR8zQ/mangueira-hidra-ulica.jpg",
                label: catName 
              };

              const isActive = activeCategory === catName;

              return (
                <motion.div 
                  onClick={() => handleCategorySelect(catName)}
                  key={catName}
                  className={`cursor-pointer group flex flex-col items-center p-3 rounded-lg border text-center transition-all ${
                    isActive 
                      ? 'bg-[#121215] border-[#E31B23]/70 shadow-[0_0_15px_rgba(227,27,35,0.2)]'
                      : 'bg-[#121215]/40 border-red-950/10 hover:border-red-600/30'
                  }`}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Category Image bubble / rounded holder inside */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-red-950/30 mb-3 bg-black relative flex items-center justify-center group-hover:border-[#E31B23]/70 group-hover:shadow-[0_0_15px_rgba(227,27,35,0.3)] transition-all">
                    <img 
                      src={media.image} 
                      alt={media.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#000]/10" />
                  </div>
                  
                  {/* Category Selection Circle Bullet Indicator style below image */}
                  <div className={`w-3.5 h-3.5 rounded-full mb-2 flex items-center justify-center border ${
                    isActive ? 'bg-[#E31B23] border-[#E31B23]' : 'border-gray-600 bg-transparent'
                  }`}>
                    {isActive && <div className="w-1 h-1 bg-white rounded-full" />}
                  </div>

                  {/* Uppercase Name */}
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-tight text-gray-300 group-hover:text-[#E31B23] transition-colors leading-tight line-clamp-2">
                    {media.label}
                  </span>

                  {/* Small pointer at bottom */}
                  <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronDown size={12} className="text-[#E31B23] animate-bounce" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Grid filter toggle header if user wants to reset filter to "Todas" */}
          <div className="flex justify-between items-center bg-[#121215]/80 p-4 border border-red-950/20 rounded-lg mb-8" id="produtos-detalhes-grid">
            <span className="text-xs uppercase font-black tracking-widest text-gray-400">
              Visualizando: <span className="text-white ml-2">{activeCategory === "Todas" ? "Todas as Categorias" : activeCategory}</span>
            </span>
            {activeCategory !== "Todas" && (
              <button 
                onClick={() => setActiveCategory("Todas")}
                className="text-[10px] tracking-wider uppercase font-bold text-[#E31B23] hover:text-white transition-colors"
              >
                Limpar Filtro (Mostrar Tudo)
              </button>
            )}
          </div>

          {/* Product cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6, borderColor: 'rgba(227,27,35,0.4)', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }}
                  transition={{ duration: 0.3 }}
                  key={p.id}
                  className="bg-[#121215]/90 rounded-none border border-red-950/25 overflow-hidden group flex flex-col justify-between"
                >
                  <div>
                    {/* Image space inside product */}
                    <div className="aspect-[4/3] bg-black/40 relative overflow-hidden">
                      <img 
                        src={p.image} 
                        alt={p.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#E31B23] text-white text-[9px] uppercase font-black tracking-widest px-2.5 py-1.5 border border-red-500/20">
                          {p.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-black uppercase tracking-tight text-white mb-2 group-hover:text-[#E31B23] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-3">
                        {p.description}
                      </p>
                      
                      {p.features && (
                        <div className="space-y-2 mb-6 border-t border-red-950/10 pt-4">
                          {p.features.slice(0, 3).map((f, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                              <span className="text-[#E31B23] font-bold text-sm leading-none">&raquo;</span>
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a 
                      href={getProductWhatsAppLink(p.title)} 
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#E31B23] hover:bg-black py-3 text-white font-black text-xs uppercase tracking-widest hover:border-[#E31B23] border border-transparent transition-all shadow-md active:scale-95 duration-200"
                    >
                      <ShoppingBag size={14} />
                      Consultar Orçamento
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>


      {/* 5. SEÇÃO DE DIFERENCIAIS */}
      <section className="relative py-20 bg-[#09090b] border-t border-b border-red-950/20">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31B23]/45 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-red-600/30 bg-red-950/20 flex items-center justify-center text-[#E31B23] flex-shrink-0">
                <CheckCircle size={22} />
              </div>
              <div>
                <h4 className="font-black text-white text-base uppercase tracking-wider">Alta Qualidade</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Trabalhamos estritamente com as melhores matérias primas globais.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-red-600/30 bg-red-950/20 flex items-center justify-center text-[#E31B23] flex-shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="font-black text-white text-base uppercase tracking-wider">Durabilidade</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Componentes dimensionados para operar sob condições severas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-red-600/30 bg-red-950/20 flex items-center justify-center text-[#E31B23] flex-shrink-0">
                <Zap size={22} />
              </div>
              <div>
                <h4 className="font-black text-white text-base uppercase tracking-wider">Entrega Rápida</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Estoque local otimizado garante máxima agilidade pro seu negócio.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-red-600/30 bg-red-950/20 flex items-center justify-center text-[#E31B23] flex-shrink-0">
                <Settings size={22} />
              </div>
              <div>
                <h4 className="font-black text-white text-base uppercase tracking-wider">Vendas Técnicas</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Profissionais treinados para encontrar a especificação adequada.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SOBRE NÓS SECTION */}
      <section id="sobre" className="relative py-24 bg-[#070708]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute inset-0 bg-red-600/5 rounded-2xl blur-[40px] pointer-events-none" />
            
            {/* Outline metal borders around installation */}
            <div className="relative p-2 border border-red-950/30 rounded-2xl bg-black">
              <img 
                src="https://i.ibb.co/VYLqB5VM/Captura-de-tela-2026-04-29-104500.jpg" 
                alt="Instalações da Distribuidora Diflex" 
                className="rounded-xl shadow-2xl w-full h-[380px] object-cover"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-[#E31B23] text-white p-6 rounded-none shadow-[5px_5px_0px_#000] hidden lg:block border border-red-300/10">
                <div className="text-4xl font-black mb-1">50+</div>
                <div className="text-[10px] tracking-widest uppercase font-bold opacity-90">Anos de Tradição Parceiros Industriais</div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#E31B23] font-bold tracking-[0.2em] uppercase text-xs">QUALIDADE E PRECISÃO</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6 uppercase tracking-tight text-white">
              SOBRE A DIFLEX
            </h2>
            <div className="w-12 h-[2px] bg-[#E31B23] mb-6" />
            
            <p className="text-gray-300 leading-relaxed mb-6">
              A Diflex é especialista na distribuição de mangueiras e conexões em âmbito nacional. Contamos com um estoque completo e variado para atender às mais diversas necessidades das linhas de produção ou manutenção industrial.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Trabalhamos com os mais rígidos padrões de qualidade, garantindo eficiência, segurança e durabilidade em cada componente fornecido.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
                Composto de borracha sintética de alta tenacidade e espirais de fios de aço
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
                Montagem técnica de mangueiras com prensagem certificada
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
                Mais de 10 categorias de conexões em latão, aço carbono e poliuretano
              </li>
            </ul>
          </div>

        </div>
      </section>


      {/* 6. SEÇÃO "FALE CONOSCO" */}
      <section id="contato" className="relative py-24 bg-[#09090b] border-t border-red-950/20">
        
        {/* Glow behind contact form */}
        <div className="absolute left-[20%] top-[10%] w-[35vw] h-[35vw] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-[#E31B23] font-bold tracking-[0.25em] uppercase text-sm">REQUISITE CONTATO</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4 uppercase text-white">
              FALE CONOSCO
            </h2>
            <div className="w-20 h-[3px] bg-[#E31B23] mx-auto" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Lado esquerdo: Informações da empresa */}
            <div className="lg:col-span-5 flex flex-col">
              
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mb-2">
                ESTAMOS PRONTOS PARA
              </h3>
              <h4 className="text-[#E31B23] text-3xl font-black uppercase tracking-tight mb-8 drop-shadow-[0_0_10px_rgba(227,27,35,0.2)]">
                ATENDER SUA DEMANDA
              </h4>

              <div className="space-y-8 mb-12">
                
                {/* Endereço */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm border border-red-950/40 bg-red-950/10 flex items-center justify-center text-[#E31B23] flex-shrink-0 shadow-md">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h5 className="font-black text-white uppercase text-xs tracking-wider mb-1">Nosso Endereço</h5>
                    <p className="text-gray-400 text-sm">Tv. Lomas Valentinas, 1741 - Marco</p>
                    <p className="text-gray-400 text-sm mb-2.5">Belém, PA - CEP 66093-671</p>
                    
                    <a 
                      href="https://maps.app.goo.gl/GVzZqL7MbkcGJkBL7" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 bg-[#E31B23] text-white font-bold text-[10px] uppercase tracking-widest px-4 py-2 hover:bg-red-700 transition-colors shadow-sm"
                    >
                      <Compass size={12} /> Ver no Google Maps
                    </a>
                  </div>
                </div>

                {/* Telefones */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm border border-red-950/40 bg-red-950/10 flex items-center justify-center text-[#E31B23] flex-shrink-0 shadow-md">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h5 className="font-black text-white uppercase text-xs tracking-wider mb-1">Telefones & WhatsApp</h5>
                    <p className="text-gray-100 text-sm font-semibold">(91) 3276-9000 (Fixo / WhatsApp)</p>
                    <p className="text-gray-400 text-sm">(91) 99269-9577 (Celular / Alternativo)</p>
                    <p className="text-gray-400 text-xs">(91) 3276-3084</p>
                  </div>
                </div>

                {/* E-mails */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm border border-red-950/40 bg-red-950/10 flex items-center justify-center text-[#E31B23] flex-shrink-0 shadow-md">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h5 className="font-black text-white uppercase text-xs tracking-wider mb-1">E-mail</h5>
                    <p className="text-gray-400 text-sm">diflexmangueirasconexoes@gmail.com</p>
                    <p className="text-gray-400 text-sm">diflex.nfe@hotmail.com</p>
                  </div>
                </div>

              </div>

              {/* Technical Branding Box exactly matching mockup on right sidebar/decor of contact details */}
              <div className="bg-[#121215]/60 p-6 border border-red-950/20 relative rounded-sm flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-[#E31B23]/5 rounded-sm blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-2 mb-4">
                  <img 
                    src="https://i.ibb.co/4wm8t3Wv/Whats-App-Image-2026-04-29-at-09-15-59-Picsart-Background-Remover.png" 
                    alt="Logo Diflex" 
                    className="h-10 w-auto"
                  />
                  <span className="text-white font-display font-extrabold tracking-widest text-base">DIFLEX</span>
                </div>
                
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Líder no mercado de mangueiras e conexões hidráulicas. Qualidade técnica, precisão e comprometimento com o sucesso da sua indústria.
                </p>

                <div className="border-t border-red-950/20 pt-4 flex gap-2">
                  <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest block">
                    &raquo; Alta Pressão, Hidráulica & Pneumática Certificada.
                  </span>
                </div>
              </div>

            </div>

            {/* Lado direito: Formulário de Orçamento */}
            <div className="lg:col-span-7 bg-[#121215] p-8 md:p-10 border border-red-950/25 shadow-2xl relative">
              <span className="absolute top-0 left-0 w-[4px] h-[35px] bg-[#E31B23]" />
              
              <h3 className="text-lg md:text-xl font-black uppercase text-white tracking-widest mb-6">
                ENVIE SUA MENSAGEM
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Row: Name and phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-none border border-red-950/30 focus:border-[#E31B23] outline-none transition-all bg-black/40 text-white placeholder-gray-600 font-medium text-sm" 
                      placeholder="Qual seu nome?" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">Telefone</label>
                    <input 
                      type="text" 
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-none border border-red-950/30 focus:border-[#E31B23] outline-none transition-all bg-black/40 text-white placeholder-gray-600 font-medium text-sm" 
                      placeholder="(91) 90000-0000" 
                    />
                  </div>
                </div>

                {/* Row: Email and Subject select */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">E-mail</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-none border border-red-950/30 focus:border-[#E31B23] outline-none transition-all bg-black/40 text-white placeholder-gray-600 font-medium text-sm" 
                      placeholder="seu@email.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">Assunto de interesse</label>
                    <select 
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-none border border-red-950/30 focus:border-[#E31B23] outline-none transition-all bg-black/50 text-white placeholder-gray-600 font-medium text-sm select-dark"
                    >
                      <option className="bg-[#09090b]" value="Orçamento de Mangueiras">Orçamento de Mangueiras</option>
                      <option className="bg-[#09090b]" value="Conexões Industriais">Conexões Industriais</option>
                      <option className="bg-[#09090b]" value="Serviços de Montagem">Serviços de Montagem</option>
                      <option className="bg-[#09090b]" value="Linha Auto / Lava Jato">Linha Auto / Lava Jato</option>
                      <option className="bg-[#09090b]" value="Outros Assuntos">Outros Assuntos</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">Mensagem / Lista de Produtos</label>
                  <textarea 
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={4} 
                    className="w-full px-4 py-3 rounded-none border border-red-950/30 focus:border-[#E31B23] outline-none transition-all bg-black/40 text-white placeholder-gray-600 font-medium text-sm" 
                    placeholder="Descreva aqui as mangueiras, conexões, abraçadeiras ou serviços que necessita..."
                  />
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  className="w-full bg-[#E31B23] hover:bg-red-700 text-white font-black py-4 uppercase tracking-widest text-xs inline-flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-red-950/30 active:scale-95 duration-200"
                >
                  <Send size={14} />
                  Enviar Solicitação
                </button>

                {formSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-950/50 border border-green-500/30 text-green-300 p-4 font-bold text-xs text-center uppercase tracking-wider"
                  >
                    🚀 Dados preparados! Redirecionando para o WhatsApp do atendimento...
                  </motion.div>
                )}
              </form>

            </div>

          </div>

        </div>
      </section>


      {/* 7. RODAPÉ */}
      <footer className="bg-[#040405] text-gray-400 pt-16 pb-8 border-t border-red-950/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30vh] h-[30vh] bg-red-950/5 rounded-full blur-[80px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo brand message */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://i.ibb.co/4wm8t3Wv/Whats-App-Image-2026-04-29-at-09-15-59-Picsart-Background-Remover.png" 
                alt="Diflex Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm mb-6 uppercase tracking-wider font-extrabold text-[#E31B23]">
              CONECTANDO FORÇA E QUALIDADE AO SEU NEGÓCIO!
            </p>
            <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
              Líder no mercado de mangueiras e conexões hidráulicas. Qualidade técnica, precisão e comprometimento com o sucesso da sua indústria no Pará e em todo o Brasil.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest mb-6 border-b border-red-950/40 pb-2">
              LINKS RÁPIDOS
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-400 font-semibold uppercase tracking-wider">
              <li>
                <a href="#home" className="hover:text-[#E31B23] transition-colors flex items-center gap-1">
                  <span className="text-red-600">&raquo;</span> Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#E31B23] transition-colors flex items-center gap-1">
                  <span className="text-red-600">&raquo;</span> Sobre Nós
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-[#E31B23] transition-colors flex items-center gap-1">
                  <span className="text-red-600">&raquo;</span> Produtos
                </a>
              </li>
              <li>
                <a href="#serviços" className="hover:text-[#E31B23] transition-colors flex items-center gap-1">
                  <span className="text-red-600">&raquo;</span> Serviços
                </a>
              </li>
            </ul>
          </div>

          {/* Customer opening hours segment */}
          <div className="md:col-span-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest mb-6 border-b border-red-950/40 pb-2">
              HORÁRIO DE ATENDIMENTO
            </h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li className="flex items-center gap-2">
                <Clock size={12} className="text-[#E31B23]" />
                <span className="font-semibold text-gray-400">Segunda a Sexta:</span> 08:00 - 18:00
              </li>
              <li className="flex items-center gap-2">
                <Clock size={12} className="text-[#E31B23]" />
                <span className="font-semibold text-gray-400">Sábado:</span> 08:00 - 12:00
              </li>
              <li className="flex items-center gap-2">
                <Clock size={12} className="text-[#E31B23]" />
                <span className="font-semibold text-gray-400">Domingo:</span> Fechado
              </li>
            </ul>
          </div>

          {/* Validation tag row exactly matching mockup on right of footer */}
          <div className="md:col-span-2">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest mb-6 border-b border-red-950/40 pb-2">
              GARANTIA DIFLEX
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-2 bg-[#121215] border border-red-950/30">
                <ShieldCheck size={18} className="text-[#E31B23]" />
                <span className="text-[9px] font-black uppercase tracking-wider text-gray-300">Produtos de Alta Qualidade</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#121215] border border-red-950/30">
                <ShieldCheck size={18} className="text-[#E31B23]" />
                <span className="text-[9px] font-black uppercase tracking-wider text-gray-300">Durabilidade & Segurança</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal copyright bar bottom */}
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-red-950/20 text-center text-[10px] text-gray-600 font-medium uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Diflex Mangueiras e Conexões. Todos os direitos reservados.</p>
        </div>
      </footer>
      
      {/* Dynamic Floating fast WhatsApp assist Button with online notice badge glow */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center gap-2 group border border-green-400/25 duration-300"
        title="Atendimento Rápido WhatsApp"
      >
        <div className="absolute top-1 left-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
        <span className="max-w-px whitespace-nowrap overflow-hidden group-hover:max-w-xs transition-all duration-500 font-extrabold tracking-widest uppercase text-[10px] pr-1 pl-1">
          Atendimento Online
        </span>
        <Phone size={22} />
      </a>

    </div>
  );
}
