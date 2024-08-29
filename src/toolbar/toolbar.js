import toolbar from './toolbar.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { activeSections } from 'src/common'
import Ico from 'src/ico/ico'
import { C } from 'src/classnames'
import { values } from 'lodash/fp'

const Menu = ({ dataUrl, hash, updateActive, updateDataUrl }) => {
  const [host, setHost] = useState('')
  const [state, setState] = useState({
    dataUrl,
    hash,
    sections: activeSections.map(section => ({
      title: section.title,
      value: section.long,
      active: true,
    })),
  })

  const onToggleActive = section => {
    setState({
      ...state,
      sections: state.sections.map(s => {
        if (s.value === section.value) {
          s.active = !section.active
        }
        return s
      }),
    })
    updateActive(section)
  }

  const onDataUrlChange = event => updateDataUrl(event.target.value)

  useEffect(() => {
    setState({ ...state, dataUrl, hash })
  }, [dataUrl, hash])

  useEffect(() => {
    setHost(window.location.host)
  }, [])

  return (
    <div className={toolbar.Menu}>
      <div className={toolbar.MenuContainer}>
        <ul>
          {values(state.sections).map(section => (
            <li key={section.value} className={toolbar.MenuEntry}>
              <input
                className={toolbar.Checkbox}
                type='checkbox'
                checked={section.active}
                onChange={() => onToggleActive(section)}
              />
              <span onClick={() => onToggleActive(section)}>{section.title}</span>
            </li>
          ))}
          <li className={C(toolbar.MenuEntry, toolbar.MenuEntryDataLink)}>
            <span className={toolbar.DataLink}>
              Link zu Deinem JSON file (zB. Google Drive, DropBox,...)
            </span>
            <textarea type='text' value={state.dataUrl} onChange={onDataUrlChange} />
          </li>
          <li className={C(toolbar.MenuEntry, toolbar.MenuEntryHash)}>
            <Link className={toolbar.Hash} href={'/custom/' + state.hash} target='_blank'>
              Share Link anzeigen <Ico icon='external-link' />
            </Link>
            <textarea type='text' value={host + '/custom/' + state.hash} readOnly />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default function Toolbar({ dataUrl, hash, onChangeActive, onDataUrlChange }) {
  const [show, setShow] = useState(true)

  const onMenuToggle = () => setShow(!show)

  return (
    <div className={toolbar.Toolbar}>
      <div className={toolbar.Bar}>
        <Ico icon='navicon' className={toolbar.Icon} onClick={onMenuToggle} />
      </div>
      {show ? (
        <Menu
          dataUrl={dataUrl}
          hash={hash}
          updateActive={onChangeActive}
          updateDataUrl={onDataUrlChange}
        />
      ) : null}
    </div>
  )
}
