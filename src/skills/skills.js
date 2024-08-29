import styles from './skills.module.css'

export default function Skills({ data }) {
  return (
    <div className={styles.Skills}>
      <h2>Skills</h2>
      {data?.skills.map(entry => (
        <div className={styles.Row} key={entry.type}>
          <div className={styles.Type}>{entry.type}</div>
          <div>
            {entry.list.map((skillList, idx) => (
              <span key={idx}>
                {skillList}
                {idx < entry.list.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
