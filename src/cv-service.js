import { flow } from 'lodash/fp'
import CryptoJS from 'crypto-js'

const encodingKey = 'th1sIsTheKey'

export const sections = [
  // { value: 'pf', dataKey: 'profileFoto', title: 'Foto' },
  { value: 'pd', dataKey: 'personalData', title: 'Persönliche Daten' },
  { value: 'edu', dataKey: 'education', title: 'Ausbildung' },
  { value: 'pr', dataKey: 'profile', title: 'Profil' },
  { value: 'sk', dataKey: 'skills', title: 'Skills' },
  { value: 'jb', dataKey: 'jobs', title: 'Jobs' },
  { value: 'pj', dataKey: 'projects', title: 'Projekte' },
  { value: 'ot', dataKey: 'other' },
]

export const getSections = () =>
  sections.filter(section => !!section.title).map(section => ({ ...section, isActive: true }))

const extendImagePath = base => filename => base + filename

const extendImagePathsInSubsection = basePath => subsection => {
  if (subsection.images) {
    subsection.images = subsection.images.map(extendImagePath(basePath))
  }
  return subsection
}

export const loadData = url =>
  fetch(url)
    .then(json => json.json())
    .then(data => {
      const updatedData = {}
      sections.map(section => {
        const dataSection = data[section.dataKey]
        if (Array.isArray(dataSection)) {
          updatedData[section.dataKey] = dataSection.map(
            extendImagePathsInSubsection(data.imageBasePath)
          )
        } else if (dataSection) {
          updatedData[section.dataKey] = extendImagePathsInSubsection(data.imageBasePath)(
            dataSection
          )
        }
      })
      return updatedData
    })

export const hashActive = (sections, dataUrl) => {
  const activeShorts = sections.filter(section => section.isActive).map(section => section.value)

  return encodeURIComponent(
    CryptoJS.AES.encrypt(JSON.stringify({ active: activeShorts, dataUrl }), encodingKey).toString()
  )
}

export const dehashConfigFromUrl = flow(
  encryptedConfig => decodeURIComponent(encryptedConfig),
  config => CryptoJS.AES.decrypt(config, encodingKey),
  decrypted => decrypted.toString(CryptoJS.enc.Utf8),
  decrypted => JSON.parse(decrypted),
  config => ({
    sections: getSections().map(section => ({
      ...section,
      isActive: config.active.includes(section.value),
    })),
    dataUrl: config.dataUrl,
  })
)
