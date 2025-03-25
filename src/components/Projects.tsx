
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website Redesign',
    description: 'Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    category: 'UI/UX Design',
    link: '#',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'A clean, intuitive banking application design with focus on security and ease of use.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
    category: 'Mobile App',
    link: '#',
  },
  {
    id: 3,
    title: 'Product Landing Page',
    description: 'High-converting landing page design for a tech product focusing on visual hierarchy.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop',
    category: 'Web Design',
    link: '#',
  },
  {
    id: 4,
    title: 'Fitness Tracking Dashboard',
    description: 'Interactive dashboard design for a fitness application with data visualization.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop',
    category: 'Dashboard',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="animate-fade-in">
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-description">
          Explore my recent design work - each project represents my dedication to creating beautiful, functional experiences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="relative overflow-hidden rounded-2xl card-hover animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative p-2 rounded-2xl">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative rounded-xl overflow-hidden bg-white shadow-md">
                <div className="img-hover-zoom h-64 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full bg-secondary text-primary mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center animate-fade-in">
        <a 
          href="#"
          className="inline-flex items-center outline-button"
        >
          View All Projects
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
