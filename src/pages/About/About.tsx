import { TypingEffect } from '../../components/TypingEffect'
import styles from './About.module.scss'

export const About = () => {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.aboutGrid}>
          <div className={styles.contentSection}>
            <h1 className={styles.heading}>
              <TypingEffect text="hi, i'm jenna!" speed={100} />
            </h1>

            <div className={styles.textContent}>
              <p className={styles.paragraph}>
                I'm a fullstack engineer who genuinely enjoys solving problems with code! Over the past three years in agency settings, I've built everything from enterprise tools to consumer-facing products, learning to move fast and ship work that matters.
              </p>

              <p className={styles.paragraph}>
                Agency work taught me to adapt quickly, communicate across teams, and deliver under pressure. I care about writing clean code and building things that are both functional and thoughtfully designed.
              </p>

              <p className={styles.paragraph}>
                Outside of code, I'm baking (macarons are hard), hunting for good matcha, and problem solving other things like Sudoku or Wordle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
