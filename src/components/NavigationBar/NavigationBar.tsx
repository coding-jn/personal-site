import styles from './NavigationBar.module.scss'

export const NavigationBar = () => {
  return (
    <nav className={styles.navigationBar}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <a className={styles.link} href="/">
            Home
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="/about">
            About
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="mailto:jenna.jtn@gmail.com">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
