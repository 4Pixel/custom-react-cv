import f from 'lodash/fp'

const translations = {
  de: {
    profile: 'Profil',
    personalData: 'Persönliche Daten',
    name: 'Name',
    personal: {
      phone: 'Telefon',
      email: 'E-Mail',
      birthday: 'Geburtstag',
      city_of_birth: 'Geburtsort',
      nationality: 'Staatsbürgerschaft',
      strengths: 'Stärken',
    },
    education: 'Ausbildung',
    jobs: 'Beruflicher Werdegang',
  },
  en: {
    profile: 'Profile',
    personalData: 'Contact',
    personal: {
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      birthday: 'Birthday',
      city_of_birth: 'City Of Birth',
      nationality: 'Nationality',
      strengths: 'Strengths',
    },
    education: 'Education',
    jobs: 'Professional Experience',
  },
}

let language = 'en'

export const i18n = path => f.get(path, translations[language])
export const setLanguage = newLanguage => (language = newLanguage)
