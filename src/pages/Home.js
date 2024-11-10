import PhotoBox from "../components/PhotoBox";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Home.scss";
import DownloadCv from "../components/DownloadCv";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate("/inner");
  };

  return (
    <section className="home">
      <div className="home__overlay"></div>
      <div className="home_container">
        <PhotoBox
          name="Dilbər Əmrahova"
          title={
            <TypeAnimation
              sequence={[
                "Front-End Developer.",
                1000,
                "Passionate Coder.",
                1000,
                "Innovative Thinker.",
                1000,
                "Let's build something amazing.",
                2000,
              ]}
              speed={60}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          }
          className="myimage"
          className2="photo-box__class1"
        />
        <div className="home-buttons">
          <Button
            className="home-button"
            text="Know More"
            onClick={handleKnowMoreClick}
          />
          <DownloadCv />
        </div>
      </div>
    </section>
  );
};

export default Home;
