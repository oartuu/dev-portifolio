import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Button } from "../ui/button";
import Link from "next/link";

interface ProjectProps {

    title: string;
    desc: string;
    link: string;
}

export function Project({title, desc, link}: ProjectProps) {
  return (
    <Item variant="outline" className="border-zinc-700/80 ">
      <ItemContent>
        <ItemTitle className="text-zinc-50 text-2xl font-bold">{title}</ItemTitle>
        <ItemDescription className="text-zinc-400">
          {desc}
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm" className="hover:bg-zinc-900 hover:cursor-pointer hover:text-zinc-50 transition-colors duration-300">
          <Link href={link} > mais </Link>
        </Button>
      </ItemActions>
    </Item>
  );
}
