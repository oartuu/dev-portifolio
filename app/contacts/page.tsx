import React from 'react'
import { Inter, Cal_Sans } from "next/font/google";
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import {Github, Linkedin, Mail, Target} from 'lucide-react';
import Link from 'next/link';
import { Nav } from '@/components/template/nav';

const cal_sans = Cal_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const page = () => {
  return (
    <div
      className={`relative w-screen h-screen bg-linear-to-bl from-zinc-950 via-zinc-900 to-zinc-950 flex flex-col justify-start items-center space-y-36 ${inter.className} antialiased`}
    >
      <Nav />

      <div className="w-11/12 h-96 grid grid-cols-3 p-4 gap-8">
        <Card className="text-zinc-50 text-center bg-transparent hover:bg-zinc-800/20 transition-colors duration-300 shadow-2xl">
          <Link href={"https://www.linkedin.com/in/oartuu/"} className="flex-1">
            <CardContent className=" h-full flex flex-col justify-evenly items-center">
              <div className="border border-zinc-50 rounded-full p-2">
                <Linkedin className="" />
              </div>
              <h1 className={`text-3xl ${cal_sans.className} antialiased`}>
                Arthur do Nascimento
              </h1>
              <p className="text-zinc-400 font-light">LinkedIn</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="text-zinc-50 text-center bg-transparent hover:bg-zinc-800/20 transition-colors duration-300 shadow-2xl">
          <Link
            href={"mailto:artu.donascimento@gmail.com"}
            target="https://gmail.com"
            className="flex-1"
          >
            <CardContent className=" h-full flex flex-col justify-evenly items-center">
              <div className="border border-zinc-50 rounded-full p-2">
                <Mail className="" />
              </div>
              <h1 className={`text-3xl ${cal_sans.className} antialiased`}>
                artu.donascimento@gmail.com
              </h1>
              <p className="text-zinc-400 font-light">Email</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="text-zinc-50 text-center bg-transparent hover:bg-zinc-800/20 transition-colors duration-300 shadow-2xl">
          <Link href={"https://github.com/oartuu"} className="flex-1">
            <CardContent className=" h-full flex flex-col justify-evenly items-center">
              <div className="border border-zinc-50 rounded-full p-2">
                <Github className="" />
              </div>
              <h1 className={`text-3xl ${cal_sans.className} antialiased`}>
                oartuu
              </h1>
              <p className="text-zinc-400 font-light">Github</p>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default page
