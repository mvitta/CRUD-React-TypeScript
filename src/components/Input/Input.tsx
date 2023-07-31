import { useEffect, useState } from 'react'
import styles from './Input.module.css'
import { FormProps } from '../../types'

export function Input({
  id,
  tag,
  type,
  regex,
  placeholder,
  theValue = '',
}: FormProps): JSX.Element {
  const [value, setValue] = useState(theValue)

  return (
    <div className={styles.container}>
      <label htmlFor={id}>
        {tag}
        <input
          value={value}
          type={type}
          name={id}
          id={id}
          pattern={regex}
          onChange={(e) => {
            setValue(e.target.value.toLowerCase())
          }}
          placeholder={placeholder}
          {...(type === 'email' && { autoComplete: 'email' })}
        />
      </label>
    </div>
  )
}
