import { Answers, prompt } from 'inquirer'
import { GuessNumber } from './guess'
import { RandomNumberGenerator } from './random'
import { RangeNumber } from './range'

(async (): Promise<Answers> => {
  const answer: Answers = await prompt([{
    type: 'input',
    name: 'name',
    message: 'Give me your name'
  }, {
    type: 'number',
    name: 'start',
    message: 'Give me a start number'
  }, {
    type: 'number',
    name: 'end',
    message: 'Give me an end number',
    filter: (input: any, answer: any): number => {
      const range: RangeNumber = new RangeNumber(answer.start, input)
      const random: RandomNumberGenerator = new RandomNumberGenerator(range)
      answer.guessNumber = new GuessNumber(answer.name, random)
      return input
    }
  }, {
    type: 'list',
    name: 'number',
    message: 'Guess the secret number',
    choices: (answer: any) => {
      return answer.guessNumber.options
    },
    filter: (input: any, answer: any): number[] => {
      return answer.guessNumber.isNumber(input)
    }
  }])
  return answer
})()
  .then(answer => {
    const name: string = answer.name
    if (answer.number === true) {
      console.info(`Good job ${name}! You have guessed the number!`)
    } else {
      const secret: number = answer.guessNumber.secret
      console.info(`Sorry ${name}! The secret number is ${secret}. Try again!`)
    }
  }).catch(error => console.error(error))
