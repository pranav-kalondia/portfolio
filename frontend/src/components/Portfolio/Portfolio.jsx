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
          <a href="https://www.figma.com/proto/oIoWF4yVLDGqhCy2WM231Q/Squad-sync-web-app?page-id=0%3A1&node-id=602-306&starting-point-node-id=602%3A306&t=Guq74yttRx6mkOmv-1" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase1.png"
              alt="project 1"
            />
          </a>
          <a href="https://www.figma.com/proto/TTfotkc5L0WERg26ExJGw8/vitalease?page-id=0%3A1&node-id=20-61&viewport=422%2C563%2C0.13&t=dNSZ12NuBo0OmTUp-1&scaling=min-zoom&content-scaling=fixed" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase2.png"
              alt="project 2"
            />
          </a>
          <a href="https://www.figma.com/proto/rMiMn9UysPeRYBqs30MbbH/Nebula?page-id=0%3A1&type=design&node-id=54-34&viewport=-1710%2C252%2C0.47&t=CTpJIPHDNAlJ7vab-1&scaling=scale-down&starting-point-node-id=54%3A34" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showCase3.png"
              alt="project 3"
            />
          </a>
          <a href="https://www.figma.com/proto/rsF2EuClhim8Vfxb2JO8Zi/Breatho?page-id=0%3A1&node-id=54-69&node-type=frame&viewport=-1238%2C363%2C0.1&t=xID06YEK22o3QIn9-1&scaling=scale-down&content-scaling=fixed" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/showcase11.png"
              alt="project 3"
            />
          </a>
          <a href="https://www.figma.com/proto/HoJ3aEokk1xCt6iylgS8xF/architect-portfolio?page-id=0%3A1&node-id=64-372&viewport=193%2C260%2C0.06&t=LhWRh1zYwwWMkQvs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer">
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
          <a href="https://www.figma.com/proto/t0qIu5CDtKUJ4MhQS1yGUV/server-wale?page-id=0%3A1&node-id=1-2&viewport=691%2C359%2C0.03&t=KagP8r8ZEoeDV8AH-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer">
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
