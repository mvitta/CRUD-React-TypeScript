import styles from './Title.module.css'

export function Title({ title }: { title: string }): JSX.Element {
  return <h1 className={styles.styleTitle}>{title}</h1>
}
