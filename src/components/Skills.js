import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Box from "../components/Box";
import html from '../assets/images/html.png';
import css from '../assets/images/cssic.webp';
import tailwind from '../assets/images/tailwindd.svg';
import sass from '../assets/images/sass.webp';
import js from '../assets/images/jsicon.png';
import typescript from '../assets/images/typescript.png';
import react from '../assets/images/react.webp';
import git from '../assets/images/git.png';
import next from '../assets/images/nexticon.svg';
import contextapi from '../assets/images/contextapi.png'
import '../assets/styles/skills.scss';

const techs = [
  { src: html, name: "HTML", percent: 100 },
  { src: css, name: "CSS", percent: 95 },
  { src: tailwind, name: "Tailwindcss", percent: 93 },
  { src: sass, name: "Sass", percent: 86 },
  { src: js, name: "Javascript", percent: 75 },
  { src: typescript, name: "Typescript", percent: 70 },
  { src: react, name: "React", percent: 78 },
  { src: contextapi, name: "ContextApi", percent: 70 },
  { src: git, name: "Git", percent: 81 },
  { src: next, name: "Next.js", percent: 70 },

];

const Skills = () => {
  
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,   
  });

 
  if (inView) {
    controls.start('visible');
  }

  return (
    <Box id="skills" title="Skills">
      <div ref={ref} className="skillsGrid">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="techItem"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: 'easeOut'
            }}
          >
            <div className="techImageContainer">
              <img
                src={tech.src}
                alt={tech.name}
              />
            </div>
            <p className="techName">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </Box>
  );
};

export default Skills;
