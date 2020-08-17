let ConvertChange = require('../src/changeConverter') 
let convertChange = new ConvertChange

describe("ChangeConverter", () => {
  test("It should return money array ", () => {
    expect(convertChange.convertChange(20)).toEqual(["£20"])
  }) 

  test("It should return money array ", () => {
    expect(convertChange.convertChange(30)).toEqual(["£20", "£10"])
  }) 

  test("It should return money array ", () => {
    expect(convertChange.convertChange(45)).toEqual(["£20", "£20", "£5"])
  }) 

  test("It should return money array ", () => {
    expect(convertChange.convertChange(35)).toEqual(["£20", "£10", "£5"])
  }) 

})
