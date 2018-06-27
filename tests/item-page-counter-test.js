/// <reference path="../steps.d.ts" /> 
const expect = require('expect');

Feature('Quantity counter');

BeforeSuite(async (ItemDetails) => {
    await ItemDetails.navigateToItemDetails('6000166640889');
});

Scenario('Increase & decrease counter and ensure it reflects the count', async (ItemDetails) => {
    ItemDetails.increaseCounter();
    ItemDetails.ensureQuantityChangedTo(2);
    ItemDetails.decreaseCounter();
    ItemDetails.ensureQuantityChangedTo(1);
});
