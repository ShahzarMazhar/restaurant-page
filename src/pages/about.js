import { $, activeNavLink } from "./components/navbar";
import { setMenu, welcomeItems, images, offerItem } from "../modules/data";

// link page to the menu
setMenu('About', loadAbout);

function createAbout() {

  
  return [];
}


function loadAbout() {
  const contentPlaceHolder = $("main.main");
  activeNavLink("page-about");
  contentPlaceHolder.innerHTML = "";
  // contentPlaceHolder.append(...createAbout());
}

export { loadAbout };
