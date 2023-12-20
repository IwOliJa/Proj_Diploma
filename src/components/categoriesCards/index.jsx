import styles from "./index.module.css";

function CategoriesCards({ image, title }) {
  return (
    <div className={styles.categories_wrapper}>
      <div className={styles.card_wrapper}>
        <button className={styles.image}>
          <img src={image} alt={title} />
        </button>
        <p className={styles.card_name}>{title}</p>
      </div>
    </div>
  );
}

export default CategoriesCards;
