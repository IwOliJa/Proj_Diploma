import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../../store/slices/cartSlice";
import { increment, decrement, } from "../../../store/slices/countSchoppingSlice";

import styles from "./index.module.css";

function ProducktInfoBlock ( {
  id,
  image,
  title,
  price,
  discont_price,
  description,
} ) {

  const dispatch = useDispatch();
  const { count } = useSelector( ( state ) => state.counter );
  const [ isClicked, setIsClicked ] = useState( false );

  const discountPercent = Math.ceil( ( ( price - discont_price ) / price ) * 100 );
  const hasDiscountsPrice = discont_price !== null;

  const btnClick = useCallback( () => {
    setIsClicked( !isClicked );
  }, [ isClicked ] )

  return (
    <div className={styles.content_wrapper}>
      <div className={styles.images_content}>
        <div className={styles.content_small}>
          {Array.from( { length: 3 } ).map( ( _, idx ) => {
            return <div key={idx}
              className={styles.small_card}
              style={{ backgroundImage: `url(http://localhost:3333${image})` }}
            ></div>
          } )}
        </div>
        <div
          className={styles.big_card}
          style={{ backgroundImage: `url(http://localhost:3333${image})`, }}
        ></div>
      </div>
      <div className={styles.info_content}>
        <p className={styles.product_name}>{title}</p>
        <span className={styles.product_price}>
          $
          {hasDiscountsPrice
            ? ( discont_price * count ).toFixed( 2 )
            : ( price * count ).toFixed( 2 )}
        </span>
        {hasDiscountsPrice && (
          <span className={styles.discount_item}>
            ${( price * count ).toFixed( 2 )}
            <span className={styles.delete_symbol}></span>
            <span className={styles.discont_percent}>{discountPercent}%</span>
          </span>
        )}
        <div className={styles.counting_filds}>
          <button
            className={styles.count_button}
            onClick={() => {
              dispatch( decrement() );
              isClicked && btnClick();
            }}
          >-</button>
          <div className={styles.count_data}>{count}</div>
          <button
            className={styles.count_button}
            onClick={() => {
              dispatch( increment() );
              isClicked && btnClick();
            }}
          >+</button>
          <input
            type="button"
            className={[ `${styles.adding_btn} ${isClicked && styles.added}` ]}
            value={isClicked ? "Added" : "Add to cart"}
            onClick={() => {
              dispatch( addToCart( { id, image, title, price, discont_price, count } ) );
              btnClick()
            }}
          />
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
