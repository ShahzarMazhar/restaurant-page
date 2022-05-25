import { activeNavLink } from "../pages/components/navbar";
import { $ } from "./basics";

const render = (page, nodes) => {
  const contentPlaceHolder = $("main.main");

  console.log(page);
  console.log(nodes);
  //activating nav link
  activeNavLink(`page-${page.toLowerCase()}`);

  //cleaning and then rendering page content
  contentPlaceHolder.innerHTML = "";
  contentPlaceHolder.append(...nodes);
};

export default render;
