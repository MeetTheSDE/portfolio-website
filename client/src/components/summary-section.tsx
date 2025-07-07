import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function SummarySection() {
  return (
    <section id="summary" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Summary</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center section-fade">
          <div>
            <div className="bg-light p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Backend Engineering Expertise</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Backend-focused software engineer with 3+ years of experience delivering scalable, secure systems using Java, Python, JavaScript, and relational databases. Specializes in secure API development, third-party integrations, and cloud-based deployment pipelines.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">Scalable Systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">API Development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">Cloud Deployment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">Security & Compliance</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl text-primary-foreground"
            >
              <h4 className="text-xl font-semibold mb-2">3+ Years</h4>
              <p className="text-primary-foreground/80">Professional Experience</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-accent to-primary p-6 rounded-xl text-primary-foreground"
            >
              <h4 className="text-xl font-semibold mb-2">70% Reduction</h4>
              <p className="text-primary-foreground/80">In Support Tickets</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl text-primary-foreground"
            >
              <h4 className="text-xl font-semibold mb-2">20% Performance</h4>
              <p className="text-primary-foreground/80">Improvement Achieved</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
