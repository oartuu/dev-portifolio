import { ProjectNav } from "@/components/template/project-nav";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { Inter } from "next/font/google";
import { projectsData } from "@/lib/projects";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
interface PageProps {
  params: Promise<{
    name: string;
  }>;
}

const page = ({ params }: PageProps) => {
  const { name } = use(params);

  const data = projectsData.find((project) => project.alias === name)!;
  return (
    <div
      className={`flex flex-col justify-start space-y-8 min-h-screen max-w-screen bg-zinc-950 ${inter.className} antialiased `}
    >
      <div className="bg-zinc-950 flex-1 w-full min:h-[900px] shadow-xl flex flex-col justify-start items-center space-y-8 z-10">
        <ProjectNav />

        <h1 className="text-6xl font-bold text-zinc-50 text-shadow-md text-shadow-zinc-600/60">
          {data.title}
          <Separator className="bg-zinc-800/80 " />
        </h1>

        <p className="text-zinc-50 text-lg md:w-1/3 text-center px-4">
          {data.desc}
        </p>

        <Link
          href={data.aboutUrl}
          rel="noopener"
          target="blank"
          className="text-zinc-50 text-lg font-bold hover:underline flex gap-2 items-center "
        >
          {" "}
          Site <MoveRight size={15} />{" "}
        </Link>
      </div>

      <div className="w-full h-auto bg-white flex-none flex flex-col justify-evenly items-center py-8 px-4">
        <div className=" md:w-[700px] flex flex-col justify-evenly items-center space-y-4">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
            <Image
              src={data.imgUrl}
              alt="Photo by Drew Beamer"
              fill
              className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </AspectRatio>

          <p className="text-zinc-950 text-md ">{data.articleText}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
