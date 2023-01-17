import "./skills.css";
import '../../App.css'

export default function Comp({title, location, date, side, btn}) {
    return (
        <div className={`${side} component`}>
            <div className="title">{title}</div>
            <div className="loc">{location}</div>
            <div className="date"><i className="fa-solid fa-calendar-day"></i>{date}</div>
            {btn.has_btn && <a className="btn-fill-up view-btn" target='_blank' href={btn.link}>{btn.name}</a>} 

        </div>
    )
}