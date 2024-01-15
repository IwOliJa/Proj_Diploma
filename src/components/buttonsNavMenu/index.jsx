import styles from "./index.module.css";

function ButtonNavMenu ( { item, id, length } ) {
  const isActive = id === length;

  return (
    <div className={styles.buttons_wrapper}>
      <button className={isActive ? [ `${styles.btn_light} ${styles.dark}` ] : [ styles.btn_light ]}>
        {item}
      </button>
      <span className={isActive ? [ `${styles.hr} ${styles.hr_last}` ] : [ styles.hr ]}></span>
    </div>
  );
}

export default ButtonNavMenu;
