import { RandomNumberGenerator } from '../src/random'
import { RangeNumber } from '../src/range'

const rangeBetween3And10: RangeNumber = new RangeNumber(3, 10)

describe('Random package class', () => {
  test(`Number must be between ${rangeBetween3And10.start} and ${rangeBetween3And10.end}`, () => {
    const randomGenerator: RandomNumberGenerator = new RandomNumberGenerator(rangeBetween3And10)
    const randomNumber: number = randomGenerator.generate()
    expect(randomNumber).toBeGreaterThanOrEqual(rangeBetween3And10.start)
    expect(randomNumber).toBeLessThanOrEqual(rangeBetween3And10.end)
  })
})
