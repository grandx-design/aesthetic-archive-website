import { FlipCard, FlipCardFront, FlipCardBack } from "@/components/ui/flip-card";
import { Button } from "@/components/ui/button";
const Projects = () => {
  return <section className="section-container">
      <div className="flex flex-wrap justify-center gap-4">
        <FlipCard className="h-96 w-full md:w-2/6">
          <FlipCardFront className="rounded-xl">
            <img width={1015} height={678} src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" className="size-full object-cover" />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-xl px-4 py-6 text-center text-white bg-[0d5beb] bg-[#0d59e9]">
            <h2 className="text-xl font-bold">Project 1</h2>
            <p className="mb-4">Description of Project 1</p>
            <Button className="rounded-full">Learn More</Button>
          </FlipCardBack>
        </FlipCard>

        <FlipCard flipDirection="vertical" className="h-96 w-full md:w-2/6">
          <FlipCardFront className="rounded-xl">
            <img width={542} height={678} src="https://images.unsplash.com/photo-1617814121568-9b184eaabf08?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 2" className="size-full object-cover" />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-xl bg-emerald-500 px-4 py-6 text-center text-white">
            <h2 className="text-xl font-bold">Project 2</h2>
            <p className="mb-4">Description of Project 2</p>
            <Button className="rounded-full">Learn More</Button>
          </FlipCardBack>
        </FlipCard>
      </div>
    </section>;
};
export default Projects;