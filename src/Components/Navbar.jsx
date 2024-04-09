import React from "react";
import styles from "../Css/Navbar.module.css";
const Navbar = ({ handlePage }) => {
  return (
    <div className={styles.navbar}>
      <p onClick={() => handlePage(1)} className={styles.nav_item}>
        Form
      </p>
      <p onClick={() => handlePage(2)} className={styles.nav_item}>
        Table
      </p>
    </div>
  );
};

export default Navbar;
