
const Item = require('./item')

class StandardObject extends Item {

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
    if (this.item.quality <= 0) {
      return this.item.quality = 0
    }

    // The Quality of an item is never more than 50
    if (this.item.quality > 50) {
      return this.item.quality = 50
    }

    // Once the sell by date has passed, Quality degrades twice as fast
    return this.item.sellIn <= 0 ? this.item.quality -= 2 : this.item.quality -= 1
  }
}

module.exports = StandardObject