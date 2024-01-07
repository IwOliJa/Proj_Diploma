import styles from "./index.module.css";

function SortingFields({ filter, setFilter, hideDiscountButton }) {
  const typesSorted = [
    { value: "default", name: "by default" },
    { value: "price_low", name: "Price (Low to High)" },
    { value: "price_high", name: "Price (High to Low)" },
  ];

  return (
    <div className={styles.forms_content}>
      <div className={styles.form_wrapper}>
        <label className={styles.price}>Price</label>
        <input
          className={styles.from}
          type="number"
          value={filter.minPrice}
          placeholder="from"
          onChange={(e) => setFilter({ ...filter, minPrice: e.target.value })}
        />
        <input
          className={styles.to}
          type="number"
          value={filter.maxPrice}
          placeholder="to"
          onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })}
        />
      </div>
      {!hideDiscountButton && (
        <div className={styles.form_wrapper}>
          <label className={styles.discount}>Discounted items</label>
          <div
            className={[
              `${styles.checkbox}
            ${filter.showDiscount && styles.checkbox_active}`,
            ]}
            onClick={() =>
              setFilter({ ...filter, showDiscount: !filter.showDiscount })
            }
          ></div>
        </div>
      )}

      <div className={styles.form_wrapper}>
        <label className={styles.sorted}>Sorted</label>
        <select
          className={styles.selection_field}
          value={filter.sortOrder}
          onChange={(e) => setFilter({ ...filter, sortOrder: e.target.value })}
        >
          {typesSorted.map((item, idx) => {
            return (
              <option key={idx} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default SortingFields;
