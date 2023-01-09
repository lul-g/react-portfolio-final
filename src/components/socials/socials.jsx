import "../socials/socials.css";

export default function Socials() {
  return (
    <div className='socials'>
      <li>
        <a target='_blank' href='https://discord.com/channels/Lul#1951'>
          <i className='fa-brands fa-discord'></i>
        </a>
      </li>
      <li>
        <a target='_blank' href='https://github.com/lul-g'>
          <i className='fa-brands fa-github'></i>
        </a>
      </li>
      <li>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/lulseged-admasu/recent-activity/'
        >
          <i className='fa-brands fa-linkedin-in'></i>
        </a>
      </li>
      <li>
        <a target='_blank' href='https://twitter.com/lulseged_admasu'>
          <i className='fa-brands fa-twitter'></i>
        </a>
      </li>
    </div>
  );
}
