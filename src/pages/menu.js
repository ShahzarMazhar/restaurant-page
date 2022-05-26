/*
 * Module: Menu Page
 * Responsibility: Creating and appending menu page in content placeholder
 */

import { products, setMenu } from "../modules/data";
import render from "../modules/render-content";
import { pageHeader } from "./components/page-header";
import createPriceList from "./components/price-list";

const page = "Menu";

const loadPage = (() => {
  const header = pageHeader(page);
  
  const menuList = createPriceList(products);

  const nodes = [header, menuList];
  return () => render(page, nodes);
})();

// link page to the menu
setMenu(page, loadPage);
