import { useEffect, useState } from 'react'
import { dehashActive } from 'src/config-cv/config-service'
import { loadData } from 'src/custom-cv/custom-cv-service'
import CV from 'src/cv/cv'

export default function CustomCV({ config }) {
  const deHashedConfig = dehashActive(config)
  const [state, setState] = useState({
    active: deHashedConfig.active,
    dataUrl: deHashedConfig.dataUrl,
  })
  console.log(deHashedConfig)

  useEffect(() => {
    loadData(state.dataUrl).then(data => setState({ ...state, ...data }))
  }, [])

  return <div>{state.data && <CV data={state.data} active={state.active} />}</div>
}
