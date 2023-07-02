import styles from './Buttom.module.css'
import { ButtonProps } from '../../types'
import { useId } from 'react'

export function Button({ type, tag }: ButtonProps): JSX.Element {
  return (
    <button type={type} id={`${useId}button`} className={styles.button}>
      {tag}
    </button>
  )
}
