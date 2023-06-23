import React from "react";
import stylesGlobal from "../../page.module.css";
import styles from "./Team.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";

const Team = () => {
  return (
    <div className={stylesGlobal.sectionSpace} id="time">
      <h1 className={stylesGlobal.titles}>Conheça nossos professores</h1>
      <div className={styles.cardsTeam}>
        <div className={styles.profCard}>
          <div className={styles.divImage}>
            <img src={"/images/team/prof1.jpg"} className={styles.profImages} />
          </div>

          <h1 className={stylesGlobal.title}>Flávia</h1>
          <div className={stylesGlobal.divFlex}>
            <h3 className={stylesGlobal.subtitle}>Professora de Ballet</h3>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className={styles.icons} />
            </a>
          </div>
        </div>
        <div className={styles.profCard}>
          <div className={styles.divImage}>
            <img src={"/images/team/prof2.jpg"} className={styles.profImages} />
          </div>

          <h1 className={stylesGlobal.title}>Joaquim</h1>
          <div className={stylesGlobal.divFlex}>
            <h3 className={stylesGlobal.subtitle}>Professor de Ritmos</h3>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className={styles.icons} />
            </a>
          </div>
        </div>
        <div className={styles.profCard}>
          <div className={styles.divImage}>
            <img src={"/images/team/prof1.jpg"} className={styles.profImages} />
          </div>

          <h1 className={stylesGlobal.title}>Flávia</h1>
          <div className={stylesGlobal.divFlex}>
            <h3 className={stylesGlobal.subtitle}>Professora de Ballet</h3>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className={styles.icons} />
            </a>
          </div>
        </div>
        <div className={styles.profCard}>
          <div className={styles.divImage}>
            <img src={"/images/team/prof2.jpg"} className={styles.profImages} />
          </div>

          <h1 className={stylesGlobal.title}>Joaquim</h1>
          <div className={stylesGlobal.divFlex}>
            <h3 className={stylesGlobal.subtitle}>Professor de Ritmos</h3>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className={styles.icons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
