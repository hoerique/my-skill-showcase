const skillCategories = [
  {
    title: "Linguagens & Ferramentas",
    skills: ["Python", "SQL", "Excel", "Pandas", "NumPy"],
  },
  {
    title: "Visualização",
    skills: ["Power BI", "Google Data Studio"],
  },
  {
    title: "Bancos de Dados",
    skills: ["MySQL", "PostgreSQL", "ETL"],
  },
  {
    title: "Automação & IA",
    skills: ["n8n", "APIs", "Inteligência Artificial"],
  },
];

const courses = [
  "Python para Análise de Dados — Empowerdata",
  "Google Data Studio — Empowerdata",
  "Power BI Aplicado a Negócios — Voitto",
  "Excel — Senai-DF",
  "SQL para Negócios — Eduliv",
  "n8n e Make — Empowerdata",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Stack
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Habilidades Técnicas
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-card border border-border card-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-heading text-lg font-semibold mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-secondary text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="p-8 rounded-2xl bg-card border border-border card-shadow">
          <h3 className="font-heading text-xl font-semibold mb-6 text-center">
            Formação e Cursos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div
                key={course}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
