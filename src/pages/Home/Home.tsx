import styles from './Home.module.scss'
import { PortfolioSection } from './PortfolioSection'
import { HeroSection } from './HeroSection'

export const Home = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <PortfolioSection />
    </div>
  )
}
