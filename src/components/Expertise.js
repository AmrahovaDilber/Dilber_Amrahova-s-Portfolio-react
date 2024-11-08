import React from "react";
import Box from "../components/Box";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { textVariant } from '../utils/motion'

function Expertise({ data }) {
  return (
    <Box id="experience" title="Experience">
    <motion.div variants={textVariant()}>
      <VerticalTimeline layout="1-column">
        <ul className="experience-list">
          {data.map((experience, index) => (
            <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            iconStyle={{
              background: 'rgba(38, 193, 126, 1)', 
              color: '#fff',
              border: '3px solid #fff',  
              borderRadius: '50%',   
            }}
            >
              <li className="experience-item">
                <div className="experience-details">
                  <h3 className="experience-date">{experience.date}</h3>
                  <h4 className="experience-job">{experience.info.job}</h4>
                  <p className="experience-company">{experience.info.company}</p>
                  <p className="experience-description">
                    {experience.info.description}
                  </p>
                </div>
              </li>
            </VerticalTimelineElement>
          ))}
        </ul>
      </VerticalTimeline>
    </motion.div>
  </Box>
  );
}

export default Expertise;