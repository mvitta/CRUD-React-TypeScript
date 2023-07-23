import { Link, useNavigate } from 'react-router-dom'
import { LinkProps } from '../../types'
import styles from './LinkButton.module.css'
import Edit from '../SVGS/Edit'
import Delete from '../SVGS/Delete'
import { FetchServices } from '../../services/fetchServices'

export function LinkButton({ id, color, tag }: LinkProps): JSX.Element {
  function handlerClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    const target = e.currentTarget.textContent?.toLowerCase()
    console.log(target)

    if (target?.includes('borrar')) {
      console.log(id)
      new FetchServices().fetchOneDelete(String(id), 'DELETE')
      alert('Usuario borrado')
    }
  }

  return (
    <>
      <Link
        to={tag.toLowerCase() === 'editar' ? `${id}(d+)` : '/Update'}
        onClick={handlerClick}
        className={styles.container}
        style={{ backgroundColor: color }}
      >
        {tag.toLowerCase() === 'editar' ? <Edit /> : <Delete />}
        {tag}
      </Link>
    </>
  )
}
