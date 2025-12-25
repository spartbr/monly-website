
import React, { useEffect, useState } from 'react';
import { 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Smartphone, 
  Check, 
  Layout, 
  PieChart, 
  Zap,
  Plus,
  Minus,
  ArrowUpRight,
  BrainCircuit,
  Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Constants ---

const PLATFORM_LINK = "https://mistyrose-wren-394008.hostingersite.com/";

// Images based on the provided screenshots (using the indices/references from the prompt context)
// Image references are mapped to descriptive names
const IMAGES = {
  HERO_DASHBOARD: "input_file_2.png", // Dashboard with sidebar and MONLY logo
  DASH_KPI: "input_file_1.png",       // KPI cards and charts
  LANÇAMENTOS: "input_file_3.png",    // Transactions view
  PENDÊNCIAS: "input_file_4.png",     // Pending view
  ANALISE: "input_file_5.png",        // Financial intelligence view
  FINANCIAMENTOS: "input_file_6.png", // Financing view
  CHARTS: "input_file_0.png"          // Evolução mensal chart
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'apple-blur py-3 border-b border-gray-100' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#00A389] rounded-lg flex items-center justify-center shadow-lg shadow-teal-500/20">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Monly</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#funcionalidades" className="hover:text-blue-600 transition-colors">Funcionalidades</a>
          <a href="#beneficios" className="hover:text-blue-600 transition-colors">Benefícios</a>
          <a href="#planos" className="hover:text-blue-600 transition-colors">Planos</a>
          <a href={PLATFORM_LINK} className="bg-apple-black text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity">Entrar</a>
        </div>

        <div className="md:hidden">
           <a href={PLATFORM_LINK} className="bg-apple-black text-white px-4 py-2 rounded-full text-xs font-bold">Acessar</a>
        </div>
      </div>
    </nav>
  );
};

