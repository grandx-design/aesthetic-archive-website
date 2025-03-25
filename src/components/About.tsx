
import { Code, Layers, PenTool, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'UI/UX Design', icon: PenTool, description: 'Creating intuitive and beautiful user interfaces that enhance user experience.' },
    { name: 'Web Development', icon: Code, description: 'Building responsive, performant websites using modern technologies.' },
    { name: 'Visual Design', icon: Layers, description: 'Crafting visual identities and cohesive design systems for brands.' },
    { name: 'Performance Optimization', icon: Zap, description: 'Improving site performance and user experience metrics.' },
  ];

  return (
    <section id="about" className="section-container bg-secondary/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="animate-fade-in">
          <h2 className="section-title">About Me</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              I'm a designer and developer with over 5 years of experience creating digital products that are both beautiful and functional.
            </p>
            <p>
              My approach combines minimalist aesthetics with user-centered functionality. I believe that great design should be invisible – it should feel natural and intuitive to the user while achieving business objectives.
            </p>
            <p>
              When I'm not designing, you'll find me exploring new technologies, experimenting with creative coding, or seeking inspiration in architecture and nature.
            </p>
            
            <div className="pt-4">
              <a href="#contact" className="filled-button">
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-display font-bold mb-8 animate-fade-in">My Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl subtle-glass card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/5 mb-4">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-display font-bold mb-2">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
