import ContactBlock from "./contactBlock";
import LocationBlock from "./locationBlock";

import styles from "./index.module.css";

function Footer () {
  return (
    <footer className={styles.main_container}>
      <p>Contact</p>
      <ContactBlock />
      <LocationBlock />
    </footer>
  );
}

export default Footer;
