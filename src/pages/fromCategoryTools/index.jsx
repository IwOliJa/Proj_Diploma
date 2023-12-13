import styles from "./index.module.css";
import ButtonNavMenu from "../../components/buttonsNavMenu";
import CategoryToolsBlock from "../../components/fromCategoryToolsBlock";
import { menulist3 } from "../../utils";
import SortingFields from "../../components/sortingFields";

function FromCategoryTools() {
  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        <span className={styles.hr}></span>
        <span className={styles.hr2}></span>
        {menulist3.map((item) => {
          return (
            <ButtonNavMenu key={item.id} {...item} length={menulist3.length} />
          );
        })}
      </div>
      <p className={styles.container_header}>Tools and equipment</p>
      <SortingFields />
      <CategoryToolsBlock />
    </div>
  );
}
export default FromCategoryTools;
