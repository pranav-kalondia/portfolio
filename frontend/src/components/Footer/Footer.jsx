import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBSlwxbrvTQjFQRhlvPDVzRKjPJTjbsrQNtnRBZXkjTpQQlNFMZZnbDwFnVwNPhKzvHQg">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contact me</span>
          
          </div>
          <div className={css.socialLinks}>
            <a
              href="https://github.com/pranav-kalondia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub color="black" size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/pranav-kalondia-90227422a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin color="black" size={30} />
            </a>
            <a
              href="https://www.behance.net/pranavkalondia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
            >
              <FaBehance color="black" size={30} />
            </a>
            <a
              href="https://www.instagram.com/pranav_kalondia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram color="black" size={30} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
