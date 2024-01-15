import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CategoriesCards from "../categoriesCards/index";
import { getCategories } from "../../store/slices/categoriesSlice";

import styles from "./index.module.css";

function CategoriesBlock () {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( getCategories() );
  }, [] ); //eslint-disable-line

  const { categoriesList, status } = useSelector( ( state ) => state.categories );

  return (
    <div className={styles.categories_container}>
      {status === "fulfilled" &&
        categoriesList.map( ( item ) => {
          return <CategoriesCards key={item.id} {...item} />;
        } )}
    </div>
  );
}

export default CategoriesBlock;
