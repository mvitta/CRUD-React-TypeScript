import { useLoaderData } from 'react-router-dom'
import { Response } from '../../types'
import styles from './Update.module.css'
import { lazy, Suspense } from 'react'
import LoadingUsers from '../Loaders/LoadingUsers'
import { Title } from '../Title/Title'

function Update(): JSX.Element {
  const results = useLoaderData() as Response
  const UpdateCard = lazy(() => import('../Card/UpdateCard'))
  const { data } = results
  return (
    <>
      <Title title='Actualizar Datos' />
      <div className={`${styles.containerUpdate}`}>
        <Suspense fallback={<LoadingUsers />}>
          {data.map(({ nombre, apellido, email, date }) => {
            return (
              <UpdateCard
                apellido={apellido}
                nombre={nombre}
                email={email}
                date={date}
                key={crypto.randomUUID()}
              />
            )
          })}
        </Suspense>
      </div>
    </>
  )
}

export default Update
