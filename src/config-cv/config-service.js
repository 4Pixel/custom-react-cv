import f from 'lodash/fp'
import CryptoJS from 'crypto-js'
import { sections } from 'src/common'

const key = 'th1sIsTheKey'

export const hashActive = (active, dataUrl) =>
  f.flow(
    active => {
      const mappedActives = {}
      f.mapKeys(longKey => {
        const shortKey = f.find({ long: longKey }, sections).short
        mappedActives[shortKey] = active[longKey]
      }, active)
      return mappedActives
    },
    active => JSON.stringify({ active: active, dataUrl: dataUrl }),
    text => CryptoJS.AES.encrypt(text, key),
    encrypted => encodeURIComponent(encrypted.toString())
  )(active)

export const dehashActive = f.flow(
  encoded => decodeURIComponent(encoded),
  active => CryptoJS.AES.decrypt(active, key),
  decrypted => decrypted.toString(CryptoJS.enc.Utf8),
  text => JSON.parse(text),
  config => {
    const mappedActives = {}
    f.mapKeys(shortKey => {
      const longKey = f.find({ short: shortKey }, sections).long
      mappedActives[longKey] = config.active[shortKey]
    }, config.active)
    return { active: mappedActives, dataUrl: config.dataUrl }
  }
)
