


const ObjectFactory = require('./objectFactory')

class Shop {


  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {

    this.items
      .map(ObjectFactory.createObject)
      .forEach(object => {
        object.calculate()
      });

    return this.items;
  }
}


module.exports = {

  Shop
}
