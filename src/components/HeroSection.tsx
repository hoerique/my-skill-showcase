import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Disponível para novos projetos</span>
        </div>

        {/* Name */}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Erique Ferreira Dias
        </h1>

        {/* Title */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <span className="gradient-text">Dados, Automação & IA</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          Transformo dados em decisões inteligentes. Dashboards, automações e soluções com 
          Inteligência Artificial para otimizar processos e escalar resultados.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/5589988137053" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#servicos">
              Ver Serviços
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
