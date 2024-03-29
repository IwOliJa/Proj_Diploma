import styles from "./index.module.css";

function LocationBlock () {
  return (
    <div className={styles.map}>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1214.204778308915!2d13.373807937324676!3d52.50792683712284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1702319359708!5m2!1sru!2sde"
        style={{
          width: "100%",
          height: "100%",
          border: 0,
          allowfullscreen: "",
          loading: "lazy",
          referrerpolicy: "no-referrer-when-downgrade",
        }}
      ></iframe>
    </div>
  );
}

export default LocationBlock;
