import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { menulist4 } from "../../utils";
import { Link } from "react-router-dom";

import SortingFields from "../../components/sortingFields/index.jsx";
import ProductCards from "../../components/productCards/index.jsx";
import ButtonNavMenu from "../../components/buttonsNavMenu/index.jsx";
import { getProducts } from "../../store/slices/allProductsSlice.js";

import styles from "./index.module.css";

function AllProducts () {

  const { productsList, status } = useSelector( ( state ) => state.products );
  const [ filterProducts, setFilterProducts ] = useState( productsList );

  const [ filter, setFilter ] = useState( {
    minPrice: "",
    maxPrice: "",
    fromAToZ: "",
    showDiscount: false,
    sortOrder: "default",
  } );

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( getProducts() );
  }, [] ); // eslint-disable-line

  useEffect( () => {
    const filterProducts = () => {
      let filteredList = [ ...productsList ];

      if ( filter.minPrice !== "" ) {
        filteredList = filteredList.filter( ( product ) => {
          const price =
            product.discont_price !== null
              ? product.discont_price
              : product.price;
          return price >= parseInt( filter.minPrice );
        } );
      }

      if ( filter.maxPrice !== "" ) {
        filteredList = filteredList.filter( ( product ) => {
          const price =
            product.discont_price !== null
              ? product.discont_price
              : product.price;
          return price <= parseInt( filter.maxPrice );
        } );
      }

      if ( filter.showDiscount ) {
        filteredList = filteredList.filter(
          ( product ) => product.discont_price !== null
        );
      }

      if ( filter.sortOrder === "price_low" ) {
        filteredList.sort( ( a, b ) => {
          const priceA = a.discont_price !== null ? a.discont_price : a.price;
          const priceB = b.discont_price !== null ? b.discont_price : b.price;
          return priceA - priceB;
        } );
      }

      if ( filter.sortOrder === "price_high" ) {
        filteredList.sort( ( a, b ) => {
          const priceA = a.discont_price !== null ? a.discont_price : a.price;
          const priceB = b.discont_price !== null ? b.discont_price : b.price;
          return priceB - priceA;
        } );
      }

      if ( filter.sortOrder === "A_to_Z" ) {
        filteredList.sort( ( a, b ) => a.title.localeCompare( b.title ) );
      }

      setFilterProducts( filteredList );
    };

    filterProducts();
  }, [ filter, productsList ] );

  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        {menulist4.map( ( item ) => {
          return (
            <Link key={item.id} to={item.path}>
              <ButtonNavMenu {...item} length={menulist4.length} />
            </Link>
          );
        } )}
      </div>
      <p className={styles.container_header}>All products</p>
      <SortingFields {...{ filter, setFilter }} hideDiscountButton={false} />
      <div className={styles.products_container}>
        {status === "fulfilled" &&
          filterProducts.map( ( item ) => (
            <ProductCards key={item.id} {...item} />
          ) )}
      </div>
    </div>
  );
}

export default AllProducts;
