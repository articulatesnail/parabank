import { test, expect } from '@playwright/test';

test('Parabank register', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

   
    // Click on the "Register" link
    await page.click('text=Register');``
    // Fill in the registration form
    await page.fill('input[name="customer.firstName"]', 'John');
    await page.fill('input[name="customer.lastName"]', 'Doe');
    await page.fill('input[name="customer.address.street"]', '123 Main St');
    await page.fill('input[name="customer.address.city"]', 'Anytown');
    await page.fill('input[name="customer.address.state"]', 'CA');
    await page.fill('input[name="customer.address.zipCode"]', '12345');
    await page.fill('input[name="customer.phoneNumber"]', '555-123-4567');
    await page.fill('input[name="customer.ssn"]', '123-45-6789');
    await page.fill('input[name="customer.username"]', 'johndoe');
    await page.fill('input[name="customer.password"]', 'password123');
    await page.fill('input[name="repeatedPassword"]', 'password123');
    // Submit the registration form
    await page.click('input[type="submit"]');
    // Assert successful registration by checking for the confirmation message

});