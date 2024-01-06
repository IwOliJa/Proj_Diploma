import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

function ProductCards({ id, image, title, price, discont_price }) {
  const dispatch = useDispatch();

  const discountPercent = Math.ceil(((price - discont_price) / price) * 100);
  const hasDiscountPrice = discont_price !== null;

  return (
    <div className={styles.card_wrapper}>
      <Link className={styles.card_link} to={`/products/${id}`}>
        <div
          className={styles.image}
          key={id}
          style={{
            backgroundImage: `url(http://localhost:3333${image})`,
            backgroundSize: "cover",
          }}
        ></div>
        {hasDiscountPrice && (
          <span className={styles.discount_percent}>-{discountPercent}%</span>
        )}
        <p className={styles.card_name}>{title}</p>
        <span className={styles.product_price}>
          ${hasDiscountPrice ? discont_price : price}
        </span>
        {hasDiscountPrice && (
          <span className={styles.discount_item}>
            ${price}
            <span className={styles.delete_symbol}></span>
          </span>
        )}
      </Link>
      <button
        className={styles.adding_btn}
        onClick={() =>
          dispatch(
            addToCart({ id, image, title, price, discont_price, count: 1 })
          )
        }
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCards;
