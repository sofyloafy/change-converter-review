let ConvertChange = require('../src/changeConverter') 
let convertChange = new ConvertChange

describe("ChangeConverter", () => {
  test("It should return money array ", () => {
    expect(convertChange.convertChange(20)).toEqual(["£20"])
  }) 

  test("It should return money array ", () => {
    expect(convertChange.convertChange(25)).toEqual(["£20"])
  }) 

})
