import { useEffect, useState } from "react";
import { portfolioData } from "../utils/data";
import Box from "../components/Box";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(portfolioData);
  }, []);


  return (
    <Box id="portfolio" title="Projects" className="portfolio-container">
      
      <section className="portfolio-box">
        {data.map((item) => (
          <article key={item.title} className="portfolio-box__item">
            <img src={item.img} alt={item.title} />
            <div className="portfolio-box__item-overlay">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <Link to={item.url} target="_blank" rel="noopener noreferrer">
                View Source
              </Link>
            </div>
          </article>
        ))}
      </section>
    </Box>
  );
};

export default Portfolio;
