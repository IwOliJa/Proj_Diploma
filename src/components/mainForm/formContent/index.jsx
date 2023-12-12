import styles from "./index.module.css";
import gardenToolsImage from "../../../assets/images/form_img.svg";

function FormContent() {
  return (
    <div className={styles.form_container}>
      <div className={styles.image_wrapper}>
        <img
          className={styles.image}
          src={gardenToolsImage}
          alt="garden tools"
        />
      </div>
      <form className={styles.form_content}>
        <input type="text" value="" placeholder="Name" />
        <input type="text" value="" placeholder="Phone number" />
        <input type="text" value="" placeholder="Email" />
        <button className={styles.form_button}>Get a discount</button>
      </form>
    </div>
  );
}
export default FormContent;
