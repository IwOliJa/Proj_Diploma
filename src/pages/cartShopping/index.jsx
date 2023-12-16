import styles from "./index.module.css";
import CartShoppingTitle from "./cartShoppingTitle";
import CartShoppingContent from "./cartShoppingContent";

function CartShopping() {
  return (
    <div className={styles.main_container}>
      <CartShoppingTitle />
      <CartShoppingContent />
    </div>
  );
}
export default CartShopping;
