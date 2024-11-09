import React from "react";
import { motion } from "framer-motion";
import Box from "./Box";

function TimeLine({ data }) {
  return (
    <Box id="education" title="Education" className="timeline">
      {data.map((event, index) => (
        <motion.div
          key={index}
          className="timeline-event"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.1 }} 
          transition={{ duration: 0.8, delay: index * 0.2 }} 
        >
          <div className="event">
            <div className="event__date">{event.date}</div>
            <div className="event__line"></div>
          </div>

          <div className="event-details">
            <h3 className="event-details__title">{event.title}</h3>
            <p className="event-details__text">{event.text}</p>
          </div>
        </motion.div>
      ))}
    </Box>
  );
}

export default TimeLine;
