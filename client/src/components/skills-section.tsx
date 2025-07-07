import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  GitBranch, 
  Zap, 
  Cloud, 
  Settings, 
  Search,
  Server,
  Smartphone
} from "lucide-react";

export default function SkillsSection() {
  const skills = [
    { name: "Java", icon: Code, color: "text-red-600" },
    { name: "Python", icon: Code, color: "text-blue-600" },
    { name: "MySQL", icon: Database, color: "text-orange-600" },
    { name: "Git", icon: GitBranch, color: "text-red-500" },
    { name: "JavaScript", icon: Zap, color: "text-yellow-500" },
    { name: "React", icon: Zap, color: "text-blue-400" },
    { name: "AWS", icon: Cloud, color: "text-orange-500" },
    { name: "Jenkins", icon: Settings, color: "text-gray-600" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-800" },
    { name: "APIs", icon: Server, color: "text-purple-600" },
    { name: "Kotlin", icon: Smartphone, color: "text-purple-800" },
    { name: "ElasticSearch", icon: Search, color: "text-yellow-600" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core technologies and tools I use to build robust, scalable applications
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 section-fade">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="skill-logo bg-light p-6 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className={`text-4xl ${skill.color}`} />
                </div>
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
