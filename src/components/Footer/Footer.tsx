import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer id="Footer" className={styles.footerNew} role="contentinfo">
      <div className={styles.sectionContainer}>
        <div className={styles.footerWrapper}>
          <a href="/" className={styles.footerBrand} aria-label="Jenna Nguyen - Home">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 165 32'%3E%3Ctext x='0' y='24' font-family='Arial' font-size='24' font-weight='bold' fill='white'%3EJENNA%3C/text%3E%3C/svg%3E"
              alt="Jenna Nguyen logo"
              width="140"
            />
          </a>
          <nav className={styles.footerContent} aria-label="Footer navigation">
            <div className={styles.footerBlock}>
              <div className={styles.titleSmall}>site</div>
              <a href="/about" className={styles.footerLink}>About</a>
              <a href="/#work" className={styles.footerLink}>Work</a>
            </div>
            <div className={styles.footerBlock}>
              <div className={styles.titleSmall}>social</div>
              <a href="mailto:jenna.jtn@gmail.com" className={styles.footerLink} aria-label="Send email to Jenna">Email</a>
              <a
                href="https://www.linkedin.com/in/jtn-jenna-nguyen/"
                className={styles.footerLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Jenna's LinkedIn profile"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/coding-jn"
                className={styles.footerLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Jenna's Github profile"
              >
                Github
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className={styles.footerDivider} role="separator"></div>
      <div className={styles.footerCopyright}>
        © 2024 Jenna Nguyen | Built with care (and plenty of matcha)
      </div>
    </footer>
  )
}
