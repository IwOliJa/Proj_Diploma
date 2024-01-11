import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";
import {
  increment,
  decrement,
} from "../../../store/slices/countSchoppingSlice";
import { useState } from "react";

function ProducktInfoBlock({
  id,
  image,
  title,
  price,
  discont_price,
  description,
}) {
  const [btnValue, setBtnValue] = useState("Add to cart");
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const discountPercent = Math.ceil(((price - discont_price) / price) * 100);

  const hasDiscountsPrice = discont_price !== null;

  function btnClick(event) {
    setBtnValue((event.value = "Added"));
  }

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

        <span className={styles.product_price}>
          ${hasDiscountsPrice ? (discont_price * count).toFixed(2) : price}
        </span>

        {hasDiscountsPrice && (
          <span className={styles.discount_item}>
            ${(price * count).toFixed(2)}
            <span className={styles.delete_symbol}></span>
            <span className={styles.discont_percent}>{discountPercent}%</span>
          </span>
        )}

        <div className={styles.counting_filds}>
          <button
            className={styles.count_button}
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <div className={styles.count_data}>{count}</div>
          <button
            className={styles.count_button}
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <input
            className={
              btnValue === "Added"
                ? [`${styles.adding_btn} ${styles.added}`]
                : [styles.adding_btn]
            }
            type="button"
            value={btnValue}
            // className={styles.adding_btn}
            onClick={(event) =>
              dispatch(
                addToCart({ id, image, title, price, discont_price, count }),
                btnClick(event)
              )
            }
          />
          {/* Add to cart
          </input> */}
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
