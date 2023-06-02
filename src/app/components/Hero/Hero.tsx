import React from "react";
import styles from "./Hero.module.css";
import { Oswald } from "@next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>Daiene Weiss</h1>
        <h4 className={`${oswald.className} ${styles.heroSubtitle}`}>
          ESTÚDIO DE DANÇA
        </h4>
      </div>
    </div>
  );
};

export default Hero;
