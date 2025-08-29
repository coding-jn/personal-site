// Paper component based on the work of Aitchiss
// Original design can be found at: https://codepen.io/aitchiss/pen/QWKmPqx

import styles from './Paper.module.scss'
import { PaperProps, TYPES } from './types'
import classNames from 'classnames'

export const Paper = ({
  description,
  image,
  href,
  color = 'pink',
  type = TYPES.DEFAULT,
}: PaperProps) => {
  return (
    <div className={classNames(styles.paper, styles[color])}>
      {type === 'tape' && <div className={styles.tape}></div>}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.text}
      >
        {description}
      </a>
      <div className={styles.imageContainer}>
        <div className={styles.gradient}></div>
        <img className={styles.image} src={image} alt={description} />
      </div>
      {type === 'tape' && <div className={styles.tape}></div>}
    </div>
  )
}
