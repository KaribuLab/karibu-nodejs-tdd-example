import { RangeNumber } from './range'

export class RandomNumberGenerator {
  private readonly _range: RangeNumber

  constructor (range: RangeNumber) {
    this._range = range
  }

  public get range (): RangeNumber {
    return this._range
  }

  public generate (): number {
    const random: number = Math.floor(Math.random() * this._range.end)
    return this._range.start > random ? this._range.start : random
  }
}
