import { i18n } from 'src/locale'
import styles from './personal-data.module.css'

export default function PersonalData({ data }) {
  const list = ['name', 'phone', 'email', 'website', 'nationality', /*city_of_birth*/ 'strengths']

  return (
    <div className={styles.PersonalData}>
      <h2>{i18n('personalData')}</h2>
      {list
        .filter(itemId => data.personalData[itemId])
        .map(itemId => (
          <div className={styles.Row} key={itemId}>
            <div className={styles.Title}>{data.personalData[itemId].title}</div>
            <div>{data.personalData[itemId].value}</div>
          </div>
        ))}
    </div>
  )
}
