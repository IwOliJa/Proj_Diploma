import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import icon from "../../assets/images/icon.svg";

import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

import styles from "./index.module.css";

function Header ( { menulist } ) {
  const { cart } = useSelector( ( state ) => state.schoppingCart );
  const [ isOpen, setIsOpen ] = useState( false );

  const isMounted = useRef( false );

  useEffect( () => {
    if ( isMounted.current ) {
      const json = JSON.stringify( cart );
      localStorage.setItem( "cart", json );
    }
    isMounted.current = true;
  }, [ cart ] );

  const totalCount = cart.reduce( ( sum, item ) => sum + item.count, 0 );

  return (
    <div className={styles.header}>
      <nav className={styles.nav_menu}>
        <Link to="/">
          <img className={styles.header_logo} src={logo} alt="logo" />
        </Link>
        <ul className={[ `${styles.nav_menu_list} ${isOpen && styles.active}` ]}>
          {menulist.map( ( el, idx ) => {
            return (
              <li key={idx} onClick={() => setIsOpen( !isOpen )}>
                <Link className={styles.nav_menu_item} to={el.path}>
                  {el.page}
                </Link>
              </li>
            );
          } )}
        </ul>
        <button
          className={styles.nav_menu_button}
          onClick={() => setIsOpen( !isOpen )}
        >
          {isOpen ? <VscChromeClose size="30" /> : <VscMenu size="30" />}
        </button>
        <Link to="/shoppings">
          <img className={styles.header_icon} src={icon} alt="icon" />
          <span className={totalCount ? [ styles.items_counter ] : [ styles.items_counter_none ]}>{totalCount}</span>
        </Link>
      </nav>
      <div className={styles.hr}></div>
    </div>
  );
}

export default Header;
