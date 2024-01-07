import styles from "./index.module.css";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <div className={styles.main_container}>
      <p className={styles.message}>
        Looks like you have no items in your basket currently
      </p>
      <Link to="/products">
        <button className={styles.continue_button}>Continue Schopping</button>
      </Link>
    </div>
  );
}

export default CartEmpty;
