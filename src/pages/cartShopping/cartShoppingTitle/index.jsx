import styles from "./index.module.css";

function CartShoppingTitle() {
  return (
    <div className={styles.title_content}>
      <p className={styles.shopping_header}>Shopping cart</p>
      <div className={styles.hr}></div>
      <button className={styles.shopping_button}>Back to the store</button>
    </div>
  );
}

export default CartShoppingTitle;
