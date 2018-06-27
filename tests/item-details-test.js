/// <reference path="../steps.d.ts" /> 
const expect = require('expect');

Feature('Item details verifications');

BeforeSuite(async (ItemDetails) => {
    await ItemDetails.navigateToItemDetails('6000166640889');
});

Scenario('Ensure correct product name is displayed', async (ItemDetails) => {
    const productName = await ItemDetails.getProductName();
    expect(productName).toBe('Intex Metal Frame Pool');
});

Scenario('Ensure correct product description is displayed', async (ItemDetails) => {
    const productDescription = await ItemDetails.getProductDescription();
    expect(productDescription).toContain('Metal frame pool');
});
