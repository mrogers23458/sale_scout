import styles from "./defaultBtn.module.css";

interface DefaultBtnProps {
  /**
   * Callback function that is passed from the parent, that will execute when the button is clicked
   * @function
   */
  onClick: () => void;
  /**
   * Text to be displayed as button text
   * @type {string}
   */
  innerText: string;
  /**
   * Boolean control for loading state button is disabled if true, active if false
   * @type {string}
   */
  loading: boolean;
  /**
   * Text to be displayed while loading is true i.e waiting for api response
   * @type {string}
   */
  loadingText: string;
}

export default function DefaultBtn({
  onClick,
  innerText,
  loading,
  loadingText,
}: DefaultBtnProps) {
  return (
    <button onClick={onClick} className={styles.defaultBtn} disabled={loading}>
      {loading && <p className={styles.loadingText}>{loadingText}</p>}
      {!loading && <p className={styles.innerText}>{innerText}</p>}
    </button>
  );
}
