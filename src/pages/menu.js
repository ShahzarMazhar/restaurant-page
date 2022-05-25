import  {$,  activeNavLink } from "./components/navbar";
import { setMenu } from "../modules/data";

// link page to the menu
setMenu('Menu', loadMenu);

function loadMenu(){
    const contentPlaceHolder = $('main.main');
    activeNavLink('page-menu');
    contentPlaceHolder.innerHTML = '';
}

export { loadMenu };