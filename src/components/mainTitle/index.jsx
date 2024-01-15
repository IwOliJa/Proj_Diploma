import { Link } from "react-router-dom";

import styles from "./index.module.css";

function MainTitle () {
  return (
    <div className={styles.main_title}>
      <div className={styles.title_content_wrapper}>
        <h1 className={styles.main_header}>
          Amazing Discounts <br /> on Garden Products!
        </h1>
        <Link to="/sales">
          <button className={styles.main_title_button}>Check out</button>
        </Link>
      </div>
    </div>
  );
}

export default MainTitle;
