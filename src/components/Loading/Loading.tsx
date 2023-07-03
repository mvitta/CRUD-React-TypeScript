import styles from './Loading.module.css'

function Loading() {
  return (
    <div className={styles.dotSpinner}>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
    </div>
  )
}

export default Loading
