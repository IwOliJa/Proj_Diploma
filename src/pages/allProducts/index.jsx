import styles from "./index.module.css";
import SortingFields from "../../components/sortingFields/index.jsx";
import ProductCards from "../../components/productCards/index.jsx";
import ButtonNavMenu from "../../components/buttonsNavMenu/index.jsx";
import { menulist4 } from "../../utils";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function AllProducts() {
  const { productsList, status } = useSelector((state) => state.products);

  const [filterProducts, setFilterProducts] = useState(productsList);

  const [filter, setFilter] = useState({
    minPrice: "",
    maxPrice: "",
    showDiscount: false,
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
          console.log(filter.minPrice);
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

      if (filter.showDiscount) {
        filteredList = filteredList.filter(
          (product) => product.discont_price !== null
        );
      }

      if (filter.sortOrder === "price_low") {
        filteredList.sort((a, b) => a.price - b.price);
      }
      if (filter.sortOrder === "price_high") {
        filteredList.sort((a, b) => b.price - a.price);
      }

      setFilterProducts(filteredList);
    };

    filterProducts();
  }, [filter, productsList]);

  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        {menulist4.map((item) => {
          return (
            <ButtonNavMenu key={item.id} {...item} length={menulist4.length} />
          );
        })}
      </div>
      <p className={styles.container_header}>All products</p>
      <SortingFields {...{ filter, setFilter }} hideDiscountButton={false} />
      <div className={styles.products_container}>
        {status === "fulfilled" &&
          filterProducts.map((item) => (
            <ProductCards key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
}

export default AllProducts;
