import FormContent from "./formContent";

import styles from "./index.module.css";

function MainForm () {
  return (
    <div className={styles.form_wrapper}>
      <p className={styles.form_title}>5% off on the first order</p>
      <FormContent />
    </div>
  );
}

export default MainForm;
