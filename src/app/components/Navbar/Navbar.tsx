import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div
      className={`${styles.navbar} ${
        navbar ? styles.colorNavbar : styles.transparentNavbar
      }`}
    >
      <img src="/images/ballet.png" alt="Logo" className={styles.logo} />
      <div className={styles.links}>
        <a href="#home">Home</a>
      </div>
    </div>
  );
};

export default Navbar;
