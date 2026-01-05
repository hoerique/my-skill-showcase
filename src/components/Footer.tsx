const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Erique Ferreira Dias. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
