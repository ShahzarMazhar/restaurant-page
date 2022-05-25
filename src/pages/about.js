/*
 * Module: About Page
 * Responsibility: Creating and appending about page in content placeholder
 */

import { setMenu, offerItem } from "../modules/data";
import render from "../modules/render-content";
import { createAboutBody } from "./components/about-body";
import { pageHeader } from "./components/page-header";


const page = "About"

const loadPage = (() => {
  const header = pageHeader(page, "About Us");
  const main = createAboutBody(offerItem);

  const nodes = [header, main];
  return () => render(page, nodes);
})();

// link page to the menu
setMenu(page, loadPage);
