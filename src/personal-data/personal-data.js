import { i18n } from 'src/locale'
import styles from './personal-data.module.css'
import f from 'lodash/fp'

export default function PersonalData({ data }) {
  const list = f.flow(
    f.get('personalData'),
    f.pick(['name', 'phone', 'email', 'website', 'nationality', 'strengths'])
  )(data)

  return (
    <div className={styles.PersonalData}>
      <h2>{i18n('personalData')}</h2>
      {Object.keys(list).map(key => (
        <div className={styles.Row} key={key}>
          <div className={styles.Title}>{i18n(`personal.${key}`)}</div>
          <div>{list[key]}</div>
        </div>
      ))}
    </div>
  )
}
