import { test } from '@playwright/test';
import {
  clickInTheMiddleOfTheScreen,
  takePageScreenshot,
  waitForPageInit,
} from '@utils';
import { POLYMER_TOGGLER } from '../../../constants/testIdConstants';

/* 
Test case: #2497 - Add chem to canvas
*/

test('Select chem and drag it to canvas', async ({ page }) => {
  await waitForPageInit(page);

  // Click on POLYMER_TOGGLER
  await page.getByTestId(POLYMER_TOGGLER).click();

  await page.getByText('CHEM').click();

  // Click on <div> "sDBL___Symmetric Doubler"
  await page.click('[data-testid="sDBL___Symmetric Doubler"]');

  // Click on <svg> #polymer-editor-canvas
  await clickInTheMiddleOfTheScreen(page);

  await takePageScreenshot(page);
});
