import toPairs from 'lodash/fp/toPairs'

export const C = (...args) => {
  const simpleClasses = args.filter(a => typeof a === 'string')
  const lastArg = args[args.length - 1]
  const classes =
    typeof lastArg === 'object'
      ? toPairs(lastArg)
          .filter(([_, bool]) => bool)
          .map(([name, _]) => name)
          .concat(simpleClasses)
      : simpleClasses
  return classes.join(' ')
}
