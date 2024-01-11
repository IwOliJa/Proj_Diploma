import logo from "../../assets/images/logo.svg";
import icon from "../../assets/images/icon.svg";
import styles from "./index.module.css";
import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ menulist }) {
  const { cart } = useSelector((state) => state.schoppingCart);
  // console.log(cart);
  const [isOpen, setIsOpen] = useState(false);
  // const isMounted = useRef(false);

  // useEffect(() => {
  //   if (isMounted.current) {
  //     const json = JSON.stringify(cart);
  //     localStorage.setItem("cart", json);
  //   }
  //   isMounted.current = true;
  // }, [cart]);

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
          <span
            className={
              cart.length ? [styles.items_counter] : [styles.items_counter_none]
            }
          >
            {cart.length}
          </span>
        </Link>
      </nav>
      <div className={styles.hr}></div>
    </div>
  );
}

export default Header;
