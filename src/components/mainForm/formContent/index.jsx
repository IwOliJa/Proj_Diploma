import styles from "./index.module.css";
import gardenToolsImage from "../../../assets/images/form_img.svg";
import { postSale } from "../../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useCallback } from "react";
import { regExp } from "../../../utils/regExp";

function FormContent() {
  const dispatch = useDispatch();

  // const { userInfo, errorFields } = useSelector((state) => state.user);
  // console.log(userInfo, errorFields);

  const [inputValues, setInputValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errorsField, setErrorsFiled] = useState({
    name: {
      show: false,
      text: "",
    },
    phone: {
      show: false,
      text: "",
    },
    email: {
      show: false,
      text: "",
    },
  });
  const updateValue = useCallback(
    ({ key, value }) => {
      setInputValues({ ...inputValues, [key]: value });
    },
    [inputValues]
  );
  console.log(inputValues);
  const validateField = useCallback(
    ({ key, value }) => {
      let hasError = false;
      let errorMessage = "";

      if (value === "") {
        errorMessage = "Please fill in this field.";
        hasError = true;
      } else if (key === "name") {
        if (value.length <= 3) {
          errorMessage = "Name must contain at least 3 characters.";
          hasError = true;
        } else if (!regExp.name.test(value)) {
          errorMessage = "Permissible: a-z, A-Z.";
          hasError = true;
        }
      } else if (key === "phone") {
        if (!regExp.phone.test(value)) {
          errorMessage = "The supported phone format is +49(89)915-32-78.";
          hasError = true;
        }
      } else if (key === "email") {
        if (!regExp.email.test(value)) {
          errorMessage = "Permissible format: example@mail.com.";
          hasError = true;
        }
      }
      setErrorsFiled((prev) => ({
        ...prev,
        [key]: {
          show: hasError,
          text: errorMessage,
        },
      }));

      return !hasError;
    },
    [setErrorsFiled]
  );

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const isNameValid = validateField({
        key: "name",
        value: inputValues.name,
      });

      const isPhoneValid = validateField({
        key: "phone",
        value: inputValues.phone,
      });

      const isEmailValid = validateField({
        key: "email",
        value: inputValues.email,
      });

      if (isNameValid && isPhoneValid && isEmailValid) {
        dispatch(postSale(inputValues))
          .then((result) => {
            console.log("Server response:", result);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        setInputValues({
          name: "",
          phone: "",
          email: "",
        });
      } else {
        console.log("error");
      }
    },
    [inputValues, validateField]
  );

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
          value={inputValues.name}
          type="text"
          placeholder="Name"
          onChange={(event) =>
            updateValue({ key: "name", value: event.target.value })
          }
        />
        {errorsField.name.show && (
          <span className={styles.error_text}>{errorsField.name.text}</span>
        )}

        <input
          value={inputValues.phone}
          type="text"
          placeholder="Phone number"
          onChange={(event) =>
            updateValue({ key: "phone", value: event.target.value })
          }
        />
        {errorsField.phone.show && (
          <span className={styles.error_text}>{errorsField.phone.text}</span>
        )}
        <input
          value={inputValues.email}
          type="email"
          pattern=".+@example\.com"
          placeholder="Email"
          onChange={(event) =>
            updateValue({ key: "email", value: event.target.value })
          }
        />
        {errorsField.email.show && (
          <span className={styles.error_text}>{errorsField.email.text}</span>
        )}
        <button
          type="submit"
          className={styles.form_button}
          onClick={(e) => handleFormSubmit(e)}
        >
          Get a discount
        </button>
      </form>
    </div>
  );
}
export default FormContent;
