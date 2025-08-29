import { MdOutlineLocationOn } from 'react-icons/md'

import { useTypewriter } from '../../../hooks/useTypewriter'
import styles from './HeroSection.module.scss'

export const HeroSection = () => {
  const name = useTypewriter({ text: "Hi, I'm Jenna Nguyen" })

  return (
    <>
      <div className={styles.heroOverlay}></div>
      <div className={styles.hero}>
        <div className={styles.header}>
          <h2 className={styles.title}>{name}</h2>
          <span className={styles.description}>Software Engineer</span>
          <div className={styles.location}>
            <MdOutlineLocationOn size={24} />
            <span className={styles.city}>Boston</span>
          </div>
        </div>
      </div>
    </>
  )
}
