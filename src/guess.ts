import { RandomNumberGenerator } from './random'

export class GuessNumber {
  private readonly _name: string
  private readonly _secret: number
  private readonly _options: number[]

  constructor (name: string, random: RandomNumberGenerator) {
    this._name = name
    this._secret = random.generate()
    this._options = random.range.toArrayNumber()
  }

  public get options (): number[] {
    return this._options
  }

  public get name (): string {
    return this._name
  }

  public get secret (): number {
    return this._secret
  }

  public isNumber (answer: number): boolean {
    return answer === this._secret
  }
}
