import React from "react";
import Box from "./Box";
import { motion } from 'framer-motion';
import '../assets/styles/About.scss'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};


function About() {
  return (
    <Box id="aboutMe" title="About Me">
      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        animate="visible" 
        exit="hidden"
        className="about-container"
      >
        <p>
          My name is Dilbər Əmrahova, and I am a front-end developer with a
          passion for creating engaging, user-friendly digital experiences.
          Currently, I am pursuing a degree in Information Technology at the
          University of Economics. Throughout my learning journey, I’ve developed
          a strong command of modern tools and technologies, including:
        </p>

        <ul>
          <li>
            <strong>Core Technologies:</strong> HTML5, CSS3, JavaScript (ES6+)
          </li>
     
          <li>
            <strong>JavaScript Libraries & Frameworks:</strong> React, Next.js,Redux, Context API.js
          </li>
          <li>
            <strong>Styling Tools:</strong> SASS/SCSS, Tailwind CSS, Styled Components, CSS Modules
          </li>
          <li>
            <strong>Version Control:</strong> Git, GitHub
          </li>
          <li>
            <strong>UI/UX Principles:</strong> Responsive Design, Mobile-First Approach
          </li>
          <li>
            <strong>Testing:</strong> Jest, React Testing Library
          </li>
          <li>
            <strong>Performance Optimization:</strong> Web Vitals, Lighthouse
          </li>
          <li>
            <strong>Additional Tools:</strong> TypeScript, RESTful APIs
          </li>
          <li>
            <strong>Deployment:</strong> Netlify, Vercel
          </li>
       
        </ul>

        <p>
          Staying current with the latest design trends and technologies is
          essential to me, enabling continuous delivery of innovative solutions.
          Alongside my technical expertise, I hold web development certifications
          that validate my skills and dedication. I thrive in dynamic environments
          where I can leverage both creativity and technical abilities to build
          engaging user interfaces.I am passionate about building
          meaningful software, contributing to open-source communities, and one
          day launching my own tech company.
        </p>

        <p className="about-quote">
          As Maya Angelou once said, "You can’t use up creativity. The more you
          use, the more you have." With every project, I approach the process with
          enthusiasm and curiosity, striving to push boundaries and unlock new
          possibilities. Here’s to a future where innovation and impact go hand
          in hand!
        </p>
      </motion.div>
    </Box>
  );
}

export default About;
