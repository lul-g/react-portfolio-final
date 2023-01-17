import "../project/project.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Project({
  delay,
  name,
  img_src,
  live_link,
  github_link,
  hasHover,
})
 {
  useEffect(() => {
    document.querySelectorAll('.project .img img').forEach(img => {
      if(img.classList.contains('hover')) {
        img.addEventListener('mouseenter', () => {
          img.style.transform = `translateY(-${img.getBoundingClientRect().height - 150}px)`
        })
        img.addEventListener('mouseleave', () => {
          img.style.transform = `translateY(0)`
        })
      }
    });
  }, [])
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
      <div className="img" >
        <img className={hasHover ? "hover" : ""} src={img_src} alt='' />
      </div>
    </motion.div>
  );
}
