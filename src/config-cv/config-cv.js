import { useEffect, useState } from 'react'
import Toolbar from 'src/toolbar/toolbar'
import store from 'store2'
import { getSections, loadData } from 'src/cv-service'
import CV from 'src/cv/cv'

const defaultDataUrl =
  'https://raw.githubusercontent.com/4Pixel/custom-react-cv/master/public/data/sample/data.json'

export default function ConfigCV() {
  const initialDataUrl = store.get('dataUrl') || defaultDataUrl
  const [data, setData] = useState(null)
  const [sections, setSections] = useState(getSections())

  const load = dataUrl => {
    loadData(dataUrl)
      .then(data => setData(data))
      .catch(() => setData(null))
  }

  const onChangeActive = sections => setSections(sections)

  const onDataUrlChange = dataUrl => {
    store.set('dataUrl', dataUrl)
    load(dataUrl)
  }

  useEffect(() => {
    load(initialDataUrl)
  }, [])

  return (
    <div className='ConfigCV'>
      <Toolbar
        initialDataUrl={initialDataUrl}
        onChangeActive={onChangeActive}
        onDataUrlChange={onDataUrlChange}
      />
      {data && <CV data={data} sections={sections} />}
    </div>
  )
}
