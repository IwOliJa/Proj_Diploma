import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart } from "../../store/slices/cartSlice";

import styles from "./index.module.css";

function ProductCards ( { id, image, title, price, discont_price } ) {
  const [ isClicked, setIsClicked ] = useState( false );

  const dispatch = useDispatch();

  const discountPercent = Math.ceil( ( ( price - discont_price ) / price ) * 100 );
  const hasDiscountPrice = discont_price !== null;

  const btnClick = useCallback( () => {
    setIsClicked( !isClicked );
  }, [ isClicked ] )

  return (
    <div className={styles.card_wrapper}>
      <Link className={styles.card_link} to={`/products/${id}`}>
        <div
          className={styles.image}
          key={id}
          style={{ backgroundImage: `url(http://localhost:3333${image})` }}>
        </div>
        {hasDiscountPrice && <span className={styles.discount_percent}>-{discountPercent}%</span>}
        <p className={styles.card_name}>{title}</p>
        <span className={styles.product_price}>
          ${hasDiscountPrice ? discont_price : price}
        </span>
        {hasDiscountPrice &&
          <span className={styles.discount_item}>
            ${price}
            <span className={styles.delete_symbol}></span>
          </span>
        }
      </Link>
      <input
        type="button"
        value={isClicked ? 'Added' : 'Add to cart'}
        className={[ `${styles.adding_btn} ${isClicked && styles.added}` ]}
        onClick={() => {
          dispatch( addToCart( { id, image, title, price, discont_price, count: 1 } ) );
          btnClick()
        }
        }
      />
    </div>
  );
}

export default ProductCards;
