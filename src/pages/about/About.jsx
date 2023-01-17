import "../about/About.css";
import PageHeading from "../../components/title/title";
import Circle from "./circle";
import Me from "../../assets/MEDIA/me.png";
export default function About() {
  return (
    <div className='about' id='about'>
      <PageHeading heading='about' description='get to know me' />

      <div className='socials'></div>
      <div className='resume'></div>
    </div>
  );
}
