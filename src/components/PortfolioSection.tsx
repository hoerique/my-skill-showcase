const projects = [
  { title: "Dashboards de Tráfego Pago", category: "Marketing" },
  { title: "Gestão Escolar", category: "Educação" },
  { title: "Produção", category: "Indústria" },
  { title: "Empenhos", category: "Financeiro" },
  { title: "Vendas", category: "Comercial" },
  { title: "Financeiro", category: "Gestão" },
  { title: "Logística", category: "Operações" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 px-4 bg-card/50">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Projetos Desenvolvidos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Projetos focados em usabilidade, clareza e impacto real no negócio
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-card border border-border overflow-hidden card-shadow hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              {/* Icon pattern */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs text-primary font-medium tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="font-heading text-lg font-semibold mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
