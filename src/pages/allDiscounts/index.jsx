import { menulist5 } from "../../utils";

import ProductCards from "../../components/productCards/index.jsx";
import ButtonNavMenu from "../../components/buttonsNavMenu/index.jsx";

import styles from "./index.module.css";
import SortingFields from "../../components/sortingFields/index.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function AllDiscounts() {
  const { productsList, status } = useSelector((state) => state.products);
  const [filterProducts, setFilterProducts] = useState(productsList);

  const [filter, setFilter] = useState({
    minPrice: "",
    maxPrice: "",
    showDiscount: true,
    sortOrder: "default",
  });

  useEffect(() => {
    const filterProducts = () => {
      let filteredList = [...productsList];

      if (filter.minPrice !== "") {
        filteredList = filteredList.filter((product) => {
          const price =
            product.discont_price !== null
              ? product.discont_price
              : product.price;

          return price >= parseInt(filter.minPrice);
        });
      }

      if (filter.maxPrice !== "") {
        filteredList = filteredList.filter((product) => {
          const price =
            product.discont_price !== null
              ? product.discont_price
              : product.price;

          return price <= parseInt(filter.maxPrice);
        });
      }

      if (filter.sortOrder === "price_low") {
        filteredList.sort((a, b) => a.discont_price - b.discont_price);
      }
      if (filter.sortOrder === "price_high") {
        filteredList.sort((a, b) => b.discont_price - a.discont_price);
      }

      setFilterProducts(filteredList);
    };

    filterProducts();
  }, [filter, productsList]);

  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        {menulist5.map((item) => {
          return (
            <ButtonNavMenu key={item.id} {...item} length={menulist5.length} />
          );
        })}
      </div>
      <p className={styles.container_header}>Discounted items</p>
      <SortingFields {...{ filter, setFilter }} hideDiscountButton={true} />
      <div className={styles.products_container}>
        {status === "fulfilled" &&
          filterProducts
            .filter((el) => el.discont_price !== null)
            .map((item) => <ProductCards key={item.id} {...item} />)}
      </div>
    </div>
  );
}

export default AllDiscounts;
