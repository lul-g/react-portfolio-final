import "../preloader/preloader.css";
import { ReactComponent as Logo } from "../../assets/MEDIA/logo.svg";

export default function Preloader() {
  return (
    <div
      className='preloader'
      onLoad={() => {
        document.querySelector("audio").currentTime = ".5";
        document.querySelector("audio").play();
      }}
    >
      <Logo />
      <audio autoPlay>
        <source src='../src/assets/MEDIA/fire_aduio.wav' type='audio/wav' />
      </audio>
    </div>
  );
}
