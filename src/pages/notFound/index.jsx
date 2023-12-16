import styles from "./index.module.css";
import Number4 from "../../assets/images/4.svg";
import Cactus from "../../assets/images/404.svg";

function NotFoundPage() {
  return (
    <div className={styles.main_container}>
      <div className={styles.images_wrapper}>
        <img src={Number4} alt="number-4" />
        <img src={Cactus} alt="cactus" />
        <img src={Number4} alt="number-4" />
      </div>
      <div className={styles.info_wrapper}>
        <p className={styles.page_heading}>Page Not Found</p>
        <p className={styles.text}>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage
        </p>
        <button className={styles.return_button}>Go Home</button>
      </div>
    </div>
  );
}

export default NotFoundPage;
