import { $, activeNavLink } from "./components/navbar";
import { createWelcome } from "./components/hero";
import {
  brandName,
  setMenu,
  welcomeItems,
  offerItem
} from "../modules/data";
import { createSpecialOffer } from "./components/special_offer";

setMenu("Home", loadHome);

function createHome() {
  const welcome = createWelcome(brandName, welcomeItems);
  const offer = createSpecialOffer(offerItem);

  return [welcome, offer];
}

function loadHome() {
  const contentPlaceHolder = $("main.main");
  activeNavLink("page-home");

  contentPlaceHolder.innerHTML = "";
  contentPlaceHolder.append(...createHome());
}

export { loadHome };
