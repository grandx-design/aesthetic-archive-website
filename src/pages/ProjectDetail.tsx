import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar.tsx";
import { projects } from "@/utils/data/project.ts";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <section className="section-container pt-24 px-4 md:px-12">
          <h1 className="text-3xl font-bold">Project not found</h1>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="section-container pt-24 px-4 md:px-12">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="mb-6 text-lg">{project.description}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {project.media?.map((file, idx) => {
            const ext = file.split(".").pop()?.toLowerCase();
            const src = `${project.basePath}${file}`;

            if (["mp4", "webm"].includes(ext!)) {
              return (
                <video
                  key={idx}
                  controls
                  className="w-full h-auto rounded shadow"
                  preload="metadata"
                >
                  <source src={src} type={`video/${ext}`} />
                  Your browser does not support the video tag.
                </video>
              );
            }

            return (
              <img
                key={idx}
                src={src}
                alt={`${project.title} media ${idx}`}
                className="w-full rounded shadow object-cover"
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
