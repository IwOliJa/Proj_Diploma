import styles from "./index.module.css";
import ButtonNavMenu from "../../components/buttonsNavMenu";
import { menulist6 } from "../../utils";
import ProducktInfoBlock from "./productInfoBlock";
import { useSelector, useDispatch } from "react-redux";
import { getByProductInfo } from "../../store/slices/productInfoSlice";
import { getCategories } from "../../store/slices/categoriesSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch(id);

  useEffect(() => {
    dispatch(getByProductInfo(id));
  }, []);
  // useEffect(() => {
  //   dispatch(getCategories(id));
  // }, []);

  // const { categoriesList } = useSelector((state) => state.categories);
  // console.log(categoriesList);
  const { productData, status } = useSelector((state) => state.product);

  // menulist6[3].item = productData[0].title;

  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        {menulist6.map((item) => {
          return (
            <ButtonNavMenu key={item.id} {...item} length={menulist6.length} />
          );
        })}
      </div>
      {status === "fulfilled" &&
        productData.map((item) => (
          <ProducktInfoBlock key={item.id} {...item} />
        ))}
    </div>
  );
}

export default ProductInfo;
