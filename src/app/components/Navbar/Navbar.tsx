import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

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
      <div className={`${navbar ? styles.linksPink : styles.linksWhite}`}>
        <Link className={`${styles.linksSpace} ${styles.links}`} href="#home">
          Home
        </Link>
        <Link className={`${styles.linksSpace} ${styles.links}`} href="#home">
          Sobre o Estúdio
        </Link>
        <Link className={`${styles.linksSpace} ${styles.links}`} href="#home">
          Nosso Time
        </Link>
        <Link className={`${styles.linksSpace} ${styles.links}`} href="#home">
          Modalidades
        </Link>
        <Link className={`${styles.linksSpace} ${styles.links}`} href="#home">
          Horários
        </Link>
        <Link href="#home" className={styles.links}>
          Contato
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
