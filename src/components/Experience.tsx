import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Tech Company Name",
      role: "Senior Software Engineer",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      technologies: ["React", "TypeScript", "Node.js", "AWS"]
    },
    {
      company: "Startup Inc.",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Built and maintained multiple client projects from concept to deployment. Worked closely with design and product teams to deliver exceptional user experiences.",
      technologies: ["JavaScript", "Python", "PostgreSQL", "Docker"]
    },
    {
      company: "Software Solutions",
      role: "Junior Developer",
      period: "2019 - 2020",
      description: "Developed responsive web applications and contributed to various internal tools. Gained experience in agile development methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 section-reveal">
          Work <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 md:p-8 card-glow section-reveal"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground font-medium">{exp.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
