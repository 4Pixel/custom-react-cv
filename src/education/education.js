import styles from './education.module.css'
import { format } from 'date-fns'
import { i18n } from 'src/locale'

export default function Education({ data }) {
  // const list = flow(f.get('data.education'), f.sortBy('from'), f.reverse)(this.props)
  const list = data?.education?.sort((eduA, eduB) => eduB.from - eduA.from).revers()
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
            {f.getOr([], 'notes', entry).map((note, idx) => (
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
