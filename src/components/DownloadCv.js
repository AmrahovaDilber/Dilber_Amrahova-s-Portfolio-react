import React from "react";
import resume from "../assets/images/DilberAmrahovaCV.pdf";
import "../assets/styles/DownloadCv.scss";

export default function DownloadCv() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <button className="download-button">
        <a href={resume} download className="download-link">
          Download CV
        </a>
      </button>
    </div>
  );
}
