import myPhoto from '../../assets/upscalemedia-transformed.png'
import { HomeContainer } from './Home.styles'

// ? icons
import { TiArrowRightOutline } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";



const Home = () => {
  return (
    <div className="max-width">
      <HomeContainer className="home display-flex">
        <div className="bar display-flex">
          <FiGithub />
          <MdOutlineMarkEmailUnread />
          <FaTelegramPlane />


        </div>
        <div className="home-left">
          <h1>Hi, I'm Sayyorbek</h1>
          <h2>Frontend Developer</h2>
          <p>
            I’m a Frontend Developer specializing in creating modern websites,
            focusing on UI/UX, design, and functionality, as well as working with SSL,
            domains, hosting, and SEO to build fully responsive websites.
          </p>
          <button className="btn display-flex but">
            Contact me 
            <TiArrowRightOutline />
          </button>
        </div>

        <div className="home-right display-flex">
          <div className="box display-flex">
            <img src={myPhoto} alt="my photo" />
          </div>
        </div>

      </HomeContainer>
    </div>
  )
}

export default Home
