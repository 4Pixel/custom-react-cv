import styles from './jobs.module.css'
import { format } from 'date-fns'
import { i18n } from 'src/locale'

export default function Jobs({ data }) {
  const list = data?.jobs.sort((jobA, jobB) => jobB.from - jobA.from).reverse()

  return (
    <div className={styles.Jobs}>
      <h2>{i18n('jobs')}</h2>
      {list.map(entry => (
        <div className={styles.Row} key={entry.title + entry.to}>
          <div className={styles.Daterange}>
            {format(new Date(entry.from), 'YYYY/MM')} -{' '}
            {entry.to ? format(new Date(entry.to), 'YYYY/MM') : ''}
          </div>
          <div>
            <div id={entry.cId} className={styles.Title}>
              <h3>{entry.title}</h3>
              <span className={styles.Company}>@{entry.company}</span>
            </div>
            {(entry.description || []).map((paragraph, idx) => (
              <p key={idx} className={styles.Description}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
