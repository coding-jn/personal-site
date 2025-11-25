import styles from './NavigationBar.module.scss'
import { Button } from '../Button/Button'

export const NavigationBar = () => {
  return (
    <nav className={styles.navbarNew} role="navigation" aria-label="Main navigation">
      <div className={styles.navbarContainer}>
        <div className={styles.containerRegular}>
          <div className={styles.navbarWrapper}>
            <a href="/" className={styles.navbarBrand} aria-label="Jenna Nguyen - Home">
              <span className={styles.terminal} aria-hidden="true">
                <span className={styles.user}>jtnguyen</span>
                <span className={styles.at}>@</span>
                <span className={styles.host}>dev</span>
                <span className={styles.colon}>:</span>
                <span className={styles.path}>~</span>
                <span className={styles.prompt}>%</span>
                <span className={styles.cursor}>_</span>
              </span>
            </a>
            <ul className={styles.navMenu}>
              <li>
                <a href="/#work" className={styles.navLink}>work</a>
              </li>
              <li>
                <a href="/about" className={styles.navLink}>about</a>
              </li>
              <li>
                <Button as="a" variant="primary" size="small" href="mailto:jenna.jtn@gmail.com" aria-label="Send email to Jenna">
                  matcha chat
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
