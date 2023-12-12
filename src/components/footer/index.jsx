import ContactBlock from "./contactBlock";
import styles from "./index.module.css";
import LocationBlock from "./locationBlock";

function Footer() {
  return (
    <div className={styles.main_container}>
      <p>Contact</p>
      <ContactBlock />
      <LocationBlock />
    </div>
  );
}

export default Footer;
