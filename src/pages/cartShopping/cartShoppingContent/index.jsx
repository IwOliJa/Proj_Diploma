import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { regExp } from "../../../utils/regExp.js";

import { VscChromeClose } from "react-icons/vsc";

import { setShow } from "../../../store/slices/modaleSlice.js";
import { incrementCount, decrementCount, removeFromCart, postOrder, resetCart } from "../../../store/slices/cartSlice.js";

import styles from "./index.module.css";

function CartShoppingContent () {

  const dispatch = useDispatch();
  const { cart } = useSelector( ( state ) => state.schoppingCart );

  const [ inputValues, setInputValues ] = useState( {
    name: "",
    phone: "",
    email: "",
  } );

  const [ errorsField, setErrorsFiled ] = useState( {
    name: { show: false, text: "", },
    phone: { show: false, text: "", },
    email: { show: false, text: "", },
  } );

  const updateValue = useCallback( ( { key, value } ) => {
    setInputValues( { ...inputValues, [ key ]: value } );
  }, [ inputValues ] );

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
      [ key ]: { show: hasError, text: errorMessage, },
    } ) );

    return !hasError;

  }, [ setErrorsFiled ] );

  const handleFormSubmit = useCallback( ( e ) => {
    e.preventDefault();

    const isNameValid = validateField( { key: "name", value: inputValues.name, } );
    const isPhoneValid = validateField( { key: "phone", value: inputValues.phone } );
    const isEmailValid = validateField( { key: "email", value: inputValues.email } );

    if ( isNameValid && isPhoneValid && isEmailValid ) {
      const data = { cart, inputValues };

      dispatch( postOrder( data ) )
        .then( ( result ) => {
          console.log( "Server response:", result );
        } )
        .catch( ( error ) => {
          console.error( "Error:", error );
        } );

      dispatch( setShow() );
      dispatch( resetCart() );

      setInputValues( { name: "", phone: "", email: "", } );

    } else {
      console.log( "error" );
    }
  }, [ inputValues, validateField, cart ] ); // eslint-disable-line

  function hasDiscountPrice ( discont_price ) {
    return discont_price !== null;
  }

  const totalAmount = cart.reduce( ( sum, item ) => {
    const itemPrice = hasDiscountPrice( item.discont_price )
      ? item.discont_price
      : item.price;
    return sum + itemPrice * item.count;
  }, 0 );

  const totalCount = cart.reduce( ( sum, item ) => sum + item.count, 0 );

  return (
    <div className={styles.content_wrapper}>
      <div className={styles.items_wrapper}>
        {cart.map( ( item, idx ) => {
          const price = hasDiscountPrice( item.discont_price ) ? item.discont_price : item.price;
          const discont_price = hasDiscountPrice( item.discont_price ) && item.price;

          return (
            <div key={idx} className={styles.item_content} >
              <div className={styles.image_container}>
                <img
                  className={styles.cart_image}
                  src={`http://localhost:3333/${item.image}`}
                  alt={item.title}
                />
              </div>
              <div className={styles.shopping_counter}>
                <div className={styles.title}>
                  <p className={styles.product_name}>
                    {item.title}
                  </p>
                  <div className={styles.btn_close} onClick={() => dispatch( removeFromCart( { id: item.id } ) )}>
                    <VscChromeClose size="25px" />
                  </div>
                </div>
                <div className={styles.item_counter}>
                  <button
                    className={styles.count_button}
                    onClick={() => dispatch( decrementCount( { id: item.id } ) )}
                  >-</button>
                  <div className={styles.count_data}>{item.count}</div>
                  <button
                    onClick={() => dispatch( incrementCount( { id: item.id } ) )}
                    className={styles.count_button}
                  >+</button>
                </div>
                <div className={styles.item_price}>
                  <span className={styles.product_price}>${( price * item.count ).toFixed( 2 )}</span>
                  {hasDiscountPrice( item.discont_price ) && (
                    <span className={styles.discount_item}>
                      ${( discont_price * item.count ).toFixed( 2 )}
                      <span className={styles.delete_symbol}></span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        } )}
      </div>
      <div className={styles.form_wrapper}>
        <h3 className={styles.form_title}>Order details</h3>
        <p className={styles.text}>
          <span>{totalCount}</span>items
        </p>
        <div className={styles.price_wrapper}>
          <p className={styles.text}>Total</p>
          <span className={styles.total_price}>${totalAmount.toFixed( 2 )}</span>
        </div>

        <form className={styles.form_content}>
          <input
            type="text"
            placeholder="Name"
            value={inputValues.name}
            onChange={( event ) => updateValue( { key: "name", value: event.target.value } )}
          />
          {errorsField.name.show && <span className={styles.error_text}>{errorsField.name.text}</span>}

          <input
            type="text"
            placeholder="Phone number"
            value={inputValues.phone}
            onChange={( event ) => updateValue( { key: "phone", value: event.target.value } )}
          />
          {errorsField.phone.show && <span className={styles.error_text}>{errorsField.phone.text}</span>}

          <input
            type="text"
            placeholder="Email"
            value={inputValues.email}
            onChange={( event ) => updateValue( { key: "email", value: event.target.value } )}
          />
          {errorsField.email.show && <span className={styles.error_text}>{errorsField.email.text}</span>}

          <button
            className={styles.form_button}
            type="submit"
            onClick={( e ) => handleFormSubmit( e )}
          >Order</button>
        </form>
      </div>
    </div>
  );
}

export default CartShoppingContent;
