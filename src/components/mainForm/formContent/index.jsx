import styles from "./index.module.css";
import gardenToolsImage from "../../../assets/images/form_img.svg";
import {
  generateName,
  generatePhone,
  generateEmail,
} from "../../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

function FormContent() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.userName);
  const phone = useSelector((state) => state.user.phone);
  const email = useSelector((state) => state.user.email);
  console.log(name);
  console.log(phone);
  console.log(email);

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
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={(event) => {
            dispatch(generateName(event.target.value));
          }}
        />
        <input
          value={phone}
          type="number"
          placeholder="Phone number"
          onChange={(event) => {
            dispatch(generatePhone(event.target.value));
          }}
        />
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(event) => {
            dispatch(generateEmail(event.target.value));
          }}
        />
        <button className={styles.form_button}>Get a discount</button>
      </form>
    </div>
  );
}
export default FormContent;
