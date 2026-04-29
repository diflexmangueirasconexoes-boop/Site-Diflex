/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features?: string[];
  specs?: { label: string; value: string }[];
  details?: string;
}

export const PRODUCT_CATEGORIES = [
  "Mangueiras Hidráulicas",
  "Mangueiras Industriais",
  "Conexões",
  "Abraçadeiras",
  "Engates Rápidos",
  "Acessórios Industriais",
  "Válvulas",
  "Tubos Pneumáticos"
];

export const PRODUCTS: Product[] = [
  {
    id: "mangueiras-hidraulicas",
    title: "Mangueiras Hidráulicas",
    category: "Mangueiras Hidráulicas",
    description: "Referência em alta performance para sistemas de alta pressão.",
    image: "https://i.ibb.co/Z66vQR0Z/Chat-GPT-Image-29-de-abr-de-2026-10-11-10.png",
    features: [
      "Normas SAE R1 AT, R2 AT, R6, R12, R13, R7",
      "Reforço em fios de aço e borracha sintética",
      "Montagem personalizada com terminais prensados"
    ],
    details: "Fundamentais para betoneiras, caçambas, colheitadeiras e empilhadeiras. Suportam baixa, média, alta e super alta pressão."
  },
  {
    id: "mangueiras-industriais",
    title: "Mangueiras Industriais",
    category: "Mangueiras Industriais",
    description: "Soluções flexíveis para água, ar e produtos químicos.",
    image: "https://i.ibb.co/TBBB3Qn5/Chat-GPT-Image-29-de-abr-de-2026-10-13-11.png",
    features: [
      "Resistência a abrasão e intempéries",
      "Modelos trançados e espiralados",
      "Várias bitolas e materiais (PVC, Borracha)"
    ],
    details: "Indicadas para transferência de fluidos em fábricas, canteiros de obras e postos de serviço."
  },
  {
    id: "conexoes",
    title: "Conexões Hidráulicas",
    category: "Conexões",
    description: "Conexões em aço carbono e inox para máxima segurança.",
    image: "https://i.ibb.co/pjTZNsXB/Chat-GPT-Image-29-de-abr-de-2026-10-14-23.png",
    features: [
      "Roscas NPT, BSP, JIC e Métricas",
      "Acabamento resistente à corrosão",
      "Alta precisão técnica nos encaixes"
    ],
    details: "Terminais e adaptadores desenvolvidos para suportar as mais altas pressões hidráulicas."
  },
  {
    id: "abracadeiras",
    title: "Abraçadeiras",
    category: "Abraçadeiras",
    description: "Fixação robusta para mangueiras e tubos industriais.",
    image: "https://i.ibb.co/1fmZfKd5/Chat-GPT-Image-29-de-abr-de-2026-10-19-19.png",
    features: [
      "Modelos tipo tucho, fita e mangote",
      "Disponíveis em Aço Carbono e Inox",
      "Aperto seguro sem danificar a mangueira"
    ],
    details: "Essenciais para garantir a vedação e organização de sistemas de fluidos."
  },
  {
    id: "engates-rapidos",
    title: "Engates Rápidos",
    category: "Engates Rápidos",
    description: "Conexão rápida e estanque para sistemas hidráulicos.",
    image: "https://i.ibb.co/9HB39FbY/Chat-GPT-Image-29-de-abr-de-2026-10-21-19.png",
    features: [
      "Sistemas de face plana e ISO A",
      "Acoplamento manual sem ferramentas",
      "Válvulas internas para bloqueio de fluxo"
    ],
    details: "Agilizam a troca de implementos e ferramentas pneumáticas/hidráulicas."
  },
  {
    id: "acessorios-industriais",
    title: "Acessórios Industriais",
    category: "Acessórios Industriais",
    description: "Manômetros, bombas de graxa e equipamentos de medição.",
    image: "https://i.ibb.co/CDMt5HN/Chat-GPT-Image-29-de-abr-de-2026-10-23-42.png",
    features: [
      "Manômetros com glicerina",
      "Equipamentos de lubrificação",
      "Ferramentas de precisão industrial"
    ],
    details: "Tudo o que você precisa para o monitoramento e manutenção de seus sistemas."
  },
  {
    id: "valvulas",
    title: "Válvulas de Esfera",
    category: "Válvulas",
    description: "Controle preciso de fluxo em alta pressão.",
    image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Aço carbono e aço inoxidável",
      "Vedação de alto desempenho",
      "Alavancas de acionamento suave"
    ],
    details: "Válvulas bi-direcionais e tri-direcionais para diversas aplicações industriais."
  },
  {
    id: "tubos-pneumaticos",
    title: "Tubos Pneumáticos",
    category: "Tubos Pneumáticos",
    description: "Tubing PU e conexões instantâneas para automação.",
    image: "https://images.unsplash.com/photo-1621905285851-e39ad9aa6995?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Tubos em Poliuretano (PU) flexível",
      "Conexões push-in instantâneas",
      "Várias cores para identificação de linhas"
    ],
    details: "Ideais para automação pneumática e controle de máquinas industriais."
  }
];

export const SERVICES = [
  {
    title: "Montagem de Mangueiras",
    description: "Serviço especializado de montagem de mangueiras hidráulicas sob medida com terminais prensados.",
    icon: "Hammer"
  },
  {
    title: "Linha Auto e Lava Jato",
    description: "Montagem e manutenção de mangueiras específicas para sistemas automotivos e alta pressão de lava jato.",
    icon: "Car"
  },
  {
    title: "Vendas Técnicas",
    description: "Consultoria para escolha correta de mangueiras e conexões para cada aplicação industrial.",
    icon: "ShoppingBag"
  }
];

export const WHATSAPP_LINK = `https://wa.me/5591992699577?text=Olá,%20gostaria%20de%20um%20orçamento%20da%20Diflex`;
