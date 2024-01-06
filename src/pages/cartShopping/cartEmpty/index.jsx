import styles from "./index.module.css";

function CartEmpty() {
  return (
    <div className={styles.main_container}>
      <p className={styles.message}>
        Looks like you have no items in your basket currently
      </p>
      <button className={styles.continue_button}>Continue Schopping</button>
    </div>
  );
}

export default CartEmpty;
