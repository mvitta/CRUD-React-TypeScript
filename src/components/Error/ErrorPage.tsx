import { useRouteError } from 'react-router-dom'
import styles from './ErrorPage.module.css'
import { ErrorResponse } from '../../types'

export function ErrorPage(): JSX.Element {
  const {
    statusText,
    status,
    error: { message },
  } = useRouteError() as ErrorResponse

  return (
    <div className={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <div>{status}</div>
      <p>
        <i>{statusText}</i>
        <i>{message}</i>
      </p>
    </div>
  )
}
