import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";

export function ProjectNav() {
  return (
    <div className="w-full h-16 bg-transparent flex items-center justify-between p-4 mt-4 ">
      <div>
        <Link href={"/projects"}>
          <ArrowLeft className="text-zinc-50 hover:text-zinc-200 hover:cursor-pointer" />
        </Link>
      </div>
      <div className="px-4 mr-4">
        <Link href={"https://github.com/oartuu"}>
          <Github className="text-zinc-50 hover:text-zinc-200 hover:cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
