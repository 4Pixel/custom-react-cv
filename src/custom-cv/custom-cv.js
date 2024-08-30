import { useEffect, useState } from 'react'
import { dehashConfigFromUrl, loadData } from 'src/cv-service'
import CV from 'src/cv/cv'

export default function CustomCV({ config }) {
  const deHashedConfig = dehashConfigFromUrl(config)
  const [data, setData] = useState(null)

  useEffect(() => {
    loadData(deHashedConfig.dataUrl).then(data => setData(data))
  }, [])

  return <div>{data && <CV data={data} sections={deHashedConfig.sections} />}</div>
}
