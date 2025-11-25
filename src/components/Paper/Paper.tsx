// Paper component based on the work of Aitchiss
// Original design can be found at: https://codepen.io/aitchiss/pen/QWKmPqx

import styles from './Paper.module.scss'
import { PaperProps } from './types'
import classNames from 'classnames'

export const Paper = ({
  description,
  image,
  href,
  color = 'marriott',
  title,
  subtitle,
}: PaperProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} project - ${subtitle}`}
      className={classNames(styles.fileContainer, styles[color])}
    >
      <div className={styles.cardImageFloat}>
        <div className={styles.roundedImage}>
          <img
            src={image}
            alt={`Screenshot of ${title} project showing ${description || subtitle}`}
            className={styles.coverImage}
          />
        </div>
      </div>
      <div className={styles.innerCardBottom}>
        <h3 className={classNames(styles.mainHeading)}>{title}</h3>
        <p className={classNames(styles.secondaryHeading)}>
          {subtitle}
        </p>
      </div>
    </a>
  )
}
