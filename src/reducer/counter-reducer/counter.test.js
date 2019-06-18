import counter from './counter'
import { expect } from 'chai'

it('Should counter be a function', () => {
  expect(counter).to.be.a('function')
 })

 it('Should increment counter 0 to 1', () => {
   const initial = 0
   const action = {type : 'INCREMENT'}
  expect(counter(initial, action)).to.be.equals(1)
 })

 it('Should increment counter 1 to 2', () => {
  const initial = 1
  const action = {type : 'INCREMENT'}
 expect(counter(initial, action)).to.be.equals(2)
})

it('Should decrement counter 2 to 1', () => {
  const initial = 2
  const action = {type : 'DECREMENT'}
 expect(counter(initial, action)).to.be.equals(1)
})

it('Should decrement counter 5 to 4', () => {
  const initial = 5
  const action = {type : 'DECREMENT'}
 expect(counter(initial, action)).to.be.equals(4)
})

it('Should return de initial state if de action is unknow', () => {
  const initial = 5
  const action = {type : 'ANYTING'}
 expect(counter(initial, action)).to.be.equals(5)
})

it('Should return de initial state if de action is undefined', () => {
  const initial = undefined
  const action = {}
 expect(counter(initial, action)).to.be.equals(0)
})

it('Should return de initial state if the state goings to <0', () => {
  const initial = 0
  const action = 'DECREMENT'
 expect(counter(initial, action)).to.be.equals(0)
})

