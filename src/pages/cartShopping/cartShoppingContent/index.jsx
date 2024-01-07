import styles from "./index.module.css";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  removeFromCart,
  postOrder,
} from "../../../store/slices/cartSlice.js";

function CartShoppingContent() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.schoppingCart);

  function hasDiscountPrice(discont_price) {
    return discont_price !== null;
  }

  const totalAmount = cart.reduce((sum, item) => {
    const itemPrice = hasDiscountPrice(item.discont_price)
      ? item.discont_price
      : item.price;
    return sum + itemPrice * item.count;
  }, 0);

  const totalCount = cart.reduce((sum, item) => sum + item.count, 0);

  return (
    <>
      <div className={styles.content_wrapper}>
        <div className={styles.items_wrapper}>
          {cart.map((item) => {
            const price = hasDiscountPrice(item.discont_price)
              ? item.discont_price
              : item.price;
            const discont_price = hasDiscountPrice && item.price;

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
                    <span
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >
                      <VscChromeClose size="25px" />
                    </span>
                  </p>
                  <div className={styles.item_counter}>
                    <button
                      onClick={() => dispatch(decrementCount({ id: item.id }))}
                      className={styles.count_button}
                    >
                      -
                    </button>
                    <div className={styles.count_data}>{item.count}</div>
                    <button
                      onClick={() => dispatch(incrementCount({ id: item.id }))}
                      className={styles.count_button}
                    >
                      +
                    </button>
                  </div>
                  <div className={styles.item_price}>
                    <span className={styles.product_price}>
                      ${(price * item.count).toFixed(2)}
                    </span>
                    <span className={styles.discount_item}>
                      ${(discont_price * item.count).toFixed(2)}
                      <span className={styles.delete_symbol}></span>
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
            <span>{totalCount}</span>items
          </p>
          <div className={styles.price_wrapper}>
            <p className={styles.text}>Total</p>
            <span className={styles.total_price}>
              ${totalAmount.toFixed(2)}
            </span>
          </div>

          <form className={styles.form_content}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Email" />
            <button
              className={styles.form_button}
              onClick={(e) => {
                e.preventDefault();

                dispatch(postOrder(cart))
                  .then((result) => {
                    console.log("Server response:", result);
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  });
              }}
            >
              Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CartShoppingContent;
