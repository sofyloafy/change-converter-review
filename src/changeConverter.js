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

      else if (total >= 0.5 && total < 1) {
        moneyBreakdown.push("50p")
        total -= 0.5
      }

      else if (total >= 0.2 && total < 0.5) {
        moneyBreakdown.push("20p")
        total -= 0.2
      }

      else if (total >= 0.1 && total < 0.2) {
        moneyBreakdown.push("10p")
        total -= 0.1
      }

      else if (total >= 0.05 && total < 0.1) {
        moneyBreakdown.push("5p")
        total -= 0.05
      }

      else {
        moneyBreakdown.push("1p")
        total -= 0.01
      }
    }
      return moneyBreakdown
  }
}

module.exports = ChangeConverter