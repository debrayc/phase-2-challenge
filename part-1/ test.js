const chai = require('chai')
const chaiChange = require('chai-change')
const expect = chai.expect
import { filterBetween } from './filterBetween'
import { month } from './month'
import { nameProps } from './nameProps'
import { reverseSentence } from './reverseSentence'

chai.use(chaiChange)

describe('month()', () => {

  it( 'should be a function', () => {
    expect(month).to.be.a('function')
  })
})

describe('month', () => (

  it('exists', () => {
    expect(month).to.be.a('function')
  })

  it('should return the name of the month of the entered date', () => {
    let date = new Date(2017, 5, 19)

    expect(month(date)).to.equal('June')
  })
))
describe('month', () => (

  it('should throw an error if given invalid input', () => {

    expect(month('Jun')).to.throw(new Error("invalid input!"))
  })
))

describe('filterBetween', () => {

  it('should filter array and return new array with only elements between the max and min params', () => {

    expect(filterBetween(['a', 'b', 'c', 'd', 'e', 'F', 'g'], 'b', 'f')).to.equal(
      ['b', 'c', 'd', 'e', 'F'])
    expect(filterBetween("this", "that", "what")).to.throw(new Error("invalid input!"))
  })
})

describe('reverseSentence', () => {

  it('should reverse the order of words in a sentence', () => {

    expect(reverseSentence('This is a stupid easy ass exercise.')).to.equal(
      'exercise. ass easy stupid a is This')
    expect(reverseSentence([6, 1, 7])).to.throw(new Error("invalid input!"))
  })
})

describe('nameProperties', () => {

  it('should reverse the order of words in a sentence', () => {

    expect(nameProps({name: "Jake", monicker: "The Snake", move: "The choke"})).to.equal(
      [ 'monicker', 'move', 'name' ])
    expect(nameProps([6, 1, 7])).to.throw(new Error("invalid input!"))
  })
})
