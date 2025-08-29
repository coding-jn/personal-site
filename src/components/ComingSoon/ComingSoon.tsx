import { useTypewriter } from '../../hooks/useTypewriter'
import styles from './ComingSoon.module.scss'

export const ComingSoon = () => {
  const message = useTypewriter({ text: 'Coming soon...' })

  return (
    <>
      <div className={styles.heroOverlay}></div>
      <div className={styles.hero}>
        <h2 className={styles.message}>{message}</h2>
      </div>
    </>
  )
}
