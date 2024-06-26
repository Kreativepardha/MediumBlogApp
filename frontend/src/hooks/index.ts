import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";


export interface Blog{
    
        "content": string;
        "title": string;
        "id":number;
        "author": {
            "name": string;
        }
    
}


    export const useBlog = ({id}:{id:string})=>{
        const[loading,setLoading] = useState(true);
        const [blog,setBlog] = useState<Blog>();
        
useEffect(()=>{

        const storedTokenString = localStorage.getItem("token");
    const token = storedTokenString ? JSON.parse(storedTokenString).jwt : '';
    axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
        headers: {
            Authorization: token
        }
    })
        .then(response=>{
            setBlog(response.data.blog);
            setLoading(false);

        })
        .catch(error=>{
            console.error("Error while fetching blog",error);
            setLoading(false);
        })
},[id])

    return {
        loading,
        blog
    }


    }
    
    export const useBlogs = ()=>{
        const[loading,setLoading] = useState(true);
        const [blogs,setBlogs] = useState<Blog[]>([]);
        
        useEffect(()=>{
                    const storedTokenString = localStorage.getItem("token");
    const token = storedTokenString ? JSON.parse(storedTokenString).jwt : '';
            if(!token){
                setLoading(false);
                return;
            }
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                headers: {
                    Authorization: token
                }
            })
                .then(response=>{
                    setBlogs(response.data.blogs);
                    setLoading(false);
        
                })
                .catch(error=>{
                    console.error("Error fetching blogs:", error);
                    setLoading(false);
                })
        },[])
        
            return {
                loading,
                blogs
            }
        }



