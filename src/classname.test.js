import { C } from 'components/classnames'

describe('classnames', () => {
  it('should should join a list of class names', () => {
    expect(C('one', 'two', 'three')).toBe('one two three')
  })

  it('should ignore null values', () => {
    expect(C('one', null, undefined)).toBe('one')
  })

  it('should handle conditional class objects', () => {
    expect(
      C('one', {
        yes: true,
        no: false,
        undefined: undefined,
        null: null,
      })
    ).toBe('yes one')
  })

  it('should handle conditional class objects even if it is the only argument', () => {
    expect(
      C({
        yes: true,
      })
    ).toBe('yes')
  })

  it('should return an empty string of no arguments', () => {
    expect(C()).toBe('')
  })

  it('should return an empty string all arguments are falsy', () => {
    expect(C(null, { stillNull: null })).toBe('')
  })
})
