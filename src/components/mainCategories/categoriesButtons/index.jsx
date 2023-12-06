import styles from "./index.module.css";

function CategoriesButtons() {
  return (
    <div className={styles.categories_wrapper}>
      <div className={styles.button_wrapper}>
        <button className={styles.image_button1}></button>
        <p>Fertilizer</p>
      </div>
      <div className={styles.button_wrapper}>
        <button className={styles.image_button2}></button>
        <p>Protective products and septic tanks</p>
      </div>
      <div className={styles.button_wrapper}>
        <button className={styles.image_button3}></button>
        <p>Planting material</p>
      </div>
      <div className={styles.button_wrapper}>
        <button className={styles.image_button4}></button>
        <p>Tools and equipment</p>
      </div>
    </div>
  );
}

export default CategoriesButtons;
