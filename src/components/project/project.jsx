import "../project/project.css";
import { motion } from "framer-motion";

export default function Project({ name, img_src, live_link, github_link }) {
  return (
    <motion.div layout className='project'>
      <span className='name'>{name}</span>
      <a target='_blank' href={live_link} className='btn-pulse preview'>
        Live preview
      </a>
      <a
        href={github_link}
        target='_blank'
        className='btn-icon-colorize github'
      >
        <i className='fa-brands fa-github'></i>
      </a>
      <div className='img'>
        <img src={img_src} alt='' />
      </div>
    </motion.div>
  );
}
