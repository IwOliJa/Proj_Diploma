import styles from "./index.module.css";

import ButtonNavMenu from "../../components/buttonsNavMenu";
import ProducktInfoBlock from "./productInfoBlock";

import { getByProductInfo } from "../../store/slices/productInfoSlice";
import { getCategories } from "../../store/slices/categoriesSlice";

import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productData, status } = useSelector((state) => state.product);
  const { categoriesList } = useSelector((state) => state.categories);

  const categoryName = useMemo(() => {
    if (productData.length > 0 && categoriesList.length > 0) {
      const categoryId = productData[0].categoryId;
      const category = categoriesList.find((el) => el.id === categoryId);
      return category ? category.title : "Unknown Category";
    }
    return "";
  }, [productData, categoriesList]);

  const navigation = useMemo(() => {
    return [
      { id: 1, item: "Main Page" },
      { id: 2, item: "Categories" },
      { id: 3, item: categoryName },
      {
        id: 4,
        item: productData.length > 0 ? productData[0].title : "Product",
      },
    ];
  }, [categoryName, productData]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getByProductInfo(id));
      await dispatch(getCategories());
    };

    fetchData();
  }, [id, dispatch]);

  return (
    <div className={styles.main_container}>
      <div className={styles.buttons_wrapper}>
        {navigation.map((item, idx) => {
          return (
            <ButtonNavMenu key={idx} {...item} length={navigation.length} />
          );
        })}
      </div>
      {status === "fulfilled" &&
        productData.map((item, idx) => (
          <ProducktInfoBlock key={idx} {...item} />
        ))}
    </div>
  );
}

export default ProductInfo;
