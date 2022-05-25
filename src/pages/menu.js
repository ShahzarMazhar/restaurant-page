/*
 * Module: Menu Page
 * Responsibility: Creating and appending menu page in content placeholder
 */

import { setMenu } from "../modules/data";
import render from "../modules/render-content";
import { pageHeader } from "./components/page-header";

const page = "Menu";

const loadPage = (() => {
  const header = pageHeader(page);

  const nodes = [header];
  return () => render(page, nodes);
})();

// link page to the menu
setMenu(page, loadPage);
