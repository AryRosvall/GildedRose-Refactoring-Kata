
const BackstagePassObject = require('./Objects/backstageObject')
const ConjuredObject = require('./Objects/conjuredObject')
const SulfurasObject = require('./Objects/sulfurasObject')
const AgedBrieObject = require('./Objects/agedBrieObject')
const StandardObject = require('./Objects/standardObject')
class ObjectFactory {

  static createObject(item) {
    switch (item.name) {
      case 'Aged Brie':
        return new AgedBrieObject(item)
        break;
      case 'Sulfuras, Hand of Ragnaros':
        return new SulfurasObject(item)
        break;
      case 'Conjured Mana Cake':
        return new ConjuredObject(item)
        break;
      case 'Backstage passes to a TAFKAL80ETC concert':
        return new BackstagePassObject(item)
      default:
        return new StandardObject(item)

        break;
    }
  }
}
module.exports = ObjectFactory