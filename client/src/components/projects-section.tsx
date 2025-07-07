import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Walk Safe",
      description: "Python + Django app hosted on AWS EC2 that generates safe walking routes using crime data with PostgreSQL + Redis backend and D3.js for data visualizations.",
      technologies: ["Python", "Django", "AWS EC2", "PostgreSQL", "Redis", "D3.js"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Game Review Rating Predictor",
      description: "Flask-based app to predict game ratings using NLP (TF-IDF, tokenization, K-fold CV). Achieved 90% accuracy across 13M+ user comments.",
      technologies: ["Flask", "NLP", "TF-IDF", "Machine Learning", "Python"],
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 section-fade">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
