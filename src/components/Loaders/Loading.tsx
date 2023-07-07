import styles from './Loading.module.css'

function Loading() {
  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default Loading
