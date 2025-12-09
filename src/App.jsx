import React, { useState } from 'react';
import { CarFront, Sparkles, Droplet, Check, Star, Layers, MessageCircle, Instagram } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('todos');

  // Dados dos serviços
  const services = [
    // --- LAVAGEM ---
    {
      id: 1,
      category: 'lavagem',
      title: "Limpeza Convencional",
      subtitle: "Manutenção de Qualidade",
      featured: false,
      description: "Ideal para a manutenção do dia a dia com qualidade GM Brothers",
      includes: [
        { section: "Serviços Inclusos", items: ["Pré-lavagem", "Lavagem", "Limpeza de rodas e caixas", "Aspiração completa", "Limpeza leve interna", "Pretinho e Cheirinho"] }
      ],
      prices: [
        { label: "Pequeno", value: 50 },
        { label: "Médio", value: 60 },
        { label: "SUV/Hatch G", value: 75 },
        { label: "SUV G/Picape", value: 85 },
      ],
      extraPriceInfo: "Com aplicação de cera: +R$ 10,00"
    },
    {
      id: 2,
      category: 'lavagem',
      title: "Limpeza Técnica Detalhada",
      subtitle: "Detalhamento Completo",
      featured: true,
      description: "O tratamento VIP definitivo para renovar seu veículo.",
      includes: [
        { section: "Lavagem Externa", items: ["Pré-lavagem completa", "Lavagem técnica detalhada", "Detalhamento de rodas e pneus", "Detalhamento caixas de roda"] },
        { section: "Interior Detalhado", items: ["Aspiração completa", "Limpeza com APC", "Restauração plásticos Internos e Externos (Durabilidade de 4-6 meses)", "Bancos limpos (superficial)", "Acabamento premium no painel"] },
        { section: "Acabamento", items: ["Vidros internos/externos", "Pretinho premium", "Aplicação de cera (4 meses durabilidade)", "Cheirinho especial"] }
      ],
      prices: [
        { label: "Pequeno", value: 230 },
        { label: "Médio", value: 260 },
        { label: "SUV/Hatch G", value: 290 },
        { label: "SUV G/Picape", value: 330 },
      ]
    },
    // --- HIGIENIZAÇÃO ---
    {
      id: 3,
      category: 'higienizacao',
      title: "Higienização Interna",
      subtitle: "Completa (Bancos de Tecido)",
      featured: true,
      description: "Remoção de sujeiras profundas, ácaros e odores.",
      includes: [
        { section: "Pacote Completo", items: ["Higienização bancos de tecido", "Condicionamento de plásticos internos (Durabilidade de 4 a 6 meses)", "Cintos de segurança", "Forro de teto", "Aspiração completa", "Remoção de manchas (quando possível)"] }
      ],
      prices: [
        { label: "Valor Inicial", value: "350", prefix: "A partir de R$ " }
      ]
    },
    {
      id: 4,
      category: 'higienizacao',
      title: "Higienização Interna",
      subtitle: "Completa (Bancos de Couro)",
      featured: false,
      description: "Remoção de sujeiras profundas, ácaros e odores e Hidratação para evitar trincas.",
      includes: [
        { section: "Tratamento do Couro", items: ["Higienização dos bancos em couro", "Hidratação profissional do couro","Cintos de segurança", "Forro de teto", "Aspiração completa", "Remoção de manchas (quando possível)"] },
      ],
      prices: [
        { label: "Valor Inicial", value: "280", prefix: "A partir de R$ " }
      ]
    },
    {
      id: 5,
      category: 'higienizacao',
      title: "Bancos Avulsos",
      subtitle: "Tecido ou Couro",
      featured: false,
      description: "Foco total na limpeza dos assentos.",
      includes: [
        { section: "Opções", items: ["Higienização Bancos de Tecido", "Higienização e Hidratação Bancos de Couro"] }
      ],
      prices: [
        { label: "Couro", value: "190", prefix: "A partir de R$ " },
        { label: "Tecido", value: "240", prefix: "A partir de R$ " },
      ]
    },
    // --- ESPECIAIS ---
    {
  id: 6,
  category: 'especiais',
  title: "Serviços Especiais",
  subtitle: "Faróis, Vidros e Teto",
  featured: false,
  description: "Detalhes que fazem toda a diferença na estética.",
  includes: [
    { 
      section: "Vitrificação de Faróis", 
      items: [
        "Polimento da lente", 
        "Proteção cerâmica (1 ano)", 
        "Remove amarelado"
      ] 
    },
    { 
      section: "Tratamento de Vidros", 
      items: [
        "Descontaminação completa dos vidros",
        "Remoção de manchas, gordura e chuva ácida"
      ] 
    },
    { 
      section: "Vitrificação de Vidros (Glaco)", 
      items: [
        "Proteção hidrofóbica",
        "Aumento da visibilidade na chuva",
        "Efeito repelência instantâneo"
      ] 
    },
    {
      section: "Tratamento + Vitrificação",
      items: [
        "Somente para-brisa: R$ 100",
        "Todos os vidros: R$ 140"
      ]
    },
    { 
      section: "Outros", 
      items: [
        "Limpeza de Forro de Teto"
      ] 
    }
  ],
  prices: [
    { label: "Faróis", value: "150", prefix: "A partir de R$ " },
    { label: "Teto", value: "80", prefix: "A partir de R$ " },
    { label: "Vidros", value: "100", prefix: "A partir de R$ " }
  ]
},
,
    // --- PACOTES (COMBOS) ---
    {
      id: 7,
      category: 'pacotes',
      title: "GM Brothers Gold",
      subtitle: "Bancos em Tecido",
      featured: true,
      description: "A experiência máxima de detalhamento e higienização.",
      includes: [
        { section: "Combo Gold", items: ["Limpeza Técnica Detalhada", "Higienização Interna Completa (Tecido)"] }
      ],
      prices: [
        { label: "Pequeno", value: 500 },
        { label: "Médio", value: 530 },
        { label: "SUV/Hatch G", value: 560 },
        { label: "SUV G/Picape", value: 590 },
      ]
    },
    {
      id: 8,
      category: 'pacotes',
      title: "GM Brothers Gold",
      subtitle: "Bancos em Couro",
      featured: true,
      description: "Cuidado completo com foco na hidratação do couro.",
      includes: [
        { section: "Combo Gold (Couro)", items: ["Limpeza Técnica Detalhada", "Higienização Interna Completa (Couro)"] }
      ],
      prices: [
        { label: "Pequeno", value: 460 },
        { label: "Médio", value: 490 },
        { label: "SUV/Hatch G", value: 520 },
        { label: "SUV G/Picape", value: 550 },
      ]
    },
    {
      id: 9,
      category: 'pacotes',
      title: "GM Brothers Pro",
      subtitle: "Bancos em Tecido",
      featured: false,
      description: "Detalhamento externo com foco na limpeza dos bancos.",
      includes: [
        { section: "Combo Pro", items: ["Limpeza Técnica Detalhada", "Higienização dos Bancos (Tecido)"] }
      ],
      prices: [
        { label: "Pequeno", value: 400 },
        { label: "Médio", value: 430 },
        { label: "SUV/Hatch G", value: 460 },
        { label: "SUV G/Picape", value: 490 },
      ]
    },
    {
      id: 10,
      category: 'pacotes',
      title: "GM Brothers Pro",
      subtitle: "Bancos em Couro",
      featured: false,
      description: "Detalhamento externo com foco na limpeza dos bancos.",
      includes: [
        { section: "Combo Pro", items: ["Limpeza Técnica Detalhada", "Higienização dos Bancos (Couro)"] }
      ],
      prices: [
        { label: "Pequeno", value: 380 },
        { label: "Médio", value: 410 },
        { label: "SUV/Hatch G", value: 440 },
        { label: "SUV G/Picape", value: 470 },
      ]
    },
    {
      id: 11,
      category: 'pacotes',
      title: "Standard Plus",
      subtitle: "Bancos em Tecido",
      featured: false,
      description: "Limpeza convencional aliada à higienização completa.",
      includes: [
        { section: "Combo Standard Plus", items: ["Limpeza Convencional", "Higienização Interna Completa (Tecido)"] }
      ],
      prices: [
        { label: "Pequeno", value: 380 },
        { label: "Médio", value: 410 },
        { label: "SUV/Hatch G", value: 440 },
        { label: "SUV G/Picape", value: 470 },
      ]
    },
    {
      id: 12,
      category: 'pacotes',
      title: "Standard Plus",
      subtitle: "Bancos em Couro",
      featured: false,
      description: "Limpeza convencional aliada à higienização completa.",
      includes: [
        { section: "Combo Standard Plus", items: ["Limpeza Convencional", "Higienização Interna Completa (Couro)"] }
      ],
      prices: [
        { label: "Pequeno", value: 340 },
        { label: "Médio", value: 370 },
        { label: "SUV/Hatch G", value: 400 },
        { label: "SUV G/Picape", value: 430 },
      ]
    },
    {
      id: 13,
      category: 'pacotes',
      title: "GM Brothers Standard",
      subtitle: "Bancos em Tecido",
      featured: false,
      description: "Manutenção essencial com higienização dos assentos.",
      includes: [
        { section: "Combo Standard", items: ["Limpeza Convencional", "Higienização dos Bancos (Tecido)"] }
      ],
      prices: [
        { label: "Pequeno", value: 250 },
        { label: "Médio", value: 280 },
        { label: "SUV/Hatch G", value: 310 },
        { label: "SUV G/Picape", value: 340 },
      ]
    },
    {
      id: 14,
      category: 'pacotes',
      title: "GM Brothers Standard",
      subtitle: "Bancos em Couro",
      featured: false,
      description: "Manutenção essencial com higienização dos assentos.",
      includes: [
        { section: "Combo Standard", items: ["Limpeza Convencional", "Higienização dos Bancos (Couro)"] }
      ],
      prices: [
        { label: "Pequeno", value: 220 },
        { label: "Médio", value: 250 },
        { label: "SUV/Hatch G", value: 280 },
        { label: "SUV G/Picape", value: 310 },
      ]
    },
    {
  id: 15,
  category: 'polimentos',
  title: "Polimentos",
  subtitle: "Em breve...",
  featured: false,
  description: "Estamos preparando novos serviços profissionais de polimento automotivo!",
  includes: [],
  prices: [
    { label: "Em breve", value: "--" }
  ]
}
  ];

  const filteredServices = activeTab === 'todos' 
    ? services 
    : services.filter(s => s.category === activeTab);

  const whatsappNumber = "5531992388329";
  // Usando a API direta do WhatsApp para maior compatibilidade
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá,%20gostaria%20de%20agendar%20um%20serviço%20na%20GM%20Brothers.`;

  return (
    <div className="min-h-screen pb-10 bg-slate-950 font-sans text-slate-100 relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Botão Flutuante do WhatsApp */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-wider text-white font-montserrat">GM <span className="text-red-600">BROTHERS</span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-600/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-100/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 border border-red-600/30 rounded-full bg-red-600/5 text-red-500 text-sm font-semibold tracking-wide uppercase shadow-lg shadow-red-900/20">
            Estética Automotiva de Alto Nível
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight font-montserrat">
            Seu carro merece o padrão GM Brothers
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Especialistas em detalhamento, higienização e proteção. Devolvemos o brilho de novo para o seu veículo com produtos premium.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => document.getElementById('menu').scrollIntoView({behavior: 'smooth'})} className="border border-slate-700 bg-slate-900/50 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition backdrop-blur-sm">
              Ver Tabela de Preços
            </button>
          </div>
        </div>
      </header>

      {/* Filtros */}
      <div id="menu" className="sticky top-16 z-40 bg-slate-950/95 backdrop-blur py-4 border-b border-slate-800 mb-8 shadow-2xl">
        <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex md:justify-center gap-3 min-w-max pb-1">
            {[
              {id: 'todos', label: 'Todos os Serviços', icon: <Sparkles size={16} />},
              {id: 'pacotes', label: 'Pacotes & Combos', icon: <Layers size={16} />},
              {id: 'lavagem', label: 'Lavagens', icon: <CarFront size={16} />},
              {id: 'higienizacao', label: 'Higienização', icon: <Droplet size={16} />},
              {id: 'especiais', label: 'Especiais', icon: <Star size={16} />},
              { id: 'polimentos', label: 'Polimentos', icon: <Star size={16} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/20 scale-105' 
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-red-600/50 hover:text-white'
                }`}
              >
                <span className={activeTab === tab.id ? "text-white" : "text-red-600"}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lista de Serviços */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className={`group relative bg-slate-900 border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-600/5 flex flex-col ${service.featured ? 'border-red-600/50' : 'border-slate-800'}`}>
              
              {service.featured && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl z-10 shadow-lg">
                  RECOMENDADO
                </div>
              )}

              <div className="p-6 md:p-8 flex-grow relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-2xl font-bold mb-1 font-montserrat ${service.featured ? 'text-white' : 'text-slate-200'}`}>{service.title}</h3>
                    <p className="text-red-600 font-medium text-sm tracking-wide uppercase">{service.subtitle}</p>
                  </div>
                  <div className={`p-3 rounded-xl ${service.featured ? 'bg-red-600/10 text-red-600' : 'bg-slate-800 text-slate-400'}`}>
                    {service.category === 'lavagem' ? <CarFront size={24} /> : 
                     service.category === 'higienizacao' ? <Droplet size={24} /> : 
                     service.category === 'pacotes' ? <Layers size={24} /> :
                     <Star size={24} />}
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-6 border-l-2 border-slate-700 pl-4 italic">
                  "{service.description}"
                </p>

                <div className="space-y-5 mb-6">
                  {service.includes.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-slate-300 font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-red-600"></span>
                        {section.section}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                            <Check size={14} className="text-red-600 mr-2.5 flex-shrink-0 mt-1" />
                            <span className="flex-1 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabela de Preços */}
              <div className="bg-slate-950/50 p-6 border-t border-slate-800 relative z-10">
                {service.prices.length > 1 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {service.prices.map((price, idx) => (
                      <div key={idx} className="bg-slate-900 rounded-lg p-3 text-center border border-slate-800 group-hover:border-slate-700 transition-colors">
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-1">{price.label}</div>
                        <div className="text-lg font-bold text-white font-montserrat">
                          {price.prefix ? price.prefix : "R$ "}{price.value}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-slate-900 p-4 rounded-lg border border-slate-800">
                    <span className="text-slate-400 text-sm">Investimento a partir de:</span>
                    <span className="text-2xl font-bold text-red-600 font-montserrat">R$ {service.prices[0].value}</span>
                  </div>
                )}

                {service.extraPriceInfo && (
                  <div className="mt-4 text-center text-xs text-red-600 font-semibold bg-red-600/5 py-2 rounded border border-red-600/10">
                    {service.extraPriceInfo}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 mt-24 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
             <span className="text-2xl font-bold text-white font-montserrat">GM <span className="text-red-600">BROTHERS</span></span>
          </div>
          <p className="text-slate-400 text-sm mb-10 max-w-md mx-auto">Elevando o padrão de estética automotiva. Seu carro em boas mãos.</p>
          
          <div className="flex justify-center gap-8 mb-10">
            <a href="https://www.instagram.com/esteticaautomotiva.gmb" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-600 transition hover:scale-110 transform duration-200"><Instagram size={24} /></a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-500 transition hover:scale-110 transform duration-200"><MessageCircle size={24} /></a>
          </div>

          <div className="pt-8 border-t border-slate-800">
            <p className="text-slate-600 text-xs">
              &copy; {new Date().getFullYear()} GM Brothers Detalhamento Automotivo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;