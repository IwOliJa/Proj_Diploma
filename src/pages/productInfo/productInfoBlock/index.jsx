import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";

function ProducktInfoBlock({
  id,
  image,
  title,
  price,
  discont_price,
  description,
}) {
  const dispatch = useDispatch();
  return (
    <div className={styles.content_wrapper}>
      <div className={styles.images_content}>
        <div className={styles.content_small}>
          <div
            className={styles.small_card}
            key={id}
            style={{
              backgroundImage: `url(http://localhost:3333${image})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className={styles.small_card}
            key={id}
            style={{
              backgroundImage: `url(http://localhost:3333${image})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className={styles.small_card}
            key={id}
            style={{
              backgroundImage: `url(http://localhost:3333${image})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div
          className={styles.big_card}
          key={id}
          style={{
            backgroundImage: `url(http://localhost:3333${image})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className={styles.info_content}>
        <p className={styles.product_name}>{title}</p>
        {discont_price !== null ? (
          <span className={styles.product_price}>${discont_price}</span>
        ) : (
          <span className={styles.product_price}>${price}</span>
        )}
        {discont_price !== null ? (
          <span className={styles.discount_item}>
            ${price} <span className={styles.delete_symbol}></span>
            <span className={styles.discont_percent}>17%</span>
          </span>
        ) : (
          <span className={styles.product_price}></span>
        )}

        <div className={styles.counting_filds}>
          <button className={styles.count_button}>-</button>
          <div className={styles.count_data}>0</div>
          <button className={styles.count_button}>+</button>
          <button
            className={styles.adding_button}
            onClick={() =>
              dispatch(addToCart({ id, image, title, price, discont_price }))
            }
          >
            Add to cart
          </button>
        </div>
        <div className={styles.description}>
          <p className={styles.heading}>Description</p>
          <p className={styles.text}>{description}</p>
          <p className={styles.link}>Read more</p>
        </div>
      </div>
    </div>
  );
}

export default ProducktInfoBlock;
