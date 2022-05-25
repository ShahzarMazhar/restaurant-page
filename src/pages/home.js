/*
 * Module: Home Page
 * Responsibility: Creating and appending home page in content placeholder
 */

import { createWelcome } from "./components/hero";
import {
  brandName,
  setMenu,
  welcomeItems,
  offerItem
} from "../modules/data";
import { createSpecialOffer } from "./components/special_offer";
import render from "../modules/render-content";

const page = "Home"

const loadPage = (() => {
  const welcome = createWelcome(brandName, welcomeItems);
  const offer = createSpecialOffer(offerItem);
  
  
  const nodes = [welcome, offer]
  return () => render(page, nodes);
})();

// link page to the menu
setMenu(page, loadPage);
