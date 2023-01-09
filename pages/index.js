import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import Experience from "./experience";
import Project from "./project";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ projectdata, usersdata }) {
  
  return (
    <div
      style={{display: "flex", height: "auto",width: "100%", margin: "auto", marginTop:"20px"}}>
      <div style={{height: "auto", margin: "auto", width: "40%"}}>
        <div style={{display: "block", padding: "1rem", textAlign: "center",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
       }}>
          <Image
            src={usersdata.avatar_url}
            height={100}
            width={100}
            alt={usersdata.name}
          />
          <h2> {usersdata.name}</h2>
          <p>{usersdata.login}</p>
          <p> {usersdata.bio}</p>
          <Link href="https://drive.google.com/file/d/1EgF48O95bq3SSJ2qJ6lNlTQ6wB94AGvS/view?usp=sharing">
            <button>Resume</button>
          </Link>
          <Link href={usersdata.html_url}>
            <button>Follow</button>
          </Link>
        </div>

        <div style={{display: "grid",gridTemplateColumns: "repeat(3,1fr)", marginTop:"10px", gap: "4px", padding: "0.8rem", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <button>Javascript</button>
          <button>HTML</button>
          <button>Css</button>
          <button>Redux</button>
          <button>react</button>
          <button>java</button>
          <button>typescript</button>
          <button>chakra</button>
        </div>
        <div style={{gap: "3px", padding: "1rem", marginTop:"10px"}}>
          <Experience />
        </div>
      </div>
      <div style={{ width: "80%", height: "auto", margin: "auto", marginLeft:"20px"}}>
        <Project data={projectdata} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
const res = await fetch(
    `https://api.github.com/search/repositories?q=user:guptaneha0111+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  const data1 = await res.json();

  const res1 = await fetch(`https://api.github.com/users/guptaneha0111`);
  const data2 = await res1.json();

 
  return {
     props:
      { 
        projectdata: data1, 
        usersdata: data2 
      } 
    };
}