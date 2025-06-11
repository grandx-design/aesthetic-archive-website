import { motion, LayoutGroup } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

const env = import.meta.env;

const Hero = () => {
  const exampleImages = [
    { url: `${env.VITE_STATIC_ASSETS}/portofolio/header/0.png`, title: "Image 1" },
    { url: `${env.VITE_STATIC_ASSETS}/portofolio/header/1.png`, title: "Image 2" },
    { url: `${env.VITE_STATIC_ASSETS}/portofolio/header/2.png`, title: "Image 3" },
    { url: `${env.VITE_STATIC_ASSETS}/portofolio/header/3.png`, title: "Image 4" },
    { url: `${env.VITE_STATIC_ASSETS}/portofolio/header/4.png`, title: "Image 5" },
  ];

  return (
    // 1) allow overflow on mobile by using overflow-visible
    // 2) use min-h-screen so the section can grow if needed
    <section className="relative w-full min-h-screen overflow-visible flex justify-center items-center">
      {/* Floating images (absolutely positioned beyond the normal flow) */}
      <Floating
        sensitivity={-0.5}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <FloatingElement depth={0.5} className="top-[15%] left-[2%] md:top-[35%] md:left-[5%]">
          <motion.img
            src={exampleImages[0].url}
            alt={exampleImages[0].title}
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover rounded-xl shadow-2xl -rotate-[3deg] transition-transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[0%] left-[8%] md:top-[10%] md:left-[11%]">
          <motion.img
            src={exampleImages[1].url}
            alt={exampleImages[1].title}
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover rounded-xl shadow-2xl -rotate-12 transition-transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[90%] left-[6%] md:top-[50%] md:left-[8%]">
          <motion.img
            src={exampleImages[2].url}
            alt={exampleImages[2].title}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover rounded-xl shadow-2xl -rotate-[4deg] transition-transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement depth={2} className="top-[0%] left-[87%] md:top-[15%] md:left-[75%]">
          <motion.img
            src={exampleImages[3].url}
            alt={exampleImages[3].title}
            className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover rounded-xl shadow-2xl rotate-[6deg] transition-transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[78%] left-[53%] md:top-[48%] md:left-[75%]">
          <motion.img
            src={exampleImages[4].url}
            alt={exampleImages[4].title}
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-xl shadow-2xl rotate-[19deg] transition-transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      {/* Centered headline */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          className="text-5xl sm:text-5xl md:text-8xl lg:text-9xl text-center leading-tight tracking-tight"
        >
          <span>Make your </span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre">
              <motion.span
                layout
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                designs{" "}
              </motion.span>
              <TextRotate
                texts={[
                  "fancy",
                  "fun",
                  "lovely ♥",
                  "weird",
                  "funky",
                  "💃🕺",
                  "sexy",
                  "🕶️ cool",
                  "go 🚀",
                  "🔥🔥🔥",
                  "pop ✨",
                  "rock 🤘",
                ]}
                mainClassName="overflow-hidden pr-2 text-primary py-0 pb-2 md:pb-4 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-center text-muted-foreground"
        >
          {/* Optional subtitle */}
        </motion.p>
      </div>

      <canvas
        id="canvas"
        className="absolute inset-0 w-full h-full bg-skin-base pointer-events-none"
      />
    </section>
  );
};

export default Hero;
