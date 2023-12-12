import ButtonNavMenu from "../../components/buttonNavMenu";
import CategoriesCards from "../../components/mainCategories/categoriesCards";
import CategoriesTitle from "../../components/mainCategories/catigoriesTitle";
import styles from "./index.module.css";
import { menulist2 } from "../../utils/index.js";

function AllCategories() {
  // const render = [1, 2];
  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        <span className={styles.hr}></span>
        {menulist2.map((item) => {
          return (
            <ButtonNavMenu key={item.id} {...item} length={menulist2.length} />
          );
        })}

        {/* 
        <button className={styles.main_page_btn}>Main page</button>
        <span className={styles.hr}></span>
        <button className={styles.categories_btn}>Categories</button> */}
      </div>
      <CategoriesTitle />
      {/* {render.map((el) => {
        return <CategoriesCards />;
      })} */}
      <CategoriesCards />
      <CategoriesCards />
    </div>
  );
}
export default AllCategories;
