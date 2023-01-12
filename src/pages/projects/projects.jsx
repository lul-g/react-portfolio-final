import PageHeading from "../../components/title/title";
import "./projects.css";
import "../../App.css";
import Socials from "../../components/socials/socials";
import Project from "../../components/project/project";
import projects_data from "../../components/project/projects_data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [inView, setView] = useState(6);
  const [lang, setLang] = useState(projects_data.data.slice(0, inView));
  const [typePast, setPast] = useState("all");
  const [stagerDelay, setDelay] = useState(0);

  let filtered = projects_data.data;

  function setDisplay() {
    setView((prev) => {
      return prev >= filtered.length ? 6 : prev + 3;
    });
  }
  useEffect(() => {
    filtered = [];

    projects_data.data.forEach((datum, i) => {
      if (datum.type.includes(typePast)) {
        filtered.push(datum);
      }
    });
    setLang(filtered.slice(0, inView));
  }, [inView]);
  function setActive() {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");

    setPast(event.target.dataset.type);

    filtered = [];

    projects_data.data.forEach((datum) => {
      if (datum.type.includes(event.target.dataset.type)) {
        filtered.push(datum);
      }
    });
    setView(6);
    setLang(filtered.slice(0, inView));
  }
  return (
    <div className='projects' id='projects'>
      <PageHeading heading='projects' description='WORKS I AM PROUD OF' />
      {/* <Socials /> */}
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
      <motion.div key={typePast} className='projects-grid'>
        {lang.map(({ name, id, img, live_link, github_link, hover }, i) => {
          return (
            <Project
              hasHover={hover}
              delay={i < 6 ? i * 0.3 : i < 9 ? (i - 6) * 0.3 : (i - 9) * 0.3}
              name={name}
              key={id}
              img_src={img}
              live_link={live_link}
              github_link={github_link}
            />
          );
        })}
      </motion.div>
      {typePast === "all" && (
        <button onClick={setDisplay} className='btn-fill-up view-btn'>
          {inView < filtered.length ? "View More" : "View Less"}
        </button>
      )}
    </div>
  );
}
