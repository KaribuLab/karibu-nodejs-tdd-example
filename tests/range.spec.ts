import { RangeNumber } from '../src/range'

describe('Range number class', () => {
  test('Wrong range values', () => {
    const start = 3
    const end = 10
    expect(() => new RangeNumber(end, start)).toThrow(`Not valid range numbers. Starting with ${end} and ending with ${start}`)
  })
})
