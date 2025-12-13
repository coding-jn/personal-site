import { useState, useRef } from 'react'
import { MdMenu, MdClose } from "react-icons/md";
import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'
import styles from './NavigationBar.module.scss'

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleMenuClick = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <div className={styles.navbarContainer}>
        <div className={styles.containerRegular}>
          <div className={styles.navbarWrapper} ref={menuRef}>
            <a href="/" className={styles.navbarBrand} aria-label="Jenna Nguyen - Home">
              <Logo />
            </a>

            <ul className={styles.navMenuDesktop}>
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

            <button
              className={styles.mobileMenuToggle}
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isMenuOpen}
              onClick={handleMenuClick}
            >
              {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>

            {isMenuOpen && (
              <div className={styles.mobileMenuDropdown}>
                <ul className={styles.mobileMenuList}>
                  <li>
                    <a href="/#work" className={styles.navLink} onClick={handleMenuClick}>
                      work
                    </a>
                  </li>
                  <li>
                    <a href="/about" className={styles.navLink} onClick={handleMenuClick}>
                      about
                    </a>
                  </li>
                  <li>
                    <Button
                      as="a"
                      variant="primary"
                      size="small"
                      href="mailto:jenna.jtn@gmail.com"
                      aria-label="Send email to Jenna"
                      fullWidth
                    >
                      matcha chat
                    </Button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
