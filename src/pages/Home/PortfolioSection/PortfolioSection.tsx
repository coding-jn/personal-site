import { Paper } from '../../../components/Paper'
import { TYPES } from '../../../components/Paper/types'
import styles from './PortfolioSection.module.scss'
import marriottImage from '../../../assets/marriott-international.webp'
import prekindleImage from '../../../assets/prekindle.png'
import uvaHealthImage from '../../../assets/uva-health.png'

const projects = [
  {
    id: 1,
    color: 'marriott' as const,
    image: marriottImage,
    label: 'INTERNAL PLATFORMS',
    title: 'Marriott International',
    subtitle: 'FULL-STACK DEVELOPMENT',
    whiteText: true,
    href: 'https://mi.bookmarriott.com/',
  },
  {
    id: 2,
    color: 'prekindle' as const,
    image: prekindleImage,
    label: 'EVENT TICKETING',
    title: 'PreKindle',
    subtitle: 'FRONT-END DEVELOPMENT',
    whiteText: false,
    href: 'https://web.prekindle.com/',
  },
  {
    id: 3,
    color: 'uvah' as const,
    image: uvaHealthImage,
    label: 'HEALTHCARE',
    title: 'UVA Health',
    subtitle: 'FRONT-END DEVELOPMENT',
    whiteText: false,
    href: 'https://www.uvahealth.com/',
  }
]

export const PortfolioSection = () => {
  return (
    <section id="work" className={styles.project}>
      <div className={styles.h1Hp}>PROJECT HIGHLIGHTS<br /></div>
      <div className={styles.projectHighlightContainer}>
        <div className={styles.projectHighlightGrid}>
          {projects.map((project) => (
            <Paper
              key={project.id}
              type={TYPES.PROJECT}
              color={project.color}
              image={project.image}
              label={project.label}
              title={project.title}
              subtitle={project.subtitle}
              whiteText={project.whiteText}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
