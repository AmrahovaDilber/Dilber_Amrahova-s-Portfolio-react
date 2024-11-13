import Button from "../components/Button";
import PhotoBox from "../components/PhotoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Panel({collapsed,onCollapse}) {
  const navigate = useNavigate();
  const handleGoBackClick = () => {
    navigate("/");
  };

  return (
    <aside className={`panel ${collapsed ? "collapsed" : ""}`}>
      <div className="panel-avatar">
        <PhotoBox
          name="Dilbər Əmrahova"
          alt="img"
          className='myimage2'
          className2="panel-avatar__name"
        />
      </div>

      <Navigation></Navigation>

      <Button
        onClick={handleGoBackClick}
        className="panel__button"
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
        text="Go back"
      />
      <button onClick={onCollapse} className="collapse-btn">
      <FaBars />
      </button>
    </aside>
  );
}

