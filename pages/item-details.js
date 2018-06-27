/// <reference path="../steps.d.ts" /> 
'use strict';
let I;
let fields;

module.exports = {

  _init() {
    I = actor();
    fields = {
      productName: locate('h1[data-analytics-type*="productName"]').inside(locate('#product-desc')),
      productDescription: locate('p.description').inside(locate('#product-desc')),
      plus: locate('button.increment'),
      minus: locate('button.decrement'),
      count: locate('input.qty-input')
    }
  },

  navigateToItemDetails: async (itemID) => {
    I.amOnPage(`/en/ip/play-day-2-ring-pool-unicorn-print/${itemID}`);
  },

  getProductName: async () => {
    return await I.grabTextFrom(fields.productName);
  },

  getProductDescription: async () => {
    return await I.grabTextFrom(fields.productDescription);
  },

  increaseCounter: async () => {
    await I.click(fields.plus);
  },

  decreaseCounter: async () => {
    await I.click(fields.minus);
  },

  ensureQuantityChangedTo: async (quantity) => {
    await I.waitForValue(fields.count, `${quantity}`, 5000);
  },
}