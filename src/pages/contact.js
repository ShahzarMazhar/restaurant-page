/*
 * Module: Contact Page
 * Responsibility: Creating and appending contact page in content placeholder
 */

import { setMenu } from "../modules/data";
import render from "../modules/render-content";
import { pageHeader } from "./components/page-header";


const page = "Contact"

const loadPage = (() => {
  const header = pageHeader(page, "Contact Us");

  const nodes = [header];
  return () => render(page, nodes);
})();

// link page to the menu
setMenu(page, loadPage);
