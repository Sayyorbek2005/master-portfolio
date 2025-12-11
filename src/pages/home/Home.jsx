import myPhoto from '../../assets/upscalemedia-transformed.png';
import { HomeContainer } from './Home.styles';
// import { TiArrowRightOutline } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";


const Home = ({ lang }) => {
  const content = {
    en: [{
      id: 1,
      name: "Sayyorbek",
      job: "Frontend Developer",
      description:
        "I’m a Frontend Developer specializing in creating modern websites, focusing on UI/UX, design, and full functionality, including SSL, domains, hosting, and SEO.",
      img: myPhoto,
    }],
    uz: [{
      id: 1,
      name: "Sayyorbek",
      job: "Frontend Dasturchi",
      description:
        "Men zamonaviy UI/UX, dizayn va funksionallikka ega saytlar yaratishga ixtisoslashgan Frontend dasturchiman. SSL, domen, hosting va SEO bilan ham ishlayman.",
      img: myPhoto,
    }],
    ru: [{
      id: 1,
      name: "Сайёрбек",
      job: "Фронтенд Разработчик",
      description:
        "Я фронтенд-разработчик, создающий современные сайты с упором на UI/UX, дизайн и функциональность. Работаю с SSL, доменами, хостингом и SEO.",
      img: myPhoto,
    }]
  };


  return (
    <div className="max-width">
      <HomeContainer className="home display-flex">


        {/* Social icons */}
        <div className="bar display-flex">
          <FiGithub />
          <MdOutlineMarkEmailUnread />
          <FaTelegramPlane />
        </div>


        {content[lang].map((item) => (
          <div className="info-cont display-flex" key={item.id}>


            <div className="home-left">
              <h1>{item.name}</h1>
              <h2>{item.job}</h2>
              <p>{item.description}</p>
            </div>


            <div className="home-right display-flex">
              <div className="box display-flex">
                <img src={item.img} alt="my photo" />
              </div>
            </div>


          </div>
        ))}


      </HomeContainer>
    </div>
  );
}


export default Home;

