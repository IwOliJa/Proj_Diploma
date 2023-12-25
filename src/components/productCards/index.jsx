import styles from "./index.module.css";
import { Link } from "react-router-dom";

function ProductCards({ id, image, title, price, discont_price }) {
  return (
    <Link to={`${id}`} style={{ textDecoration: "none" }}>
      <div className={styles.card_wrapper}>
        <div
          className={styles.image}
          key={id}
          style={{
            backgroundImage: `url(http://localhost:3333${image})`,
            backgroundSize: "cover",
          }}
        ></div>
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
      </div>
    </Link>
  );
}

export default ProductCards;
