import { Palette, Film, PenTool, Image, Brain, TrendingUp } from 'lucide-react';

const About = () => {
  const skills = [{
    name: 'Graphic Design',
    icon: Palette,
    description: 'Adobe Photoshop, Illustrator - Creating stunning visual designs and brand identities'
  }, {
    name: 'Video Editing',
    icon: Film,
    description: 'Adobe Premiere Pro - Crafting compelling visual narratives and professional video content'
  }, {
    name: 'Motion Graphics',
    icon: Image,
    description: 'Adobe After Effects - Designing dynamic animations and visual effects'
  }, {
    name: 'Visual Storytelling',
    icon: PenTool,
    description: 'Transforming concepts into engaging visual narratives'
  }, {
    name: 'Creative Concept Development',
    icon: Brain,
    description: 'Generating innovative ideas and creative solutions'
  }, {
    name: 'Content Strategy',
    icon: TrendingUp,
    description: 'Planning and optimizing content for maximum impact and engagement'
  }];

  return <section id="about" className="section-container bg-secondary/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="animate-fade-in">
          <h2 className="section-title">About Me</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>Creative by heart, professional by mindset. With a strong passion for design, visual storytelling, and digital creativity, I transform ideas into engaging visual experiences. Highly organized, detail-oriented, and deadline-driven, I excel in fast-paced environments where creativity meets impact. Collaboration, innovation, and delivering top-quality results are at the core of everything I do.</p>
            <p>Education

Eqrem Çabej Philological High School | 2015 – 2018

Bachelor of Arts – AAB College | 2022 – Present</p>
            <p>Professional Experience

Graphic Designer – Ricoh | 2018 – 2021

Created brand identities, packaging designs, websites, and print materials that strengthened brand presence and customer engagement.

Developed social media campaigns and email marketing designs aligned with brand strategies.

Video Editor – Bored Panda | 2021 – 2022

Edited raw footage into polished, high-quality videos with an eye for detail, pacing, and visual storytelling.

Maintained a consistent visual style across diverse projects and content formats.

Video Editor & Content Planner – Jellysmack | 2022 – 2023

Produced engaging Facebook videos designed to maximize viewer retention and shareability. Managed publishing schedules and optimized content based on audience engagement insights.

Motion Graphic Designer – Gorenje | 2023 – 2025

Designed dynamic animations, video ads, and social media content for wide-scale marketing campaigns. Specialized in motion graphics that captivate audiences and elevate brand storytelling.</p>
            
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
            {skills.map((skill, index) => <div key={index} className="p-6 rounded-2xl subtle-glass card-hover animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/5 mb-4">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-display font-bold mb-2">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;
