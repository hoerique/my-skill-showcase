import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Instagram, Linkedin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "E-mail",
    value: "oheriqueferreira@gmail.com",
    href: "mailto:oheriqueferreira@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@oherique.ia",
    href: "https://www.instagram.com/oherique.ia/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Erique Ferreira Dias",
    href: "https://www.linkedin.com/in/erique-ferreira-dias/",
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        {/* Section header */}
        <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
          Contato
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Vamos conversar?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Pronto para transformar seus dados em resultados? Entre em contato e vamos discutir 
          como posso ajudar seu negócio.
        </p>

        {/* WhatsApp CTA */}
        <Button variant="hero" size="xl" className="mb-12" asChild>
          <a href="https://wa.me/5589988137053" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </Button>

        {/* Contact links */}
        <div className="grid sm:grid-cols-3 gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">{link.label}</h3>
              <p className="text-sm text-muted-foreground">{link.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
