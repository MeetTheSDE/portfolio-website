import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Omeda",
      location: "Chicago, IL",
      period: "Nov 2021 – Feb 2025",
      current: true,
      achievements: [
        "Integrated Stripe Payment Gateway using AWS Lambda for real-time billing & webhook handling",
        "Built access control and data management tools in Java/JAX-RS — reduced support tickets by 70%",
        "Secured APIs using JWT and RBAC, improving authorization and compliance",
        "Refactored legacy APIs to optimize payloads and added caching/pagination — boosted performance by 20%",
        "Created automated, real-time email campaigns tied to voyage events (30% engagement gain)",
        "Maintained CI/CD pipelines with Jenkins; wrote JUnit/TestNG test suites for all services"
      ]
    },
    {
      title: "Software Developer",
      company: "Sculptsoft",
      location: "Ahmedabad, India",
      period: "Jul 2018 – Mar 2019",
      current: false,
      achievements: [
        "Developed a full-featured real estate platform with Spring Boot and Hibernate",
        "Implemented live search and filtering with jQuery/AJAX",
        "Wrote 300+ unit tests with JUnit and TestNG",
        "Used GitHub for code management and peer-reviewed all changes"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-12 section-fade">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="md:flex items-start">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className={`${experience.current ? 'bg-primary' : 'bg-muted-foreground'} text-white px-4 py-2 rounded-lg text-sm font-medium inline-block`}>
                    {experience.period}
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <div className="bg-light p-8 rounded-2xl shadow-sm">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{experience.title}</h3>
                    <p className="text-primary font-medium mb-4">{experience.company} • {experience.location}</p>
                    <ul className="space-y-3 text-muted-foreground">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
