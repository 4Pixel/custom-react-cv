import toolbar from './toolbar.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getSections, hashActive } from 'src/cv-service'
import Ico from 'src/ico/ico'
import { C } from 'src/classnames'

const Menu = ({ initialDataUrl, updateDataUrl, onChangeActive }) => {
  const [host, setHost] = useState('')
  const [hash, setHash] = useState('')
  const [dataUrl, setDataUrl] = useState(initialDataUrl)
  const [sections, setSections] = useState(getSections())

  const onToggleActive = section => {
    setSections(
      sections.map(s => {
        if (s.value === section.value) {
          s.isActive = !section.isActive
        }
        return s
      })
    )
  }

  const onDataUrlChange = event => setDataUrl(event.target.value)

  useEffect(() => {
    setHash(hashActive(sections, dataUrl))
    updateDataUrl(dataUrl)
  }, [dataUrl])

  useEffect(() => {
    setHash(hashActive(sections, dataUrl))
    onChangeActive(sections)
  }, [sections])

  useEffect(() => {
    setHost(window.location.host)
  }, [])

  return (
    <div className={toolbar.Menu}>
      <div className={toolbar.MenuContainer}>
        <ul>
          {sections.map(section => (
            <li key={section.value} className={toolbar.MenuEntry}>
              <input
                className={toolbar.Checkbox}
                type='checkbox'
                checked={section.isActive}
                onChange={() => onToggleActive(section)}
              />
              <span onClick={() => onToggleActive(section)}>{section.title}</span>
            </li>
          ))}
          <li className={C(toolbar.MenuEntry, toolbar.MenuEntryDataLink)}>
            <span className={toolbar.DataLink}>
              Link zu Deinem JSON file (zB. Google Drive, DropBox,...)
            </span>
            <textarea type='text' value={dataUrl} onChange={onDataUrlChange} />
          </li>
          <li className={C(toolbar.MenuEntry, toolbar.MenuEntryHash)}>
            <Link className={toolbar.Hash} href={'/custom/' + hash} target='_blank'>
              Share Link anzeigen <Ico icon='external-link' />
            </Link>
            <textarea type='text' value={host + '/custom/' + hash} readOnly />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default function Toolbar({ initialDataUrl, onChangeActive, onDataUrlChange }) {
  const [show, setShow] = useState(false)

  const onMenuToggle = () => setShow(!show)

  return (
    <div className={toolbar.Toolbar}>
      <div className={toolbar.Bar}>
        <Ico icon='navicon' className={toolbar.Icon} onClick={onMenuToggle} />
      </div>
      {show ? (
        <Menu
          initialDataUrl={initialDataUrl}
          updateDataUrl={onDataUrlChange}
          onChangeActive={onChangeActive}
        />
      ) : null}
    </div>
  )
}
