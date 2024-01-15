import { Link } from "react-router-dom";

import styles from "./index.module.css";

function CategoriesCards ( { image, title, id } ) {
  return (
    <Link to={`/categories/${id}`} style={{ textDecoration: "none" }}>
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
    </Link>
  );
}

export default CategoriesCards;
