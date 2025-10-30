import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function Nav() {
  return (
    <div className="w-11/12 h-16 bg-transparent flex items-center justify-between p-4 mt-4">
      <div>
        <Link href={"/"}>
          <ArrowLeft className="text-zinc-50 hover:cursor-pointer" />
        </Link>
      </div>
      <div className="[&>ul]:flex [&>ul]:items-center [&>ul]:space-x-9 [&>ul>li>a]:hover:underline [&>ul>li>a]:hover:text-zinc-200 [&>ul>li>a]:text-zinc-50 md:px-4">
        <ul>
          <li>
            <Link href={"/projects"}>Projetos</Link>
          </li>
          <li>
            <Link href={"/contacts"}>Contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
