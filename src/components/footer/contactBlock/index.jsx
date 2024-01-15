import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

import styles from "./index.module.css";

function ContactBlock () {
  return (
    <div className={styles.contacts_wrapper}>
      <div className={styles.box_large}>
        <p className={styles.p_name}>Phone</p>
        <p className={styles.p_info}>+49 999 999 99 99</p>
      </div>
      <div className={styles.box_small}>
        <p className={styles.p_name}>Socials</p>
        <a className={styles.icon} href="https://www.instagram.com/">
          <BiLogoInstagramAlt size="45px" />
        </a>
        <a className={styles.icon} href="https://web.whatsapp.com/">
          <IoLogoWhatsapp size="43px" />
        </a>
      </div>
      <div className={styles.box_large}>
        <p className={styles.p_name}>Adress</p>
        <p className={styles.p_info}>
          Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
        </p>
      </div>
      <div className={styles.box_small}>
        <p className={styles.p_name}>Working Hours</p>
        <p className={styles.p_info}>24 hours a day</p>
      </div>
    </div>
  );
}

export default ContactBlock;
