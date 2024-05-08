import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { Fullblog } from "../components/Fullblog";
import { Skeleton } from "../components/Skeleton";

export const Blog = () =>{
    const {id} =useParams();
     const {loading,blog} = useBlog({
            id: id || ""
    });
    if(loading){
        return <div>
            <Skeleton />
            <Skeleton />
        
            loading ...
            
        </div>
    }
    return <div>
        <Fullblog blog={blog}/>
        </div>
}