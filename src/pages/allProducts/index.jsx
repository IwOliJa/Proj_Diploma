import styles from "./index.module.css";
import AllProductsBlock from "../../components/allProductsBlock/index.jsx";
import SortingFields from "../../components/sortingFields/index.jsx";
import { menulist4 } from "../../utils";
import ButtonNavMenu from "../../components/buttonsNavMenu/index.jsx";

function AllProducts() {
  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        <span className={styles.hr}></span>
        {menulist4.map((item) => {
          return (
            <ButtonNavMenu key={item.id} {...item} length={menulist4.length} />
          );
        })}
      </div>
      <p className={styles.container_header}>All products</p>
      <SortingFields />
      <AllProductsBlock />
    </div>
  );
}

export default AllProducts;
