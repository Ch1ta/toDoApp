import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const pathname = useLocation().pathname;

  return (
    <div className={styles.main}>
      {pathname === "/" ? <div>Sarching</div> : <Link to="/">Назад</Link>}
    </div>
  );
};

export default Header;
