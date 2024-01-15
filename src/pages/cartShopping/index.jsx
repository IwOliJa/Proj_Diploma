import { useSelector } from "react-redux";

import CartShoppingTitle from "./cartShoppingTitle";
import CartShoppingContent from "./cartShoppingContent";
import CartEmpty from "./cartEmpty";

import styles from "./index.module.css";

function CartShopping () {
  const { cart } = useSelector( ( state ) => state.schoppingCart );

  return (
    <div className={styles.main_container}>
      <CartShoppingTitle />
      {cart.length > 0 ? <CartShoppingContent /> : <CartEmpty />}
    </div>
  );
}
export default CartShopping;
