import { MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-4 bg-card/50">
      <div className="container max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Sobre Mim
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Prazer, sou Erique
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
              <span className="font-heading text-6xl font-bold gradient-text">EF</span>
            </div>
            <div className="absolute -bottom-2 -right-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">
              Analista de Dados
            </div>
          </div>

          {/* Bio */}
          <div className="text-center lg:text-left">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Sou <span className="text-foreground font-medium">Erique Ferreira Dias</span>, 
              Analista de Dados com foco em transformar dados em insights estratégicos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Atuo no desenvolvimento de dashboards, automações, integrações e soluções com 
              Inteligência Artificial, sempre buscando otimizar processos e apoiar a tomada de decisão.
            </p>
            <div className="flex items-center gap-2 justify-center lg:justify-start text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>São Raimundo Nonato – PI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
