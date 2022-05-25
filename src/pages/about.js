/*
 * Module: About Page
 * Responsibility: Creating and appending about page in content placeholder
 */

import { setMenu } from "../modules/data";
import render from "../modules/render-content";


const page = "About"

const loadPage = (() => {
  // const offer = createSpecialOffer(offerItem);
  
  
  const nodes = []
  return () => render(page, nodes);
})();

// link page to the menu
setMenu(page, loadPage);
