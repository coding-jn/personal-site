import { Outlet } from 'react-router-dom' // Used to render child components/pages
import { NavigationBar } from '../../components/NavigationBar'
import { Footer } from '../../components/Footer'
import styles from './Layout.module.scss'

export const Layout = () => {
  return (
    <div>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <NavigationBar />
      <main id="main-content" className={styles.mainContent}>
        <Outlet /> {/* This renders the content of the active route */}
      </main>
      <Footer />
    </div>
  )
}
