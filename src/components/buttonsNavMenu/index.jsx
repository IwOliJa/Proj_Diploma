import styles from "./index.module.css";

function ButtonNavMenu({ item, id, length }) {
  return (
    <div>
      <button
        className={
          id === length ? [`${styles.btn} ${styles.dark}`] : [styles.btn]
        }
      >
        {item}
      </button>
    </div>
  );
}

export default ButtonNavMenu;
