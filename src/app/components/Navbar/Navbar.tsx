import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useSearchParams, useRouter, useParams } from "next/navigation";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const params = useParams();
  const route = useRouter();

  useEffect(() => {
    setCurrentPath(window.location.hash);
  }, [params]);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const changeHash = () => {
    route.push(`/`, undefined, { scroll: false });
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("scroll", changeHash);
  }, []);

  return (
    <div
      className={`${styles.navbar} ${
        navbar ? styles.colorNavbar : styles.transparentNavbar
      }`}
    >
      <img src="/images/ballet.png" alt="Logo" className={styles.logo} />
      <div className={`${navbar ? styles.linksPink : styles.linksWhite}`}>
        <Link className={`${styles.linksSpace} ${styles.links}`} href="/">
          Home
        </Link>
        <Link
          className={`${styles.linksSpace} ${styles.links} ${
            currentPath == "#sobre" && styles.activeLink
          }`}
          href="#sobre"
        >
          Sobre o Estúdio
        </Link>
        <Link
          className={`${styles.linksSpace} ${styles.links} ${
            currentPath == "#time" && styles.activeLink
          }`}
          href="#time"
        >
          Nosso Time
        </Link>
        <Link
          className={`${styles.linksSpace} ${styles.links} ${
            currentPath == "#modalidades" && styles.activeLink
          }`}
          href="#modalidades"
        >
          Modalidades
        </Link>
        <Link
          className={`${styles.linksSpace} ${styles.links} ${
            currentPath == "#horarios" && styles.activeLink
          }`}
          href="#horarios"
        >
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
