const StandardObject = require('./standardObject')

class CapturedObject extends StandardObject {

  constructor(item) {
    super(item)
    this.item = item
  }


  updateSellIn() {

    // The this.item.quality of an item is never negative
    if (this.item.quality < 0) {
      return this.item.quality = 0
    }

    // The this.item.quality of an item is never more than 50
    if (this.item.quality > 50) {
      return this.item.quality = 50
    }

    // "Conjured" items degrade in this.item.quality twice as fast as normal items
    // Once the sell by date has passed, this.item.quality degrades twice as fast
    return this.item.sellIn > 0 ? this.item.quality -= 2 : this.item.quality -= 4
  }

  updateQuality() { }
}

module.exports = CapturedObject