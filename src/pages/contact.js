import { setMenu } from "../modules/data";
import  { $, activeNavLink } from "./components/navbar";

// link page to the menu
setMenu('Contact', loadContact);

function loadContact(){
    const contentPlaceHolder = $('main.main');
    activeNavLink('page-contact');
    contentPlaceHolder.innerHTML = '';
}


export { loadContact };