import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CategoriesTitle from "./catigoriesTitle";
import CategoriesCards from "../categoriesCards/index";
import { getCategories } from "../../store/slices/categoriesSlice";

import styles from "./index.module.css";

function MainCategories () {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( getCategories() );
  }, [] ); //eslint-disable-line

  const { categoriesList, status } = useSelector( ( state ) => state.categories );

  return (
    <div className={styles.main_container}>
      <CategoriesTitle />
      <div className={styles.categories_container}>
        {status === "fulfilled" &&
          categoriesList &&
          categoriesList.slice( 0, 4 ).map( ( item ) => {
            return <CategoriesCards key={item.id} {...item} />;
          } )}
      </div>
    </div>
  );
}

export default MainCategories;
