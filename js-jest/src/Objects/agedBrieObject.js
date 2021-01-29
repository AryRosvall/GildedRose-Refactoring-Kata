
const StandardObject = require('./standardObject')

class AgedBrieObject extends StandardObject {

  constructor(item) {
    super(item)
    this.item = item
  }

  calculate() {
    this.updateQuality()
    this.updateSellIn()
  }

  updateSellIn() {
    return this.item.sellIn -= 1
  }

  updateQuality() {

    // The Quality of an item is never negative
    if (this.item.quality < 0) {

      return this.item.quality = 0
    }

    // The Quality of an item is never more than 50
    if (this.item.quality >= 50) {
      return this.item.quality = 50
    }

    // "Aged Brie" actually increases in Quality the older it gets
    return this.item.quality += 1
  }
}

module.exports = AgedBrieObject