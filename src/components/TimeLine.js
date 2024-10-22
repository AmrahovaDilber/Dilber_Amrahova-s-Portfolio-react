import React from "react";
import Box from "./Box";

function TimeLine({ data }) {
  return (
    <Box id="education" title="Education" className="timeline">
    
      {data.map((event, index) => (
        <div className="timeline-event" key={index}>
          <div className="event">
            <div className="event__date">{event.date}</div>
            <div className="event__line"></div>
          </div>

          <div className="event-details">
            <h3 className="event-details__title">{event.title}</h3>
            <p className="event-details__text">{event.text}</p>
          </div>
        </div>
      ))}
    </Box>
  );
}

export default TimeLine;
