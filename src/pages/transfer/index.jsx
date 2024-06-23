import { useState } from "react";
import React from "react";
import Home from "../home/index";
import Blog from "../blog/index";

function Transfer(){
           
           let [comp,setComp] = useState(null)
           function home(){
               setComp(<Home/>)
           }
           function blog(){
            setComp(<Blog/>)
        }
    return(
        <>
        {comp}
        <button onClick={home}>home</button>
        <button onClick={blog}>blog</button>
        </>
    )
}
export default Transfer;