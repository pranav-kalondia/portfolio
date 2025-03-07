import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">Projects</span>
            <p style={{ marginTop: "10px" }}>
             
            </p>
          </div>
          <span className="secondaryText"></span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>

        <a href="https://www.behance.net/gallery/220879179/TARS-Ai-Architecture-Protocol-landing-page">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/tesa.png"
              alt="project 2"
            />
          </a>

          <a href="https://www.behance.net/gallery/218317189/FInance-app-Case-study" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/financew.jpg"
              alt="project 1"
            />
          </a>



        <a href="https://www.behance.net/gallery/218283637/Foodo-delivery-app-case-study" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/food.png"
              alt="project 1"
            />
          </a>

         
         




          <a href="https://www.behance.net/gallery/210072645/Vitalease-Elderly-Care-App-Case-Study">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase2.png"
              alt="project 2"
            />
          </a>

         
          <a href="https://www.behance.net/gallery/220885249/Wav-watch-Landing-page" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/thumbnail.png"
              alt="project 1"
            />
          </a>
         
         
          <a href="https://pranav-spacex.vercel.app//" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/spacex.png"
              alt="project 3"
            />
          </a>
          <a href="https://food-del-inky.vercel.app/" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase8.png"
              alt="project 3"
            />
          </a>
          <a href="https://pranav-kalondia.github.io/squadsync/" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase9.png"
              alt="project 3"
            />
          </a>
         
        </div>
      </div>
    </motion.section>




  );
};

export default Portfolio;
