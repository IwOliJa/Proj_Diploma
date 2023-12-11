import styles from "./index.module.css";

function SaleTitle() {
  return (
    <div className={styles.title_content}>
      <h className={styles.sale_header}>Sale</h>
      <div className={styles.hr}></div>
      <button className={styles.sale_button}>All sales</button>
    </div>
  );
}

export default SaleTitle;
