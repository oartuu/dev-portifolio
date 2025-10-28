"use client";

import { Cal_Sans } from "next/font/google";
import Particles from "@/components/Particles";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const calSans = Cal_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export default function Home() {
  return (
    <div
      className={`relative flex items-center justify-center w-screen h-screen bg-gradient-to-bl from-zinc-950 via-zinc-900 to-zinc-950 flex flex-col justify-center items-center ${calSans.className} antialiased`}
    >
      <div className="relative w-full h-screen">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={700}
          particleSpread={20}
          speed={0.0001}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          sizeRandomness={1}
        />
      </div>

      <div className="absolute flex flex-col justify-center items-center space-y-6  ">
        <div className="bg-transparent w-96 flex items-center justify-evenly gap-4  text-xl text-zinc-50 [&>a]:hover:underline [&>a]:hover:text-zinc-200  ">
          <Link href={"/projects"}>projetos</Link>
          <Link href={""}>sobre</Link>
          <Link href={""}>contato</Link>
        </div>
        <h1 className="text-9xl font-bold text-zinc-50 text-shadow-md text-shadow-zinc-600/60">
          oartuu
        </h1>
        <Separator className="bg-zinc-800" />
        <p className="text-zinc-400">Atualmente trabalhando em ...</p>
      </div>
    </div>
  );
}
