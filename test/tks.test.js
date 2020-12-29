import tdl from '../dist/tddutil'

// trim
test('trim 1', () => {
  expect(tdl.trim(' abc ')).toBe('abc')
})
test('trim 2', () => {
  expect(tdl.trim(' a b c ',true)).toBe('abc')
})

// get
test('get', () => {
  expect(tdl.get('www.baidu.com?aa=1&bb=2&cc=3','aa')).toBe('1')
  expect(tdl.get('www.baidu.com?aa=1&bb=2&cc=3',true)).toEqual({aa: "1", bb: "2", cc: "3"})
  expect(tdl.get('www.baidu.com/#/site?dd=4','dd')).toBe('4')
})

// param
test('param', () => {
  expect(tdl.param({name:'li', age:18})).toBe('name=li&age=18')
})

// sort
test('sort', () => {
  expect(tdl.sort([1,5,7,9,2])).toEqual([1,2,5,7,9])
  expect(tdl.sort([1,5,7,9,2],true)).toEqual([9,7,5,2,1])
})

// eq
test('eq', () => {
  expect(tdl.eq(window, alert)).toEqual(false)
  expect(tdl.eq(1,2)).toEqual(false)
})