

const StandardObject = require('./standardObject')

class SulfurasObject extends StandardObject {


  constructor(item) {
    super(item)
    this.item = item
    this.SULFURAS_QUALITY = 80
  }

  calculate() {
    this.updateQuality()
    this.updateSellIn()
  }

  updateSellIn() {
    return this.item.sellIn
  }

  updateQuality() {
    //Never has to be sold or decreases in Quality
    return this.item.quality = this.SULFURAS_QUALITY
  }

}

module.exports = SulfurasObject