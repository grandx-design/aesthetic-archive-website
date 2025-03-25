
import { ChevronDown } from 'lucide-react';
import { ThreeDPhotoCarousel } from '@/components/ui/3d-carousel';
import { useEffect } from 'react';
import { renderCanvas } from '@/components/ui/canvas';

const Hero = () => {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full opacity-20 blur-[100px] animate-pulse-subtle"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-100 rounded-full opacity-20 blur-[80px] animate-float"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-20 md:pt-0 flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight animate-fade-in">
            Creating <span className="relative">
              Digital Experiences
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-primary/20 rounded-full"></span>
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground animate-fade-in animate-delay-200">
            I design and build digital products that help businesses achieve their goals
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-300">
            <a href="#projects" className="filled-button">
              View Projects
            </a>
            <a href="#contact" className="outline-button">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="w-full max-w-6xl animate-fade-in animate-delay-400">
          <ThreeDPhotoCarousel />
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" aria-label="Scroll down">
            <ChevronDown className="h-8 w-8 text-primary/50" />
          </a>
        </div>
      </div>

      <canvas
        className="pointer-events-none absolute inset-0 z-20"
        id="canvas"
      ></canvas>
    </section>
  );
};

export default Hero;
