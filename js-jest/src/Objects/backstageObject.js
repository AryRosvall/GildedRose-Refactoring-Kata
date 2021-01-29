
const StandardObject = require('./standardObject')
class BackstagePassObject extends StandardObject {

  constructor(item) {
    super(item)
    this.item = item
  }
  updateQuality() {

    let calculatedQuality = 0

    // The Quality of an item is never negative
    //Quality drops to 0 after the concert
    if (this.item.quality < 0 || this.item.sellIn <= 0) {
      return this.item.quality = 0
    }

    // The Quality of an item is never more than 50
    if (this.item.quality > 50) {
      return this.item.quality = 50
    }

    // Increases in Quality as its SellIn value approaches
    if (this.item.sellIn >= 11) {
      calculatedQuality = this.item.quality + 1
    }

    //Quality increases by 2 when there are 10 days or less
    if (this.item.sellIn >= 6 && this.item.sellIn <= 10) {
      calculatedQuality = this.item.quality + 2
    }

    //Quality increases by 3 when there are 5 days or less
    if (this.item.sellIn >= 1 && this.item.sellIn <= 5) {
      calculatedQuality = this.item.quality + 3
    }


    this.item.quality = calculatedQuality
  }

}

module.exports = BackstagePassObject