import { Paper } from '../../../components/Paper'

import styles from './PortfolioSection.module.scss'
import MarriottSalesCompanionLanding from '../../../assets/marriott-sales-companion-landing.webp'
import PreKindleLanding from '../../../assets/prekindle-landing.webp'
import UVAHealthLogo from '../../../assets/uva-health-logo.png'

export const PortfolioSection = () => {
  return (
    <div className={styles.portfolio}>
      <h2 className={styles.title}>Portfolio</h2>
      <div className={styles.portfolioList}>
        <Paper
          color="black"
          description="Marriott Sales Companion"
          href="https://mi.bookmarriott.com/"
          image={MarriottSalesCompanionLanding}
        />
        <Paper
          color="pink"
          description="PreKindle"
          href="https://web.prekindle.com/"
          image={PreKindleLanding}
        />
        <Paper
          color="pink"
          description="UVA Health"
          href="https://uvahealth.com/"
          image={UVAHealthLogo}
        />
      </div>
    </div>
  )
}
