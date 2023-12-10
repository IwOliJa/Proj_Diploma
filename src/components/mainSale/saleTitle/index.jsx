import styles from "./index.module.css";

function SaleTitle() {
  return (
    <div className={styles.title_content}>
      <p className={styles.sale_header}>Sale</p>
      <div className={styles.hr}></div>
      <button className={styles.sale_button}>All sales</button>
    </div>
  );
}

export default SaleTitle;
