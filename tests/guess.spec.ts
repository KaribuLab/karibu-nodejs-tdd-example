import { GuessNumber } from '../src/guess'
import { RandomNumberGenerator } from '../src/random'
import { RangeNumber } from '../src/range'
const rangeTen: RangeNumber = new RangeNumber(5, 10)
const secretNumber = 8
const wrongAnswer = 7
const playerName = 'Joaquin'
const rangeSize: number = (rangeTen.end - rangeTen.start) + 1
const mockGenerate = jest.fn().mockReturnValue(secretNumber)
jest.mock('../src/random', () => {
  return {
    RandomNumberGenerator: jest.fn().mockImplementation((range) => {
      return {
        generate: mockGenerate,
        range,
        _range: range
      }
    })
  }
})

beforeEach(() => {
  mockGenerate.mockClear()
})

describe('Guess package class', () => {
  test(`Get ${rangeSize} options`, () => {
    const guessNumber: GuessNumber = new GuessNumber(playerName, new RandomNumberGenerator(rangeTen))
    expect(guessNumber.options.length).toBe(rangeSize)
    expect(mockGenerate).toHaveBeenCalledTimes(1)
  })
  test(`${wrongAnswer} it's wrong, expected ${secretNumber}`, () => {
    const guessNumber: GuessNumber = new GuessNumber(playerName, new RandomNumberGenerator(rangeTen))
    expect(guessNumber.isNumber(wrongAnswer)).toBeFalsy()
  })
  test(`Secret number ${secretNumber} guessed!`, () => {
    const guessNumber: GuessNumber = new GuessNumber(playerName, new RandomNumberGenerator(rangeTen))
    expect(guessNumber.isNumber(secretNumber)).toBeTruthy()
  })
  test('isNumber generate must be called', () => {
    const spy = jest.spyOn(rangeTen, 'toArrayNumber')
    /* eslint-disable */
    const guessNumber = new GuessNumber(playerName, new RandomNumberGenerator(rangeTen))
    /* eslint-disable */
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })
})
