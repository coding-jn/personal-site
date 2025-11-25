import styles from './Home.module.scss'
import { HeroSection } from './HeroSection'
import { PortfolioSection } from './PortfolioSection'

export const Home = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <PortfolioSection />
    </div>
  )
}