const FadeIn = ({ children, delay = 0 }: { children?: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <FadeIn>
    <div className="p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-500 group h-full">
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-apple-black group-hover:text-white transition-all duration-500">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-apple-gray text-sm leading-relaxed">{description}</p>
    </div>
  </FadeIn>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium pr-4">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-gray-400" /> : <Plus className="w-5 h-5 text-gray-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-apple-gray leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased text-apple-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E5F6F3] text-xs font-semibold uppercase tracking-widest text-[#00A389] mb-6">
              Monly: Inteligência Financeira para Elite
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
              Controle tudo. <br /> <span className="text-gray-300">Em um só lugar.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-apple-gray max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Uma nova forma de organizar suas finanças com simplicidade, clareza e inteligência. Criado para profissionais que buscam o próximo nível.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href={PLATFORM_LINK}
                className="w-full sm:w-auto px-10 py-5 bg-[#00A389] text-white rounded-full text-lg font-medium hover:bg-[#008A74] transition-all flex items-center justify-center group shadow-xl shadow-teal-500/20"
              >
                Começar gratuitamente
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#funcionalidades" className="text-apple-black font-medium hover:underline flex items-center">
                Ver funcionalidades <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Product Hero Image */}
        <div className="mt-20 px-6 max-w-6xl mx-auto">
          <FadeIn delay={0.4}>
            <div className="relative rounded-[2.5rem] border border-gray-100 p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden bg-white">
               <img 
                 src={IMAGES.HERO_DASHBOARD} 
                 alt="Monly Dashboard" 
                 className="rounded-[2rem] w-full"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Feature Showcase Grid */}
      <section id="funcionalidades" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Poderosa simplicidade.</h2>
              <p className="text-xl text-apple-gray max-w-2xl mx-auto font-light">Monly transforma dados financeiros complexos em insights visuais imediatos para o seu dia a dia.</p>
            </FadeIn>
          </div>

          <div className="space-y-24">
            {/* Lançamentos */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Zap className="text-[#00A389]" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Gestão Ágil de Lançamentos</h3>
                  <p className="text-lg text-apple-gray leading-relaxed">
                    Registre suas receitas e despesas com etiquetas inteligentes, status de pagamento e categorias personalizadas. Tenha o fluxo de caixa sempre sob controle.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00A389]" />
                      <span>Filtros dinâmicos por período e categoria</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00A389]" />
                      <span>Controle de pendências (A Receber / A Pagar)</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="rounded-3xl border border-gray-100 p-2 bg-white shadow-2xl">
                  <img src={IMAGES.LANÇAMENTOS} alt="Lançamentos Monly" className="rounded-2xl w-full" />
                </div>
              </FadeIn>
            </div>

            {/* Analise Intelligence */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <FadeIn delay={0.2}>
                  <div className="rounded-3xl border border-gray-100 p-2 bg-white shadow-2xl">
                    <img src={IMAGES.ANALISE} alt="Análise Monly" className="rounded-2xl w-full" />
                  </div>
                </FadeIn>
              </div>
              <div className="order-1 md:order-2">
                <FadeIn>
                  <div className="space-y-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                      <BrainCircuit className="text-purple-500" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold">Saúde Financeira & IA</h3>
                    <p className="text-lg text-apple-gray leading-relaxed">
                      O Health Score do Monly analisa sua relação receitas/despesas para dar uma nota real sobre sua situação atual, oferecendo recomendações automáticas de economia.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-3 text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        <span>Insights baseados na regra 50-30-20</span>
                      </li>
                      <li className="flex items-center space-x-3 text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        <span>Eficiência de gastos e taxa de poupança</span>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Financing/Projects */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Target className="text-orange-500" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Controle de Projetos e Financiamentos</h3>
                  <p className="text-lg text-apple-gray leading-relaxed">
                    Acompanhe de perto a quitação de grandes ativos como imóveis e veículos. Veja exatamente quanto já foi pago e o saldo devedor atualizado em tempo real.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>Barra de progresso de quitação</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>Gestão detalhada por item financiado</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="rounded-3xl border border-gray-100 p-2 bg-white shadow-2xl">
                  <img src={IMAGES.FINANCIAMENTOS} alt="Financiamentos Monly" className="rounded-2xl w-full" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 max-w-4xl mx-auto leading-tight">
              A clareza que o seu bolso precisava.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-apple-gray max-w-2xl mx-auto mb-16 font-light">
              Monly não é apenas um app de gastos. É uma ferramenta de gestão estratégica para quem valoriza cada real conquistado.
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Layout} 
              title="Design Intuitivo" 
              description="Navegação fluida que facilita o uso diário sem cansar a vista."
            />
            <FeatureCard 
              icon={ShieldCheck} 
              title="Segurança Máxima" 
              description="Seus dados financeiros são privados e protegidos com criptografia de elite."
            />
            <FeatureCard 
              icon={TrendingUp} 
              title="Evolução Patrimonial" 
              description="Visualize seu crescimento mês a mês com gráficos de alta fidelidade."
            />
          </div>
        </div>
      </section>

      {/* Benefits Summary Section */}
      <section id="beneficios" className="py-24 md:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <FadeIn>
                <div className="relative group">
                  <img src={IMAGES.DASH_KPI} alt="Monly KPIs" className="rounded-[2.5rem] shadow-2xl border-4 border-white group-hover:scale-[1.02] transition-transform duration-700" />
                  <div className="absolute -bottom-10 -right-10 w-64 hidden lg:block">
                    <div className="p-4 bg-white rounded-2xl shadow-xl border border-gray-100 animate-bounce">
                      <div className="flex items-center space-x-3 mb-2">
                        <TrendingUp className="text-[#00A389] w-4 h-4" />
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Saldo Mensal</span>
                      </div>
                      <p className="text-2xl font-bold">R$ 3.354,02</p>
                    </div>
                  </div>
                </div>
             </FadeIn>
             <div className="space-y-8">
                <FadeIn>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Métricas que realmente importam para sua liberdade.</h2>
                </FadeIn>
                <div className="grid sm:grid-cols-2 gap-6">
                   {[
                     { title: "Dashboard Unificado", desc: "Tudo o que você precisa em uma única tela." },
                     { title: "Saúde Financeira", desc: "Sabe exatamente o quão bem você está indo." },
                     { title: "Controle de Pendências", desc: "Nunca mais esqueça de cobrar ou pagar." },
                     { title: "Gráficos de Evolução", desc: "Veja o seu patrimônio crescendo ao longo dos anos." }
                   ].map((benefit, i) => (
                     <FadeIn key={i} delay={0.1 * i}>
                       <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                          <p className="text-sm text-apple-gray">{benefit.desc}</p>
                       </div>
                     </FadeIn>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Planos para cada jornada.</h2>
              <p className="text-xl text-apple-gray">Seja gratuito ou Pro, o Monly entrega o melhor para você.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <FadeIn>
              <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-200 flex flex-col h-full hover:shadow-lg transition-all duration-300">
                <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Monly Free</span>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold">Grátis</span>
                </div>
                <p className="text-apple-gray mb-8">Comece a organizar sua vida financeira agora mesmo, sem custos.</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center space-x-3 text-sm">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Registro completo de lançamentos</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Dashboard básico e KPIs</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Acesso em qualquer dispositivo</span>
                  </li>
                </ul>

                <a 
                  href={PLATFORM_LINK}
                  className="w-full py-4 px-6 border border-apple-black text-apple-black rounded-full font-semibold text-center hover:bg-apple-black hover:text-white transition-all"
                >
                  Criar conta grátis
                </a>
              </div>
            </FadeIn>

            {/* Pro Plan */}
            <FadeIn delay={0.1}>
              <div className="p-10 rounded-[2.5rem] bg-apple-black text-white flex flex-col h-full shadow-2xl relative overflow-hidden group">
                <div className="absolute top-8 right-8 px-3 py-1 bg-[#00A389] rounded-full text-[10px] font-bold uppercase tracking-widest">Recomendado</div>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Monly Pro</span>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold">R$ 49</span>
                  <span className="text-gray-400 ml-2">/mês</span>
                </div>
                <p className="text-gray-400 mb-8">Toda a inteligência do Monly desbloqueada para você.</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center space-x-3 text-sm">
                    <Check className="w-5 h-5 text-[#00A389]" />
                    <span>Health Score e Insights de IA</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm">
                    <Check className="w-5 h-5 text-[#00A389]" />
                    <span>Análise de Financiamentos</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm">
                    <Check className="w-5 h-5 text-[#00A389]" />
                    <span>Gráficos Avançados de Evolução</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm">
                    <Check className="w-5 h-5 text-[#00A389]" />
                    <span>Relatórios Fiscais e Exportação</span>
                  </li>
                </ul>

                <a 
                  href={PLATFORM_LINK}
                  className="w-full py-4 px-6 bg-[#00A389] text-white rounded-full font-semibold text-center hover:bg-[#008A74] transition-all"
                >
                  Assinar Monly Pro
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-12 text-center">Tire suas dúvidas</h2>
          </FadeIn>
          <div className="space-y-2">
            <FadeIn delay={0.1}>
              <FAQItem 
                question="Posso importar meus dados?" 
                answer="Sim, o Monly permite a importação rápida de lançamentos via planilhas para que você não precise começar do zero."
              />
            </FadeIn>
            <FAQItem 
              question="O Monly é seguro?" 
              answer="Privacidade é nossa prioridade. Utilizamos criptografia AES-256 e nunca compartilhamos seus dados financeiros com terceiros."
            />
            <FAQItem 
              question="Como funciona o Health Score?" 
              answer="Nosso algoritmo exclusivo analisa sua taxa de poupança, regularidade de ganhos e comprometimento de renda para dar uma nota de 0 a 100 sobre sua saúde financeira."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="bg-[#00A389] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-teal-500/30">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)] opacity-10 pointer-events-none" />
              <FadeIn>
                <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">O futuro das suas finanças <br />começa aqui.</h2>
                <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light">Junte-se a milhares de profissionais que já retomaram o controle com o Monly.</p>
                <a 
                  href={PLATFORM_LINK}
                  className="inline-block px-10 py-5 bg-white text-[#00A389] rounded-full text-xl font-bold hover:bg-gray-100 transition-all shadow-xl"
                >
                  Acessar Dashboard
                </a>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#00A389] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">M</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Monly</span>
              </div>
              <p className="text-apple-gray max-w-xs text-sm leading-relaxed">
                Elite em gestão financeira pessoal e profissional para mentes brilhantes.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 text-sm font-medium">
              <a href={PLATFORM_LINK} className="hover:text-[#00A389] transition-colors">Entrar</a>
              <a href="#funcionalidades" className="hover:text-[#00A389] transition-colors">Funcionalidades</a>
              <a href="#planos" className="hover:text-[#00A389] transition-colors">Preços</a>
              <a href="#" className="hover:text-[#00A389] transition-colors">Suporte</a>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 space-y-4 md:space-y-0">
            <p>© {new Date().getFullYear()} Monly Corp. Todos os direitos reservados.</p>
            <div className="flex space-x-6">
               <a href="#" className="hover:text-apple-black transition-colors">Privacidade</a>
               <a href="#" className="hover:text-apple-black transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
