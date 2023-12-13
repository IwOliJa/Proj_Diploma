import styles from "./index.module.css";

function SortingFields() {
  return (
    <div className={styles.main_container}>
      <p>Price</p>
      <input type="text" value="" placeholder="from" />
      <input type="text" value="" placeholder="to" />
      <p>Discounted items</p>
      <input type="text" value="" />
      <p>Sorted</p>
      <input type="text" placeholder="by default" />
    </div>
  );
}

export default SortingFields;
