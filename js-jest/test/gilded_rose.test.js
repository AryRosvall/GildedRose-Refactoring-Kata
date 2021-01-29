const { Shop } = require("../src/gilded_rose");
const Item = require("../src/Objects/item");

describe("Normal objects", function () {
  it("Should decrement qualityValue in 1 each day it pass", function () {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
  });

  it("QualityValue should be >= 0", function () {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("QualityValue should be <= 50", function () {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 52)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("Once the sell by date has passed, Quality degrades twice as fast", function () {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });
});

describe("Conjured objects", function () {
  it("Should decrement qualityValue in 2 each day it pass", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });

  it("QualityValue should be >= 0", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, -1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("QualityValue should be <= 50", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 52)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("Once the sell by date has passed, Quality degrades twice as fast", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });
});

describe("Backstage passes", function () {
  it("Should increments qualityValue in 1 each day it pass if SellIn value is > 10", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });

  it("Should increments qualityValue in 2 each day it pass if SellIn value is between 10 and 6", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 7, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  });

  it("Should increments qualityValue in 3 each day it pass if SellIn value is between 5 and 1", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });

  it("QualityValue should be 0 when SellIn value is <= 0", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("QualityValue should be >= 0", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("QualityValue should be <= 50", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 3, 52)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

});

describe("Sulfuras object", function () {
  it("Quantity value should be 80", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 81)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });

  it("SellIn value should be the same", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 2, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(2);
  });
});
describe("Aged brie object", function () {
  it("Should increment qualityValue in 1 each day it pass", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  it("QualityValue should be >= 0", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 2, -2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("QualityValue should be <= 50", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});
