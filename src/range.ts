export class IllegalRangeNumber extends Error {
  private readonly _start: number
  private readonly _end: number
  constructor (start: number, end: number) {
    super(`Not valid range numbers. Starting with ${start} and ending with ${end}`)
    this._start = start
    this._end = end
  }
}

export class RangeNumber {
  private readonly _start: number
  private readonly _end: number

  constructor (start: number, end: number) {
    if (start >= end) {
      throw new IllegalRangeNumber(start, end)
    }
    this._start = start
    this._end = end
  }

  public get start (): number {
    return this._start
  }

  public get end (): number {
    return this._end
  }

  public toArrayNumber (): number[] {
    return Array.from(Array((this._end - this._start) + 1).keys()).map(x => x + this._start)
  }
}
