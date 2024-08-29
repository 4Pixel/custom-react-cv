import React from 'react'
import ico from './ico.module.css'
import { C } from 'src/classnames'

export default function Ico({ icon, className, onClick }) {
  return (
    <img src={`/icons/${icon}.svg`} alt='' className={C(className, ico.Ico)} onClick={onClick} />
  )
}
