import logo from "../../assets/images/logo.svg";
import icon from "../../assets/images/icon.svg";
import styles from "./index.module.css";

function Header({ menulist }) {
  return (
    <header className={styles.header}>
      <img className={styles.header_logo} src={logo} alt="logo" />
      <button className={styles.menu_button}>
        <span className={styles.button_view}></span>
        <span className={styles.button_view}></span>
        <span className={styles.button_view}></span>
      </button>
      <nav className={styles.nav_menu}>
        {menulist.map((el) => {
          return (
            <ul className={styles.nav_menu_li}>
              <li key={Math.random()}>{el.page}</li>
            </ul>
          );
        })}
      </nav>

      <img className={styles.header_icon} src={icon} alt="icon" />
    </header>
  );
}

export default Header;
