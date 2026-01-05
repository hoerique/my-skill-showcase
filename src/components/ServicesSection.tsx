import { BarChart3, LayoutDashboard, Zap, Brain } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Transformo dados brutos em insights estratégicos para apoiar decisões de negócio com clareza e precisão.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards Personalizados",
    description: "Criação de dashboards interativos em Power BI e Google Data Studio, focados em performance, vendas e operações.",
  },
  {
    icon: Zap,
    title: "Automação de Processos",
    description: "Automação de tarefas e fluxos com n8n, integração entre sistemas, relatórios automáticos e pipelines de dados.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Criação de agentes inteligentes e soluções com IA para atendimento, análise, automação e suporte à decisão.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            O que eu faço
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções completas para transformar seus dados em vantagem competitiva
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border card-shadow hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
