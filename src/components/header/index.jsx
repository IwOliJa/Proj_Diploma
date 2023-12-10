import logo from "../../assets/images/logo.svg";
import icon from "../../assets/images/icon.svg";
import styles from "./index.module.css";
import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";

function Header({ menulist }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav_menu}>
        <img className={styles.header_logo} src={logo} alt="logo" />

        <ul
          className={
            isOpen
              ? [`${styles.nav_menu_list} ${styles.active}`]
              : [styles.nav_menu_list]
          }
        >
          {menulist.map((el) => {
            return (
              <li
                onClick={() => setIsOpen(!isOpen)}
                className={styles.nav_menu_item}
                key={Math.random()}
              >
                {el.page}
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.nav_menu_button}
        >
          {isOpen ? <VscChromeClose size="30" /> : <VscMenu size="30" />}
        </button>
        <img className={styles.header_icon} src={icon} alt="icon" />
      </nav>
    </header>
  );
}

export default Header;
