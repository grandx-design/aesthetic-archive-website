import { FlipCard, FlipCardFront, FlipCardBack } from "@/components/ui/flip-card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar.tsx";
import {Link} from "react-router-dom";
const env = import.meta.env;

const Projects = () => {
  const projects = [
    {
      title: "Pristine Print",
      slug: "pristine-print",
      description: "Description of Pristine Print",
      image: `${env.VITE_STATIC_ASSETS}/portofolio/prishtinaprint/0.jpg`,
      bgColor: "bg-[#0d59e9]",
    },
    {
      title: "75Family",
      slug: "75family",
      description: "Description of 75Family",
      image: `${env.VITE_STATIC_ASSETS}/portofolio/75family/0.%20TN.png`,
      bgColor: "bg-yellow-500",
    },
    {
      title: "Influencer Zone",
      slug: "influencer-zone",
      description: "Description of Influencer Zone",
      image: `${env.VITE_STATIC_ASSETS}/portofolio/influencerzone/0.%20TN.png`,
      bgColor: "bg-red-600",
    },
    {
      title: "Mixed 1x1",
      slug: "mixed-1x1",
      description: "Description of Mixed 1x1",
      image: `${env.VITE_STATIC_ASSETS}/portofolio/mixed1x1/0.%20TN.png`,
      bgColor: "bg-purple-500",
    },
    {
      title: "Mixed 9x16",
      slug: "mixed-9x16",
      description: "Description of Mixed 9x16",
      image: `${env.VITE_STATIC_ASSETS}/portofolio/mixed9x16/0.%20TN.png`,
      bgColor: "bg-pink-500",
    },
    {
      title: "UGC",
      slug: "ugc",
      description: "Description of UGC",
      image: `${env.VITE_STATIC_ASSETS}/portofolio/ugc/0.TN.png`,
      bgColor: "bg-teal-500",
    },
  ];

  return (
      <>
        <section className="section-container">
          <div className="flex flex-wrap justify-center gap-4">
            <Navbar />

            {projects.map((project) => (
                <FlipCard
                    key={project.slug}
                    flipDirection="horizontal"
                    className="h-96 w-full md:w-2/6"
                >
                  <FlipCardFront className="rounded-xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="size-full object-cover"
                    />
                  </FlipCardFront>
                  <FlipCardBack
                      className={`flex flex-col items-center justify-center rounded-xl px-4 py-6 text-center text-white ${project.bgColor}`}
                  >
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <p className="mb-4">{project.description}</p>

                    <Link to={`/projects/${project.slug}`}>
                      <Button className="rounded-full">Learn More</Button>
                    </Link>
                  </FlipCardBack>
                </FlipCard>
            ))}
          </div>
        </section>
      </>
  )
};
export default Projects;