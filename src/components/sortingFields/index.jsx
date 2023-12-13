import styles from "./index.module.css";

function SortingFields() {
  return (
    <div className={styles.forms_content}>
      <div className={styles.form_wrapper}>
        <label className={styles.price}>Price</label>
        <input
          className={styles.from}
          type="text"
          value=""
          placeholder="from"
        />
        <input className={styles.to} type="text" value="" placeholder="to" />
      </div>
      <div className={styles.form_wrapper}>
        <label className={styles.discount}>Discounted items</label>
        <input className={styles.counter} value="" />
      </div>
      <div className={styles.form_wrapper}>
        <label className={styles.sorted}>Sorted</label>
        <select className={styles.selection_field}>
          <option value="">by default</option>
          <option value="">fgnjfg</option>
          <option value="">fgnjfg</option>
        </select>
      </div>
    </div>
  );
}

export default SortingFields;
