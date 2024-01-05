import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

function ProductCards({ id, image, title, price, discont_price }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.card_wrapper}>
      <Link className={styles.card_link} to={`${id}`}>
        <div
          className={styles.image}
          key={id}
          style={{
            backgroundImage: `url(http://localhost:3333${image})`,
            backgroundSize: "cover",
          }}
        ></div>
        <span className={styles.discount_percent}>-xx%</span>
        <p className={styles.card_name}>{title}</p>
        {discont_price !== null ? (
          <span className={styles.product_price}>${discont_price}</span>
        ) : (
          <span className={styles.product_price}>${price}</span>
        )}
        {discont_price !== null ? (
          <span className={styles.discount_item}>
            ${price}
            <span className={styles.delete_symbol}></span>
          </span>
        ) : (
          <span className={styles.discount_item}></span>
        )}
      </Link>
      <button
        className={styles.adding_btn}
        onClick={() =>
          dispatch(addToCart({ id, image, title, price, discont_price }))
        }
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCards;
