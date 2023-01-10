import PageHeading from "../../components/title/title";
import "./projects.css";
import "../../App.css";
import Socials from "../../components/socials/socials";
import Project from "../../components/project/project";
import projects_data from "../../components/project/projects_data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [data, setData] = useState(projects_data.data);
  const [lang, setLang] = useState(projects_data.data);

  function setActive() {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");
    const filtered = [];
    data.forEach((datum) => {
      if (datum.type.includes(event.target.dataset.type)) {
        filtered.push(datum);
      }
    });
    setLang(filtered);
  }
  return (
    <div className='projects' id='projects'>
      <PageHeading heading='projects' description='WORKS I AM PROUD OF' />
      <Socials />
      <div className='filters'>
        <button
          data-type='all'
          className='filter-btn active'
          onClick={setActive}
        >
          All
        </button>
        <button data-type='html' className='filter-btn' onClick={setActive}>
          HTML
        </button>
        <button data-type='react' className='filter-btn' onClick={setActive}>
          ReactJS
        </button>
      </div>
      <motion.div layout className='projects-grid'>
        {lang.map(({ name, id, img, live_link, github_link }) => {
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
      </motion.div>
      <button href='' className='btn-fill-up'>
        View More
      </button>
    </div>
  );
}
