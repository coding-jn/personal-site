import { MdOutlineLocationOn } from 'react-icons/md'
import styles from './HeroSection.module.scss'

export const HeroSection = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroGrid}>
          <div className={styles.textSection}>
            <h2 className={styles.h1}>
              Software<br />&nbsp;&nbsp;Engineer
            </h2>
            <div className={styles.heroParagraph}>
              A perfectionist about understanding and fulfilling requirements, I bring three years of fullstack engineering across enterprise and consumer products.
            </div>
            <div className={styles.checkItem}>
              <MdOutlineLocationOn size={24} />
              <span className={styles.paragraphSmall}>Boston, MA</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
