import { SignupInput } from "@saradhipardha/bloggapp-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({type} : {type: "signup" | "signin"}) =>{

    const navigate = useNavigate();
const [postInputs,setPostInputs] = useState<SignupInput> ({
    name:" ",
    email: "",
    password: ""
});

async function sendRequest(){
 try {
         const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" :"signin"}`,postInputs)
        const jwt = response.data;
       const token = localStorage.setItem("token",JSON.stringify(jwt));
        console.log("Retrieved token:", token);
        navigate(type === "signup" ? "/signin" : "/blogs");
 
    } catch (e) {
    alert("Error while signing in")
 }
}


return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>

         <div className="p-10">
         <div className="text-3xl font-extrabold">
            Create an Account
            </div>
            <div className="text-slate-600">
               {type === "signin" ? " Already have an account ? ":"Already have an account?"}
                <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"} >
                    {type ==="signin"?"Sign up ": "Sign in"}
                </Link>
        
                 </div>
             </div>
             <div className="pt-8">
           {type ==="signup" ? <LabelledInput label="Name"  placeholder="pardha saradi..." onChange={(e) =>{
                setPostInputs({
                    ...postInputs,
                    name:e.target.value
                })
             }}/> : null}
                <LabelledInput label="username"  placeholder="pardha@gmail.com." onChange={(e) =>{
                                    setPostInputs({
                                        ...postInputs,
                                        email:e.target.value
                                    })
                                }}/>
                          <LabelledInput label="password" type={"password"} placeholder="12344" onChange={(e) =>{
                                    setPostInputs({
                                        ...postInputs,
                                        password:e.target.value
                                    })
                                }}/>
                                <div className="py-3">

                                
                                <button onClick={sendRequest} type="button" className=" w-full  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring=gray-300 font-medium rounded-lg text-sm px-5 
                                py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 "  >{type === "signup" ? "Create an account":"Login"}</button>
          </div>
            </div>

             </div>
            
        </div>
    </div>
}

interface LabelledInputType{
    label:string;
    placeholder:string;
    onChange: (e: ChangeEvent<HTMLInputElement> ) =>void;
    type?:string;
}

function LabelledInput({label,placeholder, onChange,type}: LabelledInputType){

    return <div>
            <label className="block mb-2  text-black font-semibold pt-4" >{label}</label>
            <input type={ type || "text"} placeholder={placeholder} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full p-2.5
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-blue-200 dark:text-blue-100 dark:focus:ring-blue-600 dark:focus:border-blue-600
                " />
    </div>


}

