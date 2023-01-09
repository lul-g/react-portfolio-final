import PageHeading from "../../components/title/title";
import "./projects.css";
import "../../App.css";
import Socials from "../../components/socials/socials";
import Project from "../../components/project/project";
import projects_data from "../../components/project/projects_data";
export default function Projects() {
  return (
    <div className='projects' id='projects'>
      <PageHeading heading='projects' description='WORKS I AM PROUD OF' />
      <Socials />
      <div className='projects-grid'>
        {projects_data.data.map(({ name, id, img, live_link, github_link }) => {
          return (
            <Project
              name={name}
              key={id}
              img_src={img}
              live_link={live_link}
              github_link={github_link}
            />
          );
        })}
      </div>
    </div>
  );
}
