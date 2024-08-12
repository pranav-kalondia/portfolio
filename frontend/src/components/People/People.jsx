import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="people"></a>

      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Skills</span>
          
        </div>

        <div className={css.skillsGrid}>
          <img src="./html.png" alt="HTML" />
          <img src="./css.png" alt="CSS" />
          <img src="./bootstrap.png" alt="Bootstrap" />
          <img src="./js.png" alt="JavaScript" />
          <img src="./react.png" alt="React" />
          <img src="./Ui.png" alt="UI Design" />
          <img src="./ux.png" alt="UX Design" />
          <img src="./research.png" alt="UX Research" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default People;
