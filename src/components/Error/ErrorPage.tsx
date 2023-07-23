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
    <>
      <h1 className={styles.titleError}>
        {statusText} {status}
      </h1>
      <hr />
      <div className={styles.errorPage}>
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{message}</i>
        </p>
      </div>
    </>
  )
}
