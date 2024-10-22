import React from "react";
import Box from "../components/Box";

function Expertise({ data }) {
  return (
    <Box id="experience" title="Experience">
      <ul className="experience-list">
        {data.map((experience, index) => (
          <li className="experience-item" key={index}>
            <div className="company-date">
              <h3 className="experience-company">{experience.info.company}</h3>
              <span className="experience-date">{experience.date}</span>
            </div>

            <div className="experience-details">
              <h4 className="experience-job">{experience.info.job}</h4>
              <p className="experience-description">
                {experience.info.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default Expertise;
