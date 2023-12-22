import styles from "./index.module.css";

function CategoriesCards({ image, title }) {
  return (
    <div className={styles.cards_wrapper}>
      <div className={styles.card_box}>
        <img
          className={styles.image}
          src={"http://localhost:3333" + image}
          alt={title}
        />
      </div>
      <p className={styles.card_name}>{title}</p>
    </div>
  );
}

export default CategoriesCards;
