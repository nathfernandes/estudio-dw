import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="../../../../public/ballet.png" alt="Logo" />
      </div>
      <div className={styles.links}>
        <a href="#home">Home</a>
      </div>
    </div>
  );
};

export default Navbar;
