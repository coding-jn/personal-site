import { MdOutlineLocationOn } from 'react-icons/md'
import styles from './HeroSection.module.scss'

export const HeroSection = () => {
  return (
    <>
      <section className={styles.sectionHeroDesktop}>
        <div className={styles.mainContainer}>
          <div className={styles.heroGridDesktop}>
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
        </div>
      </section>

      <section className={styles.sectionHeroMobile}>
        <div className={styles.mainContainer}>
          <div className={styles.heroGridMobile}>
            <div className={styles.contentHero}>
              <h2 className={`${styles.h1} ${styles.mobile}`}>
                Software<br />Engineer
              </h2>
              <div className={`${styles.heroParagraph} ${styles.mobile}`}>
                A perfectionist about understanding and fulfilling requirements, I bring three years of fullstack engineering across enterprise and consumer products.
              </div>
              <div className={styles.checkItem}>
                <MdOutlineLocationOn size={24} />
                <span className={styles.paragraphSmall}>Boston, MA</span>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
