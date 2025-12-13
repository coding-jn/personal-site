import { MdCopyright } from "react-icons/md";
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer id="Footer" className={styles.footer} role="contentinfo">
      <div className={styles.footerWrapper}>
        <nav className={styles.footerContent} aria-label="Footer navigation">
          <div className={styles.footerBlock}>
            <div className={styles.titleSmall}>site</div>
            <a href="/about" className={styles.footerLink}>about</a>
            <a href="/#work" className={styles.footerLink}>work</a>
          </div>
          <div className={styles.footerBlock}>
            <div className={styles.titleSmall}>social</div>
            <a href="mailto:jenna.jtn@gmail.com" className={styles.footerLink} aria-label="Send email to Jenna">email</a>
            <a
              href="https://www.linkedin.com/in/jtn-jenna-nguyen/"
              className={styles.footerLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Jenna's LinkedIn profile"
            >
              linkedIn
            </a>
            <a
              href="https://github.com/coding-jn"
              className={styles.footerLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Jenna's Github profile"
            >
              github
            </a>
          </div>
        </nav>
      </div>
      <div className={styles.copyright}>
        <MdCopyright />
        <span className={styles.copyrightText}>2025 Jenna Nguyen | Built with care (and plenty of matcha)</span>
      </div>
    </footer>
  )
}
