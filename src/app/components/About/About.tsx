import React from "react";
import styles from "./About.module.css";
import stylesGlobal from "../../page.module.css";

const About = () => {
  return (
    <div className={styles.about} id="sobre">
      <div className={`${styles.textAbout} ${stylesGlobal.half}`}>
        <h1 className={styles.titles}>História do Estúdio DW</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipis cinelit, sed do eiusmod
          tempor incididunt labore et dolore ali. Lorem ipsum dolor sit amet,
          consectetur adipis cingelit, sed do eiusmod tempor incidi. dunt u
          labore et dolore magna aliqua. Ut enim ad minim. veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet consectetur adipis
        </p>
      </div>

      <div className={styles.aboutImageDiv}>
        <img src={"/images/about.jpg"} className={styles.aboutImage} />
      </div>
    </div>
  );
};

export default About;
