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
  "Conexões Hidráulicas",
  "Conexões Pneumáticas",
  "Engates Rápidos",
  "Abraçadeiras",
  "Acessórios e Lava Jato",
  "Válvulas"
];

export const PRODUCTS: Product[] = [
  {
    id: "mangueira-hidraulica",
    title: "Mangueira Hidráulica",
    category: "Mangueiras Hidráulicas",
    description: "Referência em alta performance para sistemas de alta pressão.",
    image: "https://i.ibb.co/7JCvR8zQ/mangueira-hidra-ulica.jpg",
    features: [
      "Normas SAE R1 AT, R2 AT, R6, R12, R13, R7",
      "Reforço em fios de aço e borracha sintética",
      "Montagem personalizada com terminais prensados"
    ],
    details: "Fundamentais para betoneiras, caçambas, colheitadeiras e empilhadeiras. Suportam baixa, média, alta e super alta pressão."
  },
  {
    id: "mangueira-ar-agua-300lb",
    title: "Mangueira Ar/Água 300lb",
    category: "Mangueiras Industriais",
    description: "Mangueira versátil para condução de ar e água sob pressão.",
    image: "https://i.ibb.co/8Dcxb0Rz/mangueira-ar-a-gua-300lb.jpg",
    features: [
      "Pressão de trabalho 300 PSI",
      "Resistente a intempéries e abrasão",
      "Flexibilidade superior"
    ],
    details: "Ideal para uso em compressores, ferramentas pneumáticas e redes de água industrial."
  },
  {
    id: "mangueira-cristal",
    title: "Mangueira Cristal",
    category: "Mangueiras Industriais",
    description: "Mangueira em PVC flexível de alta transparência.",
    image: "https://i.ibb.co/m59jdM3F/mangueira-cristal.jpg",
    features: [
      "Totalmente atóxica",
      "Visualização clara do fluido",
      "Diversas bitolas disponíveis"
    ],
    details: "Muito utilizada em medições de nível, proteção de cabos e condução de gases."
  },
  {
    id: "mangueira-cristal-trancada",
    title: "Mangueira Cristal Trançada",
    category: "Mangueiras Industriais",
    description: "PVC reforçado com trama de poliéster para maior resistência.",
    image: "https://i.ibb.co/zVmsQWWb/mangueira-cristal-tranc-ada.jpg",
    features: [
      "Reforço em poliéster de alta tenacidade",
      "Resistente a pressões médias",
      "Corpo transparente"
    ],
    details: "Adequada para compressores de ar e sistemas de água de baixa pressão."
  },
  {
    id: "mangueira-flat",
    title: "Mangueira Flat",
    category: "Mangueiras Industriais",
    description: "Mangueira achatada para descarga de água em grandes volumes.",
    image: "https://i.ibb.co/0jQt3GZq/mangueira-flat.jpg",
    features: [
      "Extremamente leve e fácil de guardar",
      "Alta resistência a perfurações",
      "Fácil manuseio"
    ],
    details: "Perfeita para irrigações agrícolas, construção civil e minas."
  },
  {
    id: "mangueira-lava-auto",
    title: "Mangueira Lava Auto",
    category: "Mangueiras Industriais",
    description: "Específica para alta pressão em serviços de lavagem.",
    image: "https://i.ibb.co/DHJYb1Nx/mangueira-lava-auto.jpg",
    features: [
      "Reforço têxtil ou metálico",
      "Resistente a produtos químicos de limpeza",
      "Acabamento liso para fácil limpeza"
    ],
    details: "Desenvolvida para suportar o uso rigoroso em postos de lavagem e concessionárias."
  },
  {
    id: "mangueira-piscina",
    title: "Mangueira para Piscina",
    category: "Mangueiras Industriais",
    description: "Mangueira flutuante para aspiração e limpeza de piscinas.",
    image: "https://i.ibb.co/HMy8FxH/mangueira-para-limpeza-de-piscina.jpg",
    features: [
      "Propriedade de flutuação",
      "Resistente ao cloro e raios UV",
      "Estrutura corrugada flexível"
    ],
    details: "Leve e prática, essencial para a manutenção diária de piscinas residenciais e comerciais."
  },
  {
    id: "terminal-hidraulico",
    title: "Terminal Hidráulico",
    category: "Conexões Hidráulicas",
    description: "Terminais prensáveis para montagem de mangueiras hidráulicas.",
    image: "https://i.ibb.co/B2MxS66z/terminal-hidra-ulico.jpg",
    features: [
      "Aço carbono galvanizado",
      "Diversos tipos de roscas (JIC, NPT, BSP)",
      "Vedações de alta precisão"
    ],
    details: "Garante a conexão segura entre a mangueira e o equipamento sob alta pressão."
  },
  {
    id: "conector-femea-pneumatico",
    title: "Conector Fêmea Pneumático",
    category: "Conexões Pneumáticas",
    description: "Conexão instantânea fêmea para tubos em PU.",
    image: "https://i.ibb.co/hRsFj8WV/conector-fe-mea-pneuma-tico.jpg",
    features: [
      "Sistema 'push-in' (engate rápido)",
      "Corpo em latão niquelado",
      "Vedação estanque"
    ],
    details: "Facilita a montagem e desmontagem rápida de sistemas de ar comprimido."
  },
  {
    id: "conector-macho-pneumatico",
    title: "Conector Macho Pneumático",
    category: "Conexões Pneumáticas",
    description: "Conexão instantânea macho para automação pneumática.",
    image: "https://i.ibb.co/pSZfNJB/conector-macho-pneuma-tico.jpg",
    features: [
      "Roscas BSP e NPT",
      "Trava de segurança interna",
      "Alta durabilidade em ciclos constantes"
    ],
    details: "Componente essencial para válvulas, cilindros e ferramentas pneumáticas."
  },
  {
    id: "cotovelo-pneumatico",
    title: "Cotovelo para Mangueira PU",
    category: "Conexões Pneumáticas",
    description: "Conexão em ângulo de 90 graus para espaços restritos.",
    image: "https://i.ibb.co/Hpt1dWCb/cotovelo-para-mangueira-pneuma-tica.jpg",
    features: [
      "Giro de 360 graus após instalação",
      "Compacto e eficiente",
      "Conexão instantânea"
    ],
    details: "Ideal para roteamento de tubos em painéis e máquinas de pequeno porte."
  },
  {
    id: "emenda-pneumatica",
    title: "Emenda para Mangueira PU",
    category: "Conexões Pneumáticas",
    description: "União reta para tubos de poliuretano e nylon.",
    image: "https://i.ibb.co/zW8B1Wqf/imenda-para-mangueira-pneuma-tica.jpg",
    features: [
      "Reparo rápido de linhas cortadas",
      "União de bitolas iguais",
      "Sem necessidade de ferramentas"
    ],
    details: "Solução prática para estender linhas pneumáticas ou realizar reparos emergenciais."
  },
  {
    id: "tee-pneumatico",
    title: "TEE para Mangueira PU",
    category: "Conexões Pneumáticas",
    description: "Conector em formato de 'T' para ramificação de ar.",
    image: "https://i.ibb.co/21M4SLGs/TEE-para-mangueira-pneuma-tica.jpg",
    features: [
      "Distribuição de fluxo para dois pontos",
      "Engate rápido nos três lados",
      "Resistente a vibrações"
    ],
    details: "Permite criar ramificações em sistemas pneumáticos complexos de forma simples."
  },
  {
    id: "tubo-em-pu",
    title: "Tubo em PU",
    category: "Conexões Pneumáticas",
    description: "Tubo de poliuretano altamente flexível para ar.",
    image: "https://i.ibb.co/ymwwMkjc/tubo-em-PU.jpg",
    features: [
      "Alta resistência à dobra",
      "Cores variadas para identificação",
      "Compatível com conexões push-in"
    ],
    details: "Padrão de mercado para automação industrial, robótica e instrumentação."
  },
  {
    id: "pecas-pneumaticas",
    title: "Peças para Sistema Pneumático",
    category: "Conexões Pneumáticas",
    description: "Componentes diversos para montagem de redes de ar.",
    image: "https://i.ibb.co/3Ydfjj71/pec-as-para-sistema-pneuma-tico.jpg",
    features: [
      "Válvulas, silenciadores e filtros",
      "Qualidade industrial garantida",
      "Compatibilidade universal"
    ],
    details: "Conjunto de peças fundamentais para o bom funcionamento do seu sistema pneumático."
  },
  {
    id: "engate-rapido-hidraulico",
    title: "Engate Rápido Hidráulico",
    category: "Engates Rápidos",
    description: "Conexão de segurança para implementos agrícolas.",
    image: "https://i.ibb.co/VcMCkBQF/engate-ra-pido-hidra-ulico.jpg",
    features: [
      "Padrão ISO A ou Face Plana",
      "Bloqueio automático de fluido",
      "Trava de esfera robusta"
    ],
    details: "Agiliza a conexão e desconexão de máquinas sem perda de óleo."
  },
  {
    id: "engate-rapido-ar",
    title: "Engate Rápido para Ar",
    category: "Engates Rápidos",
    description: "Agilidade na troca de ferramentas pneumáticas.",
    image: "https://i.ibb.co/W4BqPyD0/engate-ra-pido-para-ar.jpg",
    features: [
      "Corpo em aço zincado",
      "Válvula de retenção interna",
      "Conexão manual rápida"
    ],
    details: "Essencial em oficinas e indústrias que utilizam diversas ferramentas de ar."
  },
  {
    id: "conector-engate-rapido",
    title: "Conectores Engate Rápido",
    category: "Engates Rápidos",
    description: "Adaptadores macho e fêmea para engates de ar.",
    image: "https://i.ibb.co/Jj52shdn/conector-macho-para-engate-ra-pido.jpg",
    features: [
      "Versões com escama, fêmea e macho",
      "Encaixe perfeito sem vazamentos",
      "Resistente a impactos"
    ],
    details: "Utilizados em conjunto com os engates rápidos para facilitar o manuseio de mangueiras."
  },
  {
    id: "abracadeira-recartilhada",
    title: "Abraçadeira Recartilhada",
    category: "Abraçadeiras",
    description: "Fixação leve e versátil para mangueiras de baixa pressão.",
    image: "https://i.ibb.co/QFhDhGkZ/abrac-adeira-recartilhada.jpg",
    features: [
      "Ajuste manual simples",
      "Aço carbono com acabamento zincado",
      "Ideal para jardins e pequenos reparos"
    ],
    details: "Proporciona uma fixação rápida e segura sem a necessidade de ferramentas complexas."
  },
  {
    id: "esguicho-plastico-lava-jato",
    title: "Bico de Plástico Lava a Jato",
    category: "Acessórios e Lava Jato",
    description: "Bico regulável para economia e controle de água.",
    image: "https://i.ibb.co/Qv5Gn73r/bico-de-pla-stico-para-lava-a-jato.jpg",
    features: [
      "Leve e ergonômico",
      "Jato regulável (leque ou concentrado)",
      "Alta durabilidade"
    ],
    details: "Perfeito para lavagens domésticas e uso comercial leve."
  },
  {
    id: "espigao-macho-ar",
    title: "Espigão Macho para Ar",
    category: "Acessórios e Lava Jato",
    description: "Conexão de mangueira com rosca para redes de ar.",
    image: "https://i.ibb.co/Q3167nDm/espiga-o-macho-para-ar.jpg",
    features: [
      "Rosca BSP ou NPT",
      "Escama para fixação da mangueira",
      "Latão ou Aço Carbono"
    ],
    details: "Utilizado para conectar mangueiras de compressores diretamente em pontos de rede."
  },
  {
    id: "acessorios-agua",
    title: "Acessórios para Mangueira de Água",
    category: "Acessórios e Lava Jato",
    description: "Bicos, adaptadores e filtros para mangueiras.",
    image: "https://i.ibb.co/bMVvBf3m/acesso-rios-para-mangueira-de-a-gua.jpg",
    features: [
      "Kits completos de conexão",
      "Peças de reposição rápidas",
      "Qualidade e praticidade"
    ],
    details: "Soluções completas para facilitar o uso de mangueiras de jardim e industriais."
  },
  {
    id: "conector-escama-engate",
    title: "Conector Escama para Engate Rápido",
    category: "Engates Rápidos",
    description: "Conector com espigão para mangueira, compatível com engate rápido.",
    image: "https://i.ibb.co/0Rr0wg3k/conector-com-escama-para-engate-ra-pido.jpg",
    features: [
      "Fácil instalação em mangueiras flexíveis",
      "Conexão segura com engates de ar",
      "Alta resistência mecânica"
    ],
    details: "Permite a conexão direta de mangueiras em sistemas que utilizam engates rápidos pneumáticos."
  },
  {
    id: "conector-femea-engate",
    title: "Conector Fêmea para Engate Rápido",
    category: "Engates Rápidos",
    description: "Adaptador fêmea roscado para engate rápido.",
    image: "https://i.ibb.co/Kj2vX4LQ/conector-fe-mea-para-engate-ra-pido.jpg",
    features: [
      "Roscas internas padrão BSP",
      "Vedações de alta qualidade",
      "Compatível com diversos modelos de engates"
    ],
    details: "Utilizado para adaptar pontos roscados macho para o sistema de engate rápido."
  },
  {
    id: "espigao-lava-jato",
    title: "Espigão para Mangueira Lava a Jato",
    category: "Acessórios e Lava Jato",
    description: "Conector robusto para mangueiras de lavagem de alta pressão.",
    image: "https://i.ibb.co/hx4J8K8q/espiga-o-para-mangueira-lava-a-jato.jpg",
    features: [
      "Resistente a picos de pressão",
      "Material reforçado contra corrosão",
      "Encaixe preciso"
    ],
    details: "Essencial para a montagem de mangueiras de hidrolavadoras profissionais."
  },
  {
    id: "emenda-lava-jato",
    title: "Emenda para Mangueira Lava a Jato",
    category: "Acessórios e Lava Jato",
    description: "União para reparo ou extensão de mangueiras de alta pressão.",
    image: "https://i.ibb.co/rR4n2XLG/imenda-para-mangueira-lava-a-jato.jpg",
    features: [
      "Suporta pressões extremas",
      "Design compacto e resistente",
      "Segurança total na conexão"
    ],
    details: "Permite recuperar mangueiras danificadas ou unir lances para maior alcance."
  },
  {
    id: "valvula-esfera",
    title: "Válvula de Esfera",
    category: "Válvulas",
    description: "Controle preciso de fluxo em sistemas industriais.",
    image: "https://i.ibb.co/bRCVv8Wb/Valvula-Esfera-Tripartida-Classe-300.jpg",
    features: [
      "Aço carbono e aço inoxidável",
      "Vedação de alto desempenho",
      "Alavancas de acionamento suave"
    ],
    details: "Válvulas bi-direcionais e tri-direcionais para diversas aplicações industriais."
  },
  {
    id: "mangueira-espiralada-km",
    title: "Mangueira Espiralada Serviço Médio",
    category: "Mangueiras Industriais",
    description: "Mangueira em PVC para sucção e descarga de líquidos.",
    image: "https://i.ibb.co/1tjYS5ny/mangueira-espiralada-servic-o-me-dio.jpg",
    features: [
      "Fabricada em PVC Flexível",
      "Indicada para serviços médios",
      "Resistente a produtos químicos"
    ],
    details: "A mangueira espiralada Kanaflex KM é fabricada em PVC e indicada para serviços médios de sucção e descarga de líquidos nas mais variadas aplicações como irrigação, implementos agrícolas, limpeza de galerias subterrâneas, caminhões pipa, entre outros."
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
