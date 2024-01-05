import logo from "../../assets/images/logo.svg";
import icon from "../../assets/images/icon.svg";
import styles from "./index.module.css";
import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ menulist }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <nav className={styles.nav_menu}>
        <Link to="/">
          <img className={styles.header_logo} src={logo} alt="logo" />
        </Link>

        <ul
          className={
            isOpen
              ? [`${styles.nav_menu_list} ${styles.active}`]
              : [styles.nav_menu_list]
          }
        >
          {menulist.map((el) => {
            return (
              <li onClick={() => setIsOpen(!isOpen)} key={Math.random()}>
                <Link className={styles.nav_menu_item} to={el.path}>
                  {el.page}
                </Link>
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
        <Link to="/shoppings">
          <img className={styles.header_icon} src={icon} alt="icon" />
          <span className={styles.items_counter}>12</span>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
