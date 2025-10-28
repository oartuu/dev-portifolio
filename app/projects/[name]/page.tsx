
import { ProjectNav } from '@/components/template/project-nav'
import { Separator } from '@/components/ui/separator'
import { use } from 'react'

interface PageProps {
  params: Promise <{
    name: string
  }>
}



const page = ({ params }: PageProps) => {
  const { name } = use(params)

  return (
    <div className="flex flex-col justify-start h-screen w-screen">
      <div className="bg-zinc-950 w-full h-3/4 shadow-xl flex flex-col justify-start items-center space-y-8">
        <ProjectNav/>

        <h1 className="text-9xl font-bold text-zinc-50 text-shadow-md text-shadow-zinc-600/60">
          {name}
        <Separator className='bg-zinc-800/80 '/>
        </h1>
      </div>
    </div>
  );
}

export default page
