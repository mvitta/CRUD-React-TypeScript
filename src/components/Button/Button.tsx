import styles from './Button.module.css'
import { ButtonProps } from '../../types'
import { useId } from 'react'

export function Button({ type, tag, color }: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      id={`${useId}button`}
      className={styles.button}
      style={{ backgroundColor: color }}
    >
      {tag}
    </button>
  )
}
