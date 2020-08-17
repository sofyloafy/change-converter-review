class ChangeConverter {

  convertChange(cash) {
    let moneyBreakdown = []
    let total = cash
    while (total > 0) {
      if (total >= 20) {
            moneyBreakdown.push("£20")
            total -= 20
      }
      else if (total >= 10 && total < 20) {
        moneyBreakdown.push("£10")
        total -= 10
      }
      else if (total >= 5 && total < 10) {
        moneyBreakdown.push("£5")
        total -= 5
      }
      else if (total >= 1 && total < 5) {
        moneyBreakdown.push("£1")
        total -= 1
      }
    }
      console.log(moneyBreakdown)
      return moneyBreakdown
  }
}

module.exports = ChangeConverter