import Ico from 'src/ico/ico'
import styles from './project-header.module.css'

export default function ProjectHeader({ cId, company, web, title }) {
  getCompany = () => (
    <a href={`#${cId}`} title='zur Jobbeschreibung' className={styles.CompanyLink}>
      <span className={styles.CompanyTag}>@{company}</span>
      <div className={styles.Link}>
        <Ico icon='arrow-up' className={styles.IconUp} />
      </div>
    </a>
  )

  getLink = () =>
    web && (
      <a href={web.link} target='_blank' title={web.title} className={styles.Link}>
        <Ico icon='external-link' className={styles.IconLink} />
      </a>
    )

  return (
    <div className={styles.CompanyTitle}>
      <h3 className={styles.CompanyName}>{title}</h3>
      {getLink()}
      {getCompany()}
    </div>
  )
}
