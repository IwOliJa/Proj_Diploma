import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { regExp } from "../../../utils/regExp";

import gardenToolsImage from "../../../assets/images/form_img.svg";
import { postSale } from "../../../store/slices/userSlice";

import styles from "./index.module.css";

function FormContent () {
  const [ isClicked, setIsClicked ] = useState( false );

  const dispatch = useDispatch();

  const [ inputValues, setInputValues ] = useState( {
    name: "",
    phone: "",
    email: "",
  } );

  const [ errorsField, setErrorsFiled ] = useState( {
    name: { show: false, text: "" },
    phone: { show: false, text: "" },
    email: { show: false, text: "" },
  } );

  const updateValue = useCallback( ( { key, value } ) => {
    setInputValues( { ...inputValues, [ key ]: value } );
    if ( isClicked ) {
      setIsClicked( false );
    }
  }, [ inputValues, isClicked ] );

  const validateField = useCallback( ( { key, value } ) => {
    let hasError = false;
    let errorMessage = "";

    if ( value === "" ) {
      errorMessage = "Please fill in this field.";
      hasError = true;
    } else if ( key === "name" ) {
      if ( value.length <= 3 ) {
        errorMessage = "Name must contain at least 3 characters.";
        hasError = true;
      } else if ( !regExp.name.test( value ) ) {
        errorMessage = "Permissible: a-z, A-Z.";
        hasError = true;
      }
    } else if ( key === "phone" ) {
      if ( !regExp.phone.test( value ) ) {
        errorMessage = "The supported phone format is +49(89)915-32-78.";
        hasError = true;
      }
    } else if ( key === "email" ) {
      if ( !regExp.email.test( value ) ) {
        errorMessage = "Permissible format: example@mail.com.";
        hasError = true;
      }
    }
    setErrorsFiled( ( prev ) => ( {
      ...prev,
      [ key ]: { show: hasError, text: errorMessage },
    } ) );

    return !hasError;
  }, [ setErrorsFiled ] );

  const handleFormSubmit = useCallback( ( e ) => {
    e.preventDefault();

    const isNameValid = validateField( { key: "name", value: inputValues.name } );
    const isPhoneValid = validateField( { key: "phone", value: inputValues.phone } );
    const isEmailValid = validateField( { key: "email", value: inputValues.email } );

    if ( isNameValid && isPhoneValid && isEmailValid ) {
      dispatch( postSale( inputValues ) )
        .then( ( result ) => {
          console.log( "Server response:", result );
        } )
        .catch( ( error ) => {
          console.error( "Error:", error );
        } );

      setInputValues( { name: "", phone: "", email: "" } );
      setIsClicked( !isClicked );
    } else {
      console.log( "error" );
    }
  }, [ inputValues, validateField, isClicked ] ); // eslint-disable-line

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
        <div className={styles.container}>
          <input
            value={inputValues.name}
            type="text"
            placeholder="Name"
            onChange={( event ) => updateValue( { key: "name", value: event.target.value } )}
          />
          {errorsField.name.show && <span className={styles.error_text}>{errorsField.name.text}</span>}
        </div>
        <div className={styles.container}>
          <input
            value={inputValues.phone}
            type="text"
            placeholder="Phone number"
            onChange={( event ) => updateValue( { key: "phone", value: event.target.value } )}
          />
          {errorsField.phone.show && <span className={styles.error_text}>{errorsField.phone.text}</span>}
        </div>
        <div className={styles.container}>
          <input
            value={inputValues.email}
            type="email"
            placeholder="Email"
            onChange={( event ) => updateValue( { key: "email", value: event.target.value } )}
          />
          {errorsField.email.show && <span className={styles.error_text}>{errorsField.email.text}</span>}
        </div>
        <button
          type="submit"
          className={[ `${styles.form_button} ${isClicked && `${styles.form_button_active}`}` ]}
          onClick={( e ) => handleFormSubmit( e )}
        >
          {isClicked ? 'Request Submitted' : 'Get a discount'}
        </button>
      </form>
    </div>
  );
}
export default FormContent;
