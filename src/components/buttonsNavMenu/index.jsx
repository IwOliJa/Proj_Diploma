import styles from "./index.module.css";

function ButtonNavMenu({ item, id, length }) {
  return (
    <div className={styles.buttons_wrapper}>
      <button
        className={
          id === length
            ? [`${styles.btn_light} ${styles.dark}`]
            : [styles.btn_light]
        }
      >
        {item}
      </button>
      <span
        className={
          id === length ? [`${styles.hr} ${styles.hr_last}`] : [styles.hr]
        }
      ></span>
    </div>
  );
}

export default ButtonNavMenu;
