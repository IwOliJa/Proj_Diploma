import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductCards from "../productCards/index.jsx";
import { getProducts } from "../../store/slices/allProductsSlice.js";

import styles from "./index.module.css";

function AllDiscountsBlock () {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( getProducts() );
  }, [] ); //eslint-disable-line

  const { productsList, status } = useSelector( ( state ) => state.products );

  return (
    <div className={styles.products_container}>
      {status === "fulfilled" &&
        productsList
          .filter( ( el ) => el.discont_price !== null )
          .map( ( item ) => <ProductCards key={item.id} {...item} /> )}
    </div>
  );
}

export default AllDiscountsBlock;
