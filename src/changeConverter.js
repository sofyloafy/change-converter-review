class ChangeConverter {

  convertChange(cash) {
    let total = cash
    let moneyBreakdown = []

    if (total >= 20) {
      moneyBreakdown.push("£20")
      total -= 20
      console.log(total)
    }
    return moneyBreakdown
  }


}

module.exports = ChangeConverter