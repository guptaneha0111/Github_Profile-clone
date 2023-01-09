import React from "react";
import Link from "next/link"
const Navbar=()=>{
    return(
        <div style={{display:"flex", justifyContent:"space-evenly", 
        border:"1px solid black", padding:"2rem"}}>
       <Link href="/">Home</Link>   
       <Link href="/project">Project</Link>
       <Link href="/experience">Experience</Link>  
        </div>
    )
}

export default Navbar