import { Appbar } from "./Appbar"








export const Skeleton= ()=>{

    return <div className="animate-pulse">
        <Appbar />
<div className="bg-gray-200 animate-pulse w-full h-2 p-8 mb-2"></div>
    <div className="flex  items-center">
<div className="h-screen bg-gray-200 w-48 flex-2 rounded-md mr-10 ml-0"></div>
        <div className="flex-1 mt-10 ">
        <BlogSkeleton />
        </div>
{/* <div className="h-screen bg-gray-200 w-full rounded-md ml-12"></div> */}
       

    </div>
    </div>
}

function BlogSkeleton(){
    
    return <div role="status" className="max-w-lg animate-pulse  flex justify-center flex-col h-screen w-full" >
        
    
    <div className="h-4 w-full p-12 bg-gray-200 rounded-md w-full mb-4"></div>
                <div className="p-4 border-b border-slate-200 cursor-pointer pb-4 w-screen max-w-screen-lg">
        <div className="flex">
                    <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          
                        </div>  
                        <div className="flex justify-center flex-col pl-2">
                            
                        </div>
                            <div className="pl-2  p-6flex justify-center flex-col font-thin text-sm text-slate-500">
           
                                      </div>
        </div>
        <div className="text-xl pt-2 font-semibold">
            <div className="h-4 w-12 p-12 bg-gray-200 rounded-md w-48 mb-4"></div>
        </div>
        <div className="text-md font-thin">
            <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
        </div>
        <div className="text-slate-500 pt-4 text-sm font-thin">
      
        <div className="h-4 w-full bg-gray-200 p-5 rounded-md w-48 mb-4"></div>
        <div className="h-4 w-4 bg-gray-200 p-3 rounded-md w-48 mb-4"></div>
        <div className="h-4 w-4 bg-gray-200 p-2 rounded-md w-48 mb-4"></div>
            </div>
            </div>
                {/* kwb/dljbqwkldnkw */}
                <div className="h-4 w-full p-12 bg-gray-200 rounded-md w-full mb-4"></div>
                <div className="p-4 border-b border-slate-200 cursor-pointer pb-4 w-screen max-w-screen-lg">
        <div className="flex">
                    <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          
                        </div>  
                        <div className="flex justify-center flex-col pl-2">
                            
                        </div>
                            <div className="pl-2  p-6flex justify-center flex-col font-thin text-sm text-slate-500">
           
                                      </div>
        </div>
        <div className="text-xl pt-2 font-semibold">
            <div className="h-4 w-4 p-12 bg-gray-200 rounded-md w-48 mb-4"></div>
        </div>
        <div className="text-md font-thin">
            <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
        </div>
        <div className="text-slate-500 pt-4 text-sm font-thin">
      
        <div className="h-4 w-full bg-gray-200 p-5 rounded-md w-48 mb-4"></div>
        <div className="h-4 w-4 bg-gray-200 p-3 rounded-md w-48 mb-4"></div>
        <div className="h-4 w-4 bg-gray-200 p-2 rounded-md w-48 mb-4"></div>
            </div>
            </div>
         </div> 






}