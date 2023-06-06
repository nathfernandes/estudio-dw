import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerBasic}>
        <footer>
            <div className={styles.social}><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>
            <ul className={styles.listInline}>
                <li className={styles.listInlineItem}><a href="#">Home</a></li>
                <li className={styles.listInlineItem}><a href="#">Services</a></li>
                <li className={styles.listInlineItem}><a href="#">About</a></li>
                <li className={styles.listInlineItem}><a href="#">Terms</a></li>
                <li className={styles.listInlineItem}><a href="#">Privacy Policy</a></li>
            </ul>
            <p className={styles.copyright}>Eridanus Ltda © 2023</p>
        </footer>
    </div>
  );
};

export default Footer;
