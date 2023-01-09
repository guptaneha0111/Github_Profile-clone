import StarIcon from "@mui/icons-material/Star";
import FolderIcon from "@mui/icons-material/Folder";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import React from "react";

const Projects = ({ data }) => {
  console.log(data);
  console.log(data.items);
  return (
    <div style={{display: "grid", marginTop:"20px", gridTemplateColumns: "repeat(2,1fr)", columnGap: "20px", rowGap: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      {data.items.map((el,i) => (
        <Link key={el.i} href={el.html_url}>
          <div style={{ display: "flex", padding: "1rem",alignItems: "center", justifyContent: "space-between"}}>
            <div>
              <div style={{display: "flex", alignItems: "center", color:'black'}}>
                <FolderIcon /> <span>{el.name}</span>
              </div>
              <p>{el.description}</p>
              <div style={{ display: "flex", columnGap:'10px', alignItems: "center" }}>
                <StarIcon /> <span>{el.watchers}</span>
                <GitHubIcon /> <span>{el.forks}</span>
              </div>
            </div>
            <div>{el.language}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export async function getServerSideProps() {

  const res = await fetch(
    `https://api.github.com/search/repositories?q=user:guptaneha0111+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  const data = await res.json();

  
  return { 
    props: 
    {
         data: data 
        }
     };
}

export default Projects;
