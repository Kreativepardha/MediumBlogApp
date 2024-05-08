import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks"


export const Blogs = ()=>{
    // const{loading,blogs}= useBlogs;
const {loading, blogs} = useBlogs();

    if(loading){

        return <div>
            <Skeleton />
       
            loading....
        </div>
    }
    return <div>
        <Appbar />
<div className="flex justify-center">
    <div className="">
        {blogs.map(  blog => <BlogCard
        id={blog.id}
        authorName={blog.author.name || "Anonymous"}
          title={blog.title}
          content={blog.content}
           publishedDate={"2nd march 2024"} 
        />)}
          
    </div>
    </div>
    </div>
}