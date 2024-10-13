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
          <a href="https://www.behance.net/gallery/210072645/Vitalease-Elderly-Care-App-Case-Study">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase2.png"
              alt="project 2"
            />
          </a>
          <a href="https://www.figma.com/proto/oIoWF4yVLDGqhCy2WM231Q/Squad-sync-web-app?page-id=0%3A1&node-id=602-306&starting-point-node-id=602%3A306&t=Guq74yttRx6mkOmv-1" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase1.png"
              alt="project 1"
            />
          </a>
          
          <a href="https://www.figma.com/proto/rMiMn9UysPeRYBqs30MbbH/Nebula?page-id=0%3A1&type=design&node-id=54-34&viewport=-1710%2C252%2C0.47&t=CTpJIPHDNAlJ7vab-1&scaling=scale-down&starting-point-node-id=54%3A34" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase3.png"
              alt="project 3"
            />
          </a>
          <a href="https://www.behance.net/gallery/209496465/Breatho-Landing-page">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showcase11.png"
              alt="project 3"
            />
          </a>
          <a href="https://www.behance.net/gallery/209539857/Intelligence-Building-Infrastructure-landing-page">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase4.png"
              alt="project 3"
            />
          </a>
          <a href="https://www.figma.com/proto/ALYj7au4i4DthwkYS1N3Ju/iq-test-website?page-id=0%3A1&node-id=79-256&viewport=73%2C339%2C0.02&t=VISRun3Y2zPdpQdh-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=79%3A256" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase5.png"
              alt="project 3"
            />
          </a>
          <a href="https://www.behance.net/gallery/209540701/Serverwale-E-commerce-website-design">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase6.png"
              alt="project 3"
            />
          </a>
          <a href="https://www.figma.com/proto/zvyOVujV0tE3lxJFTnIuRN/wallgrip-polymer?page-id=0%3A1&node-id=1-2&viewport=80%2C324%2C0.03&t=D0N6uizK8ftg1BNv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=257%3A3" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase7.png"
              alt="project 3"
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
          <a href="https://pranav-kalondia.github.io/studiowebsite.github.io/" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase10.png"
              alt="project 3"
            />
          </a>
        </div>
      </div>
    </motion.section>




  );
};

export default Portfolio;
