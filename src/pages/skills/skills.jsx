import "./comp.css";
import PageHeading from "../../components/title/title";
import skills_data from './skills_data'
import Comp from "./Component";
import { ReactComponent as Tech } from "../../assets/MEDIA/tech.svg";

import { useEffect, useState } from "react";

export default function Skills() {
  const[data, setSkills] = useState(skills_data.data[0])
  return (

    <div className='skills' id='skills'>
      <PageHeading heading='skills' description='my experience' />
      <div className="showcase">
        <div className="btns">
          <button className="education active" onClick={() => {
            document.querySelector('.education').classList.add('active')
            document.querySelector('.work').classList.remove('active')
            setSkills(skills_data.data[0])
          }}><i className="fa-solid fa-graduation-cap"></i>education</button>
          <button className="work" onClick={() => {
            document.querySelector('.education').classList.remove('active')
            document.querySelector('.work').classList.add('active')
            setSkills(skills_data.data[1])
          }}><i className="fa-solid fa-briefcase"></i>work</button>
        </div>
        <div className="data">
          {
            data.arr.map(({title, location, date, id, side, btn}) => {
              return <Comp title={title} location={location} date={date} side={side} key={id} btn={btn}/>
            })
          }
        </div>
      </div>
      <div className="tech">
        <Tech />
      </div>
    </div>
  );
}
