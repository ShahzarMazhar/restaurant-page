/*
 * Module: About Page
 * Responsibility: Creating and appending about page in content placeholder
 */

import { setMenu } from "../modules/data";
import render from "../modules/render-content";
import { pageHeader } from "./components/page-header";


const page = "About"

const loadPage = (() => {
  const header = pageHeader(page, "About Us");

  const nodes = [header];
  return () => render(page, nodes);
})();

// link page to the menu
setMenu(page, loadPage);
