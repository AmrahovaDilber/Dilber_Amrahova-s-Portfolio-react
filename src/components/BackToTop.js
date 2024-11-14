import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleGoTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {isVisible && (
        <button
          style={{
            position: "fixed",
            right: "10px",
            bottom: "30px",
            borderRadius: "50%",
            width: "40px",
            fontSize: "20px",
            height: "40px",
            cursor: "pointer",
            border: "none",
            backgroundColor: "#26c17e",
          }}
          onClick={handleGoTop}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
