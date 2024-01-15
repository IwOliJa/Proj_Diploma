import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

import ButtonNavMenu from "../../components/buttonsNavMenu";
import FromCategoryBlock from "../../components/fromCategoryBlock";
import { getCategorySpecific } from "../../store/slices/fromCategorySlice";

import styles from "./index.module.css";

function FromCategory () {

  const { id } = useParams();
  const dispatch = useDispatch( id );

  useEffect( () => {
    dispatch( getCategorySpecific( id ) );
  }, [] ); //eslint-disable-line

  const { categoryData, status } = useSelector( ( state ) => state.category );

  const navigation = useMemo( () => {
    return [
      { id: 1, item: "Main Page", path: '/' },
      { id: 2, item: "Categories", path: '/categories' },
      { id: 3, item: categoryData.category?.title, path: `/categories/${categoryData.category?.id}` },
    ];
  }, [ categoryData ] );

  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        {navigation.map( ( item ) => {
          return <Link key={item.id} to={item.path}>
            <ButtonNavMenu {...item} length={navigation.length} />
          </Link>
        } )}
      </div>
      {status === "fulfilled" && (
        <h3 className={styles.container_header}>
          {categoryData.category.title}
        </h3>
      )}
      <FromCategoryBlock />
    </div>
  );
}

export default FromCategory;
