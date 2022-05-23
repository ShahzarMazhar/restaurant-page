/*
    This module manages the click event on main menu
*/

import { loadHome } from "../pages/home";
import { loadMenu } from "../pages/menu";
import { loadAbout } from "../pages/about";
import { loadContact } from "../pages/contact";


function changeTab(id){
    switch(id){
        case 'link-home'    : loadHome(); break;
        case 'link-menu'    : loadMenu(); break;
        case 'link-about'   : loadAbout(); break;
        case 'link-contact' : loadContact(); break;
        default: console.log('no page configured');
    };
}

function changeTabEvent(event){
    event.preventDefault();
    changeTab(event.target.id);
    // throw new Event('tabChanged', event.target.id);
}

export {changeTab, changeTabEvent };