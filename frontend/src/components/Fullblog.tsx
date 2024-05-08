import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"



export const Fullblog =  ({blog}:{blog:Blog}) =>{

    return <div>
        <Appbar />
    <div className="flex justify-center">

    <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
        <div className="col-span-8 bg-gray-200 p-3 rounded-md">
            
                <div className="text-5xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-slate-500 pt-2">
                    posted on 2nd Dec 2024
                </div>
<div className="pt-4">
    {blog.content}
</div>
            </div>
            <div className="col-span-4 p-3 text-slate-600 text-lg">
                Author
                <div className="flex pt-1">
                    <div   className="pr-2 ">
                    <Avatar name={blog.author.name || "Anonymous"}  size="big"/>

                    </div>
                                      <div className="">
                                      <div className="font-extrabold text-2xl  ">
                                                    {blog.author.name || "Anonymous"}
                                                                </div>
                                                                    
                                                            <div className="font-thin py-2">
                                                                                    Author's Bio consisting of a paraphrase to describe his likings and dislikings.
                                                                                Author's Bio consisting of a paraphrase to describe his likings and dislikings.
                                                                     </div>                                                                          
                                                                                  
                                                    </div>
                </div>

             </div>
        
            
    </div>
    </div>
    </div>
}