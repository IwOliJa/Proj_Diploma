import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SaleTitle from "./saleTitle/index.jsx";
import ProductCards from "../productCards";
import { getProducts } from "../../store/slices/allProductsSlice.js";

import styles from "./index.module.css";

function MainSale () {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( getProducts() );
  }, [] ); //eslint-disable-line

  const { productsList, status } = useSelector( ( state ) => state.products );

  return (
    <div className={styles.main_container}>
      <SaleTitle />
      <div className={styles.categories_container}>
        {status === "fulfilled" &&
          productsList &&
          productsList
            .filter( ( el ) => el.discont_price !== null )
            .slice( 0, 4 )
            .map( ( item ) => {
              return <ProductCards key={item.id} {...item} />;
            } )}
      </div>
    </div>
  );
}

export default MainSale;
