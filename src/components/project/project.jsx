import "../project/project.css";
import { motion } from "framer-motion";

export default function Project({
  delay,
  name,
  img_src,
  live_link,
  github_link,
  hasHover,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100, translateY: -100 }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.3, delay: delay }}
      className='project'
    >
      {/* <span className='name'>{name}</span> */}
      <a target='_blank' href={live_link} className='btn-pulse preview'>
        Live preview
      </a>
      <a href={github_link} target='_blank' className='github'>
        <i className='fa-brands fa-github'></i>
      </a>
      <div className={hasHover ? "hover img" : "img"}>
        <img src={img_src} alt='' />
      </div>
    </motion.div>
  );
}
