import PhotoBox from "../components/PhotoBox";
import Button from "../components/Button";

import { useNavigate } from "react-router-dom";
import "../assets/styles/Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const handleKnowMoreClick = () => {
    navigate("/inner");
  };

  return (
    <section className="home">
      <div className="home__photobox">
        <PhotoBox
          name="Dilbər Əmrahova"
          title="Programmer. Creative. Innovator"
          className="myimage"
          className2="photo-box__class1"
          description=" My journey in Information Technology is fueled by curiosity and a love for creative coding. Curious to know more? Click below!"
        />
        <Button
          className="home-button"
          text="Know More"
          onClick={handleKnowMoreClick}
        />
      </div>
    </section>
  );
};

export default Home;
