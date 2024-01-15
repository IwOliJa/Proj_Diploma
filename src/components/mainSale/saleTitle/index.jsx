import { Link } from "react-router-dom";

import styles from "./index.module.css";

function SaleTitle () {
  return (
    <div className={styles.title_content}>
      <p className={styles.sale_header}>Sale</p>
      <div className={styles.hr}></div>
      <Link to="/sales">
        <button className={styles.sale_button}>All sales</button>
      </Link>
    </div>
  );
}

export default SaleTitle;
