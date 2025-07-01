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
    <div className="space-y-6 text-muted-foreground text-base leading-relaxed">

      <p>
        Creative by heart, professional by mindset. With a strong passion for design, visual storytelling, and digital creativity, I transform ideas into engaging visual experiences. Highly organized, detail-oriented, and deadline-driven, I thrive in fast-paced environments where creativity meets impact. Collaboration, innovation, and delivering top-quality results are at the core of everything I do.
      </p>

      <div>
        <h3 className="font-semibold text-lg mb-1">Education</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Eqrem Çabej Philological High School | <span className="text-sm text-gray-500">2015 – 2018</span></li>
          <li>Bachelor of Arts – AAB College | <span className="text-sm text-gray-500">2022 – Present</span></li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-1">Professional Experience</h3>
        <ul className="space-y-4">
          <li>
            <strong>Graphic Designer – Ricoh</strong> <span className="text-sm text-gray-500">2018 – 2021</span><br />
            Created brand identities, packaging designs, websites, and print materials. Developed social media campaigns and email marketing assets aligned with brand strategies.
          </li>
          <li>
            <strong>Video Editor – Bored Panda</strong> <span className="text-sm text-gray-500">2021 – 2022</span><br />
            Edited raw footage into polished videos with a strong focus on pacing, detail, and storytelling. Maintained visual consistency across diverse content formats.
          </li>
          <li>
            <strong>Video Editor & Content Planner – Jellysmack</strong> <span className="text-sm text-gray-500">2022 – 2023</span><br />
            Produced engaging Facebook videos optimized for retention. Managed publishing schedules and content strategies based on audience insights.
          </li>
          <li>
            <strong>Motion Graphic Designer – Gorenje</strong> <span className="text-sm text-gray-500">2023 – 2025</span><br />
            Designed dynamic animations, video ads, and social media content for marketing campaigns. Specialized in motion graphics to enhance brand storytelling.
          </li>
        </ul>
      </div>

      <div className="pt-6">
        <a href="#contact" className="filled-button">
          Let's Work Together
        </a>
      </div>
    </div>
  </div>

  <div>
    <h3 className="text-xl font-display font-bold mb-8 animate-fade-in">
      My Expertise
    </h3>
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

    </section>;
};
export default About;