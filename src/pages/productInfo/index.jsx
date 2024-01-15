import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

import ButtonNavMenu from "../../components/buttonsNavMenu";
import ProducktInfoBlock from "./productInfoBlock";

import { getByProductInfo } from "../../store/slices/productInfoSlice";
import { getCategories } from "../../store/slices/categoriesSlice";

import styles from "./index.module.css";

function ProductInfo () {

  const { id } = useParams();
  const dispatch = useDispatch();

  const { productData, status } = useSelector( ( state ) => state.product );
  const { categoriesList } = useSelector( ( state ) => state.categories );

  const categoryName = useMemo( () => {
    if ( productData.length > 0 && categoriesList.length > 0 ) {
      const categoryId = productData[ 0 ].categoryId;
      const category = categoriesList.find( ( el ) => el.id === categoryId );

      return category ? category.title : "Unknown Category";
    }
    return "";
  }, [ productData, categoriesList ] );

  const navigation = useMemo( () => {
    return [
      { id: 1, item: "Main Page", path: '/' },
      { id: 2, item: "Categories", path: '/categories' },
      { id: 3, item: categoryName, path: `/categories/${productData[ 0 ]?.categoryId}` },
      { id: 4, item: productData.length > 0 ? productData[ 0 ]?.title : "Product", path: `/products/${productData[ 0 ]?.id}` }
    ];
  }, [ categoryName, productData ] );

  useEffect( () => {
    const fetchData = async () => {
      dispatch( getByProductInfo( id ) );
      dispatch( getCategories() );
    };

    fetchData();
  }, [ id, dispatch ] );

  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        {navigation.map( ( item, idx ) => {
          return <Link key={idx} to={item.path}>
            <ButtonNavMenu {...item} length={navigation.length} />
          </Link>

        } )}
      </div>
      {status === "fulfilled" &&
        productData.map( ( item, idx ) => (
          <ProducktInfoBlock key={idx} {...item} />
        ) )}
    </div>
  );
}

export default ProductInfo;
