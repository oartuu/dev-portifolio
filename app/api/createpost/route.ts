import { NextResponse } from "next/server";
import {prisma} from "../../../lib/prisma"

export interface Post {
  id: number;
  title: string;
  desc: string;
  resume: string;
  aboutUrl: string;
  link: string;
  alias: string;
  imgUrl: string;
  articleText: string;
}



export async function POST (req: Request){
    const data: Post = await req.json()
    const existingAlias = await prisma.posts.findUnique({
      where: { alias: data.alias },
    });
    const existingTitle = await prisma.posts.findUnique({
      where: { title: data.title },
    });
    const existingLink = await prisma.posts.findUnique({
      where: { link: data.link },
    });

    if (!data){
        return NextResponse.json({
            "error": "sem dados",
            "status": 403
        })
    } else if(existingTitle){

        return NextResponse.json({
            "error": "nome repetido",
            "status": 403
        })
    } else if(existingAlias){
        return NextResponse.json({
            "error": "alias repetido",
            "status": 403
        })

    }else if(existingLink){
        return NextResponse.json({
            "error": "link repetido",
            "status": 403
        })

    }else{


        const post = await prisma.posts.create({
            data:{
                title: data.title,
                desc: data.desc,
                resume: data.resume,
                aboutUrl: data.aboutUrl,
                link: data.link,
                alias: data.alias,
                imgUrl: data.imgUrl,
                articleText: data.articleText,
            }
        })

        return NextResponse.json({
            "message": "created post",
            "status":200,
            post
        })
    }

}