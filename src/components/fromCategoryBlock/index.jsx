import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getCategorySpecific } from "../../store/slices/fromCategorySlice";
import ProductCards from "../productCards/index.jsx";

import styles from "./index.module.css";

function FromCategoryBlock () {

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( getCategorySpecific( id ) );
  }, [] ); //eslint-disable-line

  const { categoryData, status } = useSelector( ( state ) => state.category );

  return (
    <div className={styles.products_container}>
      {status === "fulfilled" &&
        categoryData.data.map( ( item ) => (
          <ProductCards key={item.id} {...item} />
        ) )}
    </div>
  );
}

export default FromCategoryBlock;
