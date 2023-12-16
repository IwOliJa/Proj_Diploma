import styles from "./index.module.css";

function CartShoppingContent() {
  return (
    <div>
      <div className={styles.cart_wrapper}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <p>Order details</p>
        <p>
          <span>3</span>items
        </p>
        <span>Total</span>
        <span>$541,00</span>
        <form>
          <input type="submit" placeholder="Name" />
          <input type="submit" placeholder="Phone number" />
          <input type="submit" placeholder="Email" />
          <button>Order</button>
        </form>
      </div>
    </div>
  );
}

export default CartShoppingContent;
