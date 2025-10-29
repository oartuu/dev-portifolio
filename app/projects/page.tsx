import { Nav } from "@/components/template/nav";
import { Project } from "@/components/template/project";
import { Separator } from "@/components/ui/separator";

import { Cal_Sans } from "next/font/google";

const calSans = Cal_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const page = () => {
  return (
    <div
      className={`relative w-screen h-screen bg-linear-to-bl from-zinc-950 via-zinc-900 to-zinc-950 flex flex-col justify-between items-center ${calSans.className} antialiased`}
    >
      <Nav />

      <main className="bg-transparent w-3/4 flex-1 p-8 flex flex-col items-center space-y-6">
        <div className="px-2 space-y-2 w-full flex flex-col justify-start ">
          <h1 className="text-6xl font-bold text-zinc-50 text-shadow-md text-shadow-zinc-600/60 ">
            Projetos
          </h1>
          <p className="text-zinc-400">Projetos pessoais e acadêmicos</p>
        </div>
        <Separator className="bg-zinc-800/80" />

        <div className="w-full grid grid-cols-3 gap-4 p-4  overflow-y-hidden">
          <Project
            title="projeto 1"
            desc="descrição do projeto."
            link="/projects/projeto-1"
          />
        </div>
      </main>
    </div>
  );
};

export default page;
