import styles from './Logo.module.scss'

export const Logo = () => {
    return (
        <span className={styles.terminal} aria-hidden="true">
            <span className={styles.user}>jtnguyen</span>
            <span className={styles.at}>@</span>
            <span className={styles.host}>dev</span>
            <span className={styles.colon}>:</span>
            <span className={styles.path}>~</span>
            <span className={styles.prompt}>%</span>
            <span className={styles.cursor}>_</span>
        </span>
    )
}
