import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";






export const Publish = ()=>{
    const [title,setTitle] = useState("");
    const [content,setContent]= useState("");
    const navigate = useNavigate();


    return <div>
            <Appbar />
            <div className="flex justify-center w-full pt-5">
                <div className="max-w-screen-lg w-full">
                    <input onChange={(e)=>{
                        setTitle(e.target.value)
                    }} type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm
                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" />
            <Texteditor onChange={(e)=>{
                setContent(e.target.value)
            }} />
            <button type="submit"  onClick={async()=>{
              const response =   await axios.post(`${BACKEND_URL}/api/v1/blog/create`,{
                    title,
                    content
                },{
                    headers:{
                        Authorization:localStorage.getItem("token")
                    }
                });
                navigate(`/blog/${response.data.id}`)
        
            }}  className=" mt-4 inline-flex items-center px-5 py-2.5  text-sm font-medium text-center text-white bg-blue-300 rounded-lg focus:ring-4 focus:ring-blue-200">
                publish post
            </button>
                </div>
            </div>
    </div>
}


function Texteditor({onChange}: { onChange: (e:    ChangeEvent<HTMLTextAreaElement> ) => void}){
    return <form >
        <div className="w-full mb-4 mt-4">
            <div className="flex items-center justify-between border rounded-md">
                <div className=" py-2 bg-white rounded-b-lg w-full">
                    <label className="sr-only">Publish post</label>
                    <textarea id="editor" rows={8}  onChange={onChange} className="block w-ful px-0 text-sm text-gray-800 bg-white " placeholder="Write an Article" required />
                </div>
            </div>
          
        </div>
    </form>
}