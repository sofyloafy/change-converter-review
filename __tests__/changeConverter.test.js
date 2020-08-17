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

  test("It should return money array ", () => {
    expect(convertChange.convertChange(3)).toEqual(["£1", "£1", "£1"])
  }) 

  test("It should return money array ", () => {
    expect(convertChange.convertChange(13)).toEqual(["£10", "£1", "£1", "£1"])
  }) 

  test("It should return money array ", () => {
    expect(convertChange.convertChange(0.5)).toEqual(["50p"])
  }) 

  test("It should return money array ", () => {
    expect(convertChange.convertChange(1.5)).toEqual(["£1","50p"])
  }) 

  test("It should return money array ", () => {
    expect(convertChange.convertChange(0.20)).toEqual(["20p"])
  }) 

  test("It should return money array ", () => {
    expect(convertChange.convertChange(0.40)).toEqual(["20p", "20p"])
  }) 

  test("It should return money array ", () => {
    expect(convertChange.convertChange(0.10)).toEqual(["10p"])
  }) 

  test("It should return money array ", () => {
    expect(convertChange.convertChange(0.05)).toEqual(["5p"])
  }) 

  test("It should return money array ", () => {
    expect(convertChange.convertChange(0.04)).toEqual(["1p","1p","1p","1p"])
  }) 

  test("It should return money array ", () => {
    expect(convertChange.convertChange(0.09)).toEqual(["5p","1p","1p","1p","1p"])
  }) 

})
