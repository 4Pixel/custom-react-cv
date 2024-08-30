import styles from './education.module.css'
import { format } from 'date-fns'
import { i18n } from 'src/locale'

export default function Education({ data }) {
  const list = data?.education?.sort((eduA, eduB) => eduB.from - eduA.from).reverse()
  return (
    <div className={styles.Education}>
      <h2>{i18n('education')}</h2>
      {list.map(entry => (
        <div className={styles.Row} key={entry.title}>
          <div className={styles.Daterange}>
            {format(new Date(entry.from), 'YYYY')} -{' '}
            {entry.to ? format(new Date(entry.to), 'YYYY') : ''}
          </div>
          <div>
            <p>{entry.title}</p>
            {(entry.notes || []).map((note, idx) => (
              <p className={styles.Note} key={idx}>
                {note}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
