import { useSelector, useDispatch } from "react-redux";

import { VscChromeClose } from "react-icons/vsc";

import { setShow } from "../../store/slices/modaleSlice";

import styles from "./index.module.css"

function ModaleWindow () {

	const dispatch = useDispatch();
	const { show } = useSelector( ( state ) => state.modale );

	return (
		<div className={[ `${styles.window_wrapper} ${show && styles.window_wrapper_active}` ]}>
			<div className={styles.box}>
				<div className={styles.title}>
					<div className={styles.name}>Congratulations!</div>
					<VscChromeClose size="40px" onClick={() => dispatch( setShow() )} />
				</div >
				<div className={styles.description}>
					<p className={styles.text}>Your order has been successfully placed on the website.</p>
					<p className={styles.text}>A manager will contact you shortly to confirm your order.</p>
				</div>
			</div>
		</div>
	)
}

export default ModaleWindow;