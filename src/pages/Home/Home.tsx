import styles from './Home.module.scss'
import { HeroSection } from './HeroSection'
import { ProjectSection } from './ProjectSection'

export const Home = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <ProjectSection />
    </div>
  )
}
