import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const route = usePathname();
  console.log(route);

  useEffect(() => {
    console.log(route);
    setCurrentPath(route);
  }, []);

  const changeBackground = () => {
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
        <Link
          className={`${styles.linksSpace} ${styles.links} ${
            route == "/" && "active"
          }`}
          href="/"
        >
          Home
        </Link>
        <Link className={`${styles.linksSpace} ${styles.links}`} href="#some">
          Sobre o Estúdio
        </Link>
        <Link className={`${styles.linksSpace} ${styles.links}`} href="#some">
          Nosso Time
        </Link>
        <Link className={`${styles.linksSpace} ${styles.links}`} href="#some">
          Modalidades
        </Link>
        <Link className={`${styles.linksSpace} ${styles.links}`} href="#some">
          Horários
        </Link>
        <Link href="some" className={styles.links}>
          Contato
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
