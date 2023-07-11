import styles from './Header.module.css'
import task from '../../assets/lista.png'
import { Link } from 'react-router-dom'
import create from '../../assets/create.svg'
import show from '../../assets/show.svg'
import deleted from '../../assets/delete.svg'

export function Header(): JSX.Element {
  return (
    <nav>
      <ul className={styles.container}>
        <section className={styles.containerLeft}>
          <li>
            <a href='#'>Iniciar session</a>
          </li>
          <li>
            <a href='#'>Registrarse</a>
          </li>
        </section>
        <section className={styles.containerRight}>
          <li>
            <a href='#'>
              <img src={task} alt='tasks' />
            </a>
          </li>
          <li>
            <a href=''>
              <svg
                width='25px'
                height='25px'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='2'
                  y='2'
                  width='28'
                  height='28'
                  rx='6'
                  fill='url(#paint0_radial_87_7153)'
                />
                <rect
                  x='2'
                  y='2'
                  width='28'
                  height='28'
                  rx='6'
                  fill='url(#paint1_radial_87_7153)'
                />
                <rect
                  x='2'
                  y='2'
                  width='28'
                  height='28'
                  rx='6'
                  fill='url(#paint2_radial_87_7153)'
                />
                <path
                  d='M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z'
                  fill='white'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z'
                  fill='white'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z'
                  fill='white'
                />
                <defs>
                  <radialGradient
                    id='paint0_radial_87_7153'
                    cx='0'
                    cy='0'
                    r='1'
                    gradientUnits='userSpaceOnUse'
                    gradientTransform='translate(12 23) rotate(-55.3758) scale(25.5196)'
                  >
                    <stop stopColor='#B13589' />
                    <stop offset='0.79309' stopColor='#C62F94' />
                    <stop offset='1' stopColor='#8A3AC8' />
                  </radialGradient>
                  <radialGradient
                    id='paint1_radial_87_7153'
                    cx='0'
                    cy='0'
                    r='1'
                    gradientUnits='userSpaceOnUse'
                    gradientTransform='translate(11 31) rotate(-65.1363) scale(22.5942)'
                  >
                    <stop stopColor='#E0E8B7' />
                    <stop offset='0.444662' stopColor='#FB8A2E' />
                    <stop offset='0.71474' stopColor='#E2425C' />
                    <stop offset='1' stopColor='#E2425C' stopOpacity='0' />
                  </radialGradient>
                  <radialGradient
                    id='paint2_radial_87_7153'
                    cx='0'
                    cy='0'
                    r='1'
                    gradientUnits='userSpaceOnUse'
                    gradientTransform='translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)'
                  >
                    <stop offset='0.156701' stopColor='#406ADC' />
                    <stop offset='0.467799' stopColor='#6A45BE' />
                    <stop offset='1' stopColor='#6A45BE' stopOpacity='0' />
                  </radialGradient>
                </defs>
              </svg>
            </a>
          </li>
          <li>
            <a href=''>
              <svg
                width='25px'
                height='25px'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='2'
                  y='2'
                  width='28'
                  height='28'
                  rx='14'
                  fill='#1275B1'
                />
                <path
                  d='M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z'
                  fill='white'
                />
                <path
                  d='M9.24742 12.6281H12.3402V22H9.24742V12.6281Z'
                  fill='white'
                />
                <path
                  d='M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z'
                  fill='white'
                />
              </svg>
            </a>
          </li>
          <li>
            <a href=''>
              <svg
                width='25px'
                height='25px'
                viewBox='0 -0.5 48 48'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Github-color</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id='Icons'
                  stroke='none'
                  strokeWidth='1'
                  fill='none'
                  fillRule='evenodd'
                >
                  <g
                    id='Color-'
                    transform='translate(-700.000000, -560.000000)'
                    fill='#3E75C3'
                  >
                    <path
                      d='M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560'
                      id='Github'
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
          </li>
        </section>
      </ul>
      <section className={styles.menuBar}>
        <ul>
          <li>
            <Link to={`/`}>
              <img src={create} alt='create' width='25px' />
              <span>Crear</span>
            </Link>
          </li>
          <li>
            <Link to={`Show/`}>
              <img src={show} alt='show' width='25px' />
              <span>Mostrar</span>
            </Link>
          </li>
          <li>
            <Link to={`Update/`}>
              <img src={deleted} alt='delete' width='25px' />
              <span>Actualizar y Borrar</span>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  )
}
