import { useState } from 'react'
import styles from './Input.module.css'
import { FormProps } from '../../types'

export function Input({
  id,
  tag,
  type,
  regex,
  placeholder,
}: FormProps): JSX.Element {
  const [value, setValue] = useState('')

  return (
    <div className={styles.container}>
      <label htmlFor={id}>
        {tag}
        <input
          value={value}
          type={type}
          name={id}
          id={id}
          onChange={(e) => {
            setValue(e.target.value.toLowerCase())
          }}
          pattern={regex}
          placeholder={placeholder}
          {...(type === 'email' && { autoComplete: 'email' })}
        />
      </label>
    </div>
  )
}
