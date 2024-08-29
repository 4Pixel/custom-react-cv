export const sections = [
  { short: 'pf', long: 'profileFoto', title: 'Foto' },
  { short: 'edu', long: 'education', title: 'Ausbildung' },
  { short: 'pd', long: 'personalData', title: 'Persönliche Daten' },
  { short: 'pr', long: 'profile', title: 'Profil' },
  { short: 'sk', long: 'skills', title: 'Skills' },
  { short: 'jb', long: 'jobs', title: 'Jobs' },
  { short: 'pj', long: 'projects', title: 'Projekte' },
  { short: 'ot', long: 'other' },
]

export const activeSections = sections.filter(section => section.title)
