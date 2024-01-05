import styles from "./index.module.css";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { plus, minus } from "../../../store/slices/countSchoppingSlice.js";

function CartShoppingContent() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.schoppingCart);
  console.log(cart);

  const { count } = useSelector((state) => state.counter);

  return (
    <>
      <div className={styles.content_wrapper}>
        <div className={styles.items_wrapper}>
          {cart.map((item) => {
            return (
              <div className={styles.item_content}>
                <div className={styles.image_container}>
                  <img
                    className={styles.cart_image}
                    src={`http://localhost:3333/${item.image}`}
                    alt={item.title}
                  />
                </div>
                <div className={styles.shopping_counter}>
                  <p className={styles.product_name}>
                    {item.title}
                    <span>
                      <VscChromeClose size="25px" />
                    </span>
                  </p>
                  <div className={styles.item_counter}>
                    <button
                      onClick={() => dispatch(minus())}
                      className={styles.count_button}
                    >
                      -
                    </button>
                    <div className={styles.count_data}>{count}</div>
                    <button
                      onClick={() => dispatch(plus())}
                      className={styles.count_button}
                    >
                      +
                    </button>
                  </div>
                  <div className={styles.item_price}>
                    <span className={styles.product_price}>$155</span>
                    <span className={styles.discount_item}>
                      $240 <span className={styles.delete_symbol}></span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.form_wrapper}>
          <h3 className={styles.form_title}>Order details</h3>
          <p className={styles.text}>
            <span>3</span>items
          </p>
          <div className={styles.price_wrapper}>
            <p className={styles.text}>Total</p>
            <span className={styles.total_price}>$541,00</span>
          </div>

          <form className={styles.form_content}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Email" />
            <button className={styles.form_button}>Order</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CartShoppingContent;
