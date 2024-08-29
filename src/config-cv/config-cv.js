import { useEffect, useState } from 'react'
import Toolbar from 'src/toolbar/toolbar'
import { hashActive } from 'src/config-cv/config-service'
import store from 'store2'
import { loadData } from 'src/custom-cv/custom-cv-service'

const active = {
  profileFoto: true,
  education: true,
  personalData: true,
  profile: true,
  skills: true,
  jobs: true,
  projects: true,
}

const defaultDataUrl =
  'https://raw.githubusercontent.com/4Pixel/custom-react-cv/master/sample/data.json'

export default function ConfigCV() {
  const dataUrl = store.get('dataUrl') || defaultDataUrl
  const [state, setState] = useState({
    dataUrl: dataUrl,
    active: active,
    hash: hashActive(active, dataUrl),
    data: null,
  })

  const load = () => {
    loadData(state.dataUrl)
      .then(data => setState({ ...state, data }))
      .catch(() => setState({ ...state, data: null }))
  }

  const onChangeActive = changeProp => {
    const changedActive = {
      ...state.active,
      [changeProp.value]: !changeProp.active,
    }
    setState({
      ...state,
      active: changedActive,
      hash: hashActive(changedActive, state.dataUrl),
    })
  }

  const onDataUrlChange = dataUrl => {
    store.set('dataUrl', dataUrl)
    setState({
      ...state,
      dataUrl: dataUrl,
      hash: hashActive(this.state.active, dataUrl),
    })
  }

  useEffect(() => {
    load()
  }, [state.dataUrl])

  return (
    <div className='ConfigCV'>
      <Toolbar
        hash={state.hash}
        dataUrl={state.dataUrl}
        onChangeActive={onChangeActive}
        onDataUrlChange={onDataUrlChange}
      />
      {state.data && <CV data={state.data} active={state.active} />}
    </div>
  )
}
